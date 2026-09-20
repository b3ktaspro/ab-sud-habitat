import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HiddenProblems() {
  const problems = [
    {
      number: "01",
      title: "Murs anciens",
      observation:
        "Fissures, irrégularités, anciennes reprises ou supports vieillissants peuvent nécessiter une analyse avant rénovation.",
      intervention:
        "Préparation des surfaces, reprise des supports et adaptation de la solution technique selon l'état existant.",
      result:
        "Une base saine permettant de réaliser les nouveaux aménagements dans de bonnes conditions.",
      image: "./images/schema-murs-anciens-01.png",
    },
    {
      number: "02",
      title: "Isolation existante",
      observation:
        "Certains logements présentent une isolation insuffisante pouvant impacter le confort thermique et acoustique.",
      intervention:
        "Analyse des performances existantes puis mise en place d'une solution adaptée aux contraintes du bâtiment.",
      result:
        "Un meilleur confort intérieur et des performances améliorées.",
      image: "./images/schema-isolation-01.png",
    },
    {
      number: "03",
      title: "Dégâts des eaux",
      observation:
        "Les infiltrations ou dégâts des eaux peuvent fragiliser les murs, les doublages et les supports existants.",
      intervention:
        "Recherche de l'origine du problème, assèchement des supports et remise en état des surfaces endommagées.",
      result:
        "Des supports rénovés et préparés pour accueillir de nouveaux aménagements dans de bonnes conditions.",
      image:
        "https://checkmy-house.fr/wp-content/uploads/2026/06/degat-des-eaux-plafond-aureole.png",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="max-w-3xl">

          <span
            className="
              inline-flex
              rounded-full
              border
              border-[#D9DDEA]
              bg-[#F5F7FF]
              px-3
              py-1.5
              text-xs
              font-medium
              text-[#111A5B]

              sm:px-4
              sm:py-2
            "
          >
            Derrière les murs
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
            Identifier les contraintes
            <br />
            avant qu'elles deviennent des problèmes.
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
            Chaque bâtiment possède ses propres contraintes. Une analyse
            précise permet d'adapter les solutions avant le début des travaux.
          </p>

        </div>


        <div className="mt-10 space-y-4">

          {problems.map((problem, index) => {

            const active = open === index;

            return (

              <div
                key={problem.title}
                className="
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                "
              >

                <button
                  onClick={() =>
                    setOpen(active ? null : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    gap-5
                    px-5
                    py-5
                    text-left

                    sm:px-8
                    sm:py-6
                  "
                >

                  <span
                    className="
                      text-4xl
                      font-bold
                      text-slate-200

                      sm:text-5xl
                    "
                  >
                    {problem.number}
                  </span>


                  <div className="flex-1">

                    <h3
                      className="
                        text-xl
                        font-bold
                        text-[#111A5B]

                        sm:text-2xl
                      "
                    >
                      {problem.title}
                    </h3>

                  </div>


                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F5F7FF]
                      text-xl
                      text-[#111A5B]
                    "
                  >
                    {active ? "−" : "+"}
                  </span>

                </button>


                <AnimatePresence initial={false}>

                  {active && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >

                      <div
                        className="
                          px-5
                          pb-6

                          sm:px-8
                          sm:pb-8
                        "
                      >

                        <div
                          className="
                            grid
                            gap-6

                            md:grid-cols-[1fr_220px]
                          "
                        >

                          <div
                            className="
                              border-l
                              border-slate-200
                              pl-5

                              sm:pl-8
                            "
                          >

                            <div>

                              <p
                                className="
                                  text-xs
                                  font-semibold
                                  uppercase
                                  tracking-[0.2em]
                                  text-slate-400
                                "
                              >
                                Observation
                              </p>


                              <p
                                className="
                                  mt-2
                                  text-sm
                                  leading-relaxed
                                  text-slate-600

                                  sm:text-base
                                "
                              >
                                {problem.observation}
                              </p>

                            </div>



                            <div className="mt-6">

                              <p
                                className="
                                  text-xs
                                  font-semibold
                                  uppercase
                                  tracking-[0.2em]
                                  text-slate-400
                                "
                              >
                                Intervention
                              </p>


                              <p
                                className="
                                  mt-2
                                  text-sm
                                  leading-relaxed
                                  text-slate-600

                                  sm:text-base
                                "
                              >
                                {problem.intervention}
                              </p>

                            </div>



                            <div className="mt-6">

                              <p
                                className="
                                  text-xs
                                  font-semibold
                                  uppercase
                                  tracking-[0.2em]
                                  text-[#111A5B]
                                "
                              >
                                Résultat
                              </p>


                              <p
                                className="
                                  mt-2
                                  text-sm
                                  leading-relaxed
                                  text-slate-600

                                  sm:text-base
                                "
                              >
                                {problem.result}
                              </p>

                            </div>

                          </div>


                          <div
                            className="
                              block
                              md:block
                            "
                          >

                            <img
                              src={problem.image}
                              alt={problem.title}
                              className="
                                h-[180px]
                                w-full
                                rounded-[20px]
                                object-cover

                                sm:h-[220px]
                                sm:w-[260px]
                              "
                            />

                          </div>


                        </div>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}