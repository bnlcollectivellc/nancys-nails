"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const galleryImages = [
  {
    src: "/images/gallery-7.jpg",
    alt: "Natural nude manicure",
  },
  {
    src: "/images/gallery-1.png",
    alt: "Red nails with botanical leaf design",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Soft pink minimalist nails",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Tortoise shell nail art",
  },
  {
    src: "/images/gallery-2.png",
    alt: "Deep burgundy nail set",
  },
  {
    src: "/images/gallery-9.jpg",
    alt: "Lavender and silver glitter nails",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Neutral nails with sparkle accent",
  },
  {
    src: "/images/gallery-3.png",
    alt: "Red French tips with gold accent",
  },
  {
    src: "/images/gallery-8.jpg",
    alt: "Glossy pink nails",
  },
];

export default function Gallery() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const items = galleryRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-15 px-3 md:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-center mb-4">
          Gallery
        </h2>
        <p className="text-[#6B6560] text-center mb-12 max-w-2xl mx-auto">
          Each set is uniquely designed to reflect your personal style
        </p>

        <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              data-index={index}
              className={`relative aspect-[3/4] overflow-hidden rounded-lg group transition-all duration-700 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index % 3) * 150}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
