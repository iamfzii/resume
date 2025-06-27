import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Download, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 px-4 mt-16 theme-surface theme-border border-t">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-heading font-semibold text-2xl mb-4 theme-text-primary">
            Let's Connect
          </h3>
          <p className="theme-text-secondary mb-6">
            Ready to collaborate on your next project? Let's discuss how I can help bring your technical vision to life.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a
              href="mailto:fazeel@example.com"
              className="flex items-center space-x-2 theme-text-muted hover:theme-primary transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              <span>fazeel@example.com</span>
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
          </div>

          <div className="flex justify-center space-x-4 mb-8">
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
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Call
            </Button>
          </div>

          <div className="pt-8 theme-border border-t">
            <p className="theme-text-muted text-sm">
              © 2024 Muhammad Fazeel. Designed with modern web technologies and attention to detail.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
