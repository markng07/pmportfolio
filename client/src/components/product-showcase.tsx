import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "MoMo PayLater",
    subtitle: "Digital Lending Platform",
    description: "AI-powered 'Buy Now Pay Later' solution that scaled to 1.5M borrowers with $170M loan book, achieving 180% YoY growth.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    metrics: [
      { value: "1.5M", label: "Active Borrowers" },
      { value: "$170M", label: "Loan Book" }
    ],
    tags: ["AI/ML", "Fintech", "180% Growth"],
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "Digital Identity Platform",
    subtitle: "AI-Powered Verification",
    description: "Cloud-native digital identity platform with 20+ AI models, adopted by 25+ banks and Vodafone India serving 20M+ users.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    metrics: [
      { value: "25+", label: "Bank Partners" },
      { value: "20M+", label: "Users Served" }
    ],
    tags: ["AI Models", "B2B2C", "Enterprise"],
    gradient: "from-green-500 to-teal-600"
  },
  {
    title: "Zalo for Work",
    subtitle: "Workplace Communication",
    description: "Vietnam's #1 workplace communication tool, scaling to 10M+ users in 8 months through strategic positioning and feature innovation.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    metrics: [
      { value: "10M+", label: "Active Users" },
      { value: "#1", label: "Market Position" }
    ],
    tags: ["B2B SaaS", "Collaboration", "Market Leader"],
    gradient: "from-purple-500 to-pink-600"
  }
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Product Portfolio</h2>
          <p className="text-xl text-gray-600">
            Key products that drove significant business impact and user growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`h-48 bg-gradient-to-br ${product.gradient} relative overflow-hidden`}>
                  <img
                    src={product.image}
                    alt={`${product.title} interface`}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{product.title}</h3>
                    <p className="text-sm opacity-90">{product.subtitle}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {product.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-2xl font-bold text-gold metric-number">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-blue-100 text-blue-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-navy text-white hover:bg-navy/90">
                    View Case Study
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
