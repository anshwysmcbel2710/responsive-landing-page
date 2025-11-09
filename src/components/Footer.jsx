import React from "react";
import AnimatedSection from "./AnimatedSection";

const Footer = () => (
  <AnimatedSection
    id="footer"
    className="bg-white dark:bg-gray-900 border-t dark:border-gray-800 py-6"
  >
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      {/* Copyright */}
      <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
        © 2025 NxtRole.AI. All rights reserved.
      </p>

      {/* Social Links */}
      <div className="flex gap-4 mt-3 md:mt-0">
        <a
          href="#"
          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
        <a
          href="#"
          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          aria-label="Twitter"
        >
          Twitter
        </a>
        <a
          href="#"
          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
          aria-label="GitHub"
        >
          GitHub
        </a>
      </div>
    </div>
  </AnimatedSection>
);

export default Footer;
