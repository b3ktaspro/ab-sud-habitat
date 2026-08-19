export default function BeforeAfterVideo() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 max-w-2xl">
          <span className="inline-flex rounded-full border border-[#D9DDEA] bg-[#F5F7FF] px-4 py-2 text-xs font-medium text-[#111A5B]">
            Avant / Après
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#111A5B] sm:text-4xl">
            Découvrez la transformation.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Chaque chantier est unique. Découvrez l'évolution complète d'un
            projet réalisé par AB Sud Habitat, de l'état initial jusqu'au
            résultat final.
          </p>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-[#D9DDEA] bg-[#F5F7FF]">
          <div className="grid lg:grid-cols-[1fr_auto_1fr]">
            <div className="p-3">
              <img
                src="/images/select/iso/iso6.jpg"
                alt="Avant travaux"
                className="
                    h-[180px]
                    w-full
                    rounded-[20px]
                    object-cover
  
                    sm:h-[260px]
                  "
              />
            </div>

            <div className="flex min-w-[200px] flex-col items-center justify-center px-6 py-6 text-center">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Réalisation
              </span>

              <h3 className="mt-2 text-xl font-bold text-[#111A5B]">
                Faux plafond
              </h3>

              <p className="mt-3 text-sm text-slate-600">
                Béziers • Projet résidentiel
              </p>

              <div className="my-4 h-8 w-px bg-slate-300" />

              <span className="rounded-full bg-[#111A5B] px-4 py-2 text-xs font-medium text-white">
                Avant → Après
              </span>
            </div>

            <div className="p-3">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="
                    h-[180px]
                    w-full
                    rounded-[20px]
                    object-cover
  
                    sm:h-[260px]
                  "
              >
                <source src="/video/video1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
