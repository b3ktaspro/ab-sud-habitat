export default function ServicesHero() {
  return (
    <section className="bg-[#F5F7FF] pt-24 sm:pt-28 pb-12 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-6">
          <span className="inline-flex rounded-full border border-[#D9DDEA] bg-white px-4 py-2 text-xs font-medium text-[#111A5B] sm:text-sm">
            Nos Services
          </span>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-[#111A5B] sm:text-4xl md:text-5xl">
              Des prestations de qualité
              <br />
              pour tous vos projets.
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Plaquiste, isolation, faux plafonds et aménagement intérieur. AB
              Sud Habitat met son savoir-faire au service des particuliers et
              professionnels depuis plus de 20 ans.
            </p>
          </div>

          <div className="overflow-hidden rounded-[24px] sm:rounded-[28px]">
            <img
              src="/images/logo/branding_absud.png"
              alt="AB Sud Habitat"
              className="
                h-[240px]
                w-full
                object-cover

                sm:h-[320px]
                lg:h-[380px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
