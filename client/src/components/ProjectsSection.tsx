import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Code,
  Layers,
  Database,
  Ship,
  Factory,
  ShoppingBag,
  Server,
  Cpu,
  BarChart3,
  Lock, // New Icons imported here
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Shodrone — Drone Show Back-Office",
    tags: ["Java 17", "Maven", "DDD", "ANTLR DSL", "JPA/Hibernate", "CI/CD"],
    description:
      "A back-office system for customized drone shows. A multi-module Java platform built with Domain-Driven Design, custom ANTLR-based DSLs for describing shows, JPA/Hibernate persistence, authentication, and a JUnit/Mockito test suite.",
    icon: <Server className="h-8 w-8 text-accent" />,
    linkText: "View Architecture",
    linkUrl: "https://github.com/AmirMasnavi/Shodrone",
  },
  {
    id: 2,
    title: "Port Logistics System",
    tags: [".NET 9", "DDD", "EF Core", "CI/CD", "Prolog", "Microservices"],
    description:
      "A microservice-based port operations platform. A .NET 9 / ASP.NET Core REST API built with Domain-Driven Design and Entity Framework Core, a Node.js service, a Prolog genetic-algorithm scheduler, and GitHub Actions CI/CD (with a React/Three.js 3D frontend).",
    icon: <Ship className="h-8 w-8 text-accent" />,
    linkText: "View on GitHub",
    linkUrl: "https://github.com/AmirMasnavi/Port-Logistics-Management-System",
  },
  {
    id: 3,
    title: "Industrial Simulator",
    tags: ["Java", "Data Structures", "Oracle PL/SQL", "C"],
    description:
      "A job-shop production simulator that optimizes machine scheduling and detects bottlenecks. Built with a Java simulation engine (AVL/BST trees, priority queues), an Oracle PL/SQL database, and C modules for sensor integration.",
    icon: <Factory className="h-8 w-8 text-accent" />,
    linkText: "View on GitHub",
    linkUrl: "https://github.com/AmirMasnavi/Industrial-Production-Simulator",
  },
  {
    id: 4,
    title: "Drone Fleet Simulation",
    tags: ["C", "Concurrency", "POSIX", "Multithreading"],
    description:
      "A multi-process, multi-threaded drone simulator in C. Uses POSIX shared memory, semaphores, threads, and signals to keep a parent process and one child process per drone in lockstep, with between-step collision detection.",
    icon: <Cpu className="h-8 w-8 text-accent" />,
    linkText: "View on GitHub",
    linkUrl: "https://github.com/AmirMasnavi/Drone_project",
  },
  {
    id: 5,
    title: "GridLightEV — Data Analysis",
    tags: ["Python", "pandas", "statsmodels", "Plotly Dash"],
    description:
      "A data-science study on whether LED street-lighting upgrades free enough grid capacity for EV charging. Full pipeline: exploratory analysis, statistical inference, and regression modeling, with a bilingual Plotly Dash dashboard.",
    icon: <BarChart3 className="h-8 w-8 text-accent" />,
    linkText: "Available on request",
    linkUrl: "",
    isPrivate: true,
  },
  {
    id: 6,
    title: "Skateboard E-Commerce",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    description:
      "A modern, type-safe e-commerce frontend. Focuses on component-based architecture, responsive UI/UX, and cart state management.",
    icon: <ShoppingBag className="h-8 w-8 text-accent" />,
    linkText: "View Live Demo",
    linkUrl: "https://staymellow.netlify.app/",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  return (
    <motion.div
      variants={itemVariants}
      className="notebook-paper paper-fold rounded-lg shadow-md overflow-hidden hover-lift"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="marker-text text-xl text-primary mb-2">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-accent/10 text-foreground/90 rounded-md border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="p-2 bg-accent/10 rounded-full">{project.icon}</div>
        </div>

        <p className="text-foreground/70 mb-4">{project.description}</p>

        <div className="flex justify-between items-center">
          {project.linkUrl ? (
            <a
              href={project.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 font-medium flex items-center transition"
            >
              <span>{project.linkText}</span>
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          ) : (
            <span className="text-foreground/50 font-medium flex items-center cursor-not-allowed">
              <span>{project.linkText}</span>
              <Lock className="h-4 w-4 ml-1" />
            </span>
          )}
        </div>
      </div>

      {/* Corner fold with number */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-transparent via-transparent to-accent/10 flex items-end justify-end p-1">
        <span className="handwritten text-foreground/60 text-sm">
          {index + 1}
        </span>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  // Custom icons for the section
  const projectIcons = [
    { icon: <Code className="h-5 w-5 text-accent" />, label: "Code" },
    { icon: <Layers className="h-5 w-5 text-accent" />, label: "Architecture" },
    { icon: <Database className="h-5 w-5 text-accent" />, label: "Data" },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-muted/50 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 notebook-paper opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h2 className="handwritten text-3xl text-primary mb-2">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-accent/30 mx-auto mb-4"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {projectIcons.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-background p-3 rounded-full border border-border shadow-sm mb-2">
                  {item.icon}
                </div>
                <span className="text-foreground/70 text-sm">{item.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-foreground/80 text-center mb-12 max-w-3xl mx-auto"
          >
            Here are some of the projects I've worked on that showcase my skills
            and interests. Each project represents a different aspect of my
            technical capabilities.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/AmirMasnavi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-background border border-border hover:border-accent text-foreground hover:text-accent font-medium rounded-md transition shadow-sm"
            >
              <span>View More on GitHub</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
