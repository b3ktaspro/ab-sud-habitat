import ProjectGallery from "../../components/ProjectGallery";

export default function Isolation() {
  return (
    <section className="bg-white pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <span className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-[#111A5B] sm:text-sm">
          Réalisations • Isolation
        </span>

        <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight text-[#111A5B] sm:text-4xl lg:text-5xl">
          Isolation thermique et acoustique performante.
        </h1>

        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
          Nous mettons en œuvre des solutions d'isolation adaptées afin
          d'améliorer durablement le confort de votre logement tout en réduisant
          les pertes énergétiques et les nuisances sonores.
        </p>

        <ProjectGallery
          slides={[
            {
              image: "/images/select/iso/iso1.jpg",
              title: "Isolation thermique",
              description:
                "Amélioration du confort intérieur grâce à une isolation performante des parois.",
            },
            {
              image: "/images/select/iso/iso2.jpg",
              title: "Isolation acoustique",
              description:
                "Réduction des nuisances sonores pour un environnement plus agréable au quotidien.",
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
                Isolation des murs
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Réduction des déperditions thermiques et amélioration du confort
                intérieur.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#111A5B] sm:text-xl">
                Isolation acoustique
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Limitation des nuisances sonores pour un environnement plus
                agréable.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#111A5B] sm:text-xl">
                Isolation intérieure
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Solutions adaptées aux logements, commerces et bâtiments
                professionnels.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#111A5B] sm:text-xl">
                Performance énergétique
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Valorisation durable de votre habitat et réduction des
                consommations d'énergie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
