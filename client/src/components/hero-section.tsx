import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, Download, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function HeroSection() {
  const ref = useScrollReveal();

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="section-reveal pt-24 pb-16 px-4"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Card className="theme-surface rounded-3xl shadow-2xl p-8 sm:p-12 card-hover theme-border border">
          <motion.div variants={itemVariants}>
            <div className="w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              MF
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 theme-text-primary tracking-tight"
          >
            Muhammad Fazeel
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl mb-8 theme-text-secondary font-medium"
          >
            Technical Operations Coordinator
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <a
              href="mailto:fazeel@example.com"
              className="flex items-center space-x-2 theme-text-muted hover:theme-primary transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              <span>fazeel@example.com</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 theme-text-muted hover:theme-primary transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>+1 (234) 567-8900</span>
            </a>
            <a
              href="https://linkedin.com/in/fazeel"
              className="flex items-center space-x-2 theme-text-muted hover:theme-primary transition-colors duration-200"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/fazeel"
              className="flex items-center space-x-2 theme-text-muted hover:theme-primary transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              className="theme-primary-bg text-white px-8 py-3 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              onClick={() => window.print()}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              className="theme-surface theme-border px-8 py-3 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </motion.div>
        </Card>
      </motion.div>
    </section>
  );
}
