export default function ProjectManifest() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-slate-200 pt-8 sm:pt-10">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 sm:text-sm sm:tracking-[0.25em]">
            Notre travail
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#111A5B] sm:mt-6 sm:text-5xl lg:text-6xl">
            Chaque chantier
            <br />
            raconte une
            <br />
            histoire différente.
          </h2>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-600 sm:mt-8 sm:text-base">
            Nous ne réalisons pas simplement des travaux de plaquiste ou
            d'isolation. Nous transformons des espaces de vie, améliorons le
            confort quotidien et donnons forme aux projets de nos clients
            partout dans l'Hérault et en Occitanie.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:mt-16 md:grid-cols-3">
          <div>
            <span className="text-3xl font-bold text-[#111A5B] sm:text-4xl">
              20+
            </span>

            <p className="mt-2 text-sm text-slate-500">années d'expérience</p>
          </div>

          <div>
            <span className="text-3xl font-bold text-[#111A5B] sm:text-4xl">
              500+
            </span>

            <p className="mt-2 text-sm text-slate-500">réalisations</p>
          </div>

          <div>
            <span className="text-3xl font-bold text-[#111A5B] sm:text-4xl">
              34
            </span>

            <p className="mt-2 text-sm text-slate-500">Hérault & Occitanie</p>
          </div>
        </div>
      </div>
    </section>
  );
}
