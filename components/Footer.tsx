export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#2D2A26] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-6">
          Nancy&apos;s Nails
        </h3>

        <div className="flex justify-center mb-8">
          <a
            href="https://www.instagram.com/nancysnail2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#D4A574] transition-colors"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
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
        </div>

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Nancy&apos;s Nails. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
