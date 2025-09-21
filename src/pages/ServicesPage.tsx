import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Shield, Brain, BarChart3, Smartphone, Globe } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Software Development",
      description: "Custom applications, school management systems, and POS solutions tailored to your needs.",
      features: ["School Management Systems", "POS Systems", "Custom Web Applications", "Mobile Apps"]
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI Integration",
      description: "Intelligent automation and AI-powered solutions to transform your business processes.",
      features: ["AI Chatbots", "Process Automation", "Machine Learning Models", "Predictive Analytics"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from digital threats.",
      features: ["Security Audits", "Network Protection", "Data Encryption", "Compliance Management"]
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights for better decision making.",
      features: ["Business Intelligence", "Data Visualization", "Performance Analytics", "Reporting Systems"]
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["Native Apps", "Cross-Platform", "App Store Optimization", "Mobile UI/UX"]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications that drive results.",
      features: ["Responsive Design", "E-commerce", "Content Management", "SEO Optimization"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business and drive growth 
              through innovation, efficiency, and digital excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how our services can help you achieve your goals
            </p>
            <button className="bg-background text-primary px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;