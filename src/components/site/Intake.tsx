import { useState } from "react";
import { denialTypes, medications } from "@/lib/intake";
import { sendIntakeEmail } from "@/lib/send-intake-email";

export function Intake() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  return (
    <section id="intake" className="border-t border-forge-800 bg-forge-950 py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:px-12">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-3 border border-forge-800 bg-forge-900 px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
            <span className="block size-2 bg-strike" />
            Intake
          </div>
          <h2 className="font-heavy text-5xl uppercase leading-[0.9] tracking-tight text-white lg:text-6xl">
            Start your <span className="text-strike">appeal review.</span>
          </h2>
          <p className="max-w-[45ch] text-base leading-relaxed text-zinc-400">
            Tell us a little about your denial. We'll send next steps and prepare your packet within 24–48 hours.
          </p>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            setSubmitError(null);

            const formData = new FormData(e.currentTarget);

            try {
              await sendIntakeEmail({
                data: {
                  firstName: String(formData.get("firstName") ?? ""),
                  email: String(formData.get("email") ?? ""),
                  medication: String(formData.get("medication") ?? ""),
                  insuranceCompany: String(formData.get("insuranceCompany") ?? ""),
                  denialType: String(formData.get("denialType") ?? ""),
                  hasDenialLetter: String(formData.get("hasDenialLetter") ?? ""),
                  description: String(formData.get("description") ?? ""),
                  consent: formData.get("consent") === "on",
                },
              });

              setSubmitted(true);
            } catch (error) {
              setSubmitError(
                error instanceof Error
                  ? error.message
                  : "Something went wrong while sending your request.",
              );
            } finally {
              setIsSubmitting(false);
            }
          }}
          className="flex flex-col gap-6 border border-forge-800 bg-forge-900 p-8 lg:p-10"
        >
          {submitted ? (
            <div className="flex flex-col gap-8 py-4">
              <div className="flex flex-col gap-4 text-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-strike">
                  Received
                </span>
                <h3 className="font-heavy text-3xl uppercase tracking-tight text-white">
                  Check your email.
                </h3>
                <p className="font-mono text-sm leading-relaxed text-zinc-400">
                  We sent initial next steps for your appeal review. The next action is
                  sending your denial letter or insurer screenshot so we can map the denial
                  and prepare the right output.
                </p>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                <div className="border border-forge-800 bg-forge-950 p-6 text-left">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-strike">
                    Next Step
                  </span>
                  <h4 className="mt-3 font-heavy text-2xl uppercase tracking-tight text-white">
                    Reply with the denial letter.
                  </h4>
                  <p className="mt-3 font-mono text-sm leading-relaxed text-zinc-400">
                    Send the denial letter PDF or insurer portal screenshot by replying to
                    the confirmation email. If you do not have it yet, send it as soon as
                    you receive it.
                  </p>
                </div>

                <div className="border border-forge-800 bg-forge-950 p-6 text-left">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-strike">
                    Output
                  </span>
                  <h4 className="mt-3 font-heavy text-2xl uppercase tracking-tight text-white">
                    What you’ll receive back.
                  </h4>
                  <ul className="mt-3 flex flex-col gap-3 font-mono text-sm leading-relaxed text-zinc-400">
                    <li>Plain-English denial breakdown and likely next step</li>
                    <li>Draft appeal or resubmission language</li>
                    <li>Doctor-office message and insurer call script</li>
                    <li>Document checklist for the next submission</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Field label="First name">
                  <input required type="text" name="firstName" className={inputClass} />
                </Field>
                <Field label="Email">
                  <input required type="email" name="email" className={inputClass} />
                </Field>
              </div>

              <Field label="What was denied">
                <select required name="medication" className={inputClass} defaultValue="">
                  <option value="" disabled>Select what was denied</option>
                  {medications.map((medication) => (
                    <option key={medication} value={medication}>
                      {medication}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Insurance company">
                <input
                  required
                  type="text"
                  name="insuranceCompany"
                  className={inputClass}
                  placeholder="e.g. Blue Cross, Aetna, UnitedHealthcare"
                />
              </Field>

              <Field label="What happened?">
                <select required name="denialType" className={inputClass} defaultValue="">
                  <option value="" disabled>Select what happened</option>
                  {denialTypes.map((denialType) => (
                    <option key={denialType} value={denialType}>
                      {denialType}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Do you have a denial letter?">
                <div className="flex gap-6 font-mono text-sm text-zinc-300">
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="hasDenialLetter" value="yes" required /> Yes
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="hasDenialLetter" value="no" /> No
                  </label>
                </div>
              </Field>

              <Field label="Short description">
                <textarea
                  rows={4}
                  name="description"
                  className={inputClass}
                  placeholder="Briefly describe what happened..."
                />
              </Field>

              <label className="flex items-start gap-3 font-mono text-xs leading-relaxed text-zinc-400">
                <input type="checkbox" name="consent" required className="mt-1" />
                <span>
                  I understand overturned_ does not provide medical, legal, or insurance advice and does not guarantee approval.
                </span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-strike px-10 py-5 font-heavy text-base uppercase tracking-tight text-forge-950 transition-all hover:bg-white hover:shadow-[var(--shadow-strike)]"
              >
                {isSubmitting ? "Sending..." : "Continue to Review"}
              </button>

              {submitError ? (
                <p className="font-mono text-xs leading-relaxed text-strike">
                  {submitError}
                </p>
              ) : null}
            </>
          )}
        </form>
      </div>
    </section>
  );
}

const inputClass =
  "w-full border border-forge-800 bg-forge-950 px-4 py-3 font-mono text-sm text-white outline-none transition-colors focus:border-strike";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">{label}</span>
      {children}
    </label>
  );
}
