const stats = [
  { value: "84.2%", label: "Overturn rate on final denials" },
  { value: "$2.4M", label: "Recovered for clients in 2025" },
  { value: "41", label: "Average days to payout" },
  { value: "15%", label: "Contingency. Nothing upfront." },
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