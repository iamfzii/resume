import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Server, Brain, Zap, Cloud, Settings, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const skillCategories = [
  {
    title: "Programming & Scripting Languages",
    icon: Code,
    skills: ["Python", "JavaScript", "Java", "C++", "HTML5", "CSS3", "Bash", "XML", "JSON"],
    colors: ["bg-blue-100 text-blue-800", "bg-yellow-100 text-yellow-800", "bg-red-100 text-red-800", "bg-purple-100 text-purple-800", "bg-orange-100 text-orange-800", "bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-gray-100 text-gray-800", "bg-indigo-100 text-indigo-800"]
  },
  {
    title: "Frontend Development & UI Technologies",
    icon: Palette,
    skills: ["React.js", "Tailwind CSS", "Bootstrap", "HTML/CSS", "Responsive Web Design", "DOM Manipulation", "Component-Based Architecture", "State Management", "UI Prototyping", "Figma to Code Conversion"],
    colors: ["bg-cyan-100 text-cyan-800", "bg-blue-100 text-blue-800", "bg-purple-100 text-purple-800", "bg-orange-100 text-orange-800", "bg-green-100 text-green-800", "bg-pink-100 text-pink-800"]
  },
  {
    title: "Backend Development & API Integration",
    icon: Server,
    skills: ["Node.js", "Express.js", "RESTful APIs", "API Testing (Postman)", "CRUD Operations", "Authentication & Authorization Workflows"],
    colors: ["bg-green-100 text-green-800", "bg-gray-100 text-gray-800", "bg-blue-100 text-blue-800", "bg-orange-100 text-orange-800", "bg-purple-100 text-purple-800"]
  },
  {
    title: "Data Science & Machine Learning",
    icon: Brain,
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "OpenCV", "TensorFlow", "Keras", "TfidfVectorizer", "NLTK", "Mediapipe", "Data Preprocessing", "Data Visualization", "Regression", "Classification", "Clustering"],
    colors: ["bg-blue-100 text-blue-800", "bg-orange-100 text-orange-800", "bg-red-100 text-red-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800", "bg-yellow-100 text-yellow-800"]
  },
  {
    title: "AI & Automation Tools",
    icon: Zap,
    skills: ["ChatGPT", "Gemini", "GitHub Copilot", "Notion AI", "Canva AI", "Midjourney", "AI Text Classification", "Prompt Engineering", "NLP Implementation"],
    colors: ["bg-green-100 text-green-800", "bg-blue-100 text-blue-800", "bg-gray-100 text-gray-800", "bg-purple-100 text-purple-800", "bg-pink-100 text-pink-800"]
  },
  {
    title: "DevOps, Hosting & Deployment",
    icon: Cloud,
    skills: ["cPanel", "WHM", "Netlify", "Vercel", "FTP", "Git", "GitHub", "CI/CD Awareness", "DNS Management", "Domain Configuration", "Web Hosting Management", "WordPress CMS", "Google Workspace Admin"],
    colors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800", "bg-orange-100 text-orange-800", "bg-gray-100 text-gray-800"]
  },
  {
    title: "Project Management & Agile Tools",
    icon: Settings,
    skills: ["Jira", "Trello", "Asana", "ClickUp", "Slack", "Google Sheets", "Agile Methodologies", "Sprint Planning", "Task Tracking", "Kanban Boards", "Team Collaboration"],
    colors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-red-100 text-red-800", "bg-purple-100 text-purple-800", "bg-yellow-100 text-yellow-800"]
  },
  {
    title: "Marketing & Product Tools",
    icon: TrendingUp,
    skills: ["Facebook Ads Manager", "Meta Pixel", "A/B Testing", "Campaign Tracking", "Landing Page Deployment", "Ad Creative Coordination"],
    colors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-orange-100 text-orange-800", "bg-purple-100 text-purple-800"]
  }
];

export default function SkillsSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="skills"
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
          Skill Stack
        </motion.h2>

        <div className="grid gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <Card className="theme-surface rounded-2xl shadow-lg p-6 card-hover theme-border border">
                  <h3 className="font-heading font-semibold text-xl mb-4 theme-primary flex items-center">
                    <IconComponent className="w-5 h-5 mr-3" />
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="skill-badge"
                      >
                        <Badge
                          variant="secondary"
                          className={`px-3 py-1 text-sm font-medium transition-transform duration-200 cursor-pointer ${
                            category.colors[skillIndex % category.colors.length]
                          }`}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
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
