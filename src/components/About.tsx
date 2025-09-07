import { motion } from "framer-motion";
import { Shield, Code, Brain, Database, Cloud, Users } from "lucide-react";

const About = () => {
  const expertise = [
    { icon: Shield, title: "Cybersecurity", desc: "Advanced security solutions and risk management" },
    { icon: Code, title: "Software Development", desc: "Custom applications and scalable platforms" },
    { icon: Brain, title: "AI & Machine Learning", desc: "Intelligent automation and data insights" },
    { icon: Database, title: "Data Science", desc: "Advanced analytics and business intelligence" },
    { icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud infrastructure and DevOps" },
    { icon: Users, title: "Digital Training", desc: "Upskilling teams with modern technologies" },
  ];

  return (
    <section id="about" className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="text-primary">SOM Innovations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a leading digital agency based in Nairobi, Kenya, specializing in advanced technology 
              solutions that drive business growth and digital transformation.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground mb-6">
              At SOM Innovations, we believe in harnessing the power of technology to solve complex business 
              challenges and create sustainable competitive advantages for our clients.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our team of experienced professionals combines deep technical expertise with strategic thinking 
              to deliver solutions that not only meet today's needs but also prepare businesses for tomorrow's 
              opportunities.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                <span className="text-foreground">Innovation-driven approach</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                <span className="text-foreground">Client-centric solutions</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                <span className="text-foreground">Cutting-edge technology</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                <span className="text-foreground">Continuous learning and growth</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-hero-gradient rounded-2xl p-8 text-primary-foreground"
          >
            <h3 className="text-3xl font-bold mb-6">Our Values</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2">Excellence</h4>
                <p className="opacity-90">We strive for excellence in every solution we deliver, ensuring the highest quality standards.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Innovation</h4>
                <p className="opacity-90">We embrace emerging technologies and innovative approaches to solve complex challenges.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Integrity</h4>
                <p className="opacity-90">We build trust through transparency, reliability, and ethical business practices.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Collaboration</h4>
                <p className="opacity-90">We work closely with our clients as partners in their digital transformation journey.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Expertise Grid */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">Our Expertise</h3>
          <p className="text-lg text-muted-foreground">
            Comprehensive technology solutions across multiple domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg shadow-soft hover:shadow-primary transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">{item.title}</h4>
              </div>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;