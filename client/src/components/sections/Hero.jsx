import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { CORE_FOCUS } from "../../data/portfolioData";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center mb-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Hi, I'm <span className="text-blue-400">Katlego Mtimane</span>
        </h1>
        <p className="text-lg text-slate-300 mb-6">
          Software Engineer | Java Backend Specialist | Full-Stack Developer | System Integration Engineer | Microsoft Azure Certified
        </p>
        <p className="text-slate-400 mb-8 max-w-2xl">
          South African software engineer with strong foundations in Java and Python from WeThinkCode_. 
          Passionate about building scalable web applications, integrating complex systems, and 
          leveraging cloud technologies to deliver impactful solutions.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Button className="rounded-2xl px-6">
            <Mail className="mr-2 h-4 w-4" /> katlegoj.dev@gmail.com
          </Button>
          <Button variant="outline" className="rounded-2xl px-6">
            <Phone className="mr-2 h-4 w-4" /> +27 63 734 2965
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-slate-900/70 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 shadow-2xl"
      >
        <h2 className="text-2xl font-semibold mb-6 text-white">Core Focus</h2>
        <ul className="space-y-4 text-slate-300">
          {CORE_FOCUS.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              {/* You can map icons dynamically if you want */}
              <span className="text-blue-400">→</span>
              {item.text}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}