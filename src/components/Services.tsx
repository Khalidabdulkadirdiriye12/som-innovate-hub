import { useState } from "react";
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
  Headphones,
  CheckCircle,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const coreServices = [
    { 
      icon: Shield, 
      title: "Cybersecurity & Risk Management", 
      desc: "Comprehensive security audits, threat assessment, and risk mitigation strategies to protect your digital assets.",
      features: [
        "Security Audits & Penetration Testing",
        "Risk Assessment & Compliance",
        "Incident Response Planning",
        "Security Training & Awareness",
        "Network Security Implementation"
      ],
      benefits: [
        "Protect against cyber threats",
        "Ensure regulatory compliance",
        "Minimize security risks",
        "Build customer trust"
      ],
      timeline: "2-6 weeks",
      pricing: "Starting from $2,500"
    },
    { 
      icon: Code, 
      title: "Software Development", 
      desc: "Custom web applications, mobile apps, and enterprise software solutions tailored to your business needs.",
      features: [
        "Custom Web Applications",
        "Mobile App Development",
        "Enterprise Software Solutions",
        "API Development & Integration",
        "Legacy System Modernization"
      ],
      benefits: [
        "Streamline business processes",
        "Improve operational efficiency",
        "Scale your business operations",
        "Competitive advantage"
      ],
      timeline: "6-16 weeks",
      pricing: "Starting from $5,000"
    },
    { 
      icon: Brain, 
      title: "AI & ML Integration", 
      desc: "Intelligent automation, predictive analytics, and machine learning solutions to optimize your operations.",
      features: [
        "Machine Learning Model Development",
        "AI-Powered Automation",
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision Solutions"
      ],
      benefits: [
        "Automate repetitive tasks",
        "Make data-driven decisions",
        "Predict future trends",
        "Enhance customer experience"
      ],
      timeline: "8-20 weeks",
      pricing: "Starting from $8,000"
    },
    { 
      icon: Database, 
      title: "Data Science & Analytics", 
      desc: "Advanced data analysis, visualization, and business intelligence to drive informed decision-making.",
      features: [
        "Data Analysis & Visualization",
        "Business Intelligence Dashboards",
        "Statistical Modeling",
        "Data Mining & Insights",
        "Performance Metrics Tracking"
      ],
      benefits: [
        "Make informed decisions",
        "Identify growth opportunities",
        "Optimize business performance",
        "Understand customer behavior"
      ],
      timeline: "4-12 weeks",
      pricing: "Starting from $3,500"
    },
    { 
      icon: Cog, 
      title: "Data Automation", 
      desc: "Streamlined data processing, ETL pipelines, and automated reporting systems for efficiency.",
      features: [
        "ETL Pipeline Development",
        "Automated Reporting Systems",
        "Data Integration Solutions",
        "Real-time Data Processing",
        "Data Quality Management"
      ],
      benefits: [
        "Save time on manual processes",
        "Improve data accuracy",
        "Enable real-time insights",
        "Reduce operational costs"
      ],
      timeline: "4-10 weeks",
      pricing: "Starting from $4,000"
    },
  ];

  const growthServices = [
    { 
      icon: GraduationCap, 
      title: "Digital Skills Training", 
      desc: "Comprehensive training programs to upskill your team with the latest technologies and methodologies.",
      features: [
        "Custom Training Programs",
        "Hands-on Workshops",
        "Online Learning Platform",
        "Certification Programs",
        "Progress Tracking & Assessment"
      ],
      benefits: [
        "Upskill your team",
        "Improve productivity",
        "Stay competitive",
        "Reduce hiring costs"
      ],
      timeline: "2-8 weeks",
      pricing: "Starting from $1,500"
    },
    { 
      icon: Users, 
      title: "Mentorship Programs", 
      desc: "Personalized guidance and career development support for technology professionals.",
      features: [
        "One-on-One Mentoring",
        "Career Development Planning",
        "Technical Skill Assessment",
        "Industry Best Practices",
        "Networking Opportunities"
      ],
      benefits: [
        "Accelerate career growth",
        "Gain industry insights",
        "Build professional networks",
        "Develop leadership skills"
      ],
      timeline: "3-12 months",
      pricing: "Starting from $200/month"
    },
    { 
      icon: Megaphone, 
      title: "Digital Marketing", 
      desc: "Strategic online marketing campaigns, SEO optimization, and social media management.",
      features: [
        "SEO Optimization",
        "Social Media Management",
        "Content Marketing Strategy",
        "Pay-Per-Click Advertising",
        "Analytics & Reporting"
      ],
      benefits: [
        "Increase online visibility",
        "Generate more leads",
        "Build brand awareness",
        "Improve ROI"
      ],
      timeline: "Ongoing",
      pricing: "Starting from $1,200/month"
    },
    { 
      icon: Palette, 
      title: "UX/UI Design", 
      desc: "User-centered design solutions that enhance user experience and drive engagement.",
      features: [
        "User Research & Testing",
        "Wireframing & Prototyping",
        "Visual Design Systems",
        "Mobile-First Design",
        "Accessibility Compliance"
      ],
      benefits: [
        "Improve user satisfaction",
        "Increase conversion rates",
        "Reduce development costs",
        "Create consistent brand experience"
      ],
      timeline: "4-8 weeks",
      pricing: "Starting from $2,800"
    },
    { 
      icon: Lightbulb, 
      title: "Innovation Consulting", 
      desc: "Strategic guidance on digital transformation and technology adoption for business growth.",
      features: [
        "Digital Transformation Strategy",
        "Technology Assessment",
        "Innovation Workshops",
        "Change Management",
        "ROI Analysis & Planning"
      ],
      benefits: [
        "Accelerate digital transformation",
        "Identify new opportunities",
        "Optimize technology investments",
        "Stay ahead of competition"
      ],
      timeline: "2-6 weeks",
      pricing: "Starting from $3,000"
    },
  ];

  const specializedServices = [
    { 
      icon: Cloud, 
      title: "Cloud Solutions", 
      desc: "Scalable cloud infrastructure, migration services, and cloud-native application development.",
      features: [
        "Cloud Migration Services",
        "Infrastructure as Code",
        "Auto-scaling Solutions",
        "Cloud Security Implementation",
        "Cost Optimization"
      ],
      benefits: [
        "Reduce infrastructure costs",
        "Improve scalability",
        "Enhance reliability",
        "Enable remote work"
      ],
      timeline: "6-14 weeks",
      pricing: "Starting from $6,000"
    },
    { 
      icon: Settings, 
      title: "DevOps Services", 
      desc: "Continuous integration, deployment automation, and infrastructure as code implementation.",
      features: [
        "CI/CD Pipeline Setup",
        "Container Orchestration",
        "Infrastructure Monitoring",
        "Automated Testing",
        "Release Management"
      ],
      benefits: [
        "Faster deployment cycles",
        "Improved code quality",
        "Reduced downtime",
        "Better collaboration"
      ],
      timeline: "4-10 weeks",
      pricing: "Starting from $4,500"
    },
    { 
      icon: Link, 
      title: "Blockchain Development", 
      desc: "Decentralized applications, smart contracts, and blockchain integration solutions.",
      features: [
        "Smart Contract Development",
        "DApp Development",
        "Blockchain Integration",
        "Token Creation",
        "Security Audits"
      ],
      benefits: [
        "Increase transparency",
        "Reduce transaction costs",
        "Eliminate intermediaries",
        "Enhance security"
      ],
      timeline: "8-16 weeks",
      pricing: "Starting from $10,000"
    },
    { 
      icon: BarChart3, 
      title: "Business Intelligence", 
      desc: "Advanced reporting, data warehousing, and business performance analytics.",
      features: [
        "Data Warehouse Design",
        "Interactive Dashboards",
        "KPI Monitoring",
        "Predictive Analytics",
        "Self-Service BI Tools"
      ],
      benefits: [
        "Make data-driven decisions",
        "Monitor business performance",
        "Identify trends and patterns",
        "Improve strategic planning"
      ],
      timeline: "6-12 weeks",
      pricing: "Starting from $5,500"
    },
    { 
      icon: Headphones, 
      title: "Managed IT Support", 
      desc: "24/7 technical support, system monitoring, and proactive maintenance services.",
      features: [
        "24/7 Help Desk Support",
        "Proactive System Monitoring",
        "Regular Maintenance",
        "Security Updates",
        "Backup & Recovery"
      ],
      benefits: [
        "Minimize downtime",
        "Reduce IT costs",
        "Focus on core business",
        "Ensure system reliability"
      ],
      timeline: "Ongoing",
      pricing: "Starting from $500/month"
    },
  ];

  const handleLearnMore = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

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
      <Button 
        variant="outline" 
        size="sm" 
        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        onClick={() => handleLearnMore(service)}
      >
        Learn More
      </Button>
    </motion.div>
  );

  return (
    <>
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

      {/* Service Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-4 text-2xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <selectedService.icon className="w-6 h-6 text-primary" />
                  </div>
                  {selectedService.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Service Overview</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedService.desc}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Benefits</h3>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-secondary/10 rounded-lg p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">Timeline:</span>
                      <span className="text-primary font-semibold">{selectedService.timeline}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">Investment:</span>
                      <span className="text-primary font-semibold">{selectedService.pricing}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1">
                      Get Started
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Request Quote
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Services;