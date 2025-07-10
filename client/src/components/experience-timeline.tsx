import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "JexTrade",
    position: "Product Lead",
    period: "Jan 2025 – Present",
    location: "Chicago, IL",
    description: "Leading end-to-end development of V1 MVP for cutting-edge prediction market startup leveraging blockchain technology.",
    tags: ["Blockchain", "MVP Development", "GTM Strategy"],
    side: "right"
  },
  {
    company: "RUCKUS Networks",
    position: "Product Marketing Manager Intern",
    period: "May – Aug 2024",
    location: "Sunnyvale, CA",
    description: "Conducted competitive analysis across $115M product line, developed marketing strategy with 16 strategic use cases.",
    tags: ["Market Analysis", "$115M Revenue", "B2B Strategy"],
    side: "left"
  },
  {
    company: "MoMo ($2B Fintech)",
    position: "Group Product Manager",
    period: "Sep 2022 – Jul 2023",
    location: "Vietnam",
    description: "Led Digital Lending products serving 1.5M borrowers, achieving $170M loan book and 180% YoY growth.",
    tags: ["1.5M Users", "$170M Revenue", "180% Growth"],
    side: "right"
  },
  {
    company: "Trusting Social (Sequoia-funded)",
    position: "Senior Product Manager",
    period: "Nov 2018 – Sep 2022",
    location: "India, Indonesia & Vietnam",
    description: "Led AI-powered digital identity platform adopted by 25+ banks and Vodafone India, serving 20M+ users.",
    tags: ["25+ Banks", "20M+ Users", "AI/ML"],
    side: "left"
  },
  {
    company: "Zalo Group, VNG",
    position: "Product Manager",
    period: "Jun 2016 – Nov 2018",
    location: "Vietnam",
    description: "Built Zalo for Work into Vietnam's #1 workplace communication tool with 10M+ users in 8 months.",
    tags: ["10M+ Users", "#1 Market Position", "B2B SaaS"],
    side: "right"
  }
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Career Journey</h2>
          <p className="text-xl text-gray-600">
            Building products that drive growth and impact millions of users
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gold"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: exp.side === "right" ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative pl-12 md:pl-0 ${
                  exp.side === "right" ? "md:grid md:grid-cols-2 md:gap-8" : "md:grid md:grid-cols-2 md:gap-8"
                } items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-white shadow-lg"></div>

                {exp.side === "right" ? (
                  <>
                    <div className="md:text-right">
                      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-gold">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:items-end">
                            <span className="text-gold text-sm font-semibold mb-1">
                              {exp.period}
                            </span>
                            <h3 className="text-2xl font-bold text-navy mb-2">
                              {exp.position}
                            </h3>
                            <h4 className="text-lg text-gray-600 mb-4">
                              {exp.company}
                            </h4>
                            <p className="text-gray-700 mb-4">{exp.description}</p>
                            <div className="flex flex-wrap gap-2 justify-end">
                              {exp.tags.map((tag, tagIndex) => (
                                <Badge
                                  key={tagIndex}
                                  className="bg-gold text-white hover:bg-gold/90"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:block"></div>
                    <div>
                      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-gold">
                        <CardContent className="p-6">
                          <span className="text-gold text-sm font-semibold mb-1">
                            {exp.period}
                          </span>
                          <h3 className="text-2xl font-bold text-navy mb-2">
                            {exp.position}
                          </h3>
                          <h4 className="text-lg text-gray-600 mb-4">
                            {exp.company}
                          </h4>
                          <p className="text-gray-700 mb-4">{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.tags.map((tag, tagIndex) => (
                              <Badge
                                key={tagIndex}
                                className="bg-gold text-white hover:bg-gold/90"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
