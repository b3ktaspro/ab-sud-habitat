import { Hammer, House, Layers3, ShieldCheck } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Layers3 size={24} />,
      title: "Plaquiste",
      description:
        "Pose de cloisons, doublages, faux plafonds et finitions soignées.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Isolation",
      description:
        "Isolation thermique et acoustique pour améliorer le confort de votre habitat.",
    },
    {
      icon: <House size={24} />,
      title: "Aménagement intérieur",
      description:
        "Optimisation et transformation de vos espaces de vie et de travail.",
    },
    {
      icon: <Hammer size={24} />,
      title: "Rénovation",
      description:
        "Travaux de rénovation intérieure adaptés à vos besoins et à votre budget.",
    },
  ];

  return (
    <section className="bg-[#F8FAFF] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 max-w-3xl sm:mb-12">
          <span className="inline-block rounded-full border border-[#AAB6E3] bg-white px-4 py-2 text-xs font-medium text-[#111A5B] sm:text-sm">
            Nos services
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#111A5B] sm:text-4xl">
            Des solutions adaptées à chaque projet.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Depuis plus de 20 ans, nous accompagnons particuliers et
            professionnels dans leurs travaux de plaquiste, d'isolation et
            d'aménagement intérieur.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-5
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-xl

                sm:p-6
              "
            >
              <div
                className="
                  mb-4
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#111A5B]
                  text-white

                  sm:mb-5
                  sm:h-12
                  sm:w-12
                "
              >
                {service.icon}
              </div>

              <h3 className="text-base font-semibold text-[#111A5B] sm:text-lg">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
