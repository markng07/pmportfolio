import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, TrendingUp, GraduationCap, Wrench, Tag } from "lucide-react";

const technicalSkills = [
  { name: "Python & Data Analytics", level: 95 },
  { name: "SQL & Database Management", level: 90 },
  { name: "AI/ML & LLMs", level: 85 },
  { name: "APIs & Cloud Platforms", level: 80 },
  { name: "Figma & UI/UX Design", level: 75 }
];

const domainSkills = [
  { name: "Product Strategy & Roadmapping", level: 95 },
  { name: "Digital Lending & Credit", level: 90 },
  { name: "Cross-functional Leadership", level: 90 },
  { name: "Growth & User Acquisition", level: 85 },
  { name: "Go-to-Market Strategy", level: 80 }
];

const specializations = [
  {
    icon: <GraduationCap className="text-gold" size={32} />,
    title: "Education",
    description: "MBA from Indiana University Kelley School of Business\nMS Computer Science from Texas A&M University"
  },
  {
    icon: <Wrench className="text-gold" size={32} />,
    title: "Tools & Platforms",
    description: "JIRA, Figma, Tableau, Google Analytics, Hotjar, Make.com"
  },
  {
    icon: <Tag className="text-gold" size={32} />,
    title: "Specializations",
    description: "Generative AI, Fintech Regulation, Product-Led Growth"
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600">
            Technical and domain competencies developed through hands-on experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-50 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy mb-6 flex items-center">
                  <Code className="text-gold mr-3" size={28} />
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  {technicalSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gold font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="skill-bar h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Domain Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-50 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-navy mb-6 flex items-center">
                  <TrendingUp className="text-gold mr-3" size={28} />
                  Domain Expertise
                </h3>
                <div className="space-y-4">
                  {domainSkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gold font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="skill-bar h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Certifications & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {specializations.map((spec, index) => (
            <div key={index} className="text-center">
              <div className="bg-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                {spec.icon}
              </div>
              <h4 className="text-xl font-bold text-navy mb-2">{spec.title}</h4>
              <p className="text-gray-600 whitespace-pre-line">{spec.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
