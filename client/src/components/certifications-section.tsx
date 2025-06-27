import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, ExternalLink, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const certifications = [
  {
    title: "Android Developer Certification",
    issuer: "PNY Trainings",
    year: "2018",
    description: "Comprehensive Android development training covering Java programming, Android Studio, UI/UX design principles, and mobile app deployment. Gained hands-on experience in building native Android applications.",
    icon: Smartphone,
    gradient: "from-green-500 to-blue-600"
  }
];

export default function CertificationsSection() {
  const ref = useScrollReveal();

  return (
    <section
      id="certifications"
      ref={ref}
      className="section-reveal py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-semibold text-3xl sm:text-4xl mb-6 text-center theme-text-primary"
        >
          Professional Certifications
        </motion.h2>

        <div className="grid gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -2 }}
              >
                <Card className="theme-surface rounded-2xl shadow-lg p-6 card-hover theme-border border">
                  <div className="flex items-start">
                    <div className={`w-16 h-16 bg-gradient-to-br ${cert.gradient} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between mb-2">
                        <h3 className="font-heading font-semibold text-xl theme-text-primary">
                          {cert.title}
                        </h3>
                        <Badge className="bg-green-100 text-green-800 text-sm font-medium">
                          {cert.year}
                        </Badge>
                      </div>
                      <p className="theme-primary font-medium mb-2">{cert.issuer}</p>
                      <p className="theme-text-secondary mb-4 text-sm leading-relaxed">
                        {cert.description}
                      </p>
                      <div className="flex space-x-3">
                        <Button
                          size="sm"
                          className="theme-primary-bg text-white hover:shadow-md transition-all duration-200"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View Certificate
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="theme-surface theme-border hover:shadow-md transition-all duration-200"
                        >
                          <Shield className="w-3 h-3 mr-1" />
                          Verify Credential
                        </Button>
                      </div>
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
