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

        {/* Curated Experiences Subsection */}
        <div className="mt-20 pt-16 border-t border-slate-100 animate-scroll-fade">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-100">
            <div className="flex flex-col gap-2 text-left">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                Curated Moments
              </span>
              <h3 className="font-sans text-xl md:text-2xl font-bold tracking-tight text-slate-800 uppercase">
                Our Dining Experiences
              </h3>
            </div>
            <p className="max-w-md text-xs md:text-sm text-slate-500 font-light text-left md:text-right md:mb-1">
              Immerse yourself in unique, carefully crafted beachside dining setups tailored for every occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Experience 1 */}
            <div className="bg-[#FAF9F6]/50 hover:bg-white border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 rounded-3xl p-6 md:p-8 flex flex-col items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-base md:text-lg font-bold text-slate-850 tracking-wide">Romantic Sunset Dinner</h4>
                <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                  Private, candle-lit dining directly on the sand with an unobstructed view of Hikkaduwa's legendary sunset.
                </p>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="bg-[#FAF9F6]/50 hover:bg-white border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 rounded-3xl p-6 md:p-8 flex flex-col items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M17 9.5a5.5 5.5 0 0 0-10 0M2 17h20" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-base md:text-lg font-bold text-slate-850 tracking-wide">Family Beach Lunch</h4>
                <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                  Spacious beachfront tables perfect for families. Enjoy local Sri Lankan rice and curries while children play in the sand.
                </p>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="bg-[#FAF9F6]/50 hover:bg-white border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 rounded-3xl p-6 md:p-8 flex flex-col items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18H3m9-4H3m9-4H3m12-4H3m12 16h6m-3-3v6" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-base md:text-lg font-bold text-slate-850 tracking-wide">Fresh Seafood After Surfing</h4>
                <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                  Refuel after a thrilling surf session at Hikkaduwa's main point with fresh calamari, grilled prawns, and ice-cold local beer.
                </p>
              </div>
            </div>

            {/* Experience 4 */}
            <div className="bg-[#FAF9F6]/50 hover:bg-white border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 rounded-3xl p-6 md:p-8 flex flex-col items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-[#e28a6b]/10 text-[#e28a6b] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#e28a6b] group-hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-5.714L5 13l5.714-2.286L13 3z" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-base md:text-lg font-bold text-slate-850 tracking-wide">Birthday Celebrations</h4>
                <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                  Celebrate your special moments on the beach with customized lantern arrangements, ocean breeze, and your favorite music.
                </p>
              </div>
            </div>

            {/* Experience 5 */}
            <div className="bg-[#FAF9F6]/50 hover:bg-white border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 rounded-3xl p-6 md:p-8 flex flex-col items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22H6m6 0v-7m0 7h6M12 15a5 5 0 0 0 5-5V3H7v7a5 5 0 0 0 5 5Z" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-base md:text-lg font-bold text-slate-850 tracking-wide">Oceanfront Cocktails</h4>
                <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                  Relax on our comfy beach loungers and sip our signature local Arrack Sours or freshly prepared tropical fruit mojitos.
                </p>
              </div>
            </div>

            {/* Experience 6 */}
            <div className="bg-[#FAF9F6]/50 hover:bg-white border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 rounded-3xl p-6 md:p-8 flex flex-col items-start gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M6 12a6 6 0 0 0 12 0H6Z" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-base md:text-lg font-bold text-slate-850 tracking-wide">Beachside Dining</h4>
                <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                  Feel the soft warm sand beneath your toes and listen to the rhythmic waves as you enjoy a romantic lobster or seafood dinner.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
