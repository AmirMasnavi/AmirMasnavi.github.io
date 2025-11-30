import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Calendar, MapPin, Star, Code, Server, Database, Terminal } from "lucide-react";

const education = [
  {
    id: 1,
    period: "Sep 2022 – Present",
    institution: "Instituto Superior de Engenharia do Porto (ISEP)",
    degree: "BSc in Informatics Engineering",
    location: "Porto, Portugal",
    current: true,
    highlights: [
      "Specializing in Software Architecture and Distributed Systems.",
      "Hands-on experience with agile methodologies (Scrum) and complex system modeling.",
      "Database management (Oracle/SQL) and Algorithm efficiency."
    ]
  },
  {
    id: 2,
    period: "Sep 2021 – Jul 2022",
    institution: "Shahid Beheshti University",
    degree: "BSc in Mathematics (1st Year Completed)",
    location: "Tehran, Iran",
    current: false,
    highlights: [
      "Rigorous coursework in Calculus, Linear Algebra, and Logic.",
      "Developed strong analytical mindset applied to algorithmic problem solving.",
      "Completed first year with distinction before relocating to Portugal."
    ]
  }
];

const topSkills = [
  { id: 1, symbol: "J", name: "Java (DDD)", sub: "Backend Architecture", color: "text-accent" },
  { id: 2, symbol: "C#", name: "C# / .NET", sub: "Enterprise Systems", color: "text-blue-400" },
  { id: 3, symbol: "DO", name: "DevOps", sub: "Docker & CI/CD", color: "text-green-400" },
  { id: 4, symbol: "DB", name: "SQL", sub: "Oracle & MySQL", color: "text-purple-400" },
];

const otherSkills = [
  "Git & GitHub", "Linux/Bash", "REST APIs", "Unit Testing", 
  "System Design", "C/C++", "React/Next.js"
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 notebook-paper opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="handwritten text-3xl text-primary mb-2">Education & Skills</h2>
            <div className="w-24 h-1 bg-accent/30 mx-auto mb-4"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column: Education */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-accent/10 rounded-full mr-3">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="marker-text text-2xl text-primary chalk-underline inline-block">
                  Academic Journey
                </h3>
              </div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {education.map((edu) => (
                  <motion.div key={edu.id} variants={itemVariants} className="relative">
                    <div className="notebook-paper paper-fold rounded-lg p-6 shadow-md hover-lift">
                      <div className="flex flex-wrap justify-between items-start mb-4">
                        <h4 className="marker-text text-xl text-primary">{edu.degree}</h4>
                        {edu.current && (
                          // CSS FIX: Added 'mr-12' to prevent overlap with the folded corner
                          <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium mr-12">
                            Current
                          </span>
                        )}
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center text-foreground mb-2">
                          <BookOpen className="h-4 w-4 text-accent mr-2" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-foreground/70 text-sm">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-accent/5 p-3 rounded-lg">
                        <h5 className="font-medium text-foreground mb-2 flex items-center">
                          <Star className="h-4 w-4 text-accent mr-2" />
                          Highlights
                        </h5>
                        <ul className="space-y-1 text-foreground/70 text-sm">
                          {edu.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-accent mr-2">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Right Column: Skills & Languages */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="self-start"
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-accent/10 rounded-full mr-3">
                  <Terminal className="h-6 w-6 text-accent" />
                </div>
                <h3 className="marker-text text-2xl text-primary chalk-underline inline-block">
                  Skills & Languages
                </h3>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="notebook-paper paper-fold rounded-lg p-6 shadow-md mb-6"
              >
                <h4 className="marker-text text-lg text-primary mb-4">Top Skills</h4>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {topSkills.map((skill) => (
                    <div key={skill.id} className="bg-background border border-border rounded-lg p-3 flex flex-col items-center text-center hover-lift">
                      <div className="bg-accent/10 p-2 rounded-full mb-2">
                        <div className={`h-8 w-8 flex items-center justify-center font-bold ${skill.color}`}>{skill.symbol}</div>
                      </div>
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-foreground/60 text-xs">{skill.sub}</span>
                    </div>
                  ))}
                </div>
                
                <h5 className="text-foreground font-medium mb-2">Other Skills</h5>
                <div className="flex flex-wrap gap-2 mb-6">
                  {otherSkills.map((skill, index) => (
                    <span key={index} className="bg-background text-foreground/80 text-xs px-3 py-1 rounded-full border border-border">
                      {skill}
                    </span>
                  ))}
                </div>

                <h4 className="marker-text text-lg text-primary mb-4 pt-4 border-t border-dashed border-border">Languages</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Farsi (Persian)</span>
                    <span className="text-foreground/70 text-sm bg-accent/5 px-2 py-0.5 rounded">Native</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">English</span>
                    <span className="text-foreground/70 text-sm bg-accent/5 px-2 py-0.5 rounded">Fluent</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Portuguese</span>
                    <span className="text-foreground/70 text-sm bg-accent/5 px-2 py-0.5 rounded">Conversational</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;