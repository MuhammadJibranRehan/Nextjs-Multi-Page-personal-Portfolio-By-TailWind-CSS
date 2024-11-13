import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact"

export default function ContactUs() {
  return (
    <div>
      <Header />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}