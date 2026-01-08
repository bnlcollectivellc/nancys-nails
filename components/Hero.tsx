import Image from "next/image";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  return (
    <section className="relative h-[72vh] min-h-[500px] animate-fade-in">
      <Image
        src="/images/hero.jpg"
        alt="Beautiful nail art"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl text-white mb-3">
            Nancy&apos;s Nails
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-4 max-w-md mx-auto">
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
