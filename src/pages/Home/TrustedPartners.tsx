export default function TrustedPartners() {
  const partners = [
    "https://rayonnance.fr/wp-content/uploads/2021/07/PointP_logo.png",
    "https://www.pagesjaunes.fr/media/newdam/preset-export-large/c4/fa/30/00/00/3f/00/04/bd/80/67c1c4fa3000003f0004bd80/67c1c4fa300000fe8e04bd81.jpg",
    "https://www.pagesjaunes.fr/media/agc/68/f2/30/00/00/cb/07/e2/e5/ef/680b68f2300000cb07e2e5ef/680b68f2300000cb07e2e5f0.png",
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Isover_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/f/f5/Logo_Knauf.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/a0/Placo_logo.png",
    "https://www.aurignac.fr/wp-content/uploads/2020/11/Capturet.png",
    "https://img.batiweb.com/repo-images/supplier/5820970/bigmatfrance-logo.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4c/UNION_MATERIAUX_Le_Service_Maison.png",
    "https://storage.leadformance.com/assets/production-front-offices/v3-FranceMateriaux/v1.22.4/assets/images/client/brand-logo.png",
  ];

  return (
    <section className="bg-[#F5F7FF] py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
          <span className="inline-flex rounded-full border border-[#D9DDEA] bg-white px-3 py-1.5 text-xs font-medium text-[#111A5B] sm:px-4 sm:py-2 sm:text-sm">
            Qualité reconnue
          </span>

          <h2 className="mt-3 text-2xl font-bold leading-tight text-[#111A5B] sm:mt-4 sm:text-4xl">
            Des références de confiance
            <br />
            pour votre sérénité.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
            Nous accordons une attention particulière à la qualité des matériaux
            sélectionnés auprès de fournisseurs reconnus afin de garantir la
            sécurité des occupants et la pérennité des ouvrages réalisés.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="
                flex
                h-[72px]
                items-center
                justify-center
                rounded-2xl
                border
                border-[#D9DDEA]
                bg-white
                px-3
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg

                sm:h-[110px]
                sm:rounded-3xl
                sm:px-6
              "
            >
              <img
                src={partner}
                alt="Partenaire"
                className="
                  max-h-8
                  w-auto
                  object-contain

                  sm:max-h-14
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
