import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Calculator, FileText, Hand, BarChart3, Ship, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const projects = [
  {
    title: "Messaging Android Application",
    icon: Smartphone,
    description: "Designed native Android UI, implemented RecyclerView for dynamic message loading, applied custom XML layouts, and followed Material Design principles.",
    techStack: ["Java", "Android Studio", "XML", "Material Design", "RecyclerView"],
    techColors: ["bg-orange-100 text-orange-800", "bg-green-100 text-green-800", "bg-blue-100 text-blue-800", "bg-purple-100 text-purple-800", "bg-gray-100 text-gray-800"]
  },
  {
    title: "Tax Calculator Web App",
    icon: Calculator,
    description: "Converted static Figma designs into responsive components, implemented real-time form logic, and applied React state management for user input handling.",
    techStack: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap", "Figma"],
    techColors: ["bg-cyan-100 text-cyan-800", "bg-yellow-100 text-yellow-800", "bg-orange-100 text-orange-800", "bg-blue-100 text-blue-800", "bg-purple-100 text-purple-800", "bg-pink-100 text-pink-800"]
  },
  {
    title: "Fake News Classification System",
    icon: FileText,
    description: "Preprocessed text data, applied TF-IDF vectorization, trained logistic regression model, and evaluated classification accuracy.",
    techStack: ["Python", "Scikit-learn", "NLTK", "TfidfVectorizer"],
    techColors: ["bg-blue-100 text-blue-800", "bg-red-100 text-red-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800"]
  },
  {
    title: "Hand Gesture Presentation Controller",
    icon: Hand,
    description: "Captured hand landmarks using Mediapipe, integrated real-time gesture recognition with screen control automation.",
    techStack: ["Python", "OpenCV", "Mediapipe", "PyAutoGUI"],
    techColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800", "bg-orange-100 text-orange-800"]
  },
  {
    title: "Logistics Dashboard (Internship)",
    icon: BarChart3,
    description: "Built frontend dashboard views, integrated REST APIs for backend data flow, and participated in feature coordination during development sprints.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Axios"],
    techColors: ["bg-green-100 text-green-800", "bg-gray-100 text-gray-800", "bg-cyan-100 text-cyan-800", "bg-green-100 text-green-800", "bg-red-100 text-red-800"]
  },
  {
    title: "Titanic Survival Prediction",
    icon: Ship,
    description: "Cleaned and visualized dataset, applied logistic regression, analyzed model performance using accuracy and confusion matrix.",
    techStack: ["Python", "Pandas", "Scikit-learn", "Seaborn"],
    techColors: ["bg-blue-100 text-blue-800", "bg-orange-100 text-orange-800", "bg-red-100 text-red-800", "bg-purple-100 text-purple-800"]
  }
];

export default function ProjectsSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="projects"
      ref={ref}
      className="section-reveal py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-semibold text-3xl sm:text-4xl mb-12 text-center theme-text-primary"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5 
                }}
                className="perspective-1000"
              >
                <Card className="theme-surface rounded-2xl shadow-lg p-6 card-hover theme-border border h-full flex flex-col relative overflow-hidden group cursor-pointer">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Tech pattern overlay */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
                      <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
                      <line x1="30" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="1" />
                      <line x1="50" y1="30" x2="50" y2="70" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <IconComponent className="w-6 h-6 theme-primary mr-3" />
                      <h3 className="font-heading font-semibold text-lg theme-text-primary flex-1">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="theme-text-secondary mb-4 text-sm leading-relaxed flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className={`px-2 py-1 text-xs font-mono ${
                            project.techColors[techIndex % project.techColors.length]
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3 mt-auto">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 theme-surface theme-border hover:shadow-md transition-all duration-200"
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="theme-primary-bg text-white hover:shadow-md transition-all duration-200"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
