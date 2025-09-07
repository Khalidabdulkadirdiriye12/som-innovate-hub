import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/254794940900', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:hello@sominnovations.xyz');
  };

  const handleLocation = () => {
    window.open('https://maps.google.com?q=Nairobi,Kenya', '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your digital transformation journey? Let's discuss how we can help 
              your business thrive with our innovative technology solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-8">Let's Start a Conversation</h3>
            
            <div className="space-y-6 mb-8">
              <div 
                className="flex items-start p-4 bg-card rounded-lg shadow-soft hover:shadow-primary transition-all duration-300 cursor-pointer group"
                onClick={handleWhatsApp}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-1">Phone / WhatsApp</h4>
                  <p className="text-muted-foreground">+254 794 940 900</p>
                  <p className="text-sm text-primary">Click to open WhatsApp</p>
                </div>
              </div>

              <div 
                className="flex items-start p-4 bg-card rounded-lg shadow-soft hover:shadow-primary transition-all duration-300 cursor-pointer group"
                onClick={handleEmail}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">hello@sominnovations.xyz</p>
                  <p className="text-sm text-primary">Click to send email</p>
                </div>
              </div>

              <div 
                className="flex items-start p-4 bg-card rounded-lg shadow-soft hover:shadow-primary transition-all duration-300 cursor-pointer group"
                onClick={handleLocation}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">Nairobi, Kenya</p>
                  <p className="text-sm text-primary">Click to view on Google Maps</p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-card rounded-lg shadow-soft">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM EAT</p>
                  <p className="text-muted-foreground">Weekend: Emergency support available</p>
                </div>
              </div>
            </div>

            <div className="bg-hero-gradient rounded-xl p-6 text-primary-foreground">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-6 h-6 mr-3" />
                <h4 className="text-xl font-semibold">Quick Response Guarantee</h4>
              </div>
              <p className="opacity-90">
                We typically respond to all inquiries within 2 hours during business hours. 
                For urgent matters, please call or WhatsApp us directly.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input 
                      id="name"
                      type="text" 
                      required
                      placeholder="Your full name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input 
                      id="email"
                      type="email" 
                      required
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input 
                      id="company"
                      type="text" 
                      placeholder="Your company name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input 
                      id="phone"
                      type="tel" 
                      placeholder="+254 XXX XXX XXX"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input 
                    id="subject"
                    type="text" 
                    required
                    placeholder="Brief description of your inquiry"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea 
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project, requirements, or how we can help you..."
                    className="w-full resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full shadow-primary hover:shadow-lg transition-all duration-300 group"
                  size="lg"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Privacy Note:</strong> Your information is secure with us. We never share 
                  personal data with third parties and use it only to respond to your inquiry.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;