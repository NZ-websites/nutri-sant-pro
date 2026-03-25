import { Phone, Mail, MapPin } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-14">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <p className="text-lg font-bold mb-3">Dr. Nutrition</p>
            <p className="text-sm opacity-80 leading-relaxed">
              Cabinet de Médecine Nutritionnelle. Consultations sur rendez-vous.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold mb-3">Contact rapide</p>
            <div className="space-y-2">
              <a href="tel:+33123456789" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4" /> 01 23 45 67 89
              </a>
              <a href="mailto:contact@dr-nutrition.fr" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
                <Mail className="w-4 h-4" /> contact@dr-nutrition.fr
              </a>
              <p className="flex items-center gap-2 text-sm opacity-80">
                <MapPin className="w-4 h-4" /> 12 Rue de la Santé, 75014 Paris
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold mb-3">Liens</p>
            <div className="space-y-2 text-sm opacity-80">
              <a href="#accueil" className="block hover:opacity-100 transition-opacity">Accueil</a>
              <a href="#expertise" className="block hover:opacity-100 transition-opacity">Expertise</a>
              <a href="#contact" className="block hover:opacity-100 transition-opacity">Contact</a>
              <p className="pt-2 text-xs opacity-60">© {new Date().getFullYear()} Dr. Nutrition — Mentions légales</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
