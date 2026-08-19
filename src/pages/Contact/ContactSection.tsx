import { useState } from "react";

export default function ContactSection() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(
          Array.from(formData.entries()).map(([key, value]) => [
            key,
            String(value),
          ]),
        ).toString(),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire.");
      }

      setSuccess(true);
      form.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-[#F5F7FF] pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 max-w-3xl">
          <span className="inline-flex rounded-full border border-[#D9DDEA] bg-white px-4 py-2 text-xs font-medium text-[#111A5B] sm:text-sm">
            Demande de devis
          </span>

          <h1 className="mt-4 text-3xl font-bold text-[#111A5B] sm:text-4xl lg:text-5xl">
            Parlons de votre projet.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Décrivez votre besoin et obtenez un devis gratuit adapté à votre
            projet. Nous intervenons auprès des particuliers et professionnels
            dans l&apos;Hérault et en Occitanie.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="rounded-[28px] bg-white p-6">
              <h2 className="text-lg font-semibold text-[#111A5B]">Contact</h2>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm text-slate-500">Téléphone</p>

                  <a
                    href="tel:0650450666"
                    className="mt-1 block font-medium text-[#111A5B] hover:underline"
                  >
                    06 50 45 06 66
                  </a>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Email</p>

                  <a
                    href="mailto:absudhabitat@gmail.com"
                    className="mt-1 block break-all font-medium text-[#111A5B] hover:underline"
                  >
                    absudhabitat@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Zone d&apos;intervention
                  </p>

                  <p className="mt-1 font-medium text-[#111A5B]">
                    Hérault • Occitanie
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] bg-[#111A5B] p-6 text-white">
              <h2 className="text-lg font-semibold">Réponse rapide</h2>

              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Chaque demande est étudiée avec attention afin de vous proposer
                une solution adaptée à votre projet et à vos besoins.
              </p>

              <div className="mt-6">
                <h3 className="text-4xl font-bold">24h - 48h</h3>

                <p className="mt-2 text-sm text-white/70">
                  Délai moyen de réponse
                </p>
              </div>
            </div>
          </div>

          <form
            name="devis"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="rounded-[32px] bg-white p-6 sm:p-8"
          >
            <input type="hidden" name="form-name" value="devis" />

            <p hidden>
              <label>
                Ne pas remplir :
                <input name="bot-field" />
              </label>
            </p>

            <h2 className="text-2xl font-bold text-[#111A5B]">
              Obtenir un devis gratuit
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Quelques informations suffisent pour nous permettre d&apos;étudier
              votre projet.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="prenom"
                placeholder="Prénom *"
                required
                className="h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-[#111A5B]"
              />

              <input
                type="text"
                name="nom"
                placeholder="Nom *"
                required
                className="h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-[#111A5B]"
              />
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                className="h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-[#111A5B]"
              />

              <input
                type="tel"
                name="telephone"
                placeholder="Téléphone *"
                required
                className="h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-[#111A5B]"
              />
            </div>

            <div className="mt-4">
              <input
                type="text"
                name="adresse"
                placeholder="Adresse du chantier *"
                required
                className="h-14 w-full rounded-2xl border border-slate-200 px-5 outline-none focus:border-[#111A5B]"
              />
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <select
                name="prestation"
                required
                className="h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-[#111A5B]"
              >
                <option value="">Type de prestation</option>
                <option>Cloisons</option>
                <option>Doublage</option>
                <option>Isolation thermique</option>
                <option>Isolation acoustique</option>
                <option>Faux plafonds</option>
                <option>Peinture</option>
                <option>Rénovation</option>
                <option>Autre</option>
              </select>

              <input
                type="number"
                name="surface"
                placeholder="Surface approximative (m²)"
                className="h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:border-[#111A5B]"
              />
            </div>

            <div className="mt-4">
              <select
                name="delai"
                required
                className="h-14 w-full rounded-2xl border border-slate-200 px-5 outline-none focus:border-[#111A5B]"
              >
                <option value="">Délai souhaité</option>
                <option>Dès que possible</option>
                <option>Sous 1 mois</option>
                <option>Sous 3 mois</option>
                <option>Sous 6 mois</option>
                <option>À définir</option>
              </select>
            </div>

            <div className="mt-4">
              <textarea
                name="message"
                rows={6}
                placeholder="Décrivez votre projet..."
                required
                className="w-full resize-none rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-[#111A5B]"
              />
            </div>

            {success && (
              <div className="mb-5 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                ✓ Votre demande a bien été envoyée. Nous reviendrons vers vous
                dans les meilleurs délais.
              </div>
            )}

            <button
              type="submit"
              className="
                mt-6
                w-full
                rounded-2xl
                bg-[#111A5B]
                px-6
                py-4
                font-semibold
                text-white
                transition
                hover:opacity-90
              "
            >
              Obtenir mon devis gratuit
            </button>

            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              Vos données sont traitées de manière confidentielle et utilisées
              uniquement pour répondre à votre demande de devis. Cette démarche
              est entièrement gratuite et sans engagement.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
