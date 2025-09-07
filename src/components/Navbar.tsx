import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  { name: "DataFlow Pro", desc: "Advanced data pipeline management" },
  { name: "SecureVault", desc: "Enterprise security management" },
  { name: "CloudSync", desc: "Multi-cloud synchronization platform" },
  { name: "AI Assistant", desc: "Custom AI-powered business solutions" },
];

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">SOM Innovations</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-smooth">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-smooth">
                About Us
              </a>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center text-foreground hover:text-primary transition-smooth">
                  Services <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-card border border-border rounded-lg shadow-soft z-50"
                    >
                      <div className="p-6">
                        {Object.entries(services).map(([category, items]) => (
                          <div key={category} className="mb-6 last:mb-0">
                            <h3 className="font-semibold text-primary mb-3">{category}</h3>
                            <div className="space-y-2">
                              {items.map((service) => (
                                <div key={service.name} className="p-2 rounded hover:bg-secondary/50 transition-smooth cursor-pointer">
                                  <div className="font-medium text-sm text-foreground">{service.name}</div>
                                  <div className="text-xs text-muted-foreground">{service.desc}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button className="flex items-center text-foreground hover:text-primary transition-smooth">
                  Products <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-card border border-border rounded-lg shadow-soft z-50"
                    >
                      <div className="p-4">
                        {products.map((product) => (
                          <div key={product.name} className="p-3 rounded hover:bg-secondary/50 transition-smooth cursor-pointer">
                            <div className="font-medium text-foreground">{product.name}</div>
                            <div className="text-sm text-muted-foreground">{product.desc}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="#team" className="text-foreground hover:text-primary transition-smooth">
                Team
              </a>
              <a href="#clients" className="text-foreground hover:text-primary transition-smooth">
                Clients
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button variant="default" className="shadow-primary">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary transition-smooth"
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
              className="md:hidden bg-card border-t border-border"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary transition-smooth">
                  Home
                </a>
                <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary transition-smooth">
                  About Us
                </a>
                <a href="#services" className="block px-3 py-2 text-foreground hover:text-primary transition-smooth">
                  Services
                </a>
                <a href="#products" className="block px-3 py-2 text-foreground hover:text-primary transition-smooth">
                  Products
                </a>
                <a href="#team" className="block px-3 py-2 text-foreground hover:text-primary transition-smooth">
                  Team
                </a>
                <a href="#clients" className="block px-3 py-2 text-foreground hover:text-primary transition-smooth">
                  Clients
                </a>
                <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary transition-smooth">
                  Contact
                </a>
                <div className="px-3 py-2">
                  <Button variant="default" className="w-full shadow-primary">
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