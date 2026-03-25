import { GraduationCap, Award, BookOpen } from "lucide-react";

const CabinetSection = () => {
  return (
    <section id="cabinet" className="py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-sage uppercase tracking-wide mb-2">Le Cabinet</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Dr. Marie Dupont
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Médecin nutritionniste diplômée de la Faculté de Médecine de Paris, le Dr. Marie Dupont 
              exerce depuis plus de 15 ans. Passionnée par la nutrition préventive et thérapeutique, 
              elle propose une approche globale et personnalisée à chaque patient.
            </p>
            <div className="space-y-5">
              {[
                { icon: GraduationCap, text: "Doctorat en Médecine — Université Paris Descartes" },
                { icon: Award, text: "DU de Nutrition et Diététique Clinique" },
                { icon: BookOpen, text: "Membre de la Société Française de Nutrition" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-sage-light flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-sage" />
                  </div>
                  <p className="text-sm text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card rounded-2xl border border-border p-10">
            <h3 className="text-lg font-semibold text-foreground mb-4">Notre Approche</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Chaque patient est unique. Nous prenons le temps d'écouter, de comprendre votre histoire 
              et vos objectifs pour construire ensemble un plan nutritionnel réaliste et durable.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2 000+", label: "Patients accompagnés" },
                { value: "15+", label: "Années d'expérience" },
                { value: "98%", label: "Satisfaction" },
                { value: "100%", label: "Personnalisé" },
              ].map((s) => (
                <div key={s.label} className="text-center p-4 rounded-lg bg-background">
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
