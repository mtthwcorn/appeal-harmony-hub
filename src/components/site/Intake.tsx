import { useState } from "react";

const meds = ["Zepbound", "Wegovy", "Ozempic", "Mounjaro", "Saxenda", "Other"];
const happenings = [
  "Prior authorization denied",
  "Step therapy required",
  "Drug not covered",
  "Plan excludes weight-loss medication",
  "Pharmacy says insurance denied it",
  "I am not sure",
];

export function Intake() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section id="intake" className="bg-white py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[860px] px-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-3 text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-600">
            Intake
          </span>
          <h2 className="font-display text-4xl tracking-tight text-ink-950 lg:text-5xl">
            Start your denial review
          </h2>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl border border-mist-200 bg-mist-50 p-6 lg:p-10"
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field label="First name">
              <input
                required
                maxLength={60}
                className="input"
                placeholder="Alex"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                maxLength={120}
                className="input"
                placeholder="you@email.com"
              />
            </Field>
            <Field label="Medication denied">
              <select className="input" defaultValue="">
                <option value="" disabled>Select medication</option>
                {meds.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </Field>
            <Field label="Insurance company">
              <input maxLength={120} className="input" placeholder="e.g. Blue Cross" />
            </Field>
            <Field label="What happened?" full>
              <select className="input" defaultValue="">
                <option value="" disabled>Select what happened</option>
                {happenings.map((h) => (
                  <option key={h}>{h}</option>
                ))}
              </select>
            </Field>
            <Field label="Do you have a denial letter?" full>
              <div className="flex gap-3">
                {["Yes", "No"].map((v) => (
                  <label
                    key={v}
                    className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-mist-200 bg-white px-4 py-3 text-sm text-ink-950 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-50"
                  >
                    <input type="radio" name="letter" className="accent-brand-600" />
                    {v}
                  </label>
                ))}
              </div>
            </Field>
            <Field label="Short description" full>
              <textarea
                rows={4}
                maxLength={1000}
                className="input resize-none"
                placeholder="Briefly describe what your insurer said and what you have tried so far."
              />
            </Field>
          </div>

          <label className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-ink-600">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 size-4 accent-brand-600"
            />
            <span>
              I understand CoveredGLP does not provide medical advice, legal advice, prescribing,
              or guarantee insurance approval.
            </span>
          </label>

          <button
            type="submit"
            disabled={!agreed}
            className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-ink-950 px-6 text-sm font-medium text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-ink-400"
          >
            Continue to Review
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  full,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <label className={"flex flex-col gap-1.5 " + (full ? "md:col-span-2" : "")}>
      <span className="text-xs font-medium text-ink-600">{label}</span>
      {children}
    </label>
  );
}