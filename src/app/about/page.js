import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-0">
        <About />
        <Impact />
        <Footer />
      </div>
    </main>
  );
}