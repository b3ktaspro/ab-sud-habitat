import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function BeforeAfterSection() {
  const projects = [
    {
      title: "Transformation intérieure",
      location: "Création de cloisons",
      before: "./images/images-des-chantiers/cloisons/cloisons-01-cut.jpg",
      after: "./images/images-des-chantiers/cloisons/cloisons-02.jpg",
      description:
        "Avant : espace ouvert à restructurer. Après : des volumes optimisés avec des cloisons adaptées.",
    },
    /* {
      title: "Appartement ancien rénové",
      location: "Projet sur mesure",
      before: "https://ab-sud-habitat.com/images/logo/logo.jpeg",
      after: "https://ab-sud-habitat.com/images/logo/logo.jpeg",
      description:
        "Modernisation d'un espace existant avec des solutions adaptées.",
    }, */
  ];

  const [open, setOpen] = useState<number | null>(null);

  const renderCard = (project: (typeof projects)[number], index: number) => {
    const active = open === index;

    return (
      <div
        key={project.title}
        className="
          overflow-hidden
          rounded-[24px]
          bg-white
        "
      >
        <button
          onClick={() => setOpen(active ? null : index)}
          className="
            flex
            w-full
            items-center
            justify-between
            gap-4
            px-5
            py-5
            text-left

            sm:px-6
          "
        >
          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-slate-400
              "
            >
              Comparaison chantier
            </p>

            <h3
              className="
                mt-2
                text-lg
                font-bold
                text-[#111A5B]

                sm:text-xl
              "
            >
              {project.title}
            </h3>
          </div>

          <span
            className="
              shrink-0
              rounded-full
              bg-[#F5F7FF]
              px-4
              py-2
              text-xs
              font-semibold
              text-[#111A5B]
            "
          >
            {active ? "Fermer" : "Voir"}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {active && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="px-5 pb-5 sm:px-6">
                <div
                  className="
                    grid
                    gap-3

                    sm:grid-cols-2
                  "
                >
                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[22px]
                    "
                  >
                    <img
                      src={project.before}
                      alt="Avant travaux"
                      className="
                        h-[220px]
                        w-full
                        object-cover

                        sm:h-[280px]
                      "
                    />

                    <span
                      className="
                        absolute
                        left-3
                        top-3
                        rounded-lg
                        bg-white/90
                        px-3
                        py-1.5
                        text-xs
                        font-semibold
                        text-[#111A5B]
                      "
                    >
                      Avant
                    </span>
                  </div>

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[22px]
                    "
                  >
                    <img
                      src={project.after}
                      alt="Après travaux"
                      className="
                        h-[220px]
                        w-full
                        object-cover

                        sm:h-[280px]
                      "
                    />

                    <span
                      className="
                        absolute
                        left-3
                        top-3
                        rounded-lg
                        bg-[#111A5B]
                        px-3
                        py-1.5
                        text-xs
                        font-semibold
                        text-white
                      "
                    >
                      Après
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-slate-400
                    "
                  >
                    {project.location}
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-relaxed
                      text-slate-600
                    "
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="bg-[#F5F7FF] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-[#D9DDEA]
              bg-white
              px-3
              py-1.5
              text-xs
              font-medium
              text-[#111A5B]

              sm:px-4
              sm:py-2
            "
          >
            Avant / Après
          </span>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              leading-tight
              text-[#111A5B]

              sm:text-4xl
            "
          >
            La transformation
            <br />
            de nos chantiers.
          </h2>

          <p
            className="
              mt-3
              max-w-2xl
              text-sm
              leading-relaxed
              text-slate-600

              sm:text-base
            "
          >
            Découvrez l'évolution des espaces avant et après les interventions
            réalisées par AB Sud Habitat.
          </p>
        </div>

        <div className="mt-6 md:hidden space-y-4">
          {projects.map((project, index) => renderCard(project, index))}
        </div>

        <div
  className="
    hidden
    mt-6
    md:grid
    md:grid-cols-2
    md:gap-4
    md:items-start
  "
>
          <div className="space-y-4">
            {projects
              .filter((_, index) => index % 2 === 0)
              .map((project, index) => renderCard(project, index * 2))}
          </div>

          <div className="space-y-4">
            {projects
              .filter((_, index) => index % 2 !== 0)
              .map((project, index) => renderCard(project, index * 2 + 1))}
          </div>
        </div>
      </div>
    </section>
  );
}
