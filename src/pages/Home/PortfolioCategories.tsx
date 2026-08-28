import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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

export default function PortfolioCategories() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 sm:mb-12">
          <span className="inline-flex rounded-full border border-[#D9DDEA] bg-[#F5F7FF] px-4 py-2 text-xs font-medium text-[#111A5B] sm:text-sm">
            Nos réalisations
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#111A5B] sm:text-4xl lg:text-[42px]">
            Découvrez nos réalisations.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
          {categories.map(({ title, description, image, path }) => (
            <Link
              key={path}
              to={path}
              className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-md"
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-[190px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] sm:h-[220px] lg:h-[240px]"
                />
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-[#111A5B]">{title}</h3>

                <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                  {description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#111A5B]">
                  <span>Découvrir</span>

                  <ArrowRight
                    size={15}
                    strokeWidth={2}
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
