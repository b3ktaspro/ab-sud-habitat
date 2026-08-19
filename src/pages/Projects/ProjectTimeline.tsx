export default function ProjectTimeline() {
  const projects = [
    {
      city: "Montpellier",
      title: "Rénovation de bureaux professionnels",
      description:
        "Création d'espaces de travail modernes avec isolation acoustique et faux plafonds techniques.",
      duration: "2 semaines",
      surface: "240 m²",
      type: "Locaux professionnels",
      service: "Faux plafonds • Cloisons",
      results: [
        "Confort acoustique amélioré",
        "Passage des réseaux intégré",
        "Espaces modernisés",
        "Finitions professionnelles",
      ],
      before: "/images/select/avant_apres/avant3.jpeg",
      after: "/images/select/avant_apres/apres3.jpeg",
    },
    {
      city: "Narbonne",
      title: "Création de faux plafonds",
      description:
        "Réalisation de faux plafonds en plaques de plâtre avec intégration des équipements techniques et finitions soignées pour moderniser les espaces intérieurs.",
      duration: "1 semaines",
      surface: "85 m²",
      type: "Appartement",
      service: "Faux plafonds",
      results: [
        "Plafonds modernisés",
        "Finitions soignées",
        "Intégration des réseaux",
        "Confort amélioré",
      ],
      before: "/images/select/avant_apres/avant2.jpg",
      after: "/images/select/avant_apres/apres2.jpg",
    },
    {
      city: "Béziers",
      title: "Création de cloisons et isolation intérieure",
      description:
        "Réalisation complète de cloisons en plaques de plâtre avec isolation thermique et acoustique pour une rénovation résidentielle.",
      duration: "1 semaines",
      surface: "120 m²",
      type: "Maison individuelle",
      service: "Cloisons • Isolation • Doublage",
      results: [
        "Isolation renforcée",
        "Confort thermique amélioré",
        "Nouvelles pièces créées",
        "Supports prêts à peindre",
      ],
      before: "/images/select/avant_apres/avant1.jpg",
      after: "/images/select/avant_apres/apres1.jpg",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12">
          <span className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-[#111A5B] sm:text-sm">
            Réalisations
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#111A5B] sm:text-4xl">
            Nos réalisations récentes.
          </h2>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.title}>
              {index !== 0 && (
                <div className="mb-16 border-t border-slate-200 pt-16" />
              )}

              <div className="grid gap-10 lg:grid-cols-2">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                    {project.city}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold text-[#111A5B] sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-6 rounded-[24px] bg-[#ECECF1] p-6">
                    <h4 className="mb-5 text-lg font-semibold text-[#111A5B]">
                      Fiche chantier
                    </h4>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <p className="text-sm text-slate-500">Durée</p>

                        <p className="mt-1 font-semibold text-[#111A5B]">
                          {project.duration}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-slate-500">Surface</p>

                        <p className="mt-1 font-semibold text-[#111A5B]">
                          {project.surface}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-slate-500">Type</p>

                        <p className="mt-1 font-semibold text-[#111A5B]">
                          {project.type}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-slate-500">Prestations</p>

                        <p className="mt-1 font-semibold text-[#111A5B]">
                          {project.service}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 border-t border-slate-300 pt-6">
                      <p className="mb-4 text-sm text-slate-500">
                        Résultats obtenus
                      </p>

                      <div className="grid gap-2">
                        {project.results.map((result) => (
                          <div
                            key={result}
                            className="text-sm font-medium text-[#111A5B]"
                          >
                            ✓ {result}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="inline-flex rounded-full bg-[#ECECF1] px-4 py-2 text-xs font-medium text-[#111A5B]">
                    Transformation du chantier
                  </span>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-slate-400" />

                        <p className="text-sm font-medium text-slate-500">
                          Avant travaux
                        </p>
                      </div>

                      <img
                        src={project.before}
                        alt=""
                        className="h-[260px] w-full rounded-[20px] border border-slate-200 object-cover"
                      />
                    </div>

                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#111A5B]" />

                        <p className="text-sm font-medium text-[#111A5B]">
                          Après réalisation
                        </p>
                      </div>

                      <img
                        src={project.after}
                        alt=""
                        className="h-[260px] w-full rounded-[20px] border border-slate-200 object-cover"
                      />
                    </div>
                  </div>

                  <div className="mt-5 rounded-[24px] bg-[#ECECF1] p-6">
                    <h4 className="font-semibold text-[#111A5B]">
                      Résultat final
                    </h4>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Ce chantier a permis d'améliorer le confort, l'esthétique
                      et les performances globales du bâtiment grâce à une mise
                      en œuvre soignée et des finitions professionnelles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
