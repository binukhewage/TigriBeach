export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-slate-50 border-t border-slate-200 py-16 md:py-24 overflow-hidden"
    >
      {/* Faint gold glow under light mode */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/[0.01] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
        
        {/* Brand & Mission Column */}
        <div className="col-span-1 md:col-span-5 flex flex-col gap-4 animate-scroll-fade">
          <a href="#hero" className="flex flex-col select-none">
            <span className="font-serif text-3xl font-extrabold tracking-wider text-primary glow-text-amber">
              TIGRI BEACH
            </span>
            <span className="text-[10px] tracking-[0.3em] text-slate-500 uppercase -mt-0.5">
              Hikkaduwa • Seafood Restaurant
            </span>
          </a>
          <p className="text-xs md:text-sm font-light text-slate-600 leading-relaxed max-w-sm mt-2">
            Providing authentic beachside seafood dining experiences since 1999. Dine on the sand, watch the sunset, and experience local Ceylonese hospitality.
          </p>
          {/* Social Badges (Light Mode) */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.tripadvisor.com/Restaurant_Review-g304134-d4778071-Reviews-Tigri_Beach_Resturant-Hikkaduwa_Galle_District_Southern_Province.html"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-[#00b087] hover:border-[#00b087]/30 flex items-center justify-center text-xs font-bold transition-all duration-300 shadow-sm"
              aria-label="TripAdvisor"
            >
              TA
            </a>
            {/* Opens Driving directions */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Tigri+Beach+Restaurant+Hikkaduwa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-[#ea4335] hover:border-[#ea4335]/30 flex items-center justify-center text-xs font-bold transition-all duration-300 shadow-sm"
              aria-label="Google Maps Directions"
            >
              GM
            </a>
          </div>
        </div>

        {/* Contact Info Column (Light Mode) */}
        <div className="col-span-1 md:col-span-3 flex flex-col gap-6 animate-scroll-fade">
          <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-900">
            Find Us
          </h4>
          <div className="flex flex-col gap-4 text-xs md:text-sm font-light text-slate-600">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="leading-relaxed">
                348, Galle Road,<br />
                Hikkaduwa, Sri Lanka
              </span>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="flex flex-col">
                <a href="tel:+94771048202" className="hover:text-primary font-medium transition-colors duration-200">
                  +94 77 104 8202
                </a>
                <span className="text-[10px] text-slate-400">Call / WhatsApp</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                09:30 AM - 11:00 PM<br />
                <span className="text-[10px] text-slate-400">Open Everyday</span>
              </span>
            </div>
          </div>
        </div>

        {/* Map Shortcut Column (Light Mode) */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-4 animate-scroll-right">
          <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-900">
            Location Directions
          </h4>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Tigri+Beach+Restaurant+Hikkaduwa"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[16/9] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white hover:border-slate-350 transition-all duration-300"
            aria-label="Get driving directions to Tigri Beach Restaurant on Google Maps"
          >
            {/* Visual grid matching a light stylized map */}
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-70 z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 group-hover:scale-105 transition-transform duration-700 z-10" />
            
            {/* Styled Map Marker */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-650 group-hover:text-primary transition-colors duration-200">
                Get Directions
              </span>
            </div>
          </a>
        </div>

      </div>

      {/* Credits & copyright */}
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-200 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-light">
        <span>© {new Date().getFullYear()} Tigri Beach Restaurant. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-primary transition-colors duration-200">About</a>
          <a href="#menu" className="hover:text-primary transition-colors duration-200">Menu</a>
          <a href="#gallery" className="hover:text-primary transition-colors duration-200">Gallery</a>
          <a href="#contact" className="hover:text-primary transition-colors duration-200">Contact</a>
        </div>
      </div>
    </footer>
  );
}
