export default function WhyUs() {
  const values = [
    {
      title: "Une préparation maîtrisée",
      text: "Chaque intervention commence par une analyse précise de l'existant afin de définir les solutions les plus adaptées au bâtiment.",
    },
    {
      title: "Des finitions exigeantes",
      text: "Nous accordons une attention particulière aux détails pour garantir des réalisations propres, durables et harmonieuses.",
    },
    {
      title: "Un suivi de proximité",
      text: "De la première étude jusqu'aux dernières finitions, nous restons présents pour accompagner chaque étape du projet.",
    },
  ];

  return (
    <section className="bg-[#F5F7FF] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-[#D9DDEA] bg-white px-3 py-1.5 text-xs font-medium text-[#111A5B] sm:px-4 sm:py-2 sm:text-sm">
            Notre engagement
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#111A5B] sm:text-4xl">
            Une méthode pensée
            <br />
            pour des résultats durables.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Chaque projet bénéficie d'une approche structurée mêlant écoute,
            précision technique et qualité d'exécution pour transformer vos
            espaces dans les meilleures conditions.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="
                rounded-[24px]
                bg-white
                p-5

                sm:p-6
              "
            >
              <h3 className="text-lg font-bold text-[#111A5B]">{item.title}</h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div
          className="
            mt-4
            overflow-hidden
            rounded-[24px]
            bg-[#111A5B]
            px-5
            py-6

            sm:px-8
            sm:py-8
          "
        >
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Un chantier pensé dans chaque détail.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
                Notre objectif est de proposer des solutions cohérentes avec
                votre intérieur, en associant fonctionnalité, esthétique et
                qualité de réalisation.
              </p>

              <a
                href="/contact"
                className="
                  mt-4
                  inline-flex
                  items-center
                  rounded-xl
                  bg-white
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-[#111A5B]
                  transition
                  hover:bg-slate-100
                "
              >
                Contactez-nous
              </a>
            </div>

            <div className="text-left lg:text-right">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                AB Sud Habitat
              </p>

              <p className="mt-1 text-lg font-bold text-white">
                Expertise intérieure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
