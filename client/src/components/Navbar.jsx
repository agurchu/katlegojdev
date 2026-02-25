// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import { Dialog, Transition,TransitionChild } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Menu, X, Code, Server, Cloud, User, Briefcase } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: <Code size={18} /> },
  { to: "/about", label: "About", icon: <User size={18} /> },
  { to: "/skills", label: "Skills", icon: <Server size={18} /> },
  { to: "/experience", label: "Experience", icon: <Briefcase size={18} /> },
  { to: "/education", label: "Education", icon: <Cloud size={18} /> },
  { to: "/projects", label: "Projects", icon: <Code size={20} /> },
];

export default function Navbar() {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 
  return (
     <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <NavLink
              to="/"
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Katlego Mtimane
            </NavLink>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "bg-slate-800 text-blue-400 shadow-sm"
                        : "text-slate-300 hover:bg-slate-800/50 hover:text-blue-300"
                    }`
                  }
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile hamburger button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800 focus:outline-none"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer using Headless UI Dialog */}
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 md:hidden" onClose={setMobileMenuOpen}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <TransitionChild
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-sm">
                    <div className="flex h-full flex-col overflow-y-scroll bg-slate-900/95 backdrop-blur-md shadow-2xl ring-1 ring-slate-800">
                      <div className="px-6 pt-6 pb-4 flex items-center justify-between border-b border-slate-800">
                        <h2 className="text-lg font-semibold text-white">Menu</h2>
                        <button
                          type="button"
                          className="rounded-md p-2 text-slate-400 hover:text-slate-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="sr-only">Close menu</span>
                          <X size={24} aria-hidden="true" />
                        </button>
                      </div>

                      <div className="mt-6 flow-root px-6">
                        <div className="-my-6 divide-y divide-slate-800">
                          <div className="space-y-2 py-6">
                            {navItems.map((item) => (
                              <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                  `flex items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium transition ${
                                    isActive
                                      ? "bg-slate-800 text-blue-400"
                                      : "text-slate-300 hover:bg-slate-800/70 hover:text-blue-300"
                                  }`
                                }
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.icon}
                                {item.label}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </TransitionChild>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}