import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="text-white" size={20} />,
    title: "Email",
    value: "nguyeduc@iu.edu",
    href: "mailto:nguyeduc@iu.edu"
  },
  {
    icon: <Linkedin className="text-white" size={20} />,
    title: "LinkedIn",
    value: "linkedin.com/in/ducnguyen1911",
    href: "https://linkedin.com/in/ducnguyen1911"
  },
  {
    icon: <MapPin className="text-white" size={20} />,
    title: "Location",
    value: "Chicago, IL / San Francisco Bay Area",
    href: null
  }
];

const socialLinks = [
  { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/ducnguyen1911" },
  { icon: <Twitter size={20} />, href: "#" },
  { icon: <Github size={20} />, href: "#" }
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-600">
            Ready to discuss product opportunities and drive meaningful impact together
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <div className="bg-gold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  {info.icon}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-navy">{info.title}</h3>
                  {info.href ? (
                    <a 
                      href={info.href}
                      className="text-gray-600 hover:text-gold transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-8 text-center"
            >
              <h3 className="text-xl font-bold text-navy mb-4">Follow Me</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-navy text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
