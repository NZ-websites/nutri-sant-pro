import { GraduationCap, Award, BookOpen, Brain, Globe, ChevronDown, ChevronUp } from "lucide-react";
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

const autres: DiplomeData[] = [
  {
    icon: BookOpen,
    content: (
      <>
        DU de Diététique et Hygiène Alimentaire
        {"\n"}<em>Faculté de Médecine de Tours</em>
      </>
    ),
  },
  {
    icon: BookOpen,
    content: (
      <>
        DU de Diabétologie Pratique
        {"\n"}<em>Faculté de Médecine de Tours</em>
      </>
    ),
  },
  {
    icon: BookOpen,
    content: (
      <>
        Nutrition Humaine et Diététique Thérapeutique
        {"\n"}<em>Faculté de Médecine de Nancy</em> (1997-1999)
      </>
    ),
  },
  {
    icon: BookOpen,
    content: (
      <>
        Certificat de Bases Conceptuelles de la Nutrition Humaine
        {"\n"}<em>Faculté de Médecine de Nancy</em>
      </>
    ),
  },
  {
    icon: Brain,
    content: (
      <>
        Formation en Thérapies Cognitives et Comportementales
        {"\n"}(2015-2017)
      </>
    ),
  },
  {
    icon: Globe,
    content: (
      <>
        DIU de Santé de l'Enfant
        {"\n"}<em>Nancy, Strasbourg, Besançon</em>
      </>
    ),
  },
  {
    icon: Globe,
    content: (
      <>
        DU de Médecine Tropicale
        {"\n"}<em>Faculté de Médecine de Nancy</em> (1993)
      </>
    ),
  },
];

const DiplomeItem = ({ item }: { item: DiplomeData }) => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 rounded-md bg-sage-light flex items-center justify-center shrink-0">
      <item.icon className="w-4 h-4 text-sage" />
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
    <section id="parcours" className="py-20">
      <div className="container">
        <div ref={titleRef} className={`text-center mb-14 ${revealClass(titleVisible, "up")}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Dr Xénia ZANARDO</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto font-sans text-justify">
            Le Dr Zanardo propose des consultations de médecine nutritionnelle avec une approche intégrative, s'appuyant sur une formation riche et pluridisciplinaire en nutrition, métabolisme et santé.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div ref={leftRef} className={`bg-card rounded-2xl border border-border p-8 ${revealClass(leftVisible, "left")}`}>
            <h3 className="text-lg font-semibold text-foreground mb-6">Formation & Diplômes</h3>
            <div className="space-y-4">
              {principaux.map((item, i) => (
                <DiplomeItem key={i} item={item} />
              ))}
            </div>

            {/* Bouton toggle pour les autres diplômes */}
            <button
              onClick={() => setShowAutres(!showAutres)}
              className="flex items-center gap-1.5 mt-6 text-xs font-semibold text-sage uppercase tracking-wide hover:text-sage/80 transition-colors"
            >
              Autres diplômes et formations
              {showAutres ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {/* Liste dépliable avec animation */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-out ${
                showAutres ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
              }`}
            >
              <div className="space-y-4">
                {autres.map((item, i) => (
                  <DiplomeItem key={i} item={item} />
                ))}
              </div>
            </div>
          </div>
          <div ref={rightRef} className={`space-y-8 ${revealClass(rightVisible, "right")}`} style={{ transitionDelay: "150ms" }}>
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Une approche globale</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                Chaque individu est unique. Le Dr Zanardo prend le temps d'écouter et de comprendre votre histoire
                et vos objectifs pour construire avec vous un plan nutritionnel réaliste et durable et vous aider à faire évoluer vos habitudes pour atteindre vos objectifs grâce à une médecine personnalisée et participative.
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
