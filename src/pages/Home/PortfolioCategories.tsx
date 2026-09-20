import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "Cloisons",
    description:
      "Création et réorganisation des espaces intérieurs avec des solutions adaptées aux volumes existants.",
    image: "./images/images-des-chantiers/cloisons/cloisons-01.jpg",
    path: "/projects/cloisons",
  },
  {
    title: "Plafonds",
    description:
      "Création de plafonds sur mesure pour améliorer l'esthétique et le confort des espaces intérieurs.",
    image: "./images/images-des-chantiers/plafond/faux-plafond-01.jpg",
    path: "/projects/faux-plafonds",
  },
  {
    title: "Isolation",
    description:
      "Amélioration durable du confort thermique et acoustique des bâtiments.",
    image: "./images/images-des-chantiers/isolation/isolation-01.jpeg",
    path: "/projects/isolation",
  },
  {
    title: "Doublage",
    description:
      "Habillage des murs, amélioration des performances et préparation des finitions.",
    image: "./images/images-des-chantiers/doublage/doublage-01.jpeg",
    path: "/projects/doublage",
  },
];

export default function PortfolioCategories() {
  return (
    <section className="bg-[#F5F7FF] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-[#D9DDEA]
              bg-white
              px-3
              py-1.5
              text-xs
              font-medium
              text-[#111A5B]

              sm:px-4
              sm:py-2
              sm:text-sm
            "
          >
            Nos réalisations
          </span>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              leading-tight
              text-[#111A5B]

              sm:text-4xl
            "
          >
            Des projets pensés
            <br />
            pour chaque espace.
          </h2>

          <p
            className="
              mt-3
              max-w-2xl
              text-sm
              leading-relaxed
              text-slate-600

              sm:text-base
            "
          >
            Découvrez nos différents domaines d'intervention et les solutions
            réalisées pour transformer les espaces intérieurs.
          </p>
        </div>

        <div
          className="
            mt-8
            grid
            gap-4

            sm:grid-cols-2

            lg:grid-cols-4
          "
        >
          {categories.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="
                group
                overflow-hidden
                rounded-[24px]
                bg-white
              "
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-[240px]
                    w-full
                    object-cover

                    transition
                    duration-700
                    group-hover:scale-105

                    sm:h-[280px]
                  "
                />

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-20
                    bg-gradient-to-t
                    from-black/30
                    to-transparent
                  "
                />
              </div>

              <div className="p-5">
                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-3
                  "
                >
                  <h3
                    className="
                      text-lg
                      font-bold
                      text-[#111A5B]
                    "
                  >
                    {item.title}
                  </h3>

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F5F7FF]
                      text-[#111A5B]

                      transition
                      duration-300
                      group-hover:bg-[#111A5B]
                      group-hover:text-white
                    "
                  >
                    <ArrowUpRight size={14} />
                  </span>
                </div>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-relaxed
                    text-slate-600
                  "
                >
                  {item.description}
                </p>

                <div
                  className="
                    mt-4
                    h-px
                    w-full
                    bg-slate-200
                  "
                />

                <span
                  className="
                    mt-3
                    block
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-[#111A5B]
                  "
                >
                  Découvrir
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
