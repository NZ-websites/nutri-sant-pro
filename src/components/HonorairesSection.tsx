import { CreditCard, ShieldCheck, Stethoscope, Receipt, Clock, Star, CalendarCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const consultations = [
  {
    titre: "Consultation classique en Nutrition",
    duree: "40 min",
    prix: "51 €",
    description:
      "1ère consultation, consultation classique de suivi en nutrition – diététique.",
  },
  {
    titre: "Consultation complexe en Nutrition",
    duree: "50 min",
    prix: "60 €",
    description:
      "Chirurgie bariatrique envisagée, ou besoin d'optimiser sa santé globale.",
  },
  {
    titre: "Consultation courte de suivi",
    duree: "20 min",
    prix: "33 €",
    description:
      "Consultations périodiques rapprochées en nutrition – diététique.",
  },
  {
    titre: "Consultation approfondie",
    duree: "1 h – 1 h 30",
    prix: "85 à 125 €",
    description:
      "Médecine fonctionnelle, bilan approfondi avec bilans en laboratoire spécialisé.",
  },
];

const forfaits = [
  {
    titre: "Forfait 4 mois",
    prix: "160 €",
    detail: "Quel que soit le nombre de consultations sur cette période.",
    recommended: true,
  },
  {
    titre: "Forfait 6 mois",
    prix: "220 €",
    detail: "Quel que soit le nombre de consultations sur cette période.",
    recommended: false,
  },
];

const HonorairesSection = ({ onBookClick }: { onBookClick: () => void }) => {
  return (
    <section id="tarifs" className="py-20 bg-secondary/40">
      <div className="container max-w-5xl">
        {/* Titre */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-sage uppercase tracking-wide mb-2">
            Tarifs & Parcours de soins
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Honoraires & Remboursements
          </h2>
        </div>

        {/* Blocs pédagogiques */}
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {/* Consultations */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center shrink-0">
                <Stethoscope className="w-5 h-5 text-sage" />
              </div>
              <h3 className="font-semibold text-foreground">Consultations</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Les consultations en Nutrition mêlent médecine classique et
              spécialité nutritionnelle. La prise en charge commence par un bilan
              nutritionnel complet, une analyse de vos habitudes de vie et la
              co-construction d'un programme personnalisé adapté à vos objectifs
              santé.
            </p>
            <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
              <li>Nutrition – MicroNutrition – Prévention</li>
              <li>Suivi médical de perte de poids</li>
              <li>Troubles du comportement alimentaire</li>
              <li>Troubles fonctionnels</li>
            </ul>
          </div>

          {/* Remboursement */}
          <div className="rounded-xl border border-border bg-card p-6 space-y-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center shrink-0">
                <Receipt className="w-5 h-5 text-sage" />
              </div>
              <h3 className="font-semibold text-foreground">Remboursement</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La <strong className="text-foreground">partie médicale</strong> est
              prise en charge par la CPAM (consultation médecine générale : 30 €,
              ou 35 € avec courrier du médecin traitant).
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La <strong className="text-foreground">partie Nutrition</strong>{" "}
              (Acte Hors Nomenclature) peut être remboursée par votre mutuelle
              selon votre contrat. Un reçu vous est remis à l'issue de chaque
              consultation.
            </p>
          </div>
        </div>

        {/* Tarifs consultations */}
        <h3 className="text-xl font-bold text-foreground mb-5">
          Consultations
        </h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {consultations.map((c) => (
            <div
              key={c.titre}
              className="rounded-xl border border-border bg-card p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-foreground text-sm">
                    {c.titre}
                  </h4>
                  <span className="text-primary font-bold tabular-nums whitespace-nowrap">
                    {c.prix}
                  </span>
                </div>
                
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  {c.duree}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {c.description}
                </p>
              </div>
              <Button
                variant="outline-primary"
                size="sm"
                className="mt-4 w-full"
                onClick={onBookClick}
              >
                <CalendarCheck className="w-4 h-4 mr-1" />
                Réserver ce créneau
              </Button>
            </div>
          ))}
        </div>

        {/* Forfaits */}
        <h3 className="text-xl font-bold text-foreground mb-5">
          Forfaits « Nutrition » — Suivi Perte de Poids
        </h3>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {forfaits.map((f) => (
            <div
              key={f.titre}
              className={`relative rounded-xl border p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow ${
                f.recommended
                  ? "border-sage bg-sage/5 ring-1 ring-sage/20"
                  : "border-border bg-card"
              }`}
            >
              {f.recommended && (
                <Badge className="absolute -top-2.5 left-4 bg-sage text-sage-foreground hover:bg-sage/90">
                  <Star className="w-3 h-3 mr-1" />
                  Le plus choisi
                </Badge>
              )}
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  {f.titre}
                </h4>
                <p className="text-3xl font-bold text-primary tabular-nums mb-1">
                  {f.prix}
                </p>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.detail}
                </p>
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
        <div className="rounded-lg border border-border bg-secondary/60 p-4 text-xs text-muted-foreground leading-relaxed mb-12 space-y-2">
          <p>
            <strong className="text-foreground">Important :</strong> Les forfaits incluent exclusivement la partie nutrition.
            La partie médicale remboursable par la CPAM n'est pas incluse dans le forfait.
          </p>
          <p>
            Le patient doit se munir de sa <strong className="text-foreground">carte vitale</strong> pour chaque séance.
          </p>
        </div>

        {/* Conventionnement */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5 text-sage" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Secteur 1 — Conventionné
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Base de remboursement Sécurité Sociale. Tiers payant possible.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-sage" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Carte Vitale acceptée
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Paiement par carte bancaire, chèque ou espèces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HonorairesSection;
