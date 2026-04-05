import { Button } from "@/components/ui/button";
import doctorImg from "@/assets/doctor-portrait.jpg";
import { useScrollReveal, revealClass } from "@/hooks/useScrollReveal";

const HeroSection = ({ onBookClick }: { onBookClick: () => void }) => {
  const [ref, visible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} id="accueil" className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-secondary/40">
      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className={`text-sm font-semibold text-primary uppercase tracking-wide ${revealClass(visible, "up")}`}>
              Médecin Nutritionniste
            </p>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight ${revealClass(visible, "up")} delay-100`}>
              Dr Xénia{" "}
              <span className="text-primary">Zanardo</span>
            </h1>
            <p className={`text-muted-foreground max-w-lg leading-relaxed text-base italic ${revealClass(visible, "up")} delay-200`}>
              Un accompagnement médical bienveillant et personnalisé pour vous aider à optimiser votre santé, à accéder à un équilibre alimentaire adéquat et faire évoluer vos habitudes pour les inscrire dans la durée.
            </p>
            <div className={`max-w-lg rounded-xl border border-border bg-card/60 px-5 py-4 shadow-sm ${revealClass(visible, "up")} delay-300`}>
              <p className="text-muted-foreground whitespace-pre-line text-base leading-relaxed">
                Nutrition – MicroNutrition – Prévention{"\n"}
                Suivi médical de perte de poids{"\n"}
                Troubles du comportement alimentaire{"\n"}
                Troubles fonctionnels
              </p>
            </div>
          </div>
          <div className={`relative flex flex-col items-center md:items-end gap-6 ${revealClass(visible, "right")} delay-200`}>
            <div className="relative w-64 md:w-80 aspect-square rounded-full overflow-hidden shadow-2xl ring-1 ring-border">
              <img
                src={doctorImg}
                alt="Dr Xénia Zanardo — Médecin Nutritionniste à Tours"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className={`flex flex-col gap-3 w-64 md:w-80 ${revealClass(visible, "up")} delay-300`}>
              <Button variant="cta" size="lg" className="w-full" onClick={onBookClick}>
                Prendre Rendez-vous
              </Button>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <a href="#parcours">En savoir plus</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
