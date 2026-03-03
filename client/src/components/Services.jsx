import React from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "UI / UX Design",
    image: "/uiux.png",
  },
  {
    title: "Web Design",
    image: "/webdesign.png",
  },
  {
    title: "Landing Page",
    image: "/landing.png",
  },
];

const Services = () => {
  return (
    <section className="px-6 md:px-16 py-24">
      {/* Outer Dark Rounded Container */}
      <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-[40px] p-10 md:p-16 overflow-hidden">
        
        {/* Soft Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 blur-[120px] rounded-full"></div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-[#ff7a45]">Services</span>
          </h2>

          <p className="text-gray-400 max-w-md mt-4 md:mt-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            lacus nunc, posuere in justo vulputate.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 relative z-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 transition duration-500 hover:-translate-y-3"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-6">
                {service.title}
              </h3>

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-60 object-cover rounded-2xl"
                />
              </div>

              {/* Floating Arrow Button */}
              <button className="absolute -bottom-6 -right-6 w-14 h-14 bg-[#ff7a45] rounded-full flex items-center justify-center shadow-xl transition group-hover:scale-110">
                <ArrowUpRight size={20} className="text-white" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;