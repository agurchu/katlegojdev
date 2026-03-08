// src/pages/Education.jsx
import { motion } from "framer-motion";
import { educationMock } from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";

export default function Education() {
  const { data: education, loading, error } = useGoogleSheet("education");
  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error)
    return (
      <div>
        Error occurred: {error} : Loaded static data
        <div className="space-y-16 max-w-6xl mx-auto">
          <SectionTitle>Education</SectionTitle>

          <div className="space-y-8">
            {educationMock.map((edu, idx) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">
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
      </div>
    );
  return (
    <div className="space-y-16 max-w-6xl mx-auto">
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
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3">
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
