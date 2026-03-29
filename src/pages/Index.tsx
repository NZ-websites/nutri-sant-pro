import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import CabinetSection from "@/components/CabinetSection";
import HonorairesSection from "@/components/HonorairesSection";
import PracticalInfoSection from "@/components/PracticalInfoSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import BookingModal from "@/components/BookingModal";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <SiteHeader onBookClick={() => setBookingOpen(true)} />
      <HeroSection onBookClick={() => setBookingOpen(true)} />
      <ExpertiseSection />
      <CabinetSection />
      <HonorairesSection onBookClick={() => setBookingOpen(true)} />
      <PracticalInfoSection />
      <ContactSection />
      <SiteFooter />
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
};

export default Index;
