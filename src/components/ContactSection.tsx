import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-sage uppercase tracking-wide mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nous Contacter</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border bg-card p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Secrétariat</h3>
            <Button variant="cta" size="lg" className="w-full" asChild>
              <a href="tel:+33247056247">02 47 05 62 47</a>
            </Button>
          </div>
          <div className="rounded-xl border border-border bg-card p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Adresse</h3>
            <p className="text-sm text-muted-foreground">
              30 Boulevard Heurteloup<br />37000 Tours
            </p>
            <a
              href="https://www.google.com/maps/place/Dr+X%C3%A9nia+Zanardo/@47.3901,0.6934,17z/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-sage hover:underline"
            >
              Afficher dans Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
