import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Monitor, Bot, ExternalLink, Play, Code2, Zap, Brain, Cpu, Database } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const webDemos = [
  {
    title: "Cryptocurrency Price UI",
    description: "Real-time cryptocurrency price interface using public APIs, DOM manipulation, and event-driven UI logic.",
    techStack: ["JavaScript", "HTML", "CSS", "APIs"],
    icon: Database,
    status: "live",
    complexity: "intermediate"
  },
  {
    title: "JavaScript Counter App",
    description: "Simple counter app demonstrating logic handling with increment, decrement, and reset functionality.",
    techStack: ["JavaScript", "HTML", "CSS"],
    icon: Code2,
    status: "demo",
    complexity: "beginner"
  },
  {
    title: "React Counter App",
    description: "Component-based state management using React hooks for real-time UI updates.",
    techStack: ["React.js", "Hooks"],
    icon: Zap,
    status: "live",
    complexity: "intermediate"
  },
  {
    title: "JavaScript Calculator",
    description: "Basic calculator supporting arithmetic operations with responsive input/output handling.",
    techStack: ["JavaScript", "HTML", "CSS"],
    icon: Cpu,
    status: "demo",
    complexity: "beginner"
  },
  {
    title: "Online Compiler UI (Simulated)",
    description: "Simulated code editor interface with input/output layout and interactive UI feedback.",
    techStack: ["JavaScript", "HTML", "CSS"],
    icon: Code2,
    status: "prototype",
    complexity: "advanced"
  },
  {
    title: "Rock Paper Scissors Game",
    description: "Conditional logic and interactive gameplay UI using event listeners and DOM manipulation.",
    techStack: ["JavaScript", "HTML", "CSS"],
    icon: Play,
    status: "demo",
    complexity: "beginner"
  },
  {
    title: "Stopwatch Timer",
    description: "Stopwatch timer with start, pause, and reset logic using JavaScript time functions.",
    techStack: ["JavaScript", "HTML", "CSS"],
    icon: Zap,
    status: "demo",
    complexity: "beginner"
  }
];

const mlDemos = [
  {
    title: "Neural Network – Digit Recognition",
    description: "Dense neural network to classify handwritten digits using MNIST dataset with evaluation metrics.",
    techStack: ["Python", "TensorFlow", "Keras", "MNIST"],
    icon: Brain,
    status: "live",
    complexity: "advanced"
  },
  {
    title: "Simple Linear Regression – Salary Prediction",
    description: "Linear regression model to predict salary based on years of experience and plotted regression line.",
    techStack: ["Python", "Pandas", "Scikit-learn"],
    icon: Database,
    status: "demo",
    complexity: "intermediate"
  },
  {
    title: "Multiple Linear Regression – Salary Estimation",
    description: "Predicted salary using multiple independent variables; performed encoding and model evaluation.",
    techStack: ["Python", "Pandas", "Scikit-learn"],
    icon: Cpu,
    status: "demo",
    complexity: "advanced"
  },
  {
    title: "Decision Tree Classifier – Food Likness",
    description: "Decision tree classifier to predict food preferences using demographic input features.",
    techStack: ["Python", "Scikit-learn", "Classification"],
    icon: Brain,
    status: "demo",
    complexity: "intermediate"
  },
  {
    title: "K-NN Classifier – Food Likness Accuracy",
    description: "K-Nearest Neighbors algorithm for food preference classification and accuracy comparison.",
    techStack: ["Python", "Scikit-learn", "K-NN"],
    icon: Zap,
    status: "demo",
    complexity: "intermediate"
  },
  {
    title: "Unsupervised Learning – Clustering Models",
    description: "K-means, DBSCAN, Agglomerative Clustering, and K-medoids with cluster visualizations, confusion matrix, and silhouette analysis.",
    techStack: ["Python", "Scikit-learn", "Matplotlib", "Seaborn"],
    icon: Brain,
    status: "research",
    complexity: "advanced"
  }
];

const statusColors: Record<string, string> = {
  live: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  demo: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400", 
  prototype: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  research: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
};

const complexityColors: Record<string, string> = {
  beginner: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
  intermediate: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  advanced: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
};

export default function DemonstrationsSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="demos"
      ref={ref}
      className="section-reveal py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-semibold text-3xl sm:text-4xl mb-6 text-center theme-text-primary"
        >
          Live Demonstrations
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Web UI Demos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="theme-surface rounded-2xl shadow-lg p-6 theme-border border">
              <h3 className="font-heading font-semibold text-xl mb-4 theme-primary flex items-center">
                <Monitor className="w-5 h-5 mr-3" />
                Web & UI Demonstrations
              </h3>

              <div className="space-y-4">
                {webDemos.map((demo, index) => {
                  const IconComponent = demo.icon;
                  return (
                    <motion.div
                      key={demo.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ 
                        scale: 1.03,
                        rotateY: 2,
                        boxShadow: "0 20px 40px -12px rgba(0,0,0,0.25)"
                      }}
                      className="relative group cursor-pointer"
                    >
                      <div className="p-4 theme-surface rounded-xl border theme-border hover:theme-border transition-all duration-300 relative overflow-hidden">
                        {/* High-tech background pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-cyan-50/30 dark:from-blue-950/20 dark:to-cyan-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Circuit pattern */}
                        <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-15 transition-opacity duration-300">
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                            <circle cx="20" cy="20" r="3" fill="currentColor" />
                            <circle cx="80" cy="20" r="3" fill="currentColor" />
                            <circle cx="80" cy="80" r="3" fill="currentColor" />
                            <circle cx="20" cy="80" r="3" fill="currentColor" />
                            <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="1" />
                          </svg>
                        </div>

                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-400/10 dark:to-cyan-400/10">
                                <IconComponent className="w-5 h-5 theme-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold theme-text-primary text-sm">{demo.title}</h4>
                                <div className="flex items-center space-x-2 mt-1">
                                  <Badge className={`text-xs px-2 py-0.5 ${statusColors[demo.status]}`}>
                                    {demo.status}
                                  </Badge>
                                  <Badge className={`text-xs px-2 py-0.5 ${complexityColors[demo.complexity]}`}>
                                    {demo.complexity}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                          
                          <p className="text-sm theme-text-muted mb-3 leading-relaxed">{demo.description}</p>
                          
                          <div className="flex flex-wrap gap-1">
                            {demo.techStack.map((tech, techIndex) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs px-2 py-0.5 font-mono bg-gray-100 dark:bg-gray-800 theme-text-secondary"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          {/* ML Demos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="theme-surface rounded-2xl shadow-lg p-6 theme-border border">
              <h3 className="font-heading font-semibold text-xl mb-4 theme-primary flex items-center">
                <Bot className="w-5 h-5 mr-3" />
                Machine Learning Demonstrations
              </h3>

              <div className="space-y-4">
                {mlDemos.map((demo, index) => {
                  const IconComponent = demo.icon;
                  return (
                    <motion.div
                      key={demo.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ 
                        scale: 1.03,
                        rotateY: -2,
                        boxShadow: "0 20px 40px -12px rgba(0,0,0,0.25)"
                      }}
                      className="relative group cursor-pointer"
                    >
                      <div className="p-4 theme-surface rounded-xl border theme-border hover:theme-border transition-all duration-300 relative overflow-hidden">
                        {/* AI/ML specific background pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Neural network pattern */}
                        <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-15 transition-opacity duration-300">
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <circle cx="20" cy="30" r="4" fill="currentColor" />
                            <circle cx="20" cy="50" r="4" fill="currentColor" />
                            <circle cx="20" cy="70" r="4" fill="currentColor" />
                            <circle cx="50" cy="40" r="4" fill="currentColor" />
                            <circle cx="50" cy="60" r="4" fill="currentColor" />
                            <circle cx="80" cy="50" r="4" fill="currentColor" />
                            <line x1="24" y1="30" x2="46" y2="40" stroke="currentColor" strokeWidth="1" />
                            <line x1="24" y1="50" x2="46" y2="40" stroke="currentColor" strokeWidth="1" />
                            <line x1="24" y1="70" x2="46" y2="60" stroke="currentColor" strokeWidth="1" />
                            <line x1="54" y1="40" x2="76" y2="50" stroke="currentColor" strokeWidth="1" />
                            <line x1="54" y1="60" x2="76" y2="50" stroke="currentColor" strokeWidth="1" />
                          </svg>
                        </div>

                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-400/10 dark:to-pink-400/10">
                                <IconComponent className="w-5 h-5 theme-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold theme-text-primary text-sm">{demo.title}</h4>
                                <div className="flex items-center space-x-2 mt-1">
                                  <Badge className={`text-xs px-2 py-0.5 ${statusColors[demo.status]}`}>
                                    {demo.status}
                                  </Badge>
                                  <Badge className={`text-xs px-2 py-0.5 ${complexityColors[demo.complexity]}`}>
                                    {demo.complexity}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                          
                          <p className="text-sm theme-text-muted mb-3 leading-relaxed">{demo.description}</p>
                          
                          <div className="flex flex-wrap gap-1">
                            {demo.techStack.map((tech, techIndex) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs px-2 py-0.5 font-mono bg-gray-100 dark:bg-gray-800 theme-text-secondary"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
