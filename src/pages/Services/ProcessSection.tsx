export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Prise de contact",
      description:
        "Nous échangeons sur votre projet, vos besoins et vos attentes afin de comprendre précisément votre demande.",
    },
    {
      number: "02",
      title: "Visite du chantier",
      description:
        "Une visite sur place permet d'étudier les contraintes techniques et d'évaluer les travaux à réaliser.",
    },
    {
      number: "03",
      title: "Devis détaillé",
      description:
        "Nous établissons un devis clair et transparent avec une vision précise des prestations proposées.",
    },
    {
      number: "04",
      title: "Réalisation",
      description:
        "Les travaux sont réalisés avec soin, dans le respect des délais et des standards de qualité de l'entreprise.",
    },
  ];

  return (
    <section className="bg-[#F5F7FF] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 sm:mb-12">
          <span className="inline-flex rounded-full border border-[#D9DDEA] bg-white px-4 py-2 text-xs font-medium text-[#111A5B] sm:text-sm">
            Notre Méthode
          </span>

          <h2 className="mt-4 max-w-3xl text-3xl font-bold text-[#111A5B] sm:text-4xl">
            Un accompagnement simple et efficace.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Chaque chantier suit un processus clair afin de garantir une
            communication fluide, une exécution maîtrisée et un résultat à la
            hauteur de vos attentes.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="
                rounded-[24px]
                bg-white
                p-5

                sm:rounded-[28px]
                sm:p-6
              "
            >
              <span className="text-3xl font-bold text-[#AAB6E3] sm:text-4xl">
                {step.number}
              </span>

              <h3 className="mt-3 text-lg font-semibold text-[#111A5B] sm:mt-4 sm:text-xl">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
