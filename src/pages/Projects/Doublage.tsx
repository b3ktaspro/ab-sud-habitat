import ProjectGallery from "../../components/ProjectGallery";

export default function Doublage() {
  return (
    <section className="bg-white pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <span className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-[#111A5B] sm:text-sm">
          Réalisations • Doublage
        </span>

        <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight text-[#111A5B] sm:text-4xl lg:text-5xl">
          Doublage des murs et amélioration du confort.
        </h1>

        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
          Le doublage permet d'améliorer les performances thermiques et
          acoustiques du bâtiment tout en corrigeant les défauts des supports
          existants pour obtenir des finitions impeccables.
        </p>

        <ProjectGallery
          slides={[
            {
              image: "/images/select/doublage/doublage1.jpg",
              title: "Doublage thermique",
              description:
                "Amélioration des performances énergétiques grâce à un doublage adapté.",
            },
            {
              image: "/images/select/doublage/doublage2.jpg",
              title: "Doublage intérieur",
              description:
                "Mise en œuvre de solutions performantes pour optimiser le confort du logement.",
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
                Doublage collé
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Solution efficace pour rénover rapidement les murs existants.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#111A5B] sm:text-xl">
                Doublage sur ossature
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Intégration facilitée des réseaux techniques et de l'isolation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#111A5B] sm:text-xl">
                Isolation intégrée
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Renforcement du confort thermique et réduction des déperditions
                énergétiques.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#111A5B] sm:text-xl">
                Finitions
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Préparation optimale des supports avant peinture ou décoration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
