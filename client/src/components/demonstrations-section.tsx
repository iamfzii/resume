import { Card } from "@/components/ui/card";
import { Monitor, Bot, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const webDemos = [
  {
    title: "Cryptocurrency Price UI",
    description: "Real-time cryptocurrency price interface using public APIs, DOM manipulation, and event-driven UI logic.",
    techStack: "JavaScript, HTML, CSS"
  },
  {
    title: "JavaScript Counter App",
    description: "Simple counter app demonstrating logic handling with increment, decrement, and reset functionality.",
    techStack: "JavaScript, HTML, CSS"
  },
  {
    title: "React Counter App",
    description: "Component-based state management using React hooks for real-time UI updates.",
    techStack: "React.js"
  },
  {
    title: "JavaScript Calculator",
    description: "Basic calculator supporting arithmetic operations with responsive input/output handling.",
    techStack: "JavaScript, HTML, CSS"
  },
  {
    title: "Online Compiler UI (Simulated)",
    description: "Simulated code editor interface with input/output layout and interactive UI feedback.",
    techStack: "JavaScript, HTML, CSS"
  },
  {
    title: "Rock Paper Scissors Game",
    description: "Conditional logic and interactive gameplay UI using event listeners and DOM manipulation.",
    techStack: "JavaScript, HTML, CSS"
  },
  {
    title: "Stopwatch Timer",
    description: "Stopwatch timer with start, pause, and reset logic using JavaScript time functions.",
    techStack: "JavaScript, HTML, CSS"
  }
];

const mlDemos = [
  {
    title: "Neural Network – Digit Recognition",
    description: "Dense neural network to classify handwritten digits using MNIST dataset with evaluation metrics.",
    techStack: "Python, TensorFlow/Keras"
  },
  {
    title: "Simple Linear Regression – Salary Prediction",
    description: "Linear regression model to predict salary based on years of experience and plotted regression line.",
    techStack: "Python, Pandas, Scikit-learn"
  },
  {
    title: "Multiple Linear Regression – Salary Estimation",
    description: "Predicted salary using multiple independent variables; performed encoding and model evaluation.",
    techStack: "Python, Pandas, Scikit-learn"
  },
  {
    title: "Decision Tree Classifier – Food Likness",
    description: "Decision tree classifier to predict food preferences using demographic input features.",
    techStack: "Python, Scikit-learn"
  },
  {
    title: "K-NN Classifier – Food Likness Accuracy",
    description: "K-Nearest Neighbors algorithm for food preference classification and accuracy comparison.",
    techStack: "Python, Scikit-learn"
  },
  {
    title: "Unsupervised Learning – Clustering Models",
    description: "K-means, DBSCAN, Agglomerative Clustering, and K-medoids with cluster visualizations, confusion matrix, and silhouette analysis.",
    techStack: "Python, Scikit-learn, Matplotlib, Seaborn"
  }
];

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
          className="font-heading font-semibold text-3xl sm:text-4xl mb-12 text-center theme-text-primary"
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
              <h3 className="font-heading font-semibold text-xl mb-6 theme-primary flex items-center">
                <Monitor className="w-5 h-5 mr-3" />
                Web & UI Demonstrations
              </h3>

              <div className="space-y-4">
                {webDemos.map((demo, index) => (
                  <motion.div
                    key={demo.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium theme-text-primary">{demo.title}</h4>
                        <p className="text-sm theme-text-muted">{demo.description}</p>
                        <p className="text-xs theme-text-secondary font-mono mt-1">{demo.techStack}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 theme-text-secondary ml-4" />
                    </div>
                  </motion.div>
                ))}
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
              <h3 className="font-heading font-semibold text-xl mb-6 theme-primary flex items-center">
                <Bot className="w-5 h-5 mr-3" />
                Machine Learning Demonstrations
              </h3>

              <div className="space-y-4">
                {mlDemos.map((demo, index) => (
                  <motion.div
                    key={demo.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium theme-text-primary">{demo.title}</h4>
                        <p className="text-sm theme-text-muted">{demo.description}</p>
                        <p className="text-xs theme-text-secondary font-mono mt-1">{demo.techStack}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 theme-text-secondary ml-4" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
