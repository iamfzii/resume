import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function CareerProfile() {
  const ref = useScrollReveal();

  return (
    <section
      id="career"
      ref={ref}
      className="section-reveal py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading font-semibold text-3xl sm:text-4xl mb-8 text-center theme-text-primary"
        >
          Career Profile
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="theme-surface rounded-2xl shadow-lg p-8 card-hover theme-border border">
            <p className="text-lg leading-relaxed theme-text-secondary">
              Technical Operations Coordinator with 7 years of Computer Science & IT background and experience facilitating the execution of full-stack applications, AI workflows, and cloud-based solutions. Adept at translating functional requirements into coordinated technical deliverables, supporting development cycles, and troubleshooting deployment pipelines. Demonstrated ability to work across system layers—from API integrations and database management to user-facing components and machine learning model implementations.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
