// src/pages/Experience.jsx
import { motion } from "framer-motion";
import React from "react";
import SectionTitle from "../components/SectionTitle";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section className="max-w-6xl mx-auto">
      <SectionTitle>Work Experience</SectionTitle>
      <div className="px-6  py-10 bg-slate-2/40 backdrop-blur-md border border-slate-3/50 rounded-2xl shadow-xl">
        <div className="relative grid gap-12">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white"></div>

          {experience.map((exp, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative grid md:grid-cols-2 gap-6 items-start"
              >
                {/* Left Side */}
                <div
                  className={`${
                    index % 2 === 0
                      ? "md:text-right md:pr-12"
                      : "md:order-2 md:pl-12"
                  }`}
                >
                  <h3 className="text-2xl font-semibold">{exp.company}</h3>
                  <p className="text-gray-500">{exp.period}</p>
                </div>

                {/* Center Dot */}
                <div className="hidden left-1/2 translate-x-[-50%] top-0 absolute md:flex justify-center items-center">
                  <div className="w-6 h-6 rounded-full bg-primary border-4 border-white shadow-md z-10"></div>
                </div>

                {/* Right Side */}
                <div
                  className={`${
                    index % 2 === 0
                      ? "md:pl-12"
                      : "md:text-right md:pr-12 md:order-1"
                  }`}
                >
                  <h4 className="text-xl font-semibold mb-2">{exp.role}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
