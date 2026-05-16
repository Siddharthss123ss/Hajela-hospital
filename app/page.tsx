import ScrollTop from "@/components/ui/ScrollTop";
import WhatsappButton from "@/components/ui/WhatsappButton";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Stats from "@/components/home/Stats";
import Departments from "@/components/home/Departments";
import Technology from "@/components/home/technology";
import Awards from "@/components/home/Awards";
import Doctors from "@/components/home/Doctors";
import Testimonials from "@/components/home/Testimonials";
import Appointment from "@/components/home/Appointment";
import Emergency from "@/components/home/Emergency";

import Reveal from "@/components/common/Reveal";

export default function Home() {

  return (

    <>

      {/* NAVBAR */}

      <Navbar />

      {/* HERO */}

      <Hero />

      {/* ABOUT */}

      <Reveal>

        <About />

      </Reveal>

      {/* STATS */}

      <Stats />

      {/* DEPARTMENTS */}

      <Reveal>

        <Departments />

      </Reveal>

      {/* TECHNOLOGY */}

      <Technology />

      {/* AWARDS */}

      <Awards />

      {/* DOCTORS */}

      <Doctors />

      {/* TESTIMONIALS */}

      <Reveal>

        <Testimonials />

      </Reveal>

      {/* APPOINTMENT */}

      <Appointment />

      {/* EMERGENCY */}

      <Emergency />

      {/* FOOTER */}

      <Footer />

      {/* FLOATING BUTTONS */}

      <WhatsappButton />

      <ScrollTop />

    </>

  );

}