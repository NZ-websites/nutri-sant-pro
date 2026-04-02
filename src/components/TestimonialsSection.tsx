import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Testimonial {
  name: string;
  rating: number;
  text: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Marie L.",
    rating: 5,
    text: "Le Dr Zanardo est très à l'écoute et prend le temps de bien comprendre nos habitudes alimentaires. Ses conseils sont personnalisés et réalistes. Je recommande vivement !",
    date: "Mars 2026",
  },
  {
    name: "Philippe D.",
    rating: 5,
    text: "Excellent suivi nutritionnel. Le docteur a su m'accompagner avec bienveillance dans ma perte de poids. Les résultats sont au rendez-vous grâce à une approche adaptée.",
    date: "Février 2026",
  },
  {
    name: "Sophie M.",
    rating: 4,
    text: "Consultation très complète et approfondie. Le Dr Zanardo explique clairement les mécanismes nutritionnels et propose un plan alimentaire facile à suivre au quotidien.",
    date: "Janvier 2026",
  },
  {
    name: "Jean-Pierre R.",
    rating: 5,
    text: "Médecin compétente et humaine. Grâce à son expertise en micronutrition, j'ai pu améliorer significativement mon bilan sanguin. Merci pour cet accompagnement de qualité.",
    date: "Décembre 2025",
  },
  {
    name: "Caroline B.",
    rating: 5,
    text: "Je suis suivie depuis plusieurs mois et les résultats sont remarquables. L'approche globale du Dr Zanardo fait toute la différence par rapport à un simple régime.",
    date: "Novembre 2025",
  },
  {
    name: "Laurent G.",
    rating: 4,
    text: "Très bon accompagnement pour ma problématique de diabète. Le Dr Zanardo maîtrise parfaitement son sujet et sait adapter ses recommandations à chaque situation.",
    date: "Octobre 2025",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${i < count ? "text-amber-400 fill-amber-400" : "text-muted-foreground/30"}`}
      />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let scrollPos = 0;

    const scroll = () => {
      if (!isPaused && el) {
        scrollPos += 0.5;
        if (scrollPos >= el.scrollWidth / 2) {
          scrollPos = 0;
        }
        el.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const doubled = [...testimonials, ...testimonials];

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <Quote className="w-4 h-4 text-sage" />
        <h4 className="text-sm font-semibold text-foreground">Avis patients</h4>
        <span className="text-xs text-muted-foreground">— Google Maps</span>
      </div>
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-4 overflow-hidden"
      >
        {doubled.map((t, i) => (
          <div
            key={i}
            className="min-w-[280px] max-w-[280px] bg-card rounded-xl border border-border p-5 shrink-0"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">{t.name}</span>
              <Stars count={t.rating} />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4">{t.text}</p>
            <p className="text-[10px] text-muted-foreground/60 mt-2">{t.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
