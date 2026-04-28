const stats = [
  { value: "24–48 hrs", label: "Typical delivery time" },
  { value: "$49", label: "Denial review" },
  { value: "5+", label: "Common denial types reviewed" },
  { value: "1 packet", label: "Appeal letter, doctor message, call script, checklist" },
];

export function Stats() {
  return (
    <section className="border-y border-mist-200 bg-mist-50">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="border-r border-mist-200 px-6 py-10 last:border-r-0 lg:px-8 lg:py-12"
          >
            <div className="font-display text-3xl tracking-tight text-ink-950 lg:text-4xl">
              {s.value}
            </div>
            <div className="mt-2 text-xs leading-relaxed text-ink-600">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}