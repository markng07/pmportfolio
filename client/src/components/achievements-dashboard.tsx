import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, DollarSign, TrendingUp, Building, CheckCircle } from "lucide-react";

const metrics = [
  {
    icon: <Users className="text-white" size={24} />,
    value: "31M+",
    label: "Total Users Impacted",
    color: "bg-gold"
  },
  {
    icon: <DollarSign className="text-white" size={24} />,
    value: "$170M+",
    label: "Revenue Generated",
    color: "bg-gold"
  },
  {
    icon: <TrendingUp className="text-white" size={24} />,
    value: "180%",
    label: "Peak Growth Rate",
    color: "bg-gold"
  },
  {
    icon: <Building className="text-white" size={24} />,
    value: "25+",
    label: "Enterprise Partners",
    color: "bg-gold"
  }
];

const innovations = [
  "Built Vietnam's #1 workplace communication platform",
  "Launched AI-powered lending platform serving 1.5M users",
  "Developed digital identity platform for 25+ banks",
  "Reduced AI model costs by 24% through optimization"
];

const impacts = [
  "Generated $170M loan book with 180% YoY growth",
  "Increased customer acquisition by 10% through AI chatbot",
  "Reduced customer support costs by 30%",
  "Achieved 5x conversion rate uplift for credit cards"
];

export default function AchievementsDashboard() {
  return (
    <section id="achievements" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Key Achievements</h2>
          <p className="text-xl text-gray-600">
            Measurable impact across product management and business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`${metric.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                    {metric.icon}
                  </div>
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-3xl font-bold text-navy mb-2 metric-number"
                  >
                    {metric.value}
                  </motion.div>
                  <p className="text-gray-600">{metric.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy mb-6">Product Innovation</h3>
                <div className="space-y-4">
                  {innovations.map((innovation, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <CheckCircle className="text-gold mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{innovation}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy mb-6">Business Impact</h3>
                <div className="space-y-4">
                  {impacts.map((impact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <CheckCircle className="text-gold mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{impact}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
