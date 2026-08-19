export default function CompanySection() {
  return (
    <section className="bg-white pt-32 sm:pt-32 lg:pt-24 pb-14 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2">
          <div>
            <img
              src="/images/logo/logo.jpeg"
              alt="AB Sud Habitat"
              className="
                h-[280px]
                w-full
                rounded-[24px]
                object-cover

                sm:h-[420px]
                sm:rounded-[28px]

                lg:h-[500px]
              "
            />
          </div>

          <div>
            <span className="inline-flex rounded-full border border-[#D9DDEA] bg-[#F5F7FF] px-4 py-2 text-xs font-medium text-[#111A5B] sm:text-sm">
              Notre Entreprise
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#111A5B] sm:text-4xl">
              Plus de 20 ans d'expérience au service de vos projets.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              AB Sud Habitat est une entreprise spécialisée dans les travaux de
              plaquiste, d'isolation et d'aménagement intérieur pour les
              particuliers et les professionnels.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Depuis plus de deux décennies, nous accompagnons nos clients avec
              la même exigence de qualité en apportant des solutions adaptées à
              chaque projet, du plus simple au plus complexe.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Notre savoir-faire repose sur la rigueur, le respect des délais et
              l'attention portée aux finitions afin de garantir des réalisations
              durables et soignées.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5 sm:gap-6">
              <div className="rounded-2xl bg-[#F5F7FF] p-4">
                <h3 className="text-2xl font-bold text-[#111A5B] sm:text-3xl">
                  20+
                </h3>

                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Années d'expérience
                </p>
              </div>

              <div className="rounded-2xl bg-[#F5F7FF] p-4">
                <h3 className="text-2xl font-bold text-[#111A5B] sm:text-3xl">
                  Occitanie
                </h3>

                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Zone d'intervention
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
