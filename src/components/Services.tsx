import { motion } from "framer-motion";
import { 
  Shield, 
  Code, 
  Brain, 
  Database, 
  Cog, 
  GraduationCap, 
  Users, 
  Megaphone, 
  Palette, 
  Lightbulb,
  Cloud,
  Settings,
  Link,
  BarChart3,
  Headphones
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const coreServices = [
    { icon: Shield, title: "Cybersecurity & Risk Management", desc: "Comprehensive security audits, threat assessment, and risk mitigation strategies to protect your digital assets." },
    { icon: Code, title: "Software Development", desc: "Custom web applications, mobile apps, and enterprise software solutions tailored to your business needs." },
    { icon: Brain, title: "AI & ML Integration", desc: "Intelligent automation, predictive analytics, and machine learning solutions to optimize your operations." },
    { icon: Database, title: "Data Science & Analytics", desc: "Advanced data analysis, visualization, and business intelligence to drive informed decision-making." },
    { icon: Cog, title: "Data Automation", desc: "Streamlined data processing, ETL pipelines, and automated reporting systems for efficiency." },
  ];

  const growthServices = [
    { icon: GraduationCap, title: "Digital Skills Training", desc: "Comprehensive training programs to upskill your team with the latest technologies and methodologies." },
    { icon: Users, title: "Mentorship Programs", desc: "Personalized guidance and career development support for technology professionals." },
    { icon: Megaphone, title: "Digital Marketing", desc: "Strategic online marketing campaigns, SEO optimization, and social media management." },
    { icon: Palette, title: "UX/UI Design", desc: "User-centered design solutions that enhance user experience and drive engagement." },
    { icon: Lightbulb, title: "Innovation Consulting", desc: "Strategic guidance on digital transformation and technology adoption for business growth." },
  ];

  const specializedServices = [
    { icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud infrastructure, migration services, and cloud-native application development." },
    { icon: Settings, title: "DevOps Services", desc: "Continuous integration, deployment automation, and infrastructure as code implementation." },
    { icon: Link, title: "Blockchain Development", desc: "Decentralized applications, smart contracts, and blockchain integration solutions." },
    { icon: BarChart3, title: "Business Intelligence", desc: "Advanced reporting, data warehousing, and business performance analytics." },
    { icon: Headphones, title: "Managed IT Support", desc: "24/7 technical support, system monitoring, and proactive maintenance services." },
  ];

  const ServiceCard = ({ service, index }: { service: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card p-6 rounded-xl shadow-soft hover:shadow-primary transition-all duration-300 group"
    >
      <div className="flex items-start mb-4">
        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
          <service.icon className="w-7 h-7 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
        </div>
      </div>
      <p className="text-muted-foreground mb-4 leading-relaxed">{service.desc}</p>
      <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
        Learn More
      </Button>
    </motion.div>
  );

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation
            </p>
          </motion.div>
        </div>

        {/* Core Solutions */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-foreground mb-4">Core Solutions</h3>
            <p className="text-lg text-muted-foreground">
              Essential technology services for modern businesses
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Growth & Training */}
        <div className="mb-20 section-bg rounded-3xl p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-foreground mb-4">Growth & Training</h3>
            <p className="text-lg text-muted-foreground">
              Empowering teams and driving business growth through education and strategy
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {growthServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Specialized Services */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-foreground mb-4">Specialized Services</h3>
            <p className="text-lg text-muted-foreground">
              Advanced solutions for complex technical challenges
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-hero-gradient rounded-2xl p-8 md:p-12 text-primary-foreground">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive technology solutions can help you achieve your business goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="shadow-lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Case Studies
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;