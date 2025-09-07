import { motion } from "framer-motion";
import { 
  Database, 
  Shield, 
  Cloud, 
  Brain, 
  ExternalLink, 
  Play,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      name: "DataFlow Pro",
      description: "Advanced data pipeline management and automation platform for enterprise-level data processing.",
      icon: Database,
      features: [
        "Real-time data processing",
        "Automated ETL pipelines", 
        "Data validation & quality checks",
        "Multi-source integration",
        "Custom analytics dashboards"
      ],
      category: "Data Management",
      status: "Available",
      demoUrl: "#",
      color: "bg-blue-500"
    },
    {
      name: "SecureVault",
      description: "Comprehensive cybersecurity management suite with threat detection and risk assessment capabilities.",
      icon: Shield,
      features: [
        "24/7 threat monitoring",
        "Vulnerability assessments",
        "Compliance reporting",
        "Security incident response",
        "Access control management"
      ],
      category: "Cybersecurity",
      status: "Available",
      demoUrl: "#",
      color: "bg-red-500"
    },
    {
      name: "CloudSync",
      description: "Multi-cloud synchronization platform for seamless data and application management across cloud providers.",
      icon: Cloud,
      features: [
        "Multi-cloud integration",
        "Automated backups",
        "Cost optimization",
        "Performance monitoring",
        "Disaster recovery"
      ],
      category: "Cloud Solutions",
      status: "Available",
      demoUrl: "#",
      color: "bg-purple-500"
    },
    {
      name: "AI Assistant",
      description: "Custom AI-powered business solutions for intelligent automation and decision support systems.",
      icon: Brain,
      features: [
        "Natural language processing",
        "Predictive analytics",
        "Workflow automation",
        "Custom AI models",
        "Integration APIs"
      ],
      category: "Artificial Intelligence",
      status: "Coming Soon",
      demoUrl: "#",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Products</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovative software solutions designed to streamline your operations 
              and accelerate business growth through cutting-edge technology.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl shadow-soft hover:shadow-primary transition-all duration-300 overflow-hidden group"
            >
              {/* Product Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${product.color} rounded-lg flex items-center justify-center mr-4`}>
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-sm text-primary font-medium">{product.category}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.status === 'Available' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Key Features</h4>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="default" 
                    className="flex-1 shadow-primary hover:shadow-lg transition-all duration-300 group"
                    disabled={product.status === 'Coming Soon'}
                  >
                    <Play className="mr-2 w-4 h-4" />
                    {product.status === 'Available' ? 'Live Demo' : 'Notify Me'}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-section-bg rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Our products are just the beginning. We specialize in creating custom software solutions 
                tailored to your specific business requirements and industry needs.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">AI-Powered</h4>
                  <p className="text-sm text-muted-foreground">Intelligent solutions with machine learning capabilities</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Cloud className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Cloud-Native</h4>
                  <p className="text-sm text-muted-foreground">Scalable and secure cloud-first architecture</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <ExternalLink className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">API-First</h4>
                  <p className="text-sm text-muted-foreground">Seamless integration with existing systems</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-primary">
                  Discuss Custom Solution
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;