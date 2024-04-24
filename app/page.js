import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import IntroBanner from "@/components/IntroBanner";
import Portfolio from "@/components/Portfolio";
import Reading from "@/components/Reading";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="">
      <IntroBanner />
      <Portfolio />
      <Achievements />
      <Skills />
      <Reading />
      <Footer />
    </main>
  );
}
