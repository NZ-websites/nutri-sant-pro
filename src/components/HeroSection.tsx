import { Button } from "@/components/ui/button";
import doctorImg from "@/assets/doctor-portrait.jpg";
import cabinetBg from "@/assets/cabinet-salle-attente.jpg";

const HeroSection = ({ onBookClick }: { onBookClick: () => void }) => {
  return (
    <section id="accueil" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={cabinetBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[hsl(220,30%,10%)/0.55]" />
      </div>

      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold tracking-wide uppercase backdrop-blur-sm">
              Médecin Nutritionniste
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Dr Xénia{" "}
              <span className="text-sage-light">Zanardo</span>
            </h1>
            <p className="text-lg text-white/85 max-w-lg leading-relaxed whitespace-pre-line">
              Médecin Nutritionniste à Tours{"\n"}Une approche de Médecine Intégrative : un accompagnement médical personnalisé, global et scientifique pour retrouver votre équilibre alimentaire et améliorer durablement votre santé.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="cta" size="lg" onClick={onBookClick}>
                Prendre Rendez-vous
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10"
                asChild
              >
                <a href="#parcours">En savoir plus</a>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-72 md:w-96 rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10">
              <img
                src={doctorImg}
                alt="Dr Xénia Zanardo — Médecin Nutritionniste à Tours"
                width={800}
                height={1024}
                className="w-full h-auto object-cover"
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
