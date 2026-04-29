import { z } from "zod";

export const medications = [
  "Treatment my doctor recommended",
  "Medication prescribed by my doctor",
  "Treatment requiring prior authorization",
  "Specialty treatment or therapy",
  "Ongoing treatment my plan stopped covering",
  "Other",
] as const;

export const denialTypes = [
  "Prior authorization denied",
  "Step therapy required",
  "Treatment not covered by my plan",
  "Plan excludes this category of care",
  "Insurer requested more documentation",
  "I am not sure",
] as const;

export const tierOptions = [
  "Appeal Letter Packet ($49)",
  "Guided Appeal Support ($149)",
] as const;

export const intakeSubmissionSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  email: z.string().trim().email("Enter a valid email address").max(320),
  medication: z.enum(medications),
  insuranceCompany: z.string().trim().min(1, "Insurance company is required").max(120),
  denialType: z.enum(denialTypes),
  hasDenialLetter: z.enum(["yes", "no"]),
  tier: z.enum(tierOptions),
  description: z.string().trim().max(1500).default(""),
  consent: z.literal(true),
});

export type IntakeSubmission = z.infer<typeof intakeSubmissionSchema>;
