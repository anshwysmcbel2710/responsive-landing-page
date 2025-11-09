import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Design-only form. Submission not implemented.");
  };

  return (
    <AnimatedSection
      id="contact"
      className="py-20 bg-gray-50 dark:bg-[var(--surface)] transition-colors duration-300"
    >
      <div className="container mx-auto px-6 max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 border rounded shadow-sm 
                       bg-white dark:bg-[#1a1a1a] 
                       text-gray-900 dark:text-gray-100 
                       placeholder-gray-400 dark:placeholder-gray-500
                       border-gray-300 dark:border-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />

          {/* Email Field */}
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 border rounded shadow-sm 
                       bg-white dark:bg-[#1a1a1a] 
                       text-gray-900 dark:text-gray-100 
                       placeholder-gray-400 dark:placeholder-gray-500
                       border-gray-300 dark:border-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />

          {/* Message Field */}
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            rows="4"
            className="w-full p-3 border rounded shadow-sm 
                       bg-white dark:bg-[#1a1a1a] 
                       text-gray-900 dark:text-gray-100 
                       placeholder-gray-400 dark:placeholder-gray-500
                       border-gray-300 dark:border-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 
                       text-white py-3 rounded-lg font-medium 
                       hover:opacity-90 hover:scale-105 
                       transition-transform duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </AnimatedSection>
  );
};

export default ContactForm;
