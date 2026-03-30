import { Button } from "@/components/ui/button";
import doctorImg from "@/assets/doctor-portrait.jpg";

const HeroSection = ({ onBookClick }: { onBookClick: () => void }) => {
  return (
    <section id="accueil" className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-secondary/40">
      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-sage/10 text-sage text-xs font-semibold tracking-wide uppercase border border-sage/20">
              Médecin Nutritionniste
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Dr Xénia{" "}
              <span className="text-sage">Zanardo</span>
            </h1>
            <p className="text-muted-foreground max-w-lg leading-relaxed whitespace-pre-line text-base font-normal">
              Nutrition – MicroNutrition – Prévention{"\n"}
              Suivi médical de perte de poids{"\n"}
              Troubles du comportement alimentaire{"\n"}
              Troubles fonctionnels
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="cta" size="lg" onClick={onBookClick}>
                Prendre Rendez-vous
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <a href="#parcours">En savoir plus</a>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-64 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border">
              <img
                src={doctorImg}
                alt="Dr Xénia Zanardo — Médecin Nutritionniste à Tours"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-lg border border-border">
              <p className="text-sm font-semibold text-primary">Médecin Nutritionniste</p>
              <p className="text-xs text-muted-foreground">Secteur 1 · Carte Vitale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
