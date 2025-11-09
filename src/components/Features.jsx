import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const features = [
  {
    title: "Career Recommendations",
    desc: "Get AI-driven career suggestions tailored to your skills and goals.",
  },
  {
    title: "Course Recommendations",
    desc: "Discover curated learning paths to build the right capabilities.",
  },
  {
    title: "Skill Gap Analysis",
    desc: "Identify the missing skills that separate you from your dream job.",
  },
  {
    title: "Personalized Roadmap",
    desc: "Receive a step-by-step roadmap for professional growth.",
  },
];

// Framer Motion variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const Features = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <AnimatedSection
      id="features"
      className="py-20 bg-[var(--surface)] transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Features
        </h2>

        {prefersReducedMotion ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[var(--card-bg)] p-6 rounded-xl shadow-md
                           border border-[var(--border)]
                           hover:shadow-lg transition-transform transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {f.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={item}
                className="bg-[var(--card-bg)] p-6 rounded-xl shadow-md
                           border border-[var(--border)]
                           hover:shadow-lg transition-transform transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {f.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </AnimatedSection>
  );
};

export default Features;
