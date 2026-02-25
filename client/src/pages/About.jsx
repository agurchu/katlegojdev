// src/pages/About.jsx
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <div className="space-y-16">
      <SectionTitle>About Me</SectionTitle>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-2xl leading-relaxed text-slate-300"
      >
        <p className="mb-6">
          I am a results-driven South African Software Engineer with a BSc in Biomedical Science and a proven ability to transition disciplines successfully. Since moving into tech in 2022, I have built production-ready applications through self-directed learning, personal full-stack projects, and rigorous industry-aligned training at WeThinkCode_.
        </p>
        <p className="mb-6">
          As a multipotentialite, I leverage cross-disciplinary thinking to design robust, scalable, and efficient systems. My diverse academic and technical background enables me to approach engineering challenges analytically while maintaining strong creativity in solution design. I am known for strong problem-solving ability, attention to detail, and a consistent commitment to delivering high-quality, maintainable software.
        </p>
        <p>
          I specialize in Java backend development using Spring Boot, REST API design, and system integration, complemented by modern React frontend development and Microsoft Azure cloud experience. My goal is to contribute to high-impact engineering teams building reliable, scalable systems within South Africa’s growing technology sector.
        </p>
      </motion.div>
    </div>
  );
}