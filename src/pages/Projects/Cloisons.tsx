import ProjectGallery from "../../components/ProjectGallery";

export default function Cloisons() {
  return (
    <section className="bg-white pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <span className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-[#111A5B] sm:text-sm">
          Réalisations • Cloisons
        </span>

        <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight text-[#111A5B] sm:text-4xl lg:text-5xl">
          Création de cloisons pour particuliers et professionnels.
        </h1>

        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
          Nous réalisons la pose de cloisons en plaques de plâtre afin de
          restructurer les espaces, créer de nouvelles pièces et optimiser
          l'aménagement intérieur de votre habitat ou de vos locaux
          professionnels.
        </p>

        <ProjectGallery
          slides={[
            {
              image: "/images/select/cloisons/cloisons1.jpg",
              title: "Création de cloisons intérieures",
              description:
                "Installation de cloisons en plaques de plâtre pour structurer les espaces et créer de nouvelles pièces adaptées à chaque besoin.",
            },
            {
              image: "/images/select/cloisons/cloisons2.jpg",
              title: "Séparation des espaces",
              description:
                "Réalisation de cloisons sur mesure permettant d'optimiser les volumes et d'améliorer l'organisation des espaces intérieurs.",
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
                Cloisons de distribution
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Création de nouvelles pièces et réorganisation complète des
                espaces intérieurs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#111A5B] sm:text-xl">
                Cloisons acoustiques
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Réduction des nuisances sonores et amélioration du confort
                quotidien.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#111A5B] sm:text-xl">
                Cloisons techniques
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Intégration des réseaux électriques, plomberie et équipements.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#111A5B] sm:text-xl">
                Finitions
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Bandes, joints et préparation des supports avant peinture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
