import Image from "next/image";

export default function Gallery() {
  const images = [
    {
    src: "/about1.png",
    alt: "Colorful beachfront restaurant with local artwork at Tigri Beach Hikkaduwa",
    caption: "Local Art & Beach Vibes",
    sub: "Authentic Sri Lankan atmosphere",
    span: "md:col-span-4 md:row-span-2",
  },
  {
    src: "/hero.png",
    alt: "Open-air restaurant at Tigri Beach overlooking the Indian Ocean",
    caption: "Open-Air Beach Restaurant",
    sub: "Relaxed dining by the ocean",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    src: "/seafood1.png",
    alt: "Fresh Sri Lankan mud crab seafood platter at Tigri Beach Restaurant",
    caption: "Fresh Seafood Specialties",
    sub: "Locally caught & expertly prepared",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    src: "/gallery1.png",
    alt: "Beachfront sunset dining at Tigri Beach Restaurant in Hikkaduwa Sri Lanka",
    caption: "Sunset Beachfront Dining",
    sub: "Unforgettable oceanfront evenings",
    span: "md:col-span-8 md:row-span-2",
  },
  {
    src: "/lob.png",
    alt: "Grilled Sri Lankan lobster served at Tigri Beach Restaurant",
    caption: "Signature Grilled Lobster",
    sub: "Fresh from the Indian Ocean",
    span: "md:col-span-4 md:row-span-1",
  },
  ];

  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 bg-white border-t border-slate-100 overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16 animate-scroll-fade">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Visual Journey
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Life at Tigri Beach
          </h2>
          <p className="max-w-md text-sm md:text-base text-slate-500 font-light mt-1">
            Browse through our kitchen creations, tropical sunset sips, and beachfront tables.
          </p>
          <div className="h-[2px] w-20 bg-primary mt-2" />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[250px] md:auto-rows-[220px] lg:auto-rows-[240px] animate-scroll-scale">
          {images.map((img) => (
            <div
              key={img.src}
              className={`group relative rounded-3xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50 flex flex-col justify-end ${img.span}`}
            >
              {/* Image component */}
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 z-10" />

              {/* Text details showing on hover/scroll */}
              <div className="relative z-20 p-6 md:p-8 flex flex-col gap-1 transition-transform duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest leading-none glow-text-amber">
                  {img.sub}
                </span>
                <h3 className="font-serif text-lg md:text-xl font-bold text-white tracking-wide mt-1 leading-tight">
                  {img.caption}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
