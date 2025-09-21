import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const services = [
    {
      name: "Tayo POS",
      price: "2,000",
      description: "Complete Point of Sale solution for retail businesses",
      features: [
        "Inventory Management",
        "Sales Reporting",
        "Customer Management",
        "Payment Processing",
        "Multi-location Support"
      ],
      popular: false
    },
    {
      name: "Dugsi Manager",
      price: "5,000",
      description: "Comprehensive school management system",
      features: [
        "Student Information System",
        "Grade Management",
        "Attendance Tracking",
        "Parent Portal",
        "Fee Management",
        "Timetable Management"
      ],
      popular: true
    },
    {
      name: "AI Integration",
      price: "10,000 - 15,000",
      description: "Custom AI solutions for your business",
      features: [
        "Custom AI Models",
        "Data Analysis",
        "Automation Solutions",
        "Chatbot Integration",
        "Predictive Analytics"
      ],
      popular: false
    },
    {
      name: "Website Development",
      price: "20,000 - 150,000",
      description: "Professional websites from landing pages to complex platforms",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "CMS Integration",
        "E-commerce Solutions",
        "Performance Optimization",
        "Maintenance & Support"
      ],
      popular: false
    },
    {
      name: "Mobile Development",
      price: "50,000 - 200,000",
      description: "Native and cross-platform mobile applications",
      features: [
        "iOS & Android Apps",
        "Cross-platform Solutions",
        "API Integration",
        "Push Notifications",
        "Offline Functionality",
        "App Store Deployment"
      ],
      popular: false
    },
    {
      name: "Data Analysis",
      price: "From 15,000",
      description: "Transform your data into actionable insights",
      features: [
        "Data Visualization",
        "Business Intelligence",
        "Predictive Modeling",
        "Custom Dashboards",
        "Automated Reports"
      ],
      popular: false
    }
  ];

  const handleRequestDemo = () => {
    window.location.href = "/demo-request";
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing for all our services. From simple solutions to complex enterprise systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`relative h-full transition-all duration-300 hover:shadow-lg ${
                service.popular ? 'border-primary shadow-lg scale-105' : 'border-border'
              }`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-foreground">{service.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    KSH {service.price}
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 space-y-2">
                    <Button 
                      onClick={handleRequestDemo}
                      className="w-full"
                      variant={service.popular ? "default" : "outline"}
                    >
                      Request Demo
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full text-primary hover:text-primary"
                      onClick={() => window.open('https://wa.me/254794940900?text=Hello! I\'m interested in ' + service.name, '_blank')}
                    >
                      Chat on WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Need a custom solution? Let's discuss your unique requirements.
          </p>
          <Button 
            size="lg" 
            onClick={() => window.open('https://wa.me/254794940900?text=Hello! I need a custom solution', '_blank')}
            className="bg-primary hover:bg-primary/90"
          >
            Get Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;