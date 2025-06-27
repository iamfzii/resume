import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const experiences = [
  {
    title: "Project & Marketing Lead",
    company: "Capestone Shipping - Dubai (Remote)",
    period: "Feb 2024 - Present",
    status: "current",
    achievements: [
      "Led cross-functional teams across logistics, hosting, and marketing for 50+ international clients",
      "Managed AED 100k+ monthly project portfolio with 97% on-time delivery",
      "Oversaw web hosting, server setup, domain, and email configurations for 30+ clients",
      "Executed campaigns driving 45% higher engagement and 25% revenue growth",
      "Applied Agile (Scrum) to cut project delays by 35% and improve delivery speed",
      "Reported KPIs weekly to Dubai HQ and used tools like Jira, Trello, and Asana for team coordination"
    ]
  },
  {
    title: "Project Assistant & Coordinator",
    company: "GODEV",
    period: "June 2022 - Jan 2024",
    status: "previous",
    achievements: [
      "Coordinated schedules and resources across 5 teams, delivering 40+ projects & modules with high client satisfaction",
      "Facilitated 60+ client meetings resulting in 98% requirement accuracy & zero scope creep incidents",
      "Monitored multiple project progress, reporting risks and corrective actions to senior management",
      "Supported Agile ceremonies for teams of 6-10 developers",
      "Maintained documentation and version control, reducing communication gaps by 50%",
      "Trained 3 juniors on project management and tools"
    ]
  },
  {
    title: "Web Developer Intern (MERN Stack)",
    company: "GODEV",
    period: "March 2022 - June 2022",
    status: "internship",
    achievements: [
      "Contributed to front-end development tasks using HTML, CSS, and JavaScript",
      "Worked in an Agile environment with regular sprint planning and team collaboration",
      "Participated in standups, project updates, and code versioning discussions"
    ]
  }
];

const statusColors = {
  current: "bg-green-100 text-green-800",
  previous: "bg-blue-100 text-blue-800",
  internship: "bg-indigo-100 text-indigo-800"
};

const timelineColors = {
  current: "bg-blue-500",
  previous: "bg-purple-500",
  internship: "bg-indigo-500"
};

export default function ExperienceSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="experience"
      ref={ref}
      className="section-reveal py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-semibold text-3xl sm:text-4xl mb-12 text-center theme-text-primary"
        >
          Work Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 ${timelineColors[experience.status]} rounded-full border-4 border-white shadow-lg`} />
                
                {/* Experience Card */}
                <div className="ml-16 w-full">
                  <Card className="theme-surface rounded-2xl shadow-lg p-6 card-hover theme-border border">
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <div>
                        <h3 className="font-heading font-semibold text-xl theme-text-primary">
                          {experience.title}
                        </h3>
                        <p className="theme-primary font-medium">{experience.company}</p>
                      </div>
                      <Badge className={`${statusColors[experience.status]} text-sm font-medium`}>
                        {experience.period}
                      </Badge>
                    </div>
                    
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: achievementIndex * 0.1 }}
                          className="flex items-start theme-text-secondary"
                        >
                          <CheckCircle className="w-4 h-4 theme-success mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
