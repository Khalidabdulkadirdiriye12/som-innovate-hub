import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import clientDarulUlum from "@/assets/client-darul-ulum.png";
import clientGuryoHub from "@/assets/client-guryo-hub.jpeg";
import clientBiyoDiid from "@/assets/client-biyo-diid.png";
import clientMustaqbal from "@/assets/client-mustaqbal.png";
import clientSamaha from "@/assets/client-samaha.png";

const Clients = () => {
  const clients = [
    {
      name: "Machadka Darul Uluum",
      logo: clientDarulUlum,
      category: "Waxbarasho"
    },
    {
      name: "Xaruunta Teknoolajiyada Guryo",
      logo: clientGuryoHub,
      category: "Teknoolajiyo Hub"
    },
    {
      name: "Shirkadda Biyo-Diid",
      logo: clientBiyoDiid,
      category: "Xalulka Ganacsiga"
    },
    {
      name: "Jaamacadda Mustaqbal", 
      logo: clientMustaqbal,
      category: "Waxbarashada Sare"
    },
    {
      name: "Machadka Teknoolajiyada Samaha",
      logo: clientSamaha,
      category: "Institiutka Teknoolajiyada"
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Nur Maxamed",
      position: "Agaasimaha Teknoolajiyada, Shirkadda Barakah Tech",
      content: "SOM Innovations waxay beddeleen dhammaan nidaamka xogteenna. Xalulkooda AI wuxuu kordhiyey waxtarka hawlahayaga 40% afar bilood gudahood.",
      rating: 5
    },
    {
      name: "Fadumo Cali Axmed", 
      position: "Aasaasaha, Horumarinta Teknoolajiyada Somalia",
      content: "Baaritaanka amniga ee SOM Innovations wuxuu na siiyey nabad-gal buuxa. Kooxdoodu waa xirfad leh, aqoon u leh, kalsoonida mudan.",
      rating: 5
    },
    {
      name: "Cabdiraxmaan Maxamuud Cali",
      position: "Maareeyaha Hawlaha, Xalulka Macluumaadka",
      content: "Adeegyo aad u fiican oo horumarin software ah. Waxay ku dhameeyeen nidaamka CRM-ka waqtiga iyo miisaaniyada gudaheeda. Aad ayaan u talinayaa khibradooda.",
      rating: 5
    }
  ];

  return (
    <section id="clients" className="py-24 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Trusted by <span className="text-primary">Leading Companies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're proud to partner with innovative companies across Kenya and beyond, 
              helping them achieve their digital transformation goals.
            </p>
          </motion.div>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 group-hover:shadow-primary group-hover:scale-105 transition-all duration-300 w-full h-32 flex items-center justify-center border-2 border-gray-100 group-hover:border-primary/20">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm text-muted-foreground text-center mt-2 font-medium">{client.name}</span>
                <span className="text-xs text-primary">{client.category}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-4">What Our Clients Say</h3>
            <p className="text-lg text-muted-foreground">
              Real feedback from businesses we've helped transform
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-soft hover:shadow-primary transition-all duration-300 group relative"
            >
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote className="w-8 h-8 text-primary" />
              </div>
              
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-primary">{testimonial.position}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-hero-gradient rounded-2xl p-8 md:p-12 text-primary-foreground">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Our Impact</h3>
              <p className="text-xl opacity-90">
                Delivering measurable results for our clients
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="opacity-90">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="opacity-90">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="opacity-90">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="opacity-90">Support Available</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-soft">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve similar results 
              with our comprehensive technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-primary"
              >
                Start Your Project
              </a>
              <a 
                href="tel:+254794940900"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;