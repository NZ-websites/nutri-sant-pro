import { Clock, MapPin, CreditCard } from "lucide-react";

const infos = [
  {
    icon: Clock,
    title: "Horaires d'ouverture",
    items: [
      "Lundi – Vendredi : 9h00 – 19h00",
      "Samedi : 9h00 – 13h00",
      "Dimanche : Fermé",
    ],
  },
  {
    icon: MapPin,
    title: "Adresse",
    items: [
      "12 Rue de la Santé",
      "75014 Paris",
      "Métro : Glacière (L6)",
      "Parking souterrain disponible",
    ],
  },
  {
    icon: CreditCard,
    title: "Tarifs & Conventionnement",
    items: [
      "Secteur 1 — Conventionné",
      "Carte Vitale acceptée",
      "Consultation : 25 € (base SS)",
      "Tiers payant possible",
    ],
  },
];

const PracticalInfoSection = () => {
  return (
    <section id="infos" className="py-20 bg-card">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-sage uppercase tracking-wide mb-2">Pratique</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Informations Pratiques</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {infos.map((info) => (
            <div
              key={info.title}
              className="p-8 rounded-xl border border-border bg-background"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{info.title}</h3>
              <ul className="space-y-2">
                {info.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticalInfoSection;
