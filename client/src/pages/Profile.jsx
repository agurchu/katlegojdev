// src/pages/Profile.jsx
import { GraduationCap, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socials } from "../data/portfolioData";
import useGoogleSheet from "../hook/useGoogleSheet";

export default function Profile() {
  const { data: education = [], loading: eduLoading } =
    useGoogleSheet("education");

  const startDate = new Date(2022, 0, 1); // Jan 1, 2022
  const now = new Date();
  const diffYears = now.getFullYear() - startDate.getFullYear();
  const diffMonths = now.getMonth() - startDate.getMonth() + diffYears * 12;

  const experienceText =
    diffYears >= 1 ? `${diffYears} years` : `${diffMonths} months`;
  return (
    <div className="flex flex-col h-screen bg-[#111B21]">
      {/* Header – WhatsApp style contact info header */}
      <header className="bg-[#202C33] px-4 py-4 flex items-center gap-4">
        <h1 className="text-white text-xl font-medium">Profile</h1>
      </header>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {/* Avatar + name section */}
        <div className="bg-[#202C33] px-6 py-10 flex flex-col items-center relative">
          <div className="absolute top-0 bottom-0 -z-1 left-0 right-0">
            <img
              className="w-full h-full object-cover opacity-25"
              src="https://media.licdn.com/dms/image/v2/D4D16AQHkjd-2JfByeQ/profile-displaybackgroundimage-shrink_200_800/B4DZxRp1fRJ8AU-/0/1770896448636?e=1775088000&v=beta&t=ap_Obt2s_kc-KYIfLOT1MYyXaGIU5qIOpwrhlFfw_yQ"
            />
          </div>
          <div className="absolute inset-0 -z-2 bg-gradient-to-b from-slate-950/15 via-slate-950/25 to-slate-950" />
          <div className="relative mb-4">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D35AQFA3KPwzNwrxw/profile-framedphoto-shrink_200_200/B4DZyprfDzHIAY-/0/1772373275149?e=1774191600&v=beta&t=FNVAfeczZ0reUUssczm1zjmMf_hxOkAjyyg0zdIkHZg"
                alt="Katlego J. Mtimane"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Green online ring */}
            <span className="absolute bottom-2 right-2 w-5 h-5 bg-green-600 rounded-full border-3 border-[#202C33] shadow-md" />
          </div>
          <div className="z-0 relative text-center">
            <h2 className="text-2xl font-bold text-white mb-1">
              Katlego J. Mtimane
            </h2>
            <p className="text-[#bdd3e0] text-sm">
              Software Engineer • Backend Specialist
            </p>
            <p className="text-[#bdd3e0] text-xs mt-1">
              Online • Coding since 2022 ({experienceText})
            </p>
          </div>
        </div>

        {/* About / Bio section */}
        <div className="bg-[#111B21] px-6 py-6 border-b border-[#202C33]">
          <h3 className="text-primary text-sm font-medium uppercase mb-3">
            About
          </h3>
          <p className="text-[#D1D7DB] leading-relaxed">
            South African software engineer with strong foundations in Java and
            Python from WeThinkCode_. Passionate about building scalable web
            applications, integrating complex systems, and leveraging cloud
            technologies to deliver impactful solutions.
          </p>
          <p className="text-[#D1D7DB] mt-4 leading-relaxed">
            I specialize in Java backend development using Spring Boot, REST API
            design, system integration, modern React frontend, and Microsoft
            Azure cloud experience.
          </p>
        </div>
        {/* Education – new section */}
        <div className="bg-[#111B21] px-6 py-6 border-b border-[#202C33]">
          <h3 className="text-primary text-sm font-medium uppercase mb-4 flex items-center gap-2">
            <GraduationCap size={18} />
            Education
          </h3>

          {eduLoading ? (
            <p className="text-[#8696A0] text-sm">Loading education...</p>
          ) : education.length === 0 ? (
            <p className="text-[#8696A0] text-sm italic">
              No education entries yet
            </p>
          ) : (
            <div className="space-y-5">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-[#202C33] p-4 rounded-xl border border-[#2A3942] hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white">
                        {edu.institution}
                      </h4>
                      <p className="text-sm text-primary mt-0.5">
                        {edu.degree}
                      </p>
                      <p className="text-xs text-[#8696A0] mt-1">
                        {edu.period}
                      </p>
                      {edu.skills && (
                        <p className="text-sm text-[#D1D7DB] mt-2 line-clamp-2">
                          <span className="font-medium">Key skills:</span>{" "}
                          {edu.skills}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Contact actions – WhatsApp style buttons */}
        <div className="px-4 py-6 space-y-3">
          <a
            target="_blank"
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${socials.email}`}
            className="flex items-center gap-4 px-5 py-4 bg-[#202C33] rounded-xl hover:bg-[#2A3942] transition-colors"
          >
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Mail size={24} className="text-black" />
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-[#8696A0]">katlegoj.dev@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+27637342965"
            className="flex items-center gap-4 px-5 py-4 bg-[#202C33] rounded-xl hover:bg-[#2A3942] transition-colors"
          >
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Phone size={24} className="text-black" />
            </div>
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-sm text-[#8696A0]">+27 63 734 2965</p>
            </div>
          </a>
        </div>

        {/* Social links */}
        <div className="px-6 py-6 border-t border-[#202C33]">
          <h3 className="text-primary text-sm font-medium uppercase mb-4">
            Find me online
          </h3>
          <div className="flex gap-6">
            <a
              href={socials.github}
              target="_blank"
              className="flex flex-col items-center"
            >
              <FaGithub size={32} className="text-primary mb-1" />
              <span className="text-xs text-[#8696A0]">GitHub</span>
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              className="flex flex-col items-center"
            >
              <FaLinkedin size={32} className="text-primary mb-1" />
              <span className="text-xs text-[#8696A0]">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center py-8 text-[#8696A0] text-xs">
          Built with React • Tailwind • WhatsApp UI inspiration
          <br />© {new Date().getFullYear()} Katlego J. Mtimane
        </div>
      </div>
    </div>
  );
}
