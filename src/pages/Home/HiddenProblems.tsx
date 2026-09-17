import ProjectGallery from "../../components/ProjectGallery";

export default function HiddenProblems() {
  const problems = [
    {
      number: "01",
      title: "Murs anciens",
      text: "Avec les années, certains murs peuvent présenter fissures, irrégularités, anciennes reprises ou matériaux vieillissants nécessitant une analyse avant rénovation.",
    },
    {
      number: "02",
      title: "Isolation dégradée",
      text: "Dans certains logements anciens, l'isolation existante peut être insuffisante ou dégradée, impactant le confort thermique et acoustique.",
    },
    {
      number: "03",
      title: "Humidité invisible",
      text: "Des traces d'humidité, infiltrations anciennes ou défauts cachés peuvent apparaître uniquement après ouverture des surfaces.",
    },
    {
      number: "04",
      title: "Dégradations cachées",
      text: "Certains bâtiments anciens peuvent révéler des traces d'insectes xylophages ou autres dégradations nécessitant une attention particulière avant les travaux.",
    },
    {
      number: "05",
      title: "Anciennes installations",
      text: "Derrière les doublages et cloisons existantes peuvent se trouver d'anciennes installations ou contraintes techniques à prendre en compte.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Derrière les murs
            </span>

            <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight text-[#111A5B] sm:text-4xl lg:text-[44px]">
              Les éléments cachés
              <br />
              des anciens logements.
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base lg:pb-2">
            Avant les travaux, certaines contraintes restent invisibles.
            Derrière les anciennes surfaces peuvent apparaître des défauts, des
            matériaux vieillissants ou des éléments à traiter.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <div className="overflow-hidden rounded-[36px]">
            <ProjectGallery
              slides={[
                {
                  image: "/images/select/degra/degra3.jpg",
                  title: "Diagnostic avant travaux",
                  description:
                    "Ce qui paraît sain en surface peut révéler des problèmes cachés.",
                },
                {
                  image: "/images/select/degra/degra6.jpg",
                  title: "Analyse de l'existant",
                  description:
                    "Chaque ouverture permet d'identifier les contraintes présentes avant rénovation.",
                },
              ]}
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-7">
              {problems.map((problem) => (
                <div
                  key={problem.number}
                  className="
                    border-b
                    border-slate-200
                    pb-7
                  "
                >
                  <div className="flex gap-5">
                    <span className="text-sm font-bold text-[#111A5B]">
                      {problem.number}
                    </span>

                    <div>
                      <h3 className="text-xl font-bold text-[#111A5B]">
                        {problem.title}
                      </h3>

                      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                        {problem.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
