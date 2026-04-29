import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { IntakeSubmission } from "@/lib/intake";

type IntakeSubmissionEmailProps = {
  submission: IntakeSubmission;
  variant: "customer" | "internal";
};

export function IntakeSubmissionEmail({
  submission,
  variant,
}: IntakeSubmissionEmailProps) {
  const isCustomer = variant === "customer";
  const hasDenialLetter = submission.hasDenialLetter === "yes";
  const previewText = isCustomer
    ? "We received your overturned_ denial review request and sent next steps."
    : `New overturned_ intake from ${submission.firstName}`;

  return (
    <Html lang="en">
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={body}>
        <Container style={shell}>
          <Section style={brandBar}>
            <Text style={brandMark}>O</Text>
            <Text style={brandName}>
              overturned<span style={brandAccent}>_</span>
            </Text>
          </Section>

          <Section style={panel}>
            <Text style={eyebrow}>
              {isCustomer ? "DENIAL REVIEW RECEIVED" : "NEW INTAKE SUBMISSION"}
            </Text>
            <Heading style={heading}>
              {isCustomer
                ? `Hi ${submission.firstName}, we received your request.`
                : `${submission.firstName} submitted the intake form.`}
            </Heading>
            <Text style={lede}>
              {isCustomer
                ? "Your intake is in. The next step is getting your denial letter or insurer denial screenshot so we can map the denial type and prepare the right packet."
                : "A new intake came in through the landing page. The submission details are below."}
            </Text>

            {isCustomer ? (
              <Section style={callout}>
                <Text style={calloutEyebrow}>Next step</Text>
                <Text style={calloutText}>
                  {hasDenialLetter
                    ? "Reply to this email with the denial letter PDF, screenshot, or copied denial text so we can start the review."
                    : "As soon as you get the denial letter or insurer portal screenshot, reply to this email and send it over."}
                </Text>
              </Section>
            ) : null}

            <Section style={summaryCard}>
              <Text style={summaryTitle}>Submission summary</Text>
              <Field label="First name" value={submission.firstName} />
              <Field label="Email" value={submission.email} />
              <Field label="What was denied" value={submission.medication} />
              <Field label="Insurance company" value={submission.insuranceCompany} />
              <Field label="What happened" value={submission.denialType} />
              <Field
                label="Denial letter available"
                value={submission.hasDenialLetter === "yes" ? "Yes" : "No"}
              />
              <Field
                label="Short description"
                value={
                  submission.description || "No additional description was provided."
                }
                multiline
              />
              <Field label="Selected package" value={submission.tier} />
            </Section>

            {isCustomer ? (
              <Section style={stepsCard}>
                <Text style={summaryTitle}>What happens next</Text>
                <Step
                  number="01"
                  title="Send the denial letter"
                  body={
                    hasDenialLetter
                      ? "Reply with the denial letter, screenshot, or insurer denial text so we can review the exact wording and requirements."
                      : "Reply with the denial letter as soon as you have it. If you only have a portal screenshot, send that first."
                  }
                />
                <Step
                  number="02"
                  title="We map the denial"
                  body="We review whether this looks like prior authorization, step therapy, a coverage exception, missing documentation, plan exclusion, or another coverage issue."
                />
                <Step
                  number="03"
                  title="You receive the output"
                  body="We send back a plain-English next-step plan, draft appeal language, doctor-office message, insurer call script, and a document checklist."
                />
              </Section>
            ) : null}

            <Hr style={rule} />

            <Text style={footnote}>
              overturned_ does not provide medical advice, legal advice, prescribing,
              or guarantee insurance approval.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

function Step({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <Section style={stepRow}>
      <Text style={stepNumber}>{number}</Text>
      <Text style={stepTitle}>{title}</Text>
      <Text style={stepBody}>{body}</Text>
    </Section>
  );
}

function Field({
  label,
  value,
  multiline = false,
}: {
  label: string;
  value: string;
  multiline?: boolean;
}) {
  return (
    <Section style={fieldRow}>
      <Text style={fieldLabel}>{label}</Text>
      <Text style={multiline ? fieldValueMultiline : fieldValue}>{value}</Text>
    </Section>
  );
}

const body = {
  backgroundColor: "#050505",
  margin: "0",
  padding: "32px 12px",
  fontFamily:
    '"JetBrains Mono", "IBM Plex Mono", "SFMono-Regular", Consolas, monospace',
};

const shell = {
  maxWidth: "640px",
  margin: "0 auto",
};

const brandBar = {
  marginBottom: "18px",
};

const brandMark = {
  display: "inline-block",
  width: "56px",
  height: "56px",
  lineHeight: "56px",
  textAlign: "center" as const,
  fontSize: "30px",
  color: "#050505",
  backgroundColor: "#ff5a32",
  margin: "0 14px 0 0",
  fontFamily: '"Chivo", Arial, sans-serif',
  fontWeight: "900",
};

const brandName = {
  display: "inline-block",
  margin: "0",
  color: "#ffffff",
  fontSize: "28px",
  lineHeight: "56px",
  fontFamily: '"Chivo", Arial, sans-serif',
  fontWeight: "700",
  verticalAlign: "top" as const,
};

const brandAccent = {
  color: "#ff5a32",
};

const panel = {
  border: "1px solid #1f1f1f",
  backgroundColor: "#090909",
  padding: "36px",
};

const eyebrow = {
  color: "#a1a1aa",
  fontSize: "11px",
  letterSpacing: "0.28em",
  margin: "0 0 16px",
};

const heading = {
  color: "#ffffff",
  fontFamily: '"Chivo", Arial, sans-serif',
  fontSize: "34px",
  lineHeight: "1.05",
  textTransform: "uppercase" as const,
  margin: "0 0 18px",
};

const lede = {
  color: "#d4d4d8",
  fontSize: "14px",
  lineHeight: "1.8",
  margin: "0 0 28px",
};

const summaryCard = {
  border: "1px solid #1f1f1f",
  backgroundColor: "#050505",
  padding: "22px",
};

const stepsCard = {
  border: "1px solid #1f1f1f",
  backgroundColor: "#050505",
  padding: "22px",
  marginTop: "18px",
};

const summaryTitle = {
  color: "#ff5a32",
  fontSize: "11px",
  letterSpacing: "0.22em",
  margin: "0 0 14px",
};

const fieldRow = {
  padding: "14px 0",
  borderBottom: "1px solid #1f1f1f",
};

const fieldLabel = {
  color: "#71717a",
  fontSize: "10px",
  letterSpacing: "0.2em",
  margin: "0 0 8px",
  textTransform: "uppercase" as const,
};

const fieldValue = {
  color: "#fafafa",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0",
};

const fieldValueMultiline = {
  ...fieldValue,
  whiteSpace: "pre-wrap" as const,
};

const rule = {
  borderColor: "#1f1f1f",
  margin: "24px 0",
};

const footnote = {
  color: "#71717a",
  fontSize: "12px",
  lineHeight: "1.7",
  margin: "0",
};

const callout = {
  border: "1px solid #ff5a32",
  backgroundColor: "#140804",
  padding: "18px 20px",
  marginBottom: "18px",
};

const calloutEyebrow = {
  color: "#ff5a32",
  fontSize: "10px",
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
  margin: "0 0 8px",
};

const calloutText = {
  color: "#fafafa",
  fontSize: "14px",
  lineHeight: "1.7",
  margin: "0",
};

const stepRow = {
  padding: "14px 0",
  borderBottom: "1px solid #1f1f1f",
};

const stepNumber = {
  color: "#ff5a32",
  fontSize: "10px",
  letterSpacing: "0.22em",
  margin: "0 0 8px",
};

const stepTitle = {
  color: "#ffffff",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "0 0 6px",
  fontFamily: '"Chivo", Arial, sans-serif',
  fontWeight: "700",
  textTransform: "uppercase" as const,
};

const stepBody = {
  color: "#d4d4d8",
  fontSize: "14px",
  lineHeight: "1.7",
  margin: "0",
};
