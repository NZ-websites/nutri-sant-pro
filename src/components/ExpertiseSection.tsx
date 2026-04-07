import { Apple, HeartPulse, Microscope } from "lucide-react";
import { useScrollReveal, revealClass } from "@/hooks/useScrollReveal";

const expertises = [
  {
    icon: Apple,
    title: "Rééquilibrage Alimentaire & Optimisation de la Santé",
    description:
      "Un programme alimentaire adapté à votre mode de vie, vos goûts, vos objectifs de santé pour retrouver un poids de forme durable. Optimisation de vos habitudes nutritionnelles et globales avec un objectif de prévention santé ou de performance sportive.",
  },
  {
    icon: HeartPulse,
    title: "Pathologies & Nutrition",
    description:
      "Prise en charge nutritionnelle et micronutritionnelle des maladies métaboliques (diabète, insulinorésistance, surpoids, obésité…) et autres pathologies chroniques.",
  },
  {
    icon: Microscope,
    title: "Médecine Fonctionnelle",
    description:
      "Étude approfondie des symptômes présentés et recherche de leur cause fonctionnelle, parfois à l'aide de bilans spécialisés. La médecine fonctionnelle aborde la personne dans son individualité et son intégralité biologique, physique et mentale. Il ne s'agit pas d'une médecine alternative mais d'une vision transversale basée sur les connaissances en biochimie, génétique et métabolisme.",
  },
];

const ExpertiseSection = () => {
  const [titleRef, titleVisible] = useScrollReveal<HTMLDivElement>();
  const [gridRef, gridVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="expertise" className="py-12 md:py-20 bg-secondary/40">
      <div className="container">
        <div ref={titleRef} className={`text-center mb-8 md:mb-14 ${revealClass(titleVisible, "up")}`}>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">Domaines d'Expertise</h2>
        </div>
        <div ref={gridRef} className="grid md:grid-cols-3 gap-5 md:gap-8">
          {expertises.map((e, i) => (
            <div
              key={e.title}
              className={`group p-5 md:p-8 rounded-xl border border-border bg-card hover:shadow-md transition-all duration-300 ${revealClass(gridVisible, "up")} delay-${(i + 1) * 100}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-sage-light flex items-center justify-center mb-4 md:mb-5 group-hover:bg-sage transition-colors duration-300">
                <e.icon className="w-5 h-5 md:w-6 md:h-6 text-sage group-hover:text-sage-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3">{e.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
