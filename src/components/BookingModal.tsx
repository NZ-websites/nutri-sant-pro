import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone } from "lucide-react";

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
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            Prendre Rendez-vous
          </DialogTitle>
          <DialogDescription>
            Information importante concernant la prise de rendez-vous
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 pt-2">
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 leading-relaxed">
            La prise de rendez-vous via Doctolib est momentanément indisponible. Merci de contacter
            le secrétariat par téléphone pour toute réservation.
          </div>
          <Button variant="cta" size="lg" className="w-full" asChild>
            <a href="tel:+33247056247">
              <Phone className="w-4 h-4 mr-2" />
              Appeler le 02 47 05 62 47
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
