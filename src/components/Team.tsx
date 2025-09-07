import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import teamCEO from "@/assets/team-ceo.jpg";
import teamCTO from "@/assets/team-cto.jpg";
import teamDev from "@/assets/team-dev.jpg";
import teamDesigner from "@/assets/team-designer.jpg";

const Team = () => {
  const team = [
    {
      name: "Samuel Ochieng",
      role: "CEO & Founder", 
      image: teamCEO,
      bio: "Visionary leader with 8+ years in tech innovation and business strategy. Passionate about leveraging technology for social impact.",
      social: {
        linkedin: "#",
        twitter: "#", 
        email: "samuel@sominnovations.xyz"
      }
    },
    {
      name: "Maria Wanjiku",
      role: "CTO & Co-Founder",
      image: teamCTO,
      bio: "Expert data scientist and AI researcher with deep expertise in machine learning and scalable system architecture.",
      social: {
        linkedin: "#",
        github: "#",
        email: "maria@sominnovations.xyz"
      }
    },
    {
      name: "David Kimani",
      role: "Lead Software Engineer",
      image: teamDev,
      bio: "Full-stack developer specializing in modern web technologies and cloud-native applications. Open source contributor.",
      social: {
        linkedin: "#",
        github: "#",
        email: "david@sominnovations.xyz"
      }
    },
    {
      name: "Grace Muthoni",
      role: "Head of Design",
      image: teamDesigner,
      bio: "Creative UX/UI designer focused on creating intuitive and accessible digital experiences that delight users.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "grace@sominnovations.xyz"
      }
    }
  ];

  return (
    <section id="team" className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate professionals dedicated to delivering exceptional technology solutions 
              and driving digital innovation across Africa
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-primary transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
                
                <div className="flex space-x-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="w-9 h-9 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="w-9 h-9 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="w-9 h-9 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-9 h-9 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-soft">
            <h3 className="text-3xl font-bold text-foreground mb-4">Join Our Growing Team</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation 
              and want to make a difference in the African tech ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:careers@sominnovations.xyz"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-primary"
              >
                View Open Positions
              </a>
              <a 
                href="mailto:hello@sominnovations.xyz"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Send Us Your CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;