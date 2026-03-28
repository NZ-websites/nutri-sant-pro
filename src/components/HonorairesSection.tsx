import { CreditCard, ShieldCheck } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const tarifs = [
  { consultation: "Première consultation", duree: "~45 min", prix: "80 €" },
  { consultation: "Consultation de suivi", duree: "~30 min", prix: "50 €" },
];

const HonorairesSection = () => {
  return (
    <section id="tarifs" className="py-20 bg-card">
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-sage uppercase tracking-wide mb-2">Tarifs</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Honoraires & Conventionnement</h2>
        </div>

        <div className="rounded-xl border border-border bg-background overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Consultation</TableHead>
                <TableHead className="font-semibold">Durée</TableHead>
                <TableHead className="font-semibold text-right">Tarif</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tarifs.map((t) => (
                <TableRow key={t.consultation}>
                  <TableCell className="font-medium">{t.consultation}</TableCell>
                  <TableCell className="text-muted-foreground">{t.duree}</TableCell>
                  <TableCell className="text-right font-semibold text-primary tabular-nums">{t.prix}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-5 rounded-xl border border-border bg-background">
            <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5 text-sage" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Secteur 1 — Conventionné</p>
              <p className="text-xs text-muted-foreground mt-1">Base de remboursement Sécurité Sociale. Tiers payant possible.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-5 rounded-xl border border-border bg-background">
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
