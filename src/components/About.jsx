import React from "react";
import AnimatedSection from "./AnimatedSection";

const About = () => (
  <AnimatedSection
    id="about"
    className="py-20 bg-[var(--surface)] text-[var(--text)] transition-colors duration-300"
  >
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
      
      {/* Text Content */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          About NxtRole.AI
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          NxtRole.AI empowers learners and professionals by providing data-driven
          insights into career paths, roles, and required skills. Our vision is to
          democratize access to personalized career guidance using cutting-edge AI.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/906/906175.png"
          alt="About NxtRole.AI"
          className="rounded-lg shadow-lg w-4/5 max-w-md bg-[var(--surface)] dark:bg-[#1a1a1a] p-2 transition-all duration-300"
          loading="lazy"
        />
      </div>

    </div>
  </AnimatedSection>
);

export default About;
