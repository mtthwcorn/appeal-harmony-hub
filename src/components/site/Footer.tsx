export function Footer() {
  return (
    <footer className="border-t border-forge-800 bg-forge-950">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center bg-strike font-heavy text-forge-950">
            <span className="text-lg leading-none">O</span>
          </span>
          <span className="font-heavy text-lg uppercase tracking-tight text-white">
            Overturn<span className="text-strike">_</span>
          </span>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">HIPAA</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          © 2026 Overturn Inc. Not a law firm.
        </span>
      </div>
    </footer>
  );
}