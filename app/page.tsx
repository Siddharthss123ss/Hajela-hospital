import ScrollTop from "@/components/ui/ScrollTop";
import WhatsappButton from "@/components/ui/WhatsappButton";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Departments from "@/components/home/Departments";
import About from "@/components/home/About";
import Doctors from "@/components/home/Doctors";
import Technology from "@/components/home/technology";
import Testimonials from "@/components/home/Testimonials";
import Appointment from "@/components/home/Appointment";
import Emergency from "@/components/home/Emergency";
import Footer from "@/components/layout/Footer";
import CallButton from "@/components/ui/CallButton";
import Awards from "@/components/home/Awards";
import Reveal from "@/components/common/Reveal";

export default function Home() {
  return (
    <>

  <Navbar />

  <Reveal>
    <Hero />
  </Reveal>

  <Reveal delay={0.1}>
    <Stats />
  </Reveal>

  <Reveal delay={0.2}>
    <Departments />
  </Reveal>

  <Reveal delay={0.3}>
    <About />
  </Reveal>

  <Reveal delay={0.4}>
    <Technology />
  </Reveal>

  <Reveal delay={0.5}>
    <Awards />
  </Reveal>

  <Reveal delay={0.6}>
    <Doctors />
  </Reveal>

  <Reveal delay={0.7}>
    <Testimonials />
  </Reveal>

  <Reveal delay={0.8}>
    <Appointment />
  </Reveal>

  <Reveal delay={0.9}>
    <Emergency />
  </Reveal>

  <Footer />

  <WhatsappButton />

  <ScrollTop />

    </>
  );
}