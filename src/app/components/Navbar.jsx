"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "MENU", href: "#menu" },
    { name: "GALLERY", href: "#gallery" },
    { name: "REVIEWS", href: "#reviews" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4">
      <nav className="max-w-6xl mx-auto rounded-full border border-slate-200/50 bg-white/85 shadow-md backdrop-blur-md px-6 py-3.5 flex items-center justify-between relative">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center select-none group">
          <span className="font-serif text-xl md:text-2xl font-bold tracking-wider">
            <span className="text-slate-900">Tigri</span>
            <span className="text-primary">Beach</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold tracking-widest text-slate-700 hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-primary rounded-full hover:bg-primary-hover shadow-md transition-all duration-300 cursor-pointer"
          >
            Reserve a Table
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-800 hover:text-primary focus:outline-none transition-colors duration-200"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Floating Mobile Drawer Dropdown directly underneath the floating capsule */}
      {isOpen && (
        <div className="absolute top-18 left-4 right-4 z-40 bg-white/95 border border-slate-200/60 shadow-lg rounded-3xl p-6 flex flex-col items-center gap-6 md:hidden animate-[fadeInUp_0.2s_ease-out] backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold text-slate-800 hover:text-primary transition-colors duration-200 tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-8 py-3 text-xs font-bold uppercase tracking-wider text-white bg-primary rounded-full hover:bg-primary-hover shadow-md transition-all duration-300"
          >
            Reserve a Table
          </a>
        </div>
      )}
    </div>
  );
}
