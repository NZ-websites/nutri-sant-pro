import { Apple, HeartPulse, Dumbbell, Microscope } from "lucide-react";
import cabinetBg from "@/assets/cabinet-consultation.jpg";

const expertises = [
  {
    icon: Apple,
    title: "Rééquilibrage Alimentaire",
    description:
      "Un programme alimentaire sur mesure adapté à votre mode de vie, vos goûts et vos objectifs de santé pour retrouver un poids de forme durable.",
  },
  {
    icon: HeartPulse,
    title: "Pathologies & Nutrition Thérapeutique",
    description:
      "Prise en charge nutritionnelle des pathologies chroniques : diabète, cholestérol, maladies cardiovasculaires, troubles métaboliques.",
  },
  {
    icon: Dumbbell,
    title: "Nutrition Sportive",
    description:
      "Optimisation de l'alimentation pour la performance sportive et la récupération.",
  },
  {
    icon: Microscope,
    title: "Médecine Fonctionnelle",
    description:
      "Optimiser le fonctionnement des systèmes biologiques du corps grâce à une approche scientifique et personnalisée : bilans approfondis, micronutrition et prévention active.",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="relative py-20 overflow-hidden">
      {/* Background image with Ken Burns + dark overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={cabinetBg}
          alt=""
          className="w-full h-full object-cover animate-ken-burns will-change-transform"
          style={{ animationDelay: "8s" }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/55 to-black/65" />
      </div>

      <div className="container relative">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-sage-light uppercase tracking-wide mb-2 drop-shadow-sm">Nos spécialités</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">Domaines d'Expertise</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertises.map((e) => (
            <div
              key={e.title}
              className="group p-8 rounded-xl border border-white/10 bg-black/30 backdrop-blur-md hover:bg-black/40 transition-all duration-300 shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-5 group-hover:bg-sage transition-colors duration-300">
                <e.icon className="w-6 h-6 text-sage-light group-hover:text-sage-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{e.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
