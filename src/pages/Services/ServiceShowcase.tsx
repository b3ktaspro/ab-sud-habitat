export default function ServiceShowcase() {
  const services = [
    {
      title: "Espaces sur mesure",
      description:
        "Création de volumes uniques, séparations élégantes, niches intégrées, bibliothèques, habillages muraux et aménagements conçus pour valoriser chaque intérieur.",
      image: "/images/select/special/special2.jpg",
    },
    {
      title: "Confort & Performance",
      description:
        "Des solutions pensées pour renforcer le bien-être au quotidien grâce à une meilleure maîtrise du confort thermique, acoustique et énergétique.",
      image: "/images/select/special/special3.jpg",
    },
    {
      title: "Faux plafonds modernes",
      description:
        "Création de faux plafonds contemporains avec intégration de spots, éclairages indirects et finitions soignées pour apporter élégance, confort et caractère à chaque espace.",
      image: "/images/logo/branding_plafond.png",
    },
  ];

  return (
    <section className="bg-white py-14 sm:py-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 sm:mb-12">
          <span className="inline-flex rounded-full border border-[#D9DDEA] bg-[#F5F7FF] px-4 py-2 text-xs font-medium text-[#111A5B] sm:text-sm">
            Savoir-faire & Réalisations
          </span>

          <h2 className="mt-4 max-w-4xl text-3xl font-bold text-[#111A5B] sm:text-4xl">
            Des espaces pensés pour le confort, l'esthétique et la durabilité.
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Nous accompagnons particuliers et professionnels dans la création,
            la rénovation et la valorisation de leurs espaces grâce à des
            solutions durables, des finitions soignées et une approche
            entièrement sur mesure.
          </p>
        </div>

        <div className="space-y-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`
                overflow-hidden
                rounded-[24px]
                border
                border-slate-100

                lg:grid

                ${
                  index % 2 === 0
                    ? "lg:grid-cols-[1.2fr_0.8fr]"
                    : "lg:grid-cols-[0.8fr_1.2fr]"
                }
              `}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="flex flex-col justify-center p-5 sm:p-8 md:p-10">
                    <h3 className="text-xl font-bold text-[#111A5B] sm:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>

                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      h-[220px]
                      w-full
                      object-cover

                      sm:h-[280px]
                      lg:h-[320px]
                    "
                  />
                </>
              ) : (
                <>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      h-[220px]
                      w-full
                      object-cover

                      sm:h-[280px]
                      lg:h-[320px]
                    "
                  />

                  <div className="flex flex-col justify-center p-5 sm:p-8 md:p-10">
                    <h3 className="text-xl font-bold text-[#111A5B] sm:text-2xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
