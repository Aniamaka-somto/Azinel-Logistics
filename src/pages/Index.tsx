import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Services from "@/components/landing/Services";
import LogisticsStrip from "@/components/landing/LogisticsStrip";
import VehicleClasses from "@/components/landing/VehicleClasses";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import PaymentMethods from "@/components/landing/PaymentMethods";
import AppDownload from "@/components/landing/AppDownload";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <LogisticsStrip />
        <VehicleClasses />
        <WhyChooseUs />
        <PaymentMethods />
        <AppDownload />
      </main>
      <Footer />
    </>
  );
};

export default Index;
