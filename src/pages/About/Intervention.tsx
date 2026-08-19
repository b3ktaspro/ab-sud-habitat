import { MapPin } from "lucide-react";

export default function Intervention() {
  const cities = [
    "Béziers",
    "Montpellier",
    "Narbonne",
    "Agde",
    "Sète",
    "Lunel",
    "Nîmes",
    "Perpignan",
    "Pézenas",
    "Clermont-l'Hérault",
    "Frontignan",
    "Mauguio",
    "Lattes",
    "Mèze",
    "Marseillan",
    "Valras-Plage",
  ];

  return (
    <section className="bg-[#F5F7FF] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <span className="inline-block rounded-full border border-[#D9DDEA] bg-white px-4 py-2 text-xs font-medium text-[#111A5B] sm:text-sm">
            Zone d'intervention
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#111A5B] sm:text-4xl">
            Où intervenons-nous ?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            AB Sud Habitat intervient dans l'Hérault, en Occitanie et dans
            plusieurs villes du sud de la France pour vos travaux de plaquiste,
            isolation et aménagement intérieur.
          </p>
        </div>

        <div className="rounded-[24px] border border-[#D9DDEA] bg-white p-5 sm:p-8 md:p-10">
          <h3 className="mb-5 text-xl font-bold text-[#111A5B] sm:mb-6 sm:text-2xl">
            Principales zones desservies
          </h3>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((city) => (
              <div key={city} className="flex items-center gap-2">
                <MapPin size={15} className="shrink-0 text-[#111A5B]" />

                <span className="text-sm text-slate-700 sm:text-base">
                  {city}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-[#111A5B] p-5 text-white sm:mt-8 sm:p-6">
            <h4 className="text-lg font-bold sm:text-xl">
              Hérault • Occitanie • Sud de la France
            </h4>

            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Nous intervenons également sur d'autres secteurs selon les besoins
              et l'envergure du projet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
