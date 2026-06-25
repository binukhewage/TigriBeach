import Image from "next/image";

export default function Hero() {
  return (
    <header
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden z-10"
    >
      {/* Background Image Container with Teal Gradient Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/hero.png"
          alt="Tigri Beach Restaurant beachfront dining Hikkaduwa"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105 animate-[zoom_25s_infinite_alternate] brightness-65"
        />
        {/* Teal/Blue gradient overlay matching the screenshot color scheme */}
        <div className="absolute inset-0" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8 pt-24 pb-28 md:pb-36">
        
        {/* Header Tag */}
        <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#e28a6b] uppercase animate-[heroFadeInUp_1s_ease-out]">
          HIKKADUWA, SRI LANKA
        </span>

        {/* Main Serif Title matching screenshot typography */}
        <h1 className="font-serif text-5xl md:text-8xl font-medium tracking-tight text-white leading-[1.1] md:leading-[1.05] max-w-4xl animate-[heroFadeInUp_1.2s_ease-out] drop-shadow-sm">
          Where the <br className="md:hidden" />
          <span className="italic font-serif font-light text-[#f5d4ba]">ocean</span> sets <br className="md:hidden" /> the table
        </h1>

        {/* Subtitle */}
        <p className="text-xs md:text-sm font-light text-slate-200/95 tracking-[0.25em] uppercase animate-[heroFadeInUp_1.4s_ease-out] -mt-2">
          Fresh seafood • Beach vibes • Sunset views
        </p>

        

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
            className="px-7 py-3 text-xs md:text-sm font-bold uppercase tracking-wider text-white border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2 cursor-pointer"
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

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 select-none pointer-events-none animate-pulse">
        <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-white/50">
          SCROLL
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
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


    </header>
  );
}
