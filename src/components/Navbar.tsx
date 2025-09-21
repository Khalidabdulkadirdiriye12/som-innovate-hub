import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/som-logo.png";
import aboutHero from "@/assets/about-hero.jpg";
import productDataflow from "@/assets/product-dataflow.png";
import productSecureVault from "@/assets/product-securevault.png";
import productCloudSync from "@/assets/product-cloudsync.png";
import productAI from "@/assets/product-ai.png";

const services = {
  "Core Solutions": [
    { name: "Cybersecurity & Risk Management", desc: "Comprehensive security solutions" },
    { name: "Software Development", desc: "Custom applications & platforms" },
    { name: "AI & ML Integration", desc: "Intelligent automation solutions" },
    { name: "Data Science & Analytics", desc: "Data-driven insights & intelligence" },
    { name: "Data Automation", desc: "Streamlined data processing" },
  ],
  "Growth & Training": [
    { name: "Digital Skills Training", desc: "Upskill your team with modern tech" },
    { name: "Mentorship", desc: "Guidance for tech career growth" },
    { name: "Digital Marketing", desc: "Online presence & growth strategies" },
    { name: "UX/UI Design", desc: "User-centered design solutions" },
    { name: "Innovation Consulting", desc: "Strategic tech transformation" },
  ],
  "Specialized": [
    { name: "Cloud Solutions", desc: "Scalable cloud infrastructure" },
    { name: "DevOps", desc: "Automated deployment & operations" },
    { name: "Blockchain", desc: "Decentralized solutions" },
    { name: "Business Intelligence", desc: "Smart business insights" },
    { name: "Managed IT Support", desc: "24/7 technical support" },
  ],
};

const products = [
  { name: "Dugsi Manager", desc: "Complete school management system", image: productDataflow, path: "/product/dugsi-manager" },
  { name: "Tayo POS", desc: "Modern point of sale solution", image: productSecureVault, path: "/product/tayo-pos" },
  { name: "AI Integration", desc: "Custom AI-powered business solutions", image: productAI, path: "/product/ai-integration" },
  { name: "Website Development", desc: "Professional web development services", image: productCloudSync, path: "/services" },
];

const aboutInfo = {
  title: "About SOM Innovations",
  description: "Leading technology solutions provider specializing in AI, cybersecurity, and digital transformation. We empower businesses with cutting-edge tech solutions.",
  image: aboutHero
};

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--navbar-bg))] backdrop-blur-sm border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="SOM Innovations" className="w-10 h-10" />
            <h1 className="text-xl font-bold text-primary">SOM Innovations</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-slate-700 hover:text-primary font-medium transition-smooth">
                Home
              </a>
              <Link to="/about" className="text-slate-700 hover:text-primary font-medium transition-smooth">
                About
              </Link>
              <Link to="/services" className="text-slate-700 hover:text-primary font-medium transition-smooth">
                Services
              </Link>
              <a href="#products" className="text-slate-700 hover:text-primary font-medium transition-smooth">
                Products
              </a>
              <a href="#pricing" className="text-slate-700 hover:text-primary font-medium transition-smooth">
                Pricing
              </a>
              <a href="#team" className="text-slate-700 hover:text-primary font-medium transition-smooth">
                Team
              </a>
              <a href="#clients" className="text-slate-700 hover:text-primary font-medium transition-smooth">
                Clients
              </a>
              <a href="#contact" className="text-slate-700 hover:text-primary font-medium transition-smooth">
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/demo-request" 
              className="bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
            >
              Request Demo
            </Link>
            <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-primary transition-smooth"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t border-border"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-slate-700 hover:text-primary transition-smooth">
                  Home
                </a>
                <Link to="/about" className="block px-3 py-2 text-slate-700 hover:text-primary transition-smooth">
                  About
                </Link>
                <Link to="/services" className="block px-3 py-2 text-slate-700 hover:text-primary transition-smooth">
                  Services
                </Link>
                <a href="#products" className="block px-3 py-2 text-slate-700 hover:text-primary transition-smooth">
                  Products
                </a>
                <a href="#pricing" className="block px-3 py-2 text-slate-700 hover:text-primary transition-smooth">
                  Pricing
                </a>
                <a href="#team" className="block px-3 py-2 text-slate-700 hover:text-primary transition-smooth">
                  Team
                </a>
                <a href="#clients" className="block px-3 py-2 text-slate-700 hover:text-primary transition-smooth">
                  Clients
                </a>
                <a href="#contact" className="block px-3 py-2 text-slate-700 hover:text-primary transition-smooth">
                  Contact
                </a>
                <div className="px-3 py-2">
                  <Link 
                    to="/demo-request"
                    className="w-full bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-medium hover:bg-secondary/90 transition-colors block text-center"
                  >
                    Request Demo
                  </Link>
                </div>
                <div className="px-3 py-2">
                  <Button variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;