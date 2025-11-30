import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ExternalLink,
  Github,
  Download,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with professional format
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Dear Amir Masnavi,\n\n${formData.message}\n\n---\nBest regards,\n${formData.name}\n${formData.email}`
    );

    // Open email client with pre-filled data
    window.location.href = `mailto:a.masnavi1382@gmail.com?subject=${subject}&body=${body}`;

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

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

  return (
    <section
      id="contact"
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
            className="text-center mb-12"
          >
            <h2 className="handwritten text-3xl text-primary mb-2">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-accent/30 mx-auto mb-4"></div>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              Have a question about my work or want to discuss potential
              opportunities? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="marker-text text-2xl text-primary mb-6 chalk-underline inline-block">
                Send me a message
              </h3>

              <motion.div
                className="notebook-paper paper-fold rounded-lg p-8 shadow-md relative"
                whileHover={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
              >
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="name"
                      className="block handwritten text-base text-foreground/80 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition"
                      placeholder="John Doe"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="email"
                      className="block handwritten text-base text-foreground/80 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition"
                      placeholder="john@example.com"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="message"
                      className="block handwritten text-base text-foreground/80 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-md focus:ring-2 focus:ring-accent focus:border-accent transition"
                      placeholder="I'd like to discuss an opportunity..."
                      required
                    ></textarea>
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-medium py-3 rounded-md transition shadow-sm flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="h-5 w-5 mr-2" />
                    <span>Send Message</span>
                  </motion.button>
                </form>

                {/* Decorative corner notes */}
                <div className="absolute -bottom-3 -left-2 transform rotate-6">
                  <div className="bg-accent/10 py-1 px-3 rounded-md shadow-sm">
                    <span className="handwritten text-foreground/60 text-xs">
                      drop me a line
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Download Resume - Below the form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-8 pt-8 border-t border-border text-center"
              >
                <h4 className="handwritten text-xl text-primary mb-4">
                  Download my Resume
                </h4>
                <a
                  href="/Amir_Masnavi_CV.pdf"
                  download="Amir_Masnavi_CV.pdf"
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/80 text-primary-foreground font-medium rounded-md transition shadow-sm hover-lift"
                >
                  <Download className="h-5 w-5 mr-2" />
                  <span>Download CV (PDF)</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={containerVariants}
              className="space-y-6"
            >
              <h3 className="marker-text text-2xl text-primary mb-6 chalk-underline inline-block">
                Connect with me
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.div
                  variants={itemVariants}
                  className="notebook-paper rounded-lg p-6 flex items-start hover-lift shadow-sm"
                >
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="marker-text text-lg text-primary mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:a.masnavi1382@gmail.com"
                      className="text-accent hover:text-accent/80 transition block mb-1"
                    >
                      a.masnavi1382@gmail.com
                    </a>
                    <div className="flex items-center text-foreground/60 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Usually respond within 24 hours</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="notebook-paper rounded-lg p-6 flex items-start hover-lift shadow-sm"
                >
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <ExternalLink className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="marker-text text-lg text-primary mb-1">
                      LinkedIn
                    </h4>
                    <a
                      href="https://www.linkedin.com/in/amir-masnavi-b1ab61293"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition block mb-1"
                    >
                      linkedin.com/in/amir-masnavi
                    </a>
                    <p className="text-foreground/60 text-sm">
                      Connect with me professionally
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="notebook-paper rounded-lg p-6 flex items-start hover-lift shadow-sm"
                >
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <Github className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="marker-text text-lg text-primary mb-1">
                      GitHub
                    </h4>
                    <a
                      href="https://github.com/AmirMasnavi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition block mb-1"
                    >
                      github.com/AmirMasnavi
                    </a>
                    <p className="text-foreground/60 text-sm">
                      Check out my code repositories
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="notebook-paper rounded-lg p-6 flex items-start hover-lift shadow-sm"
                >
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="marker-text text-lg text-primary mb-1">
                      Location
                    </h4>
                    <p className="text-foreground mb-1">Porto, Portugal</p>
                    <p className="text-foreground/60 text-sm">
                      Available for remote opportunities worldwide
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
