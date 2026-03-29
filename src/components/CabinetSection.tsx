import { GraduationCap, Award, BookOpen, Brain, Globe } from "lucide-react";

const principaux = [
  { icon: GraduationCap, text: "Diplôme d'État de Docteur en Médecine\nFaculté de Médecine de Nancy" },
  { icon: Award, text: "Diplôme d'Études Spécialisées Complémentaires (DES) en Nutrition\nFaculté de Médecine de Rennes" },
  { icon: Award, text: "Diplôme Inter-Universitaire Européen MAPS\n(Micronutrition Alimentation Prévention Santé)" },
];

const autres = [
  { icon: BookOpen, text: "DU de Diététique et Hygiène Alimentaire\nFaculté de Médecine de Tours (2006)" },
  { icon: BookOpen, text: "DU de Diabétologie Pratique\nFaculté de Médecine de Tours (2005)" },
  { icon: BookOpen, text: "Nutrition Humaine et Diététique Thérapeutique\nFaculté de Médecine de Nancy (1998-1999)" },
  { icon: BookOpen, text: "Certificat de Bases Conceptuelles de la Nutrition Humaine\nFaculté de Médecine de Nancy (1996)" },
  { icon: Brain, text: "Formation Initiale en Thérapies Cognitives et Comportementales\nAFTCC (2015-2016)" },
  { icon: Globe, text: "DIU de Santé de l'Enfant\nNancy, Strasbourg, Besançon" },
  { icon: Globe, text: "DU de Médecine Tropicale\nFaculté de Médecine de Nancy (1993)" },
];

const DiplomeItem = ({ item }: { item: { icon: any; text: string } }) => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 rounded-md bg-sage-light flex items-center justify-center shrink-0">
      <item.icon className="w-4 h-4 text-sage" />
    </div>
    <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">{item.text}</p>
  </div>
);

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
              {principaux.map((item) => (
                <DiplomeItem key={item.text} item={item} />
              ))}
            </div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mt-6 mb-4">Autres diplômes et formations</p>
            <div className="space-y-4">
              {autres.map((item) => (
                <DiplomeItem key={item.text} item={item} />
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Une approche globale</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
              Chaque individu est unique. Le Dr Zanardo prend le temps d'écouter et de comprendre votre histoire
                et vos objectifs pour construire avec vous un plan nutritionnel réaliste et durable et vous aider à faire évoluer vos habitudes pour atteindre vos objectifs grâce à une médecine personnalisée et participative.
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
