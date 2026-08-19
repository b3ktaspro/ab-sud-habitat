import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quels services propose AB Sud Habitat ?",
      answer:
        "Nous réalisons des travaux de plaquiste, d'isolation thermique et acoustique, de faux plafonds, de cloisons et d'aménagement intérieur pour les particuliers comme les professionnels.",
    },
    {
      question: "Dans quelles zones intervenez-vous ?",
      answer:
        "Nous intervenons principalement dans l'Hérault, l'Occitanie et plus largement dans le sud de la France selon la nature et l'envergure du projet.",
    },
    {
      question: "Proposez-vous des devis gratuits ?",
      answer:
        "Oui. Chaque projet fait l'objet d'une étude personnalisée afin de vous fournir un devis détaillé, gratuit et sans engagement.",
    },
    {
      question: "Quels sont les délais pour démarrer un chantier ?",
      answer:
        "Les délais varient selon la période, la taille du chantier et les matériaux nécessaires. Un planning précis est établi avant le début des travaux.",
    },
    {
      question: "Quels matériaux utilisez-vous ?",
      answer:
        "Nous travaillons avec des fournisseurs et fabricants reconnus afin de garantir des prestations durables, performantes et conformes aux normes en vigueur.",
    },
    {
      question: "Travaillez-vous avec les professionnels ?",
      answer:
        "Oui. Nous accompagnons aussi bien les particuliers que les professionnels, commerces, bureaux, collectivités et maîtres d'œuvre.",
    },
  ];

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-8 text-center sm:mb-12">
          <span className="inline-block rounded-full border border-[#D9DDEA] bg-[#F5F7FF] px-4 py-2 text-xs font-medium text-[#111A5B] sm:text-sm">
            FAQ
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#111A5B] sm:text-4xl">
            Questions fréquentes
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Retrouvez les réponses aux questions les plus courantes concernant
            nos prestations et notre accompagnement.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="
                overflow-hidden
                rounded-2xl
                border
                border-[#D9DDEA]
                bg-white
                transition-all
                duration-300
                hover:border-[#C9D1EA]
              "
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  px-4
                  py-4
                  text-left

                  sm:px-6
                  sm:py-5
                "
              >
                <span
                  className="
                    pr-4
                    text-sm
                    font-semibold
                    text-[#111A5B]

                    sm:pr-6
                    sm:text-base
                  "
                >
                  {faq.question}
                </span>

                <ChevronDown
                  size={18}
                  className={`shrink-0 transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <div
                      className="
                        px-4
                        pb-5
                        text-sm
                        leading-relaxed
                        text-slate-600

                        sm:px-6
                        sm:pb-6
                      "
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
