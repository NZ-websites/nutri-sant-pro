import { GraduationCap, Award, BookOpen, Brain, Globe } from "lucide-react";

const principaux = [
  { icon: GraduationCap, text: "Diplôme d'État de Docteur en Médecine\nFaculté de Médecine de Nancy\n(Thèse: Dutch Eating Behavior Questionnaire et Obésité - Etude de 340 patients)" },
  { icon: Award, text: "Diplôme d'Études Spécialisées Complémentaires (DES) en Nutrition\nFaculté de Médecine de Rennes" },
  { icon: Award, text: "Diplôme Inter-Universitaire Européen MAPS\n(Micronutrition Alimentation Prévention Santé)\nFacultés de Médecine de Paris-Descartes (F) et de Valladolid (E)" },
];

// ... keep existing code

const CabinetSection = () => {
  return (
    <section id="parcours" className="py-20">
      <div className="container">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-sage uppercase tracking-wide mb-2">Parcours</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Dr Xénia ZANARDO</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto font-sans">
            Le Dr Zanardo propose des consultations de médecine nutritionnelle avec une approche intégrative, s’appuyant sur une formation riche et pluridisciplinaire en nutrition, métabolisme et santé.
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
