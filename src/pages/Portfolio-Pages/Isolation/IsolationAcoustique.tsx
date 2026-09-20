export default function IsolationAcoustique() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="
            grid
            gap-8
            lg:grid-cols-2
            lg:items-center
          "
        >
          <div>
            <span className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-[#111A5B] sm:text-sm">
              Confort acoustique
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#111A5B] sm:text-4xl">
              Une isolation pensée
              <br />
              pour plus de confort.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              L'isolation acoustique permet de réduire les nuisances sonores et
              d'améliorer le confort intérieur grâce à des solutions adaptées à
              chaque configuration.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <h3 className="text-lg font-bold text-[#111A5B]">
                  Réduction des bruits
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Limitation des sons provenant de l'extérieur ou des pièces
                  voisines pour créer un environnement plus calme.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#111A5B]">
                  Amélioration thermique
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Une isolation performante contribue également à conserver une
                  température agréable toute l'année.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#111A5B]">
                  Confort au quotidien
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Des espaces plus agréables grâce à des solutions adaptées aux
                  besoins du bâtiment.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px]">
            <img
              src="https://ab-sud-habitat.com/images/logo/logo.jpeg"
              alt="Isolation acoustique"
              className="
                h-[320px]
                w-full
                object-cover

                sm:h-[450px]
              "
            />
          </div>
        </div>

        <div
          className="
            mt-12
            rounded-[28px]
            bg-[#F5F7FF]
            p-6

            sm:p-8
          "
        >
          <h3 className="text-xl font-bold text-[#111A5B] sm:text-2xl">
            Une solution adaptée à chaque projet.
          </h3>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Chaque chantier est étudié afin de proposer une isolation cohérente
            avec la configuration des lieux, les contraintes techniques et les
            objectifs de confort recherchés.
          </p>
        </div>
      </div>
    </section>
  );
}
