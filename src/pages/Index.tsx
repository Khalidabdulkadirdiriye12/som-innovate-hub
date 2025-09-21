import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Pricing />
      <Team />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;