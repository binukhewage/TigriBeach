import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Tigri Beach Restaurant"
      className="relative py-24 md:py-32 overflow-hidden bg-white"
    >
      {/* Subtle decorative background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left Side: Images Grid (Animated on Scroll) */}
        <div className="col-span-1 lg:col-span-6 grid grid-cols-12 gap-4 animate-scroll-scale">
          {/* Main Visual */}
          <div className="col-span-8 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <Image
              src="/ssdine.jpg"
              alt="Beachfront table setup at Tigri Beach Hikkaduwa"
              title="Tigri Beach Restaurant Oceanfront Seating Setup"
              fill
              sizes="(max-width: 768px) 60vw, 30vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          {/* Secondary Stacked Visual */}
          <div className="col-span-4 flex flex-col justify-end gap-4">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 mix-blend-multiply z-10" />
              <Image
                src="/about1.png"
                alt="Golden hour beachfront dining at Hikkaduwa Sri Lanka"
                title="Sunset Dining Experience at Tigri Beach Hikkaduwa"
                fill
                sizes="(max-width: 768px) 30vw, 15vw"
                className="object-cover hover:scale-110 transition-all duration-700"
              />
            </div>
            {/* Experience Callout Card */}
            <div className="glassmorphism rounded-2xl p-4 md:p-6 flex flex-col justify-center items-center text-center shadow-md border border-slate-100">
              <span className="font-serif text-3xl md:text-4xl font-extrabold text-primary glow-text-amber leading-none">
                25+
              </span>
              <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500 mt-2">
                Years of Fresh Catches
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Text & Brand Story */}
        <div className="col-span-1 lg:col-span-6 flex flex-col gap-8 animate-scroll-fade">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              The Tigri Story
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Ocean on Your Plate, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Sand at Your Feet
              </span>
            </h2>
            <div className="h-[2px] w-20 bg-primary mt-2" />
          </div>

          <div className="flex flex-col gap-6 text-sm md:text-base text-slate-600 font-light leading-relaxed animate-scroll-fade">
            <p>
              Tigri Beach Restaurant is located directly on the sun-drenched shores of Hikkaduwa Beach along Galle Road, Southern Province, Sri Lanka. Since our founding in 1999, we have welcomed travelers, surfers, and food enthusiasts from all over the world. What started as a humble, family-operated kitchen has grown over the past quarter-century into a coastal culinary landmark. Nestled in a prime oceanfront spot, the restaurant offers direct views of the Indian Ocean, where the cool ocean breeze and the soothing sound of the waves create a tranquil backdrop for an unforgettable dining experience.
            </p>
            
            <p>
              Tigri Beach is more than just a restaurant; it is a celebration of warm, traditional Sri Lankan hospitality. Our dedicated local team welcomes every guest like family, providing attentive and friendly service. Whether you are enjoying a relaxed lunch after surfing, sipping an Arrack Sour on our sun loungers, or dining at a candle-lit beachfront table with your feet in the sand during a golden sunset, we strive to make you feel at home. Visitors return year after year for this unique blend of premium local ingredients, authentic hospitality, and the absolute magic of dining at the water's edge. You can explore our <a href="#menu" className="text-primary font-semibold hover:underline">fresh seafood menu</a> or <a href="#contact" className="text-primary font-semibold hover:underline">book a sunset table</a> via WhatsApp.
            </p>
          </div>

          {/* Key Vibe Badges */}
          <div className="grid grid-cols-2 gap-6 mt-2 pt-6 border-t border-slate-100">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 text-primary">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 tracking-wide">
                  100% Beachfront
                </h3>
                <p className="text-xs text-slate-500 font-light mt-1">
                  Dine right on the sand with full ocean vistas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/5 border border-accent/10 text-accent">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 tracking-wide">
                  Daily Catch
                </h3>
                <p className="text-xs text-slate-500 font-light mt-1">
                  Zero-mile sourcing from local Hikkaduwa boats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
