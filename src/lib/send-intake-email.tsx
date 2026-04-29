import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { IntakeSubmissionEmail } from "@/emails/IntakeSubmissionEmail";
import { intakeSubmissionSchema } from "@/lib/intake";

export const sendIntakeEmail = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => intakeSubmissionSchema.parse(input))
  .handler(async ({ data }) => {
    const resend = new Resend(getRequiredEnv("RESEND_API_KEY"));
    const from = getRequiredEnv("RESEND_FROM_EMAIL");
    const notificationTo = getOptionalEnv("INTAKE_NOTIFICATION_TO");

    const confirmation = await resend.emails.send({
      from,
      to: [data.email],
      subject: "We received your overturned_ denial review request",
      react: <IntakeSubmissionEmail submission={data} variant="customer" />,
    });

    if (confirmation.error) {
      throw new Error(
        confirmation.error.message || "Unable to send the confirmation email.",
      );
    }

    if (notificationTo) {
      const notification = await resend.emails.send({
        from,
        to: [notificationTo],
        subject: `New overturned_ intake: ${data.firstName} · ${data.medication}`,
        replyTo: data.email,
        react: <IntakeSubmissionEmail submission={data} variant="internal" />,
      });

      if (notification.error) {
        throw new Error(
          notification.error.message ||
            "The customer email sent, but the internal notification failed.",
        );
      }
    }

    return { ok: true };
  });

function getRequiredEnv(key: "RESEND_API_KEY" | "RESEND_FROM_EMAIL") {
  const value = process.env[key]?.trim();

  if (!value) {
    throw new Error(`${key} is missing on the server.`);
  }

  return value;
}

function getOptionalEnv(key: "INTAKE_NOTIFICATION_TO") {
  const value = process.env[key]?.trim();
  return value ? value : undefined;
}
