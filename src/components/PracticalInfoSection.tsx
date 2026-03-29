import { Clock, MapPin, Phone, Mail } from "lucide-react";

const infos = [
  {
    icon: MapPin,
    title: "Adresse",
    items: [
      "30 Bd Heurteloup",
      "37000 Tours",
    ],
    link: {
      href: "https://share.google/gkFq7bp8vxaBthQwq",
      label: "Voir sur Google Maps →",
    },
  },
  {
    icon: Clock,
    title: "Horaires d'ouverture",
    items: [
      "Lundi – Vendredi : 8h00 – 20h00",
      "Samedi : 8h00 – 12h00",
      "Dimanche : Fermé",
    ],
  },
  {
    icon: Phone,
    title: "Contact",
    items: [],
    contacts: [
      { icon: Phone, href: "tel:+33247056247", label: "02 47 05 62 47" },
      
    ],
  },
];

const PracticalInfoSection = () => {
  return (
    <section id="infos" className="py-20">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-sage uppercase tracking-wide mb-2">Pratique</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Informations Pratiques</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {infos.map((info) => (
            <div
              key={info.title}
              className="p-8 rounded-xl border border-border bg-card"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{info.title}</h3>
              {info.items.length > 0 && (
                <ul className="space-y-2">
                  {info.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">{item}</li>
                  ))}
                </ul>
              )}
              {info.link && (
                <a
                  href={info.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm font-medium text-sage hover:underline"
                >
                  {info.link.label}
                </a>
              )}
              {info.contacts && (
                <div className="space-y-3">
                  {info.contacts.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <c.icon className="w-4 h-4" />
                      {c.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticalInfoSection;
