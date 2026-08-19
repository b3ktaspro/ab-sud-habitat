export default function WhyUs() {
  const advantages = [
    {
      title: "Cloisons & doublage",
      description:
        "Création d'espaces fonctionnels, optimisation des volumes et finitions soignées adaptées à chaque projet.",
    },
    {
      title: "Isolation performante",
      description:
        "Solutions thermiques et acoustiques conçues pour améliorer durablement le confort de votre habitat.",
    },
    {
      title: "Faux plafonds",
      description:
        "Réalisation de plafonds modernes avec intégration discrète des réseaux et de l'éclairage.",
    },
    {
      title: "Peinture & rénovation",
      description:
        "Travaux de finition et rénovation pour valoriser durablement votre intérieur.",
    },
  ];

  return (
    <section className="bg-[#F5F7FF] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 max-w-3xl">
          <span className="inline-flex rounded-full border border-[#D9DDEA] bg-white px-4 py-2 text-xs font-medium text-[#111A5B] sm:text-sm">
            Pourquoi AB Sud Habitat
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#111A5B] sm:text-5xl">
            Une expertise au service
            <br />
            de vos projets.
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
            Depuis plus de 20 ans, nous accompagnons particuliers et
            professionnels dans leurs projets de plâtrerie, isolation, faux
            plafonds, peinture et rénovation avec la même exigence de qualité et
            de finition.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="
                  rounded-[24px]
                  border
                  border-[#D9DDEA]
                  bg-white
                  p-6
                "
              >
                <h3 className="text-lg font-semibold text-[#111A5B]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div>
            <img
              src="/images/logo/branding.png"
              alt="AB Sud Habitat"
              className="
                w-full
                rounded-[32px]
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
