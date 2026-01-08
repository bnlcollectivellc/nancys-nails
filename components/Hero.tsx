import Image from "next/image";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px]">
      <Image
        src="/images/hero.jpg"
        alt="Beautiful nail art"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6">
          <p className="text-white text-lg md:text-xl mb-4 font-light tracking-wide">
            Southern California
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl text-white mb-6">
            Nancy&apos;s Nails
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-md mx-auto">
            Beautiful nails, crafted with care
          </p>
          <button
            onClick={onBookClick}
            className="btn-primary"
          >
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
