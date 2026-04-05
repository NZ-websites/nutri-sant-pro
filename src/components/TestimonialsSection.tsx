import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <Quote className="w-4 h-4 text-sage" />
        <h4 className="text-sm font-semibold text-foreground">Avis patients</h4>
        <span className="text-xs text-muted-foreground">— Google Maps</span>
      </div>
      <div className="rounded-xl border border-border bg-muted/30 px-5 py-6 text-center">
        <p className="text-sm text-muted-foreground italic">
          Les avis Google Maps apparaîtront ici prochainement.
        </p>
      </div>
    </div>
  );
};

export default TestimonialsSection;
