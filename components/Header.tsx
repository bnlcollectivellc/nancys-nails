"use client";

import { useState, useEffect } from "react";

interface HeaderProps {
  onBookClick: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Fade in after hero
    const timer = setTimeout(() => setVisible(true), 300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#FAF8F5] shadow-sm" : "bg-transparent"
      } ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <svg
            width="32"
            height="32"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-colors duration-300 ${
              scrolled ? "fill-[#2D2A26]" : "fill-white"
            }`}
          >
            <path d="M48 200c-8-24 8-48 32-56 16-8 40-8 56 8l40 48c16-8 32-16 56-24l-24-56c-16-32 0-64 32-72 24-8 48 0 64 24l48 80c64-16 128-16 168 8 32 16 48 48 40 80-8 40-48 72-104 96-48 24-112 40-168 40-48 0-88-8-120-32-40-24-64-64-64-112 0-24 8-48 24-64l-48-72c-16-24-24-56-16-80l-16 8zm80 24l56 80c8 8 24 8 32-8 8-16 0-32-16-40l-56-80c-8-8-16-8-24-4-8 8-8 24 8 52zm208 168c48-16 88-40 104-72 8-16 8-32-8-40-24-16-72-16-128 0-48 16-88 40-112 72l-8 8c16 40 72 56 152 32z"/>
          </svg>
          <span
            className={`font-[family-name:var(--font-playfair)] text-xl transition-colors duration-300 hidden sm:block ${
              scrolled ? "text-[#2D2A26]" : "text-white"
            }`}
          >
            Nancy&apos;s Nails
          </span>
        </a>

        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/nancysnail2026/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 ${
              scrolled ? "text-[#2D2A26] hover:text-[#8B7355]" : "text-white hover:text-white/80"
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

          {/* Mobile: Email icon */}
          <button
            onClick={onBookClick}
            className={`sm:hidden transition-colors duration-300 ${
              scrolled ? "text-[#2D2A26] hover:text-[#8B7355]" : "text-white hover:text-white/80"
            }`}
            aria-label="Book Appointment"
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
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </button>

          {/* Desktop: Full button */}
          <button
            onClick={onBookClick}
            className="hidden sm:block px-6 py-2 rounded font-medium transition-all duration-300 bg-[#8B7355] text-white hover:bg-[#7A6548]"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
}
