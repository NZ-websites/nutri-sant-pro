import { Clock, MapPin, Phone } from "lucide-react";
import { useScrollReveal, revealClass } from "@/hooks/useScrollReveal";

const infos = [
  {
    icon: MapPin,
    title: "Adresse",
    items: [
      "Résidence Transparence – 4ᵉ étage",
      <em>Face à la gare</em>,
      "30 Bd Heurteloup",
      "37000 Tours",
    ],
    link: {
      href: "https://www.google.com/maps/search/?api=1&query=Docteur+Xenia+Zanardo+30+Boulevard+Heurteloup+37000+Tours",
      label: "Voir sur Google Maps →",
    },
  },
  {
    icon: Clock,
    title: "Horaires d'ouverture du secrétariat",
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
  const [titleRef, titleVisible] = useScrollReveal<HTMLDivElement>();
  const [gridRef, gridVisible] = useScrollReveal<HTMLDivElement>();
  const [mapRef, mapVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="infos" className="py-20">
      <div className="container">
        <div ref={titleRef} className={`text-center mb-14 ${revealClass(titleVisible, "up")}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Informations Pratiques</h2>
        </div>
        <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
          {infos.map((info, i) => (
            <div
              key={info.title}
              className={`p-8 rounded-xl border border-border bg-card ${revealClass(gridVisible, "up")}`}
              style={{ transitionDelay: `${i * 150}ms` }}
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

        {/* Carte */}
        <div ref={mapRef} className={`mt-12 rounded-xl overflow-hidden border border-border shadow-sm ${revealClass(mapVisible, "scale")}`}>
          <iframe
            title="Localisation du cabinet Dr Zanardo – 30 Boulevard Heurteloup, Tours"
            src="https://www.openstreetmap.org/export/embed.html?bbox=0.6912%2C47.3896%2C0.6972%2C47.3927&layer=mapnik&marker=47.3911572%2C0.6942145"
            width="100%"
            height="320"
            className="w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="bg-card px-5 py-3 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              <MapPin className="inline w-4 h-4 mr-1 -mt-0.5 text-primary" />
              30 Bd Heurteloup, 37000 Tours
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Docteur+Xenia+Zanardo+30+Boulevard+Heurteloup+37000+Tours"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:underline"
            >
              Itinéraire →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalInfoSection;
