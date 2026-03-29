import { Phone, MapPin } from "lucide-react";
import cabinetBg from "@/assets/cabinet-accueil.jpg";

const SiteFooter = () => {
  return (
    <footer className="relative py-14 overflow-hidden">
      {/* Background image + subtle overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={cabinetBg}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[hsl(220,30%,10%)/0.65]" />
      </div>

      <div className="container">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <p className="text-lg font-bold text-white mb-3">Dr. Xénia Zanardo</p>
            <p className="text-sm text-white/75 leading-relaxed">
              Médecin Nutritionniste à Tours. Consultations sur rendez-vous.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-3">Contact rapide</p>
            <div className="space-y-2">
              <a href="tel:+33247056247" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> 02 47 05 62 47
              </a>
              <p className="flex items-center gap-2 text-sm text-white/80">
                <MapPin className="w-4 h-4" /> 30 Bd Heurteloup, 37000 Tours
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-3">Liens</p>
            <div className="space-y-2 text-sm text-white/75">
              <a href="#accueil" className="block hover:text-white transition-colors">Accueil</a>
              <a href="#expertise" className="block hover:text-white transition-colors">Expertise</a>
              <a href="#contact" className="block hover:text-white transition-colors">Contact</a>
              <p className="pt-2 text-xs text-white/50">© {new Date().getFullYear()} Dr. Xénia Zanardo — Mentions légales</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
