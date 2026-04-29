import { z } from "zod";

export const medications = [
  "Zepbound",
  "Wegovy",
  "Ozempic",
  "Mounjaro",
  "Saxenda",
  "Other",
] as const;

export const denialTypes = [
  "Prior authorization denied",
  "Step therapy required",
  "Drug not covered",
  "Plan excludes weight-loss medication",
  "Pharmacy says insurance denied it",
  "I am not sure",
] as const;

export const intakeSubmissionSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  email: z.string().trim().email("Enter a valid email address").max(320),
  medication: z.enum(medications),
  insuranceCompany: z.string().trim().min(1, "Insurance company is required").max(120),
  denialType: z.enum(denialTypes),
  hasDenialLetter: z.enum(["yes", "no"]),
  description: z.string().trim().max(1500).default(""),
  consent: z.literal(true),
});

export type IntakeSubmission = z.infer<typeof intakeSubmissionSchema>;
