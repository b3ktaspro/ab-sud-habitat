import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mb-5 inline-flex items-center rounded-full border border-[#AAB6E3] bg-[#F5F7FF] px-4 py-2"
            >
              <span className="text-xs sm:text-sm font-medium text-[#111A5B]">
                Plus de 20 ans d'expérience dans le bâtiment
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="
                max-w-3xl
                text-[2.2rem]
                font-bold
                leading-[1.05]
                text-[#111A5B]
                sm:text-5xl
                md:text-6xl
              "
            >
              Plaquiste,
              <br />
              isolation &
              <br />
              rénovation intérieure.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="
                mt-5
                max-w-xl
                text-sm
                leading-relaxed
                text-slate-600
                sm:text-base
              "
            >
              AB Sud Habitat accompagne particuliers et professionnels dans
              leurs projets d'aménagement, d'isolation et de rénovation avec un
              savoir-faire reconnu depuis plus de deux décennies.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="
    mt-8
    flex
    flex-col
    gap-3
    sm:flex-row
    sm:flex-wrap
  "
            >
              <Link
                to="/contact"
                className="
      flex
      items-center
      justify-center
      gap-2
      rounded-xl
      bg-[#111A5B]
      px-6
      py-3.5
      font-semibold
      text-white
      transition
      hover:opacity-90
    "
              >
                Demander un devis
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/projects"
                className="
      rounded-xl
      border
      border-slate-200
      px-6
      py-3.5
      text-center
      font-semibold
      text-[#111A5B]
      transition
      hover:bg-slate-50
    "
              >
                Nos réalisations
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="
                mt-10
                grid
                grid-cols-3
                gap-4
                sm:gap-6
              "
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111A5B]">
                  20+
                </h3>

                <p className="mt-1 text-xs sm:text-sm text-slate-500">
                  Années d'expérience
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111A5B]">
                  500+
                </h3>

                <p className="mt-1 text-xs sm:text-sm text-slate-500">
                  Chantiers réalisés
                </p>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111A5B]">
                  Occitanie
                </h3>

                <p className="mt-1 text-xs sm:text-sm text-slate-500">
                  Hérault
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 h-full w-full rounded-[32px] bg-[#AAB6E3]" />

            <img
              src="/images/logo/logo.jpeg"
              alt="AB Sud Habitat"
              className="
                relative
                h-[320px]
                w-full
                rounded-[32px]
                object-cover
                sm:h-[450px]
                lg:h-[520px]
              "
            />

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 0.8,
              }}
              className="
                hidden
                sm:block
                absolute
                bottom-4
                left-4
                rounded-2xl
                  bg-white
                  p-4
                  shadow-xl
                "
            >
              <p className="text-xs sm:text-sm text-slate-500">
                Expertise reconnue
              </p>

              <h3 className="mt-1 text-base sm:text-lg font-bold text-[#111A5B]">
                Plaquiste & Isolation
              </h3>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="mt-14 sm:mt-16 grid gap-4 md:grid-cols-3"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-slate-100 p-5 sm:p-6"
          >
            <h3 className="text-lg font-semibold text-[#111A5B]">Plaquiste</h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Cloisons, doublages, finitions et aménagements sur mesure.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-slate-100 p-5 sm:p-6"
          >
            <h3 className="text-lg font-semibold text-[#111A5B]">Isolation</h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Isolation thermique et acoustique performante.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-slate-100 p-5 sm:p-6"
          >
            <h3 className="text-lg font-semibold text-[#111A5B]">Rénovation</h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Modernisation et optimisation de vos espaces intérieurs.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
