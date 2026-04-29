const stats = [
  { value: "24–48 hrs", label: "Typical delivery time" },
  { value: "$49", label: "Appeal review" },
  { value: "5+", label: "Common denial types reviewed" },
  { value: "1 packet", label: "Appeal letter, doctor message, call script, checklist" },
];

export function Stats() {
  return (
    <section className="border-y border-forge-800 bg-forge-900">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="border-r border-forge-800 px-6 py-10 last:border-r-0 lg:px-10 lg:py-14"
          >
            <div className="font-heavy text-5xl text-white lg:text-6xl">{s.value}</div>
            <div className="mt-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}