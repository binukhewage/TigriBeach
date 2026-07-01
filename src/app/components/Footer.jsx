import Image from "next/image";
import Link from "next/link";

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
        <div className="col-span-1 md:col-span-4 flex flex-col gap-4 animate-scroll-fade">
          <Link href="/#hero" className="flex flex-col select-none">
            <div className="relative w-[168px] h-[70px] md:w-[192px] md:h-[80px]">
              <Image
                src="/logoonly.png"
                alt="Tigri Beach Restaurant logo - Hikkaduwa beachfront dining"
                title="Tigri Beach Restaurant Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <span className="text-[10px] tracking-[0.3em] text-slate-500 uppercase mt-2">
              Hikkaduwa • Seafood Restaurant
            </span>
          </Link>
          <p className="text-xs md:text-sm font-light text-slate-600 leading-relaxed max-w-sm mt-2">
            Providing authentic beachside seafood dining experiences.
            Dine on the sand, watch the sunset, and experience local Ceylonese
            hospitality.
          </p>
          {/* Social Badges (Light Mode with Brand Colors) */}
          <div className="flex gap-3.5 mt-4">
            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/tigri.beach/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#E1306C]/10 text-[#E1306C] border border-[#E1306C]/20 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            
            {/* Facebook Link */}
            <a
              href="https://www.facebook.com/TigriTours/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] border border-[#1877F2]/20 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* TripAdvisor Link */}
            <a
              href="https://www.tripadvisor.com/Restaurant_Review-g304134-d4778071-Reviews-Tigri_Beach_Resturant-Hikkaduwa_Galle_District_Southern_Province.html"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#00aa6c]/10 text-[#00aa6c] border border-[#00aa6c]/20 hover:bg-[#00aa6c] hover:text-white hover:border-[#00aa6c] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
              aria-label="TripAdvisor"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z"/>
              </svg>
            </a>

            {/* Google Maps Directions Link */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Tigri+Beach+Restaurant+Hikkaduwa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#ea4335]/10 text-[#ea4335] border border-[#ea4335]/20 hover:bg-[#ea4335] hover:text-white hover:border-[#ea4335] flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105"
              aria-label="Google Maps Directions"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-4 animate-scroll-fade">
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-900">
            Quick Links
          </h2>
          <div className="flex flex-col gap-2.5 text-sm text-slate-600 font-light">
            <Link href="/#about" className="hover:text-primary transition-colors duration-200">About Us</Link>
            <Link href="/#menu" className="hover:text-primary transition-colors duration-200">Our Menu</Link>
            <Link href="/#gallery" className="hover:text-primary transition-colors duration-200">Life & Gallery</Link>
            <Link href="/#reviews" className="hover:text-primary transition-colors duration-200">Reviews</Link>
            <Link href="/#contact" className="hover:text-primary transition-colors duration-200">Find Us</Link>
            <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200">AI Sitemap</a>
          </div>
        </div>

        {/* Contact Info Column (Light Mode) */}
        <div className="col-span-1 md:col-span-3 flex flex-col gap-6 animate-scroll-fade">
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-900">
            Find Us
          </h2>
          <div className="flex flex-col gap-4 text-xs md:text-sm font-light text-slate-600">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-primary shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <address itemScope itemType="https://schema.org/PostalAddress" className="not-italic font-normal text-slate-650">
                <span itemProp="streetAddress">348, Galle Road</span>,
                <br />
                <span itemProp="addressLocality">Hikkaduwa</span>,{" "}
                <span itemProp="addressCountry">Sri Lanka</span>
              </address>
            </div>

            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-primary shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div className="flex flex-col">
                <a
                  href="tel:+94771048202"
                  className="hover:text-primary font-medium transition-colors duration-200"
                >
                  +94 77 104 8202
                </a>
                <span className="text-[10px] text-slate-400">
                  Call / WhatsApp
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-primary shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                09:30 AM - 11:00 PM
                <br />
                <span className="text-[10px] text-slate-400">
                  Open Everyday
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Map Shortcut Column (Light Mode) */}
        <div className="col-span-1 md:col-span-3 flex flex-col gap-4 animate-scroll-right">
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-900">
            Location Directions
          </h2>
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
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
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
        <span>
          © {new Date().getFullYear()} Tigri Beach Restaurant. All rights
          reserved.
        </span>
        <span className="text-center">
          Powered by CYM AI • By{" "}
          <a
            href="https://cyoumedia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-200 font-medium"
          >
            CYouMedia
          </a>
        </span>
        <div className="flex gap-6">
          <Link
            href="/#about"
            className="hover:text-primary transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/#menu"
            className="hover:text-primary transition-colors duration-200"
          >
            Menu
          </Link>
          <Link
            href="/#gallery"
            className="hover:text-primary transition-colors duration-200"
          >
            Gallery
          </Link>
          <Link
            href="/#contact"
            className="hover:text-primary transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
