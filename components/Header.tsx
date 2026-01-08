"use client";

import { useState, useEffect } from "react";

interface HeaderProps {
  onBookClick: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#FAF8F5] shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className={`font-[family-name:var(--font-playfair)] text-2xl transition-colors duration-300 ${
            scrolled ? "text-[#2D2A26]" : "text-[#2D2A26]"
          }`}
        >
          Nancy&apos;s Nails
        </a>

        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/nancysnail2026/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 ${
              scrolled ? "text-[#2D2A26] hover:text-[#8B7355]" : "text-[#2D2A26] hover:text-[#8B7355]"
            }`}
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>

          <button
            onClick={onBookClick}
            className={`px-6 py-2 rounded font-medium transition-all duration-300 ${
              scrolled
                ? "bg-[#8B7355] text-white hover:bg-[#7A6548]"
                : "bg-[#8B7355] text-white hover:bg-[#7A6548]"
            }`}
          >
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
}
