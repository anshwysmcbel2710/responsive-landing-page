import { motion } from "framer-motion";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedSection({ children, className = "" }) {
  const prefersReduced = usePrefersReducedMotion();
  if (prefersReduced) return <div className={className}>{children}</div>;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.section>
  );
}
