import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AboutSection from "@/app/components/About";

export default function AboutUs() {
  return (
    <div>
      <Header />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <AboutSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}