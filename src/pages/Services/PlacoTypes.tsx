import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PlacoTypes() {
  const types = [
    {
      title: "BA6",
      subtitle: "Finitions spécifiques",
      description:
        "Une plaque fine utilisée principalement pour des réalisations particulières comme certains habillages ou formes courbes nécessitant plus de souplesse.",
      image: "https://media.adeo.com/media/4135380/media.jpg",
    },
    {
      title: "BA10",
      subtitle: "Plaque légère",
      description:
        "Adaptée aux aménagements spécifiques et aux ouvrages demandant une plaque plus fine, notamment pour certains doublages ou formes particulières.",
      image: "https://media.adeo.com/media/3267205/media.jpg?width=300",
    },
    {
      title: "BA13 standard",
      subtitle: "Polyvalence",
      description:
        "La plaque de plâtre la plus utilisée pour les cloisons, doublages et aménagements intérieurs classiques. Elle convient parfaitement aux projets de rénovation courants.",
      image:
        "https://www.mon-platrier.fr/wp-content/uploads/2018/05/placo_13.jpg",
    },
    {
      title: "BA15",
      subtitle: "Confort renforcé",
      description:
        "Une plaque plus épaisse offrant davantage de rigidité et pouvant répondre à des besoins supérieurs en résistance et en confort acoustique.",
      image: "https://uploads.gedimat.fr/PHOTO2/0000224/590556.jpg",
    },
    {
      title: "BA18",
      subtitle: "Résistance supérieure",
      description:
        "Une plaque plus robuste adaptée aux ouvrages demandant plus de solidité, notamment certaines cloisons et doublages renforcés.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJD2ysSQj0dhguxSFDOjyiykdmQZGwqnmFfF7N6qCYbZgOImxR4T4xVwqd&s=10",
    },
    {
      title: "BA25",
      subtitle: "Très haute résistance",
      description:
        "Une plaque épaisse offrant une excellente rigidité pour les ouvrages nécessitant une forte résistance mécanique.",
      image:
        "https://medias.bigmat.fr/data_medias/medias_finaux/images/3496250048126-eA2TYmyUps-fiche.png",
    },
    {
      title: "Placo hydrofuge",
      subtitle: "Pièces humides",
      description:
        "Une solution adaptée aux salles de bain, cuisines ou buanderies grâce à une meilleure résistance à l'humidité et aux projections d'eau.",
      image:
        "https://www.isolationmarket.fr/wp-content/uploads/2020/05/hydorfuge.jpg",
    },
    {
      title: "Placo phonique",
      subtitle: "Isolation acoustique",
      description:
        "Conçu pour améliorer le confort sonore d'un logement en limitant la transmission des bruits entre les différentes pièces.",
      image:
        "https://www.ootravaux.fr/sites/ootravaux/storage/files/styles/google_discovery_minimum_1200px/public/2021-11/ootravaux-prix-placo-phonique.jpg?itok=wHTyw02Q",
    },
    {
      title: "Placo coupe-feu",
      subtitle: "Protection incendie",
      description:
        "Une solution permettant de renforcer la résistance au feu des cloisons et répondre aux contraintes spécifiques des bâtiments.",
      image:
        "https://www.tracaposta.com/images/Image/coupe-feux-1336979810.jpg",
    },
    {
      title: "Placo haute dureté",
      subtitle: "Résistance aux chocs",
      description:
        "Une plaque renforcée conçue pour les espaces sollicités nécessitant une meilleure résistance aux impacts et aux fixations.",
      image:
        "https://www.lamaisonsaintgobain.fr/sites/lmsg/files/styles/image_article/public/2025-05/Plaque%20de%20pl%C3%A2tre%20HABITO%C2%AE_0.jpg?itok=EP_aQ_WF",
    },
    {
      title: "Doublage isolant",
      subtitle: "Isolation thermique",
      description:
        "Une solution combinant plaque de plâtre et isolant pour améliorer le confort thermique et acoustique des murs existants.",
      image:
        "https://www.lamaisonsaintgobain.fr/sites/lmsg/files/2025-09/image-labelrock-rockwool-lmsg%20%287%29.webp",
    },
  ];

  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Solutions placo
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#111A5B] sm:text-5xl">
            Des plaques adaptées
            <br />à chaque besoin.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Chaque projet possède ses contraintes. Le choix de la plaque permet
            d'améliorer le confort, la résistance et la durabilité des
            aménagements réalisés.
          </p>
        </div>

        <div className="mt-14">
          {types.map((type, index) => {
            const open = active === index;

            return (
              <div key={type.title} className="border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => setActive(open ? null : index)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    py-7
                    text-left
                  "
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      {type.subtitle}
                    </p>

                    <h3 className="mt-2 text-3xl font-semibold text-[#111A5B] sm:text-4xl">
                      {type.title}
                    </h3>
                  </div>

                  <motion.span
                    animate={{
                      rotate: open ? 45 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="text-3xl font-light text-slate-400"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 pb-8 md:grid-cols-[320px_1fr] md:items-center">
                        <img
                          src={type.image}
                          alt={type.title}
                          className="
                            h-[220px]
                            w-full
                            rounded-[24px]
                            object-cover
                            sm:h-[260px]
                          "
                        />

                        <p className="max-w-xl text-base leading-relaxed text-slate-600">
                          {type.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
