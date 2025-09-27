import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import techVisualization from "@/assets/tech-visualization.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />

      {/* Tech Grid Background - Hidden on mobile */}
      <div className="absolute inset-0 opacity-5 hidden md:block">
        <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-primary/20" />
          ))}
        </div>
      </div>

      {/* Floating Tech Elements - Responsive */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-4 md:right-20 w-16 md:w-32 h-16 md:h-32 border border-primary/20 rounded-full"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 md:bottom-40 left-4 md:left-20 w-12 md:w-20 h-12 md:h-20 bg-primary/10 rounded-lg"
        />
        <motion.div
          animate={{ x: [-15, 15, -15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-8 md:right-40 w-8 md:w-16 h-8 md:h-16 border-2 border-primary/30 rotate-45"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                Leading Tech Solutions Provider
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Empower Your Business with{" "}
                <span className="text-primary relative">
                  Smart Solutions
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                From school management systems and POS solutions to AI integration and web development. 
                We build custom software that transforms how you work, manage, and grow your business 
                in the digital age.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group px-6 md:px-8"
                onClick={() => window.open('https://wa.me/254794940900?text=Hello! I want to start a project with SOM Innovations', '_blank')}
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group px-6 md:px-8"
                onClick={() => window.open('https://wa.me/254794940900?text=Hello! I would like to watch a demo of your solutions', '_blank')}
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            >
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1">150+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-xs md:text-sm text-muted-foreground">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1">5+</div>
                <div className="text-xs md:text-sm text-muted-foreground">Years Excellence</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Tech Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-4 md:p-8 backdrop-blur-sm border border-primary/20 overflow-hidden">
              <div className="absolute inset-2 md:inset-4 bg-gradient-to-br from-background/90 via-background/80 to-background/90 rounded-xl flex items-center justify-center backdrop-blur-sm border border-primary/20 shadow-2xl overflow-hidden">
                {/* Tech Visualization Image */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src={techVisualization} 
                    alt="Advanced Technology Solutions" 
                    className="w-full h-full object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30 rounded-lg" />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center relative z-10">
                      <motion.div 
                        className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-full flex items-center justify-center mx-auto mb-3 relative overflow-hidden backdrop-blur-sm"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <div className="absolute inset-2 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-full animate-pulse" />
                        <motion.div 
                          className="w-8 md:w-10 h-8 md:h-10 bg-gradient-to-br from-primary to-secondary rounded-full relative z-10"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <div className="absolute inset-1 bg-background/30 rounded-full" />
                        </motion.div>
                      </motion.div>
                      
                      <motion.h3 
                        className="text-lg md:text-xl font-semibold text-foreground mb-2 drop-shadow-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        SOM Innovations
                      </motion.h3>
                      <motion.p 
                        className="text-muted-foreground text-sm drop-shadow-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        Complete business solutions at your service
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tech Icons - Responsive positioning */}
              <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-12 md:w-16 h-12 md:h-16 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold shadow-lg text-sm md:text-base">
                AI
              </div>
              <div className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 w-12 md:w-16 h-12 md:h-16 bg-secondary rounded-lg flex items-center justify-center text-secondary-foreground font-bold shadow-lg text-sm md:text-base">
                ML
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center cursor-pointer hover:border-primary transition-colors"
        >
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;