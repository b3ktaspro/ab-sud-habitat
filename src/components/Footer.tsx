import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#F8FAFF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <img
                src="/images/logo/logo.jpeg"
                alt="AB Sud Habitat"
                className="h-18 w-18 rounded-xl object-cover"
              />

              <div>
                <h2 className="font-semibold text-[#111A5B]">AB Sud Habitat</h2>

                <p className="text-xs sm:text-sm text-slate-500">
                  Plaquiste • Isolation • Aménagement
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-slate-600">
              Plus de 20 ans d'expérience dans les travaux de plaquiste,
              d'isolation et d'aménagement intérieur pour les particuliers et
              professionnels de l'Hérault et de l'Occitanie.
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-semibold text-[#111A5B]">Navigation</h3>

            <nav className="flex flex-col gap-3 text-sm">
              <Link
                to="/"
                className="text-slate-600 transition hover:text-[#111A5B]"
              >
                Accueil
              </Link>

              <Link
                to="/services"
                className="text-slate-600 transition hover:text-[#111A5B]"
              >
                Services
              </Link>

              <Link
                to="/projects"
                className="text-slate-600 transition hover:text-[#111A5B]"
              >
                Réalisations
              </Link>

              <Link
                to="/about"
                className="text-slate-600 transition hover:text-[#111A5B]"
              >
                À propos
              </Link>

              <Link
                to="/contact"
                className="text-slate-600 transition hover:text-[#111A5B]"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-5 font-semibold text-[#111A5B]">Contact</h3>

            <div className="space-y-3 text-sm text-slate-600">
              <p>Béziers • Hérault • Occitanie</p>

              <p className="break-all">absudhabitat@gmail.com</p>

              <p>06 50 45 06 66</p>

              <Link
                to="/contact"
                className="
                  mt-4
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#111A5B]
                  px-5
                  py-3
                  font-medium
                  text-white
                  transition
                  hover:opacity-90
                "
              >
                Demander un devis
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="my-8 h-px bg-slate-200" />

        <div
          className="
            flex
            flex-col
            gap-4
            text-sm
            text-slate-500

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} AB Sud Habitat. Tous droits réservés.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link to="/legal" className="transition hover:text-[#111A5B]">
              Mentions légales
            </Link>

            <Link to="/privacy" className="transition hover:text-[#111A5B]">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
