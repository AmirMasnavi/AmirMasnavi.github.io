import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Users,
  Calendar,
  Briefcase,
  Building,
  MapPin,
  Globe,
  Code,
  Zap,
  ExternalLink,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    period: "Sep 2024 – Present",
    role: "IT, Partnerships & Event Organizer",
    organization: "Erasmus Student Network (ESN) Porto",
    url: "https://www.esnporto.org/",
    location: "Porto, Portugal",
    icon: <Code className="h-5 w-5 text-accent" />,
  },
  {
    id: 2,
    period: "Sep 2024 – Present",
    role: "Events Department",
    organization: "Núcleo de Estudantes de Informática (NEI)",
    url: "https://nei-isep.org/",
    location: "Porto, Portugal",
    icon: <Users className="h-5 w-5 text-accent" />,
  },
  {
    id: 3,
    period: "Sep 2021 – Mar 2022",
    role: "Marketing Manager",
    organization: "Cllive.net",
    url: "https://cllive.net/",
    location: "Tehran, Iran",
    icon: <Globe className="h-5 w-5 text-accent" />,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ESNSection = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 notebook-paper opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="handwritten text-3xl text-primary mb-2">
              Experience & Leadership
            </h2>
            <div className="w-24 h-1 bg-accent/30 mx-auto mb-4"></div>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              Combining engineering skills with leadership to solve real-world
              logistical problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6 ">
                <div className="p-2 bg-accent/10 rounded-full mr-3">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <h3 className="marker-text text-2xl text-primary chalk-underline inline-block">
                  Timeline
                </h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative border-l-2 border-border pl-8 ml-4 space-y-8 pt-6 before:content-[''] before:absolute before:top-0 before:left-[-5px] before:w-2 before:h-2 before:bg-accent before:rounded-full before:z-20 after:content-[''] after:absolute after:bottom-0 after:left-[-5px] after:w-2 after:h-2 after:bg-accent after:rounded-full after:z-20"
              >
                {experiences.map((exp) => (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="absolute left-[-39px] top-1 bg-background border-2 border-border rounded-full p-1 z-10">
                      {exp.icon}
                    </div>

                    <div className="relative z-10">
                      {/* Solid background layer to block the timeline */}
                      <div className="absolute inset-0 bg-background rounded-lg"></div>

                      <div className="notebook-paper paper-fold p-4 rounded-lg shadow-sm hover-lift relative">
                        <div className="flex flex-wrap justify-between items-start mb-2">
                          <h4 className="marker-text text-lg text-primary mr-2">
                            {exp.role}
                          </h4>

                          {/* CSS FIX: Added 'mr-12' to push the date away from the folded corner */}
                          <span className="text-xs flex items-center bg-accent/10 px-2 py-1 rounded-full whitespace-nowrap mr-12">
                            <Calendar className="h-3 w-3 text-accent mr-1" />
                            <span className="text-foreground/70">
                              {exp.period}
                            </span>
                          </span>
                        </div>

                        {/* LINK ADDED: Wraps organization name */}
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground mb-1 font-medium hover:text-accent transition flex items-center gap-1 w-fit"
                        >
                          {exp.organization}
                          <ExternalLink className="h-3 w-3 opacity-50" />
                        </a>

                        <div className="flex items-center text-foreground/70 text-sm mt-1">
                          <MapPin className="h-3 w-3 text-accent/70 mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Leadership Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-accent/10 rounded-full mr-3">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="marker-text text-2xl text-primary chalk-underline inline-block">
                  Impact at ESN Porto
                </h3>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="notebook-paper paper-fold p-6 rounded-lg shadow-md mb-6"
              >
                <p className="text-foreground/80 mb-4">
                  At ESN Porto, I moved beyond standard volunteering to focus on{" "}
                  <strong>process optimization</strong> and{" "}
                  <strong>strategic growth</strong>.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <div>
                      <h5 className="font-medium text-foreground">
                        Automation & Tech
                      </h5>
                      <p className="text-foreground/70 text-sm">
                        Streamlined internal workflows using{" "}
                        <strong>n8n</strong> and prototyped event registration
                        SPAs using <strong>v0</strong> to reduce manual admin
                        work.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <div>
                      <h5 className="font-medium text-foreground">
                        Strategic Partnerships
                      </h5>
                      <p className="text-foreground/70 text-sm">
                        {/* UPDATED NUMBER */}
                        Negotiated agreements with local businesses, securing
                        discounts and benefits for over{" "}
                        <strong>3,500+ international students</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <div>
                      <h5 className="font-medium text-foreground">
                        Event Management
                      </h5>
                      <p className="text-foreground/70 text-sm">
                        Lead organizer for large-scale events (400+ attendees),
                        managing logistics, budgeting, and team coordination.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition"
                  >
                    {/* CHANGED CTA TEXT */}
                    <span>Let's chat about my experience</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="transform -rotate-2 bg-accent/5 p-4 rounded-lg shadow-sm border border-border"
              >
                <p className="handwritten text-foreground/90 text-lg">
                  "Leadership isn't just about managing people; it's about
                  building systems that help people succeed."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESNSection;
