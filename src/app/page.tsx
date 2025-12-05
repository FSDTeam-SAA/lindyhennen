import About from "@/components/about";
import SentUsMessage from "@/components/contact/SentUsMessage";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Testimonial />
      <FAQ />
      <SentUsMessage />
  
    </main>
  );
}
