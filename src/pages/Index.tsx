import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import Stats from "@/components/Stats";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <About />
        <Process />
        <Testimonial />
        <Stats />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
