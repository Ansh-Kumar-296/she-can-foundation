import Navbar from "@/components/Navbar";
import VolunteerForm from "@/components/VolunteerForm";
import Footer from "@/components/Footer";

export default function VolunteerPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <VolunteerForm />
      <Footer />
    </main>
  );
}