// src/pages/Skills.jsx
import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";

export default function Skills() {
  return (
    <div className="space-y-16">
      <SectionTitle>Technical Skills</SectionTitle>

      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 capitalize text-cyan-300">
              {category}
            </h3>
            <ul className="space-y-3 text-slate-300">
              {items.map((skill) => (
                <li key={skill} className="flex items-center gap-3">
                  <span className="text-cyan-400">•</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}