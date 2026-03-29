import { Apple, HeartPulse, Dumbbell } from "lucide-react";

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
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-20 bg-card">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-sage uppercase tracking-wide mb-2">Nos spécialités</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Domaines d'Expertise</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {expertises.map((e) => (
            <div
              key={e.title}
              className="group p-8 rounded-xl border border-border bg-background hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center mb-5 group-hover:bg-sage transition-colors duration-300">
                <e.icon className="w-6 h-6 text-sage group-hover:text-sage-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{e.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
