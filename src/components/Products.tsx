import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import dugsiLogo from "@/assets/dugsi-manager-logo.png";
import tayoLogo from "@/assets/tayo-pos-logo.jpg";
import aiLogo from "@/assets/ai-assistant-logo.jpg";
import jobsLogo from "@/assets/jobs-portal-logo.png";
import lmsLogo from "@/assets/lms-logo.png";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      icon: dugsiLogo,
      name: "Dugsi Manager",
      category: "School Management", 
      status: "Live Demo",
      description: "Comprehensive school management system for educational institutions.",
      features: ["Student Management", "Grade Tracking", "Parent Portal", "Fee Management"],
      price: "KSH 5,000",
      productId: "dugsi-manager",
      url: "https://dugsimanager.sominnovations.xyz"
    },
    {
      icon: tayoLogo,
      name: "Tayo POS",
      category: "Point of Sale",
      status: "Live Demo", 
      description: "Modern POS system for retail businesses and restaurants.",
      features: ["Inventory Management", "Sales Analytics", "Multi-payment", "Cloud-based"],
      price: "KSH 2,000",
      productId: "tayo-pos",
      url: "https://pos.sominnovations.xyz"
    },
    {
      icon: jobsLogo,
      name: "Jobs Portal",
      category: "Recruitment Platform",
      status: "Live Demo",
      description: "Complete job recruitment and talent management platform.",
      features: ["Job Listings", "Candidate Management", "Application Tracking", "Analytics"],
      price: "KSH 8,000",
      productId: "jobs-portal",
      url: "https://jobs.sominnovations.xyz"
    },
    {
      icon: lmsLogo,
      name: "Learning Management System",
      category: "Education Platform",
      status: "Free Access",
      description: "Free online learning platform with courses and educational resources.",
      features: ["Course Management", "Progress Tracking", "Certificates", "Free Content"],
      price: "Free",
      productId: "lms",
      url: "https://lms.sominnovations.xyz"
    },
    {
      icon: aiLogo,
      name: "AI Integration",
      category: "Artificial Intelligence",
      status: "Custom Quote",
      description: "Custom AI solutions tailored to your business needs.",
      features: ["Custom Models", "Process Automation", "Data Analysis", "API Integration"],
      price: "From KSH 10,000",
      productId: "ai-integration"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative software solutions designed to streamline operations and accelerate growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={product.icon}
                    alt={product.name}
                    className="w-16 h-16 rounded-lg object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-sm text-primary font-medium">{product.category}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-lg font-bold text-primary mb-4">
                  {product.price}
                </div>
                <div className="flex gap-3 mt-6">
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => product.url ? window.open(product.url, '_blank') : navigate(`/product/${product.productId}`)}
                  >
                    {product.url ? 'Visit Platform' : 'View Details'}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => navigate('/demo-request')}
                  >
                    Request Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center bg-accent/20 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Additional <span className="text-primary">Services</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-foreground mb-2">Website Development</h4>
              <p className="text-muted-foreground text-sm mb-3">Professional websites from landing pages to complex platforms</p>
              <div className="text-primary font-bold">KSH 20,000 - 150,000</div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-foreground mb-2">Mobile Development</h4>
              <p className="text-muted-foreground text-sm mb-3">Native and cross-platform mobile applications</p>
              <div className="text-primary font-bold">KSH 50,000 - 200,000</div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-foreground mb-2">Data Analysis</h4>
              <p className="text-muted-foreground text-sm mb-3">Transform your data into actionable insights</p>
              <div className="text-primary font-bold">From KSH 15,000</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => navigate('/demo-request')}
            >
              Request Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('https://wa.me/254794940900?text=Hello! I need a custom solution', '_blank')}
            >
              Get Custom Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;