import type { IntakeSubmission } from "@/lib/intake";

export async function appendIntakeToGoogleSheet(submission: IntakeSubmission) {
  const scriptUrl = getOptionalEnv("GOOGLE_APPS_SCRIPT_URL");

  if (!scriptUrl) {
    return { enabled: false as const };
  }

  const response = await fetch(scriptUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      submittedAt: new Date().toISOString(),
      firstName: submission.firstName,
      email: submission.email,
      medication: submission.medication,
      insuranceCompany: submission.insuranceCompany,
      denialType: submission.denialType,
      selectedPackage: submission.tier,
      tier: submission.tier,
      hasDenialLetter: submission.hasDenialLetter === "yes" ? "Yes" : "No",
      description: submission.description || "",
      emailStatus: "Email sent",
      source: "Website intake",
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Google Apps Script append failed with status ${response.status}.`,
    );
  }

  const result = (await response.json().catch(() => null)) as
    | { ok?: boolean; error?: string }
    | null;

  if (result && result.ok === false) {
    throw new Error(
      result.error || "Google Apps Script reported an error while appending.",
    );
  }

  return { enabled: true as const };
}

function getOptionalEnv(key: "GOOGLE_APPS_SCRIPT_URL") {
  const value = process.env[key]?.trim();
  return value ? value : undefined;
}
