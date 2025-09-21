import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Check, ExternalLink, Play } from "lucide-react";
import dugsiLogo from "@/assets/dugsi-manager-logo.png";
import tayoLogo from "@/assets/tayo-pos-logo.jpg";
import aiLogo from "@/assets/ai-assistant-logo.jpg";

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const products = {
    "dugsi-manager": {
      name: "Dugsi Manager",
      logo: dugsiLogo,
      price: "KSH 5,000",
      category: "School Management System",
      description: "A comprehensive school management solution designed for educational institutions of all sizes. Streamline administrative tasks, improve communication, and enhance the learning experience.",
      longDescription: "Dugsi Manager is a powerful, all-in-one school management system that transforms how educational institutions operate. Built with modern technology and designed for ease of use, it provides administrators, teachers, students, and parents with the tools they need to succeed.",
      features: [
        "Student Information Management",
        "Grade & Attendance Tracking", 
        "Parent & Student Portals",
        "Fee Management & Billing",
        "Timetable & Class Scheduling",
        "Report Generation",
        "Communication Tools",
        "Library Management",
        "Examination Management",
        "Staff Management"
      ],
      benefits: [
        "Reduce administrative workload by 60%",
        "Improve parent-school communication",
        "Real-time academic progress tracking",
        "Automated fee collection reminders",
        "Mobile-responsive design"
      ],
      demoAvailable: true
    },
    "tayo-pos": {
      name: "Tayo POS",
      logo: tayoLogo,
      price: "KSH 2,000",
      category: "Point of Sale System", 
      description: "Modern, user-friendly point of sale system perfect for retail businesses, restaurants, and service providers. Manage inventory, track sales, and grow your business.",
      longDescription: "Tayo POS is a modern, cloud-based point of sale system designed to help businesses streamline their operations. Whether you run a small retail shop or a multi-location business, Tayo POS provides all the tools you need to manage sales, inventory, and customers efficiently.",
      features: [
        "Intuitive Sales Interface",
        "Inventory Management",
        "Customer Management",
        "Sales Analytics & Reporting",
        "Multi-payment Processing",
        "Barcode Scanning",
        "Receipt Printing",
        "Multi-location Support",
        "Offline Mode",
        "Tax Management"
      ],
      benefits: [
        "Process transactions 50% faster",
        "Real-time inventory tracking", 
        "Detailed sales insights",
        "Cloud-based accessibility",
        "24/7 customer support"
      ],
      demoAvailable: true
    },
    "ai-integration": {
      name: "AI Integration Services",
      logo: aiLogo,
      price: "From KSH 10,000",
      category: "Artificial Intelligence Solutions",
      description: "Custom AI solutions tailored to your business needs. From chatbots to predictive analytics, we help you leverage the power of artificial intelligence.",
      longDescription: "Our AI Integration services help businesses harness the power of artificial intelligence to automate processes, gain insights, and improve customer experiences. We develop custom AI solutions that integrate seamlessly with your existing systems.",
      features: [
        "Custom AI Model Development",
        "Chatbot Integration",
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Data Analysis & Insights",
        "Process Automation",
        "API Integration",
        "Training & Support",
        "Continuous Optimization"
      ],
      benefits: [
        "Automate repetitive tasks",
        "Improve decision making with data insights",
        "Enhance customer experience",
        "Reduce operational costs",
        "Scale your business intelligently"
      ],
      demoAvailable: false
    }
  };

  const product = products[productId as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  const handleDemoRequest = () => {
    navigate('/demo-request');
  };

  const handleWhatsAppContact = () => {
    const message = `Hello! I'm interested in ${product.name}. Can you provide more information?`;
    window.open(`https://wa.me/254794940900?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-primary hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-accent/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <img
                src={product.logo}
                alt={product.name}
                className="w-32 h-32 mx-auto mb-6 rounded-2xl shadow-lg"
              />
              <div className="text-sm text-primary font-medium mb-2">
                {product.category}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {product.description}
              </p>
              <div className="text-3xl font-bold text-primary mb-8">
                {product.price}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {product.demoAvailable && (
                  <Button
                    size="lg"
                    onClick={handleDemoRequest}
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Request Demo
                  </Button>
                )}
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleWhatsAppContact}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Contact Sales
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Key Features</CardTitle>
                  <CardDescription>
                    Everything you need in one powerful solution
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Why Choose {product.name}?</CardTitle>
                  <CardDescription>
                    The benefits that matter to your business
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              About {product.name}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of satisfied customers who trust {product.name} for their business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {product.demoAvailable && (
                <Button
                  size="lg"
                  onClick={handleDemoRequest}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Request Demo
                </Button>
              )}
              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsAppContact}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;