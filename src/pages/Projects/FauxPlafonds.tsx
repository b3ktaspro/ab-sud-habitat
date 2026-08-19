import ProjectGallery from "../../components/ProjectGallery";

export default function FauxPlafonds() {
  return (
    <section className="bg-white pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <span className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-[#111A5B] sm:text-sm">
          Réalisations • Faux plafonds
        </span>

        <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight text-[#111A5B] sm:text-4xl lg:text-5xl">
          Installation de faux plafonds modernes et durables.
        </h1>

        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
          Nous réalisons des faux plafonds adaptés aux habitations, bureaux et
          locaux professionnels afin d'améliorer l'esthétique, l'isolation et
          l'intégration des équipements techniques.
        </p>

        <ProjectGallery
          slides={[
            {
              image: "/images/select/plafond/plafond1.jpg",
              title: "Faux plafond suspendu",
              description:
                "Création d'un plafond suspendu moderne avec une finition propre et durable.",
            },
            {
              image: "/images/select/plafond/plafond2.jpg",
              title: "Faux plafonds sur mesure",
              description:
                "Conception et réalisation de faux plafonds adaptés aux contraintes et aux besoins de chaque projet.",
            },
          ]}
        />

        <div
          className="
            mt-12
            rounded-[24px]
            bg-[#F5F7FF]
            p-5

            sm:mt-20
            sm:rounded-[32px]
            sm:p-10
          "
        >
          <h2 className="text-2xl font-bold text-[#111A5B] sm:text-3xl">
            Nos prestations
          </h2>

          <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-[#111A5B] sm:text-xl">
                Faux plafonds suspendus
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Solutions adaptées aux logements, bureaux et locaux
                professionnels.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#111A5B] sm:text-xl">
                Intégration d'éclairage
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Installation de spots encastrés et solutions lumineuses
                modernes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#111A5B] sm:text-xl">
                Isolation complémentaire
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Renforcement du confort thermique et acoustique des espaces.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#111A5B] sm:text-xl">
                Finitions soignées
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Travail précis pour un rendu esthétique, propre et durable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
