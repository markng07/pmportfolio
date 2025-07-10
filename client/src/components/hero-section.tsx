import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center gradient-bg relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Product Manager
              <span className="text-gold block">& Growth Leader</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
              Experienced product leader specializing in fintech, AI-powered solutions, and digital lending.
              Led products generating{" "}
              <span className="text-gold font-semibold">$170M+ revenue</span> and serving{" "}
              <span className="text-gold font-semibold">20M+ users</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("#products")}
                className="bg-gold hover:bg-gold/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Download Resume
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-gold"
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=800"
                  alt="Mark Duc Nguyen - Professional Headshot"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy">5+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-navy">20M+</div>
                  <div className="text-sm text-gray-600">Users</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-white text-2xl" />
      </motion.div>
    </section>
  );
}
