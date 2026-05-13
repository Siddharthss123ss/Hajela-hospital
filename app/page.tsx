import ScrollTop from "@/components/ui/ScrollTop";
import WhatsappButton from "@/components/ui/WhatsappButton";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Departments from "@/components/home/Departments";
import About from "@/components/home/About";
import Doctors from "@/components/home/Doctors";
import WhyChoose from "@/components/home/technology";
import Testimonials from "@/components/home/Testimonials";
import Appointment from "@/components/home/Appointment";
import Emergency from "@/components/home/Emergency";
import Footer from "@/components/layout/Footer";
import CallButton from "@/components/ui/CallButton";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Departments />
      <Stats />
      <About />
      <Doctors />
      <WhyChoose />
      <Testimonials />
      <Appointment />
      <Emergency />
      <Footer />
      <WhatsappButton />
      <ScrollTop />
      
    </>
  );
}