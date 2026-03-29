import { GraduationCap, Award, BookOpen, Brain, Globe } from "lucide-react";

const formations = [
  { icon: GraduationCap, text: "Diplôme d'État de Docteur en Médecine" },
  { icon: Award, text: "DES Complémentaire en Nutrition — Faculté de Médecine de Rennes" },
  { icon: BookOpen, text: "DU de Diététique et Hygiène Alimentaire — Faculté de Médecine de Tours (2006)" },
  { icon: BookOpen, text: "DU de Diabétologie Pratique — Faculté de Médecine de Tours (2005)" },
  { icon: BookOpen, text: "Nutrition Humaine et Diététique Thérapeutique — Faculté de Médecine de Nancy (1998-1999)" },
  { icon: BookOpen, text: "Certificat de Bases Conceptuelles de la Nutrition Humaine — Nancy (1996)" },
  { icon: Brain, text: "Formation Initiale en Thérapies Cognitives et Comportementales — AFTCC (2015-2016)" },
  { icon: Globe, text: "DIU de Santé de l'Enfant — Nancy, Strasbourg, Besançon" },
  { icon: Globe, text: "DU de Médecine Tropicale — Faculté de Médecine de Nancy (1993)" },
];

const CabinetSection = () => {
  return (
    <section id="parcours" className="py-20">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-sage uppercase tracking-wide mb-2">Parcours</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Xénia ZANARDO</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Médecin Nutritionniste à Tours, le Dr Zanardo propose une approche de Médecine Intégrative, s'appuyant sur une formation riche et pluridisciplinaire en nutrition, métabolisme et santé.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="bg-card rounded-2xl border border-border p-8">
            <h3 className="text-lg font-semibold text-foreground mb-6">Formation & Diplômes</h3>
            <div className="space-y-4">
              {formations.map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-sage-light flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-sage" />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Une approche globale</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Chaque patient est unique. Le Dr Zanardo prend le temps d'écouter, de comprendre votre histoire
                et vos objectifs pour construire ensemble un plan nutritionnel réaliste et durable, en s'appuyant sur une expertise médicale solide.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "25+", label: "Années d'expérience" },
                { value: "9", label: "Diplômes & formations" },
                { value: "100%", label: "Personnalisé" },
                { value: "Secteur 1", label: "Conventionné" },
              ].map((s) => (
                <div key={s.label} className="text-center p-5 rounded-xl bg-card border border-border">
                  <p className="text-2xl font-bold text-primary tabular-nums">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CabinetSection;
