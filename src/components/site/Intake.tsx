import { useState } from "react";

const meds = ["Zepbound", "Wegovy", "Ozempic", "Mounjaro", "Saxenda", "Other"];
const denialTypes = [
  "Prior authorization denied",
  "Step therapy required",
  "Drug not covered",
  "Plan excludes weight-loss medication",
  "Pharmacy says insurance denied it",
  "I am not sure",
];

export function Intake() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="intake" className="border-t border-forge-800 bg-forge-950 py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:px-12">
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-3 border border-forge-800 bg-forge-900 px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
            <span className="block size-2 bg-strike" />
            Intake
          </div>
          <h2 className="font-heavy text-5xl uppercase leading-[0.9] tracking-tight text-white lg:text-6xl">
            Start your <span className="text-strike">denial review.</span>
          </h2>
          <p className="max-w-[45ch] text-base leading-relaxed text-zinc-400">
            Tell us a little about your denial. We'll send next steps and prepare your packet within 24–48 hours.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="flex flex-col gap-6 border border-forge-800 bg-forge-900 p-8 lg:p-10"
        >
          {submitted ? (
            <div className="flex flex-col gap-4 py-12 text-center">
              <span className="font-mono text-[10px] uppercase tracking-widest text-strike">
                Received
              </span>
              <h3 className="font-heavy text-3xl uppercase tracking-tight text-white">
                Thank you.
              </h3>
              <p className="font-mono text-sm text-zinc-400">
                We'll follow up by email with next steps for your denial review.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Field label="First name">
                  <input required type="text" className={inputClass} />
                </Field>
                <Field label="Email">
                  <input required type="email" className={inputClass} />
                </Field>
              </div>

              <Field label="Medication denied">
                <select required className={inputClass} defaultValue="">
                  <option value="" disabled>Select medication</option>
                  {meds.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </Field>

              <Field label="Insurance company">
                <input required type="text" className={inputClass} placeholder="e.g. Blue Cross, Aetna, UnitedHealthcare" />
              </Field>

              <Field label="What happened?">
                <select required className={inputClass} defaultValue="">
                  <option value="" disabled>Select what happened</option>
                  {denialTypes.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </Field>

              <Field label="Do you have a denial letter?">
                <div className="flex gap-6 font-mono text-sm text-zinc-300">
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="letter" value="yes" required /> Yes
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="letter" value="no" /> No
                  </label>
                </div>
              </Field>

              <Field label="Short description">
                <textarea rows={4} className={inputClass} placeholder="Briefly describe what happened…" />
              </Field>

              <label className="flex items-start gap-3 font-mono text-xs leading-relaxed text-zinc-400">
                <input type="checkbox" required className="mt-1" />
                <span>
                  I understand overturned_ does not provide medical advice, legal advice, prescribing, or guarantee insurance approval.
                </span>
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-strike px-10 py-5 font-heavy text-base uppercase tracking-tight text-forge-950 transition-all hover:bg-white hover:shadow-[var(--shadow-strike)]"
              >
                Continue to Review
              </button>
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