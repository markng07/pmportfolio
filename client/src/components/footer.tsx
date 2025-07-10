import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

const quickLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#products", label: "Products" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" }
];

const socialLinks = [
  { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/ducnguyen1911" },
  { icon: <Twitter size={20} />, href: "#" },
  { icon: <Github size={20} />, href: "#" }
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Mark Duc Nguyen</h3>
            <p className="text-gray-300">
              Product Manager & Growth Leader specializing in fintech and AI-powered solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-gold transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 mb-4">nguyeduc@iu.edu</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2025 Mark Duc Nguyen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
