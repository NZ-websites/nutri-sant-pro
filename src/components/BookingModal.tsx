import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CalendarCheck, ExternalLink } from "lucide-react";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CalendarCheck className="w-5 h-5 text-sage" />
            Prendre Rendez-vous
          </DialogTitle>
          <DialogDescription>
            Choisissez votre mode de prise de rendez-vous
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 pt-2">
          <Button
            variant="cta"
            size="lg"
            className="w-full"
            onClick={() => window.open("https://www.doctolib.fr", "_blank")}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Réserver sur Doctolib
          </Button>
          <div className="text-center text-xs text-muted-foreground">ou</div>
          <Button variant="outline-primary" size="lg" className="w-full" asChild>
            <a href="tel:+33247056247">
              Appeler le 02 47 05 62 47
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
