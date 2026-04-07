import { GraduationCap, Award, ChevronDown, ChevronUp, ChevronRight, BookOpen } from "lucide-react";
import TestimonialsSection from "./TestimonialsSection";
import { ReactNode, useState } from "react";
import { useScrollReveal, revealClass } from "@/hooks/useScrollReveal";

interface DiplomeData {
  icon: any;
  content: ReactNode;
}

const principaux: DiplomeData[] = [
  {
    icon: GraduationCap,
    content: (
      <>
        <strong>Diplôme d'État de Docteur en Médecine</strong>
        {"\n"}<em>Faculté de Médecine de Nancy</em>
        {"\n"}(Thèse: Dutch Eating Behavior Questionnaire et Obésité - Etude de 340 patients)
      </>
    ),
  },
  {
    icon: Award,
    content: (
      <>
        <strong>Diplôme d'Études Spécialisées Complémentaires (DES) en Nutrition</strong>
        {"\n"}<em>Faculté de Médecine de Rennes</em>
      </>
    ),
  },
  {
    icon: Award,
    content: (
      <>
        <strong>Diplôme Inter-Universitaire Européen MAPS</strong>
        {"\n"}(Micronutrition Alimentation Prévention Santé)
        {"\n"}<em>Facultés de Médecine de Paris-Descartes (F) et de Valladolid (E)</em>
      </>
    ),
  },
];

const facultes: DiplomeData[] = [
  {
    icon: Award,
    content: (
      <>
        DU de Diabétologie Pratique
        {"\n"}<em>Faculté de Médecine de Tours</em>
      </>
    ),
  },
  {
    icon: Award,
    content: (
      <>
        DU de Diététique et Hygiène Alimentaire
        {"\n"}<em>Faculté de Médecine de Tours</em>
      </>
    ),
  },
  {
    icon: Award,
    content: (
      <>
        Nutrition Humaine, Diététique et Diététique Thérapeutique
        {"\n"}<em>Faculté de Médecine de Nancy</em> (1997-1999)
      </>
    ),
  },
  {
    icon: Award,
    content: (
      <>
        Certificat de Bases Conceptuelles de la Nutrition Humaine
        {"\n"}<em>Faculté de Médecine de Nancy</em>
      </>
    ),
  },
  {
    icon: Award,
    content: (
      <>
        Diplôme Inter-Universitaire de Santé de l'Enfant
        {"\n"}<em>Facultés de Nancy, Strasbourg, Besançon</em>
      </>
    ),
  },
  {
    icon: Award,
    content: (
      <>
        DU de Médecine Tropicale
        {"\n"}<em>Faculté de Médecine de Nancy</em>
      </>
    ),
  },
];

const autresFormations: DiplomeData[] = [
  {
    icon: BookOpen,
    content: (
      <>
        Formation en Thérapies Cognitives et Comportementales
        {"\n"}<em>AFTCC</em> (2015-2017)
      </>
    ),
  },
  {
    icon: BookOpen,
    content: (
      <>
        Cycle de Formation de Médecine Nutritionnelle et Fonctionnelle
        {"\n"}<em>NutriHealth Academy</em>
      </>
    ),
  },
  {
    icon: BookOpen,
    content: (
      <>
        Formation "Médecine Mitochondriale"
        {"\n"}<em>Mitochondrial Academy</em> (en cours)
      </>
    ),
  },
];
const DiplomeItem = ({ item }: { item: DiplomeData }) => (
  <div className="flex items-start gap-2.5">
    <div className="w-6 h-6 rounded-md bg-sage-light flex items-center justify-center shrink-0 mt-0.5">
      <item.icon className="w-3 h-3 text-sage" />
    </div>
    <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">{item.content}</p>
  </div>
);

const CabinetSection = () => {
  const [titleRef, titleVisible] = useScrollReveal<HTMLDivElement>();
  const [leftRef, leftVisible] = useScrollReveal<HTMLDivElement>();
  const [rightRef, rightVisible] = useScrollReveal<HTMLDivElement>();
  const [showAutres, setShowAutres] = useState(false);

  return (
    <section id="parcours" className="py-12 md:py-20">
      <div className="container">
        <div ref={titleRef} className={`text-center mb-8 md:mb-14 ${revealClass(titleVisible, "up")}`}>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">Docteur Xénia ZANARDO</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto font-sans text-sm md:text-base text-justify">
            Le Dr Zanardo propose des consultations de médecine nutritionnelle avec une approche intégrative, s'appuyant sur une formation riche et pluridisciplinaire.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div ref={leftRef} className={`bg-card rounded-2xl border border-border p-5 md:p-8 ${revealClass(leftVisible, "left")}`}>
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-4 md:mb-6">Formation & Diplômes</h3>
            <div className="space-y-4">
              {principaux.map((item, i) => (
                <DiplomeItem key={i} item={item} />
              ))}
            </div>

            <button
              onClick={() => setShowAutres(!showAutres)}
              className="flex items-center gap-1.5 mt-6 text-xs font-semibold text-sage uppercase tracking-wide hover:text-sage/80 transition-colors"
            >
              Autres diplômes et formations
              {showAutres ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-out ${
                showAutres ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
              }`}
            >
              <p className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                <ChevronRight className="w-3 h-3" />
                Formation en facultés de médecine
              </p>
              <div className="space-y-4">
                {facultes.map((item, i) => (
                  <DiplomeItem key={i} item={item} />
                ))}
              </div>

              <p className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide mt-6 mb-3">
                <ChevronRight className="w-3 h-3" />
                Autres formations
              </p>
              <div className="space-y-4">
                {autresFormations.map((item, i) => (
                  <DiplomeItem key={i} item={item} />
                ))}
              </div>
            </div>
          </div>
          <div ref={rightRef} className={`space-y-8 ${revealClass(rightVisible, "right")}`} style={{ transitionDelay: "150ms" }}>
            <div className="bg-card rounded-2xl border border-border p-5 md:p-8">
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4">Une approche globale et personnalisée</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                Chaque individu est unique. Le Dr Zanardo prend le temps d'écouter et de comprendre votre histoire
                et vos objectifs pour construire avec vous un plan nutritionnel réaliste et durable. Le suivi vous aide à améliorer votre santé et à faire évoluer vos habitudes pour atteindre vos objectifs grâce à une médecine personnalisée et participative.
              </p>
              <TestimonialsSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CabinetSection;
