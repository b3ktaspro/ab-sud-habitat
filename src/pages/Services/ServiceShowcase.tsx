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
        "Des solutions pensées pour améliorer le confort quotidien grâce à une meilleure isolation thermique, acoustique et une rénovation adaptée aux besoins du bâtiment.",
      image: "/images/select/special/special3.jpg",
    },
    {
      title: "Faux plafonds modernes",
      description:
        "Création de plafonds contemporains avec des finitions soignées, jeux de volumes et intégrations adaptées pour apporter élégance et caractère aux espaces.",
      image: "/images/logo/branding_plafond.png",
    },
  ];

  return (
    <section className="bg-[#F5F7FF] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Savoir-faire & réalisations
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#111A5B] sm:text-5xl">
            Des espaces conçus
            <br />
            autour de vos besoins.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Nous imaginons et réalisons des aménagements intérieurs sur mesure
            en associant fonctionnalité, confort et qualité des finitions.
          </p>
        </div>

        <div className="mt-16 space-y-20 sm:mt-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="
                grid
                gap-8
                lg:grid-cols-12
                lg:items-center
              "
            >
              <div
                className={`
                  lg:col-span-7
                  ${index % 2 === 1 ? "lg:order-2" : ""}
                `}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    h-[300px]
                    w-full
                    rounded-[32px]
                    object-cover

                    sm:h-[430px]
                  "
                />
              </div>

              <div
                className={`
                  lg:col-span-5
                  ${index % 2 === 1 ? "lg:order-1" : ""}
                `}
              >
                <p className="text-sm font-medium text-slate-400">
                  0{index + 1}
                </p>

                <h3 className="mt-4 text-3xl font-bold leading-tight text-[#111A5B] sm:text-4xl">
                  {service.title}
                </h3>

                <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {service.description}
                </p>

                <div className="mt-8 h-px w-full bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
