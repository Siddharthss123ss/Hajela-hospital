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

export default function Home() {
  return (
    <>
     <Navbar />

<Hero />

<Stats />

<Departments />

<About />

<Technology />

<Awards />

<Doctors />

<Testimonials />

<Appointment />

<Emergency />

<Footer />

<WhatsappButton />

<ScrollTop />
    </>
  );
}