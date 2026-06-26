import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden z-10 bg-[#FAF9F6]"
    >
      {/* Background Subtle Leaf Shadows / Textures */}
      <div className="absolute inset-0 z-0 opacity-[0.03] select-none pointer-events-none">
        <Image
          src="/hero1.png"
          alt="Subtle beach sand texture decoration background"
          title="Tigri Beach Background Sand Decoration"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-110 contrast-90"
        />
      </div>

      {/* Faint gold/teal backdrop ambient glow for premium look */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Main Grid Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center justify-items-center pt-28 pb-36 md:pb-44">
        {/* LEFT COLUMN: Food Card (Visible on desktop) */}
        <div className="hidden lg:flex lg:col-span-3 flex-col items-center w-full animate-[heroFadeInUp_1.3s_ease-out] select-none">
          <div className="relative w-[240px] h-[360px] bg-amber-500 rounded-[2.5rem] shadow-lg flex flex-col items-center justify-end p-6 border border-amber-600/10 hover:shadow-xl transition-shadow duration-300 group">
            {/* 3D Floating Plate Image overlapping the card - Extra Large */}
            <div className="absolute -top-24 w-[660px] h-[660px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)] group-hover:scale-105 group-hover:rotate-[8deg] transition-all duration-700 ease-out">
              <Image
                src="/h7.png"
                alt="Tigri Beach Restaurant fresh seafood and kebab platter"
                title="Tigri Beach Grilled Seafood Kebabs"
                fill
                priority
                sizes="320px"
                className="object-contain"
              />
            </div>

            {/* Arrow Button */}
            <button aria-label="View previous featured dish" className="w-10 h-10 rounded-full border border-black/10 text-slate-800 hover:bg-black/5 hover:text-slate-950 flex items-center justify-center transition-all duration-300 cursor-pointer mt-auto">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* CENTER COLUMN: Hero Copy Content */}
        <div className="col-span-12 lg:col-span-6 flex flex-col items-center text-center gap-8 px-4">
          {/* Header Tag */}
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#e28a6b] uppercase animate-[heroFadeInUp_1s_ease-out]">
            HIKKADUWA, SRI LANKA
          </span>

          {/* Main Serif Title matching screenshot structure but in light mode */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-slate-900 leading-[1.1] max-w-xl animate-[heroFadeInUp_1.2s_ease-out]">
            Where the <br className="md:hidden" />
            <span className="italic font-serif font-light text-primary">
              ocean
            </span>{" "}
            sets <br className="md:hidden" /> the table
          </h1>

          {/* Subtitle */}
          <p className="text-[10px] md:text-xs font-bold text-slate-500 tracking-[0.25em] uppercase animate-[heroFadeInUp_1.4s_ease-out] -mt-2">
            Fresh seafood • Beach vibes • Sunset views
          </p>

          {/* MOBILE FEATURED DISH: Matching Card with h2 Salad Plate */}
          <div className="lg:hidden flex flex-col items-center mt-14 mb-6 select-none animate-[heroFadeInUp_1.5s_ease-out]">
            <div className="relative w-[190px] h-[260px] bg-amber-500 rounded-[2rem] shadow-lg flex flex-col items-center justify-end p-5 border border-amber-600/10">
              {/* Floating Plate Image */}
              <div className="absolute -top-16 w-[420px] h-[420px] drop-shadow-[0_12px_25px_rgba(0,0,0,0.2)] hover:scale-105 hover:rotate-[6deg] transition-all duration-500 ease-out">
                <Image
                  src="/h2.png"
                  alt="Featured salad dish with fresh tropical greens"
                  title="Tigri Beach Featured Fresh Salad"
                  fill
                  priority
                  sizes="230px"
                  className="object-contain"
                />
              </div>
              {/* Arrow Button */}
              <button aria-label="View featured dish details" className="w-8 h-8 rounded-full border border-black/10 text-slate-800 flex items-center justify-center transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 mt-2 animate-[heroFadeInUp_1.6s_ease-out]">
            <a
              href="#menu"
              className="px-7 py-3 text-xs md:text-sm font-bold uppercase tracking-wider text-white bg-primary rounded-full hover:bg-primary-hover shadow-lg shadow-primary/25 hover:shadow-primary/45 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Explore the Menu
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Tigri+Beach+Restaurant+Hikkaduwa"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-700 border border-slate-200 rounded-full hover:bg-slate-50/80 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              {/* Colored Google Maps Pin SVG */}
              <svg
                className="w-4 h-4 shrink-0"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2C9.16 2 2 9.16 2 18C2 28.52 18 34 18 34S34 28.52 34 18C34 9.16 26.84 2 18 2Z"
                  fill="#EA4335"
                />
                <circle cx="18" cy="15" r="5" fill="#4285F4" />
                <path
                  d="M18 25C22.42 25 26 21.42 26 17H10C10 21.42 13.58 25 18 25Z"
                  fill="#FBBC05"
                />
                <path
                  d="M10 17C10 12.58 13.58 9 18 9C22.42 9 26 12.58 26 17H30C30 10.37 24.63 5 18 5C11.37 5 6 10.37 6 17H10Z"
                  fill="#34A853"
                />
              </svg>
              Find Us
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Food Card (Visible on desktop) */}
        <div className="hidden lg:flex lg:col-span-3 flex-col items-center w-full animate-[heroFadeInUp_1.3s_ease-out] select-none">
          <div className="relative w-[240px] h-[360px] bg-amber-500 rounded-[2.5rem] shadow-lg flex flex-col items-center justify-end p-6 border border-amber-600/10 hover:shadow-xl transition-shadow duration-300 group">
            {/* 3D Floating Plate Image overlapping the card - Extra Large */}
            <div className="absolute -top-24 w-[660px] h-[660px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)] group-hover:scale-105 group-hover:rotate-[8deg] transition-all duration-700 ease-out">
              <Image
                src="/h2.png"
                alt="Tigri Beach Restaurant fresh Mediterranean salad plate"
                title="Tigri Beach Fresh Mediterranean Salad Plate"
                fill
                priority
                sizes="320px"
                className="object-contain"
              />
            </div>

            {/* Arrow Button */}
            <button aria-label="View next featured dish" className="w-10 h-10 rounded-full border border-black/10 text-slate-800 hover:bg-black/5 hover:text-slate-950 flex items-center justify-center transition-all duration-300 cursor-pointer mt-auto">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Reputation Banner (Spans all columns) */}
        <div className="col-span-12 w-full mt-12 md:mt-16 z-30 animate-[heroFadeInUp_1.8s_ease-out]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 p-6 md:p-8 rounded-3xl bg-[#FAF9F6]/80 backdrop-blur-md border border-slate-200/50 text-center items-center justify-items-center shadow-sm">
            
            {/* Google Stat */}
            <div className="flex flex-col gap-1 items-center w-full" aria-label="Google Rating: 4.3 stars out of 497 reviews">
              <div className="flex items-center gap-2">
                {/* Official Google G Logo SVG */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
                <span className="text-base md:text-lg font-extrabold text-slate-800 tracking-tight">4.3★ </span>
              </div>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">497+ Google Reviews</span>
            </div>

            {/* TripAdvisor Stat */}
            <div className="flex flex-col gap-1 items-center border-l-0 md:border-l border-slate-200/50 w-full" aria-label="TripAdvisor Rating: 4.2 stars out of 600 traveler reviews">
              <div className="flex items-center gap-2">
                {/* Official TripAdvisor Owl Logo SVG */}
                <div className="w-5 h-5 rounded-full bg-[#00aa6c] flex items-center justify-center text-white p-0.5 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z"/>
                  </svg>
                </div>
                <span className="text-base md:text-lg font-extrabold text-slate-800 tracking-tight">4.2★ </span>
              </div>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">600+ TripAdvisor Reviews</span>
            </div>

            {/* Symmetrical 5-Star Graphic */}
            <div className="flex flex-col gap-1 items-center border-l-0 md:border-l border-slate-200/50 w-full col-span-2 md:col-span-1" aria-label="Five-star top-rated reputation">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4.5 h-4.5 text-amber-500 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">Top-Rated Reputation</span>
            </div>

            {/* Global Countries Badge */}
            <div className="flex flex-col gap-1 items-center border-l-0 md:border-l border-slate-200/50 w-full col-span-2 md:col-span-1" aria-label="Serving guests from over 50 countries globally">
              <div className="flex items-center gap-1.5">
                <svg className="w-5 h-5 text-[#e28a6b] fill-none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.5 3a17 17 0 000 18M12.5 3a17 17 0 000 18" />
                </svg>
                <span className="text-base md:text-lg font-extrabold text-[#e28a6b] tracking-tight">50+ Countries</span>
              </div>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Serving Guests Globally</span>
            </div>

          </div>
        </div>

      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 select-none pointer-events-none animate-pulse">
        <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-slate-400">
          SCROLL
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-slate-350 to-transparent" />
      </div>

      {/* Wave shape divider with multiple rolling waves transitioning cleanly to white About bg */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-[70px] md:h-[125px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 C150,110 300,-10 450,50 C600,110 750,-10 900,50 C1050,110 1150,10 1200,50 L1200,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
