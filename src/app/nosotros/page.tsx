import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function NosotrosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}