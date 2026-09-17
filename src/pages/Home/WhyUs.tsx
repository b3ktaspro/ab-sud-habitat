export default function WhyUs() {
  const stats = [
    {
      number: "20+",
      title: "Années d'expérience",
      text: "Un savoir-faire construit au fil des années dans la rénovation intérieure et les métiers du plâtre.",
    },
    {
      number: "100%",
      title: "Projets sur mesure",
      text: "Chaque chantier est étudié selon les contraintes du bâtiment et les attentes du client.",
    },
    {
      number: "4",
      title: "Domaines d'expertise",
      text: "Plâtrerie, isolation, faux plafonds et rénovation pour accompagner différents types de projets.",
    },
  ];

  return (
    <section className="bg-[#F5F7FF] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">


        <div className="max-w-3xl">

          <span className="inline-flex rounded-full border border-[#D9DDEA] bg-white px-4 py-2 text-xs font-medium text-[#111A5B] sm:text-sm">
            Pourquoi AB Sud Habitat
          </span>


          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#111A5B] sm:text-5xl">
            Une expertise au service
            <br />
            de vos projets.
          </h2>


          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Depuis plus de 20 ans, nous accompagnons particuliers et
            professionnels dans leurs projets de plâtrerie, isolation, faux
            plafonds, peinture et rénovation avec la même exigence de qualité
            et de finition.
          </p>

        </div>



        <div className="mt-12 grid gap-5 lg:grid-cols-3">


          {stats.map((item) => (

            <div
              key={item.title}
              className="
                rounded-[32px]
                bg-white
                p-7
                sm:p-8
              "
            >

              <p className="text-5xl font-bold text-[#111A5B]">
                {item.number}
              </p>


              <h3 className="mt-5 text-xl font-bold text-[#111A5B]">
                {item.title}
              </h3>


              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.text}
              </p>

            </div>

          ))}

        </div>




        <div
          className="
            mt-6
            overflow-hidden
            rounded-[32px]
            bg-[#111A5B]
            px-6
            py-8

            sm:px-10
            sm:py-10
          "
        >

          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Un accompagnement complet,
                de l'étude aux finitions.
              </h3>


              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                Nous vous accompagnons dans chaque étape du projet afin de
                proposer des solutions adaptées, durables et cohérentes avec
                votre intérieur.
              </p>


              <a
                href="/contact"
                className="
                  mt-6
                  inline-flex
                  items-center
                  rounded-xl
                  bg-white
                  px-6
                  py-3
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

              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                AB Sud Habitat
              </p>

              <p className="mt-2 text-xl font-bold text-white">
                Qualité & précision
              </p>

            </div>

          </div>

        </div>


      </div>
    </section>
  );
}