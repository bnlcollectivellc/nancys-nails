"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div
            className={`relative aspect-[4/5] rounded-lg overflow-hidden bg-[#F5F3F0] transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-center text-[#6B6560]">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#D4A574]/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <p className="text-sm">Photo of Nancy</p>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div
            className={`text-left transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl mb-6">
              About Nancy
            </h2>

            <div className="space-y-6 text-[#6B6560] text-lg leading-relaxed">
              <p>
                Based in Southern California, I&apos;m a nail technician and designer passionate
                about creating beautiful, custom nail art that makes you feel confident and stylish.
              </p>

              <p>
                From bold, vibrant colors like striking coral reds paired with delicate botanical
                leaf designs, to rich, luxurious burgundy sets perfect for any occasion — I love
                bringing your vision to life. Every set I create is thoughtfully designed to
                reflect your unique personality and style.
              </p>

              <p>
                Whether you&apos;re looking for elegant everyday nails or a statement set for a
                special event, I&apos;m here to help you express yourself through beautiful nail art.
              </p>
            </div>

            <div className="mt-8">
              <div className="w-24 h-1 bg-[#D4A574] rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
