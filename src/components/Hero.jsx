import React from "react";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  return (
    <AnimatedSection id="home" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold">
            NxtRole.AI – Career Guidance & Roadmap Generator
          </h1>
          <p className="mt-4 text-lg">
            AI-powered platform that helps students and professionals find the right career path,
            discover job roles, and learn skills to grow.
          </p>
          <button className="mt-6 bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:scale-105 transition">
            Explore Now
          </button>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4149/4149670.png"
            alt="Career Illustration"
            className="w-full max-w-md mx-auto"
            loading="lazy"
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Hero;
