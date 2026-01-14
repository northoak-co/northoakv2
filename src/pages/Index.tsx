import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import Stats from "@/components/Stats";
import Partners from "@/components/Partners";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Testimonial />
        <Stats />
        <Partners />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
