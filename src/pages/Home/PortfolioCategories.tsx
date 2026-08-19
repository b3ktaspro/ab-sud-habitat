import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PortfolioCategories() {
  const categories = [
    {
      title: "Cloisons",
      description: "Création de nouvelles pièces et optimisation des espaces.",
      image: "/images/select/cloisons/cloisons1.jpg",
      path: "/projects/cloisons",
    },
    {
      title: "Faux plafonds",
      description:
        "Solutions esthétiques et techniques adaptées à chaque projet.",
      image: "/images/select/plafond/plafond1.jpg",
      path: "/projects/faux-plafonds",
    },
    {
      title: "Isolation",
      description: "Amélioration du confort thermique et acoustique.",
      image: "/images/select/iso/iso1.jpg",
      path: "/projects/isolation",
    },
    {
      title: "Doublage",
      description: "Valorisation des murs et amélioration des performances.",
      image: "/images/select/doublage/doublage1.jpg",
      path: "/projects/doublage",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8">
          <span className="inline-flex rounded-full border border-[#D9DDEA] bg-[#F5F7FF] px-4 py-2 text-xs font-medium text-[#111A5B] sm:text-sm">
            Nos réalisations
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#111A5B] sm:text-4xl">
            Découvrez nos réalisations.
          </h2>
        </div>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.path}
              className="
                group
                overflow-hidden
                rounded-[22px]
                border
                border-slate-200
                bg-white
                transition
                duration-300
                hover:shadow-md
              "
            >
              <img
                src={category.image}
                alt={category.title}
                className="
                  h-[140px]
                  w-full
                  object-cover

                  sm:h-[160px]
                "
              />

              <div className="p-4">
                <h3 className="text-lg font-bold text-[#111A5B]">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {category.description}
                </p>

                <div className="mt-3 flex items-center gap-2 text-sm font-medium text-[#111A5B]">
                  <span>Découvrir</span>

                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
