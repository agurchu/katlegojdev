// src/components/BottomNav.jsx
import { NavLink } from "react-router-dom";
import { MessageCircle, Award, BriefcaseBusiness, User } from "lucide-react";

const navItems = [
  { to: "/projects", icon: MessageCircle, label: "Projects" },
  { to: "/skills", icon: Award, label: "Skills" },
  { to: "/experience", icon: BriefcaseBusiness, label: "Experience" },
  { to: "/profile", icon: User, label: "Profile" },
];
// const stroke = isActive ? 2.5 : 2;
export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#111B21] border-t border-[#202C33]">
      <div className="flex justify-around items-center h-16 max-w-3xl mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={(
              { isActive }, // ← destructuring { isActive } here
            ) =>
              `flex flex-col items-center justify-center flex-1 py-1 transition-colors ${
                isActive
                  ? "text-primary" // active = WhatsApp green
                  : "text-[#8696A0] hover:text-[#AEBAC1]"
              }`
            }
          >
            <item.icon
              size={24}
              //   strokeWidth={stroke} // optional thicker icon when active
            />
            <span className="text-[10px] mt-0.5 font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
