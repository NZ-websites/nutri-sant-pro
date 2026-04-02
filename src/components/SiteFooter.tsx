import { Phone, MapPin } from "lucide-react";
import { useScrollReveal, revealClass } from "@/hooks/useScrollReveal";

const SiteFooter = () => {
  const [ref, visible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <footer ref={ref} className="py-14 bg-foreground text-primary-foreground">
      <div className={`container ${revealClass(visible, "up")}`}>
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <p className="text-lg font-bold mb-3">Dr. Xénia Zanardo</p>
            <p className="text-sm opacity-70 leading-relaxed">
              Médecin Nutritionniste à Tours. Consultations sur rendez-vous.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold mb-3">Contact rapide</p>
            <div className="space-y-2">
              <a href="tel:+33247056247" className="flex items-center gap-2 text-sm opacity-75 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4" /> 02 47 05 62 47
              </a>
              <p className="flex items-center gap-2 text-sm opacity-75">
              <MapPin className="w-4 h-4" /> Résidence Transparence, 30 Bd Heurteloup, 37000 Tours
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold mb-3">Liens</p>
            <div className="space-y-2 text-sm opacity-70">
              <a href="#accueil" className="block hover:opacity-100 transition-opacity">Accueil</a>
              <a href="#expertise" className="block hover:opacity-100 transition-opacity">Expertise</a>
              <a href="#contact" className="block hover:opacity-100 transition-opacity">Contact</a>
              <p className="pt-2 text-xs opacity-40">© {new Date().getFullYear()} Dr. Xénia Zanardo — Mentions légales</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
