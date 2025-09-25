import BrandGrid from "@/components/brand-grid";
import BrandShowcaseCarousel from "@/components/brand-showcase-carousel";
import ClientLogos from "@/components/client-logos";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ServiceOfferings from "@/components/service-offerings";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <BrandShowcaseCarousel />
        <ServiceOfferings />
        <BrandGrid />
        <ClientLogos />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
