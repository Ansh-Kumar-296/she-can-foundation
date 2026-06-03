import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Impact from "@/components/Impact";
import VolunteerForm from "@/components/VolunteerForm";
import Footer from "@/components/Footer";
// import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black dark:bg-black overflow-hidden">
      {/* <BackgroundBeams /> */}

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Impact />
        <VolunteerForm />
        <Footer />
      </div>
    </main>
  );
}