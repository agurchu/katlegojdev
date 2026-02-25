// src/pages/Education.jsx
import { motion } from "framer-motion";
import { education } from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";

export default function Education() {
  return (
    <div className="space-y-16">
      <SectionTitle>Education</SectionTitle>

      <div className="space-y-8">
        {education.map((edu, idx) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-3">
              {edu.institution}
            </h3>
            <p className="text-slate-400 mb-2">{edu.degree}</p>
            <p className="text-slate-400 mb-4">{edu.period}</p>
            <p className="text-slate-300">
              <span className="font-medium">Key Skills:</span> {edu.skills}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}