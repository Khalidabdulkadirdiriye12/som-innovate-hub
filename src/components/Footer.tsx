import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Facebook,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    "Cybersecurity & Risk Management",
    "Software Development", 
    "AI & ML Integration",
    "Data Science & Analytics",
    "Digital Skills Training",
    "Cloud Solutions"
  ];

  const company = [
    "About Us",
    "Our Team", 
    "Careers",
    "Case Studies",
    "Blog",
    "Contact Us"
  ];

  const products = [
    "DataFlow Pro",
    "SecureVault",
    "CloudSync", 
    "AI Assistant",
    "Custom Solutions"
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">SOM Innovations</h3>
              <p className="text-background/80 mb-6 leading-relaxed">
                Innovating the future with advanced technology solutions. 
                We help businesses thrive in the digital age through comprehensive 
                tech services and innovative solutions.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <span className="text-background/80">+254 794 940 900</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <span className="text-background/80">hello@sominnovations.xyz</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary mr-3" />
                  <span className="text-background/80">Nairobi, Kenya</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-background group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-background group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors group"
                  aria-label="Github"
                >
                  <Github className="w-5 h-5 text-background group-hover:text-primary-foreground" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-background group-hover:text-primary-foreground" />
                </a>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-background mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a 
                      href="#services" 
                      className="text-background/80 hover:text-primary transition-colors text-sm"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-background mb-6">Company</h4>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-background/80 hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Products & Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-background mb-6">Products</h4>
              <ul className="space-y-3 mb-8">
                {products.map((product) => (
                  <li key={product}>
                    <a 
                      href="#products" 
                      className="text-background/80 hover:text-primary transition-colors text-sm"
                    >
                      {product}
                    </a>
                  </li>
                ))}
              </ul>

              <div>
                <h5 className="text-md font-semibold text-background mb-3">Stay Updated</h5>
                <p className="text-background/80 text-sm mb-4">
                  Subscribe to our newsletter for the latest tech insights and updates.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-background/10 border border-background/20 rounded-l-lg text-background placeholder-background/60 text-sm focus:outline-none focus:border-primary"
                  />
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-r-lg hover:bg-primary/90 transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-background/20 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/80 text-sm mb-4 md:mb-0">
              © {currentYear} SOM Innovations. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors text-sm">
                Cookie Policy
              </a>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors ml-4 group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5 text-primary-foreground group-hover:translate-y-[-2px] transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;