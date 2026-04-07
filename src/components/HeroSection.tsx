import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import doctorImg from "@/assets/doctor-portrait.jpg";
import { useScrollReveal, revealClass } from "@/hooks/useScrollReveal";

const HeroSection = ({ onBookClick }: { onBookClick: () => void }) => {
  const [ref, visible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} id="accueil" className="relative pt-24 pb-12 md:pt-36 md:pb-24 bg-secondary/40">
      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* On mobile, show photo first centered, then text */}
          <div className="order-2 md:order-1 space-y-5 md:space-y-6">
            <p className={`text-sm font-semibold text-primary uppercase tracking-wide ${revealClass(visible, "up")}`}>
              Médecin Nutritionniste
            </p>
            <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight ${revealClass(visible, "up")} delay-100`}>
              <span className="text-primary">Dr Xénia Zanardo</span>
            </h1>
            <p className={`text-muted-foreground max-w-lg leading-relaxed text-sm md:text-base italic ${revealClass(visible, "up")} delay-200`}>
              Un accompagnement médical bienveillant et personnalisé pour vous aider à optimiser votre santé, à accéder à un équilibre alimentaire adéquat et faire évoluer vos habitudes pour les inscrire dans la durée.
            </p>
            <div className={`max-w-lg rounded-xl border border-border bg-card/60 px-4 py-3 md:px-5 md:py-4 shadow-sm ${revealClass(visible, "up")} delay-300`}>
              <ul className="space-y-1.5 text-muted-foreground text-sm md:text-base">
                {["Nutrition – micronutrition – prévention", "Suivi médical de perte de poids", "Troubles métaboliques", "Troubles du comportement alimentaire", "Troubles fonctionnels"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <ChevronRight className="size-4 text-primary shrink-0" strokeWidth={1.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`order-1 md:order-2 relative flex flex-col items-center md:items-end gap-5 md:gap-6 ${revealClass(visible, "right")} delay-200`}>
            <div className="relative w-48 md:w-80 aspect-square rounded-full overflow-hidden shadow-2xl ring-1 ring-border">
              <img
                src={doctorImg}
                alt="Dr Xénia Zanardo — Médecin Nutritionniste à Tours"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className={`flex flex-col gap-3 w-full max-w-xs md:w-80 ${revealClass(visible, "up")} delay-300`}>
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
