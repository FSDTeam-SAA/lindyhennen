import About from "@/components/about";
import SentUsMessage from "@/components/contact/SentUsMessage";
import Hero from "@/components/hero";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Testimonial />
      <SentUsMessage />
    </main>
  );
}
