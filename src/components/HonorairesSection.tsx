import { CreditCard, ShieldCheck, Stethoscope, Receipt, Clock, Star, CalendarCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useScrollReveal, revealClass } from "@/hooks/useScrollReveal";

const consultations = [
  {
    titre: "Consultation classique en Nutrition",
    duree: "40 min",
    prix: "51 €",
    description: "1ère consultation, consultation classique en nutrition-diététique.",
  },
  {
    titre: "Consultation complexe en Nutrition",
    duree: "50 min",
    prix: "60 €",
    description: "Chirurgie bariatrique, optimisation de sa santé globale.",
  },
  {
    titre: "Consultation courte de suivi",
    duree: "20 min",
    prix: "33 €",
    description: "Consultations périodiques rapprochées en Nutrition-diététique.",
  },
  {
    titre: "Consultation approfondie",
    duree: "1 h – 1 h 30",
    prix: "85 à 125 €",
    description: "Médecine Fonctionnelle, étude approfondie avec bilans réalisés en laboratoire spécialisé.",
  },
];

const forfaits = [
  {
    titre: "Forfait 4 mois",
    prix: "180 €",
    detail: "Quel que soit le nombre de consultations sur cette période.",
    recommended: true,
  },
  {
    titre: "Forfait 6 mois",
    prix: "240 €",
    detail: "Quel que soit le nombre de consultations sur cette période.",
    recommended: false,
  },
];

const HonorairesSection = ({ onBookClick }: { onBookClick: () => void }) => {
  const [titleRef, titleVisible] = useScrollReveal<HTMLDivElement>();
  const [blocsRef, blocsVisible] = useScrollReveal<HTMLDivElement>();
  const [tarifsRef, tarifsVisible] = useScrollReveal<HTMLDivElement>();
  const [forfaitsRef, forfaitsVisible] = useScrollReveal<HTMLDivElement>();
  const [bottomRef, bottomVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="tarifs" className="py-20 bg-secondary/40">
      <div className="container max-w-5xl">
        {/* Titre */}
        <div ref={titleRef} className={`text-center mb-14 ${revealClass(titleVisible, "up")}`}>
          <p className="text-sm font-semibold text-sage uppercase tracking-wide mb-2">
            Tarifs & Parcours de soins
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Honoraires & Remboursements
          </h2>
        </div>

        {/* Blocs pédagogiques */}
        <div ref={blocsRef} className="grid sm:grid-cols-2 gap-5 mb-12">
          <div className={`rounded-xl border border-border bg-card p-6 space-y-3 shadow-sm ${revealClass(blocsVisible, "left")}`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center shrink-0">
                <Stethoscope className="w-5 h-5 text-sage" />
              </div>
              <h3 className="font-semibold text-foreground">Consultations</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed text-justify">
              Les consultations en médecine nutritionnelle mêlent consultation de médecine générale et consultation spécialisée en Nutrition. La prise en charge débute par un bilan médical et nutritionnel, ainsi que le recueil de vos habitudes de vie et événements marquants. Il se poursuit avec des exercices de mise en situation chez vous afin d'identifier les comportements inadaptés ou perfectibles, un changement d'habitudes minimal et un éventuel bilan biologique complémentaire. Ceci nous permet de co-construire un programme personnalisé adapté à vos objectifs de santé.
            </p>
          </div>

          <div className={`rounded-xl border border-border bg-card p-6 space-y-3 shadow-sm ${revealClass(blocsVisible, "right")}`} style={{ transitionDelay: "150ms" }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center shrink-0">
                <Receipt className="w-5 h-5 text-sage" />
              </div>
              <h3 className="font-semibold text-foreground">Remboursement</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La consultation de Nutrition est une consultation à 2 niveaux :
            </p>
            <ul className="text-sm text-muted-foreground leading-relaxed space-y-2 list-disc list-inside">
              <li>
                La <strong className="text-foreground">partie médicale</strong>, basée sur la consultation classique de médecine générale. Le tarif est de 30 € (ou 35 € avec un courrier de médecin), et est remboursé par votre caisse de maladie.
              </li>
              <li>
                La <strong className="text-foreground">part « Nutrition »</strong> est un Acte Hors Nomenclature (non répertorié et donc non remboursé par la Caisse de Maladie), pouvant être pris en charge par votre mutuelle en fonction de votre contrat. Un reçu vous est remis à cet effet à l'issue de chaque consultation (ou à la fin du forfait). Le tarif est fonction de la complexité de la consultation et du temps passé.
              </li>
            </ul>
          </div>
        </div>

        {/* Tarifs consultations */}
        <div ref={tarifsRef}>
          <h3 className={`text-xl font-bold text-foreground mb-2 ${revealClass(tarifsVisible, "up")}`}>
            Honoraires
          </h3>
          <p className={`text-xs text-muted-foreground mb-5 italic ${revealClass(tarifsVisible, "up")}`} style={{ transitionDelay: "100ms" }}>
            Les tarifs affichés correspondent uniquement à la partie nutrition (acte hors nomenclature). À ces honoraires s'ajoute la partie médicale prise en charge par la Caisse de Maladie.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {consultations.map((c, i) => (
              <div
                key={c.titre}
                className={`rounded-xl border border-border bg-card p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow ${revealClass(tarifsVisible, "scale")}`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-foreground text-sm">{c.titre}</h4>
                    <span className="text-primary font-bold tabular-nums whitespace-nowrap">{c.prix}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    {c.duree}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.description}</p>
                </div>
                <Button variant="outline-primary" size="sm" className="mt-4 w-full" onClick={onBookClick}>
                  <CalendarCheck className="w-4 h-4 mr-1" />
                  Réserver ce créneau
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Forfaits */}
        <div ref={forfaitsRef}>
          <h3 className={`text-xl font-bold text-foreground mb-5 ${revealClass(forfaitsVisible, "up")}`}>
            Forfaits « Nutrition » — Suivi Perte de Poids
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {forfaits.map((f, i) => (
              <div
                key={f.titre}
                className={`relative rounded-xl border p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow ${
                  f.recommended ? "border-sage bg-sage/5 ring-1 ring-sage/20" : "border-border bg-card"
                } ${revealClass(forfaitsVisible, "scale")}`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                {f.recommended && (
                  <Badge className="absolute -top-2.5 left-4 bg-sage text-sage-foreground hover:bg-sage/90">
                    <Star className="w-3 h-3 mr-1" />
                    Le plus choisi
                  </Badge>
                )}
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{f.titre}</h4>
                  <p className="text-3xl font-bold text-primary tabular-nums mb-1">{f.prix}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.detail}</p>
                </div>
                <Button
                  variant={f.recommended ? "cta" : "outline-primary"}
                  size="sm"
                  className="mt-5 w-full"
                  onClick={onBookClick}
                >
                  <CalendarCheck className="w-4 h-4 mr-1" />
                  Réserver ce créneau
                </Button>
              </div>
            ))}
          </div>
          <div className={`rounded-lg border border-border bg-secondary/60 p-4 text-xs text-muted-foreground leading-relaxed mb-12 space-y-2 ${revealClass(forfaitsVisible, "up")}`} style={{ transitionDelay: "300ms" }}>
            <p>
              <strong className="text-foreground">Important :</strong> Les forfaits incluent exclusivement la partie nutrition.
              La partie médicale remboursable par la CPAM n'est pas incluse dans le forfait.
            </p>
            <p>
              Le patient doit donc se munir de sa <strong className="text-foreground">carte vitale</strong> pour chaque séance.
            </p>
          </div>
        </div>

        {/* Conventionnement */}
        <div ref={bottomRef} className="grid sm:grid-cols-2 gap-4">
          <div className={`flex items-start gap-3 p-5 rounded-xl border border-border bg-card shadow-sm ${revealClass(bottomVisible, "left")}`}>
            <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5 text-sage" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Secteur 1 — Conventionné</p>
              <p className="text-xs text-muted-foreground mt-1">Base de remboursement Sécurité Sociale. Tiers payant possible.</p>
            </div>
          </div>
          <div className={`flex items-start gap-3 p-5 rounded-xl border border-border bg-card shadow-sm ${revealClass(bottomVisible, "right")}`} style={{ transitionDelay: "150ms" }}>
            <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-sage" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Carte Vitale acceptée</p>
              <p className="text-xs text-muted-foreground mt-1">Paiement par carte bancaire, chèque ou espèces.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HonorairesSection;
