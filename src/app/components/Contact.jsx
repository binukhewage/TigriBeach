export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact and Reservations"
      className="relative py-24 md:py-32 bg-slate-50/60 border-t border-slate-100 overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16 animate-scroll-fade">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Connect & Dine
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Contact & Location
          </h2>
          <p className="max-w-md text-sm md:text-base text-slate-500 font-light mt-1">
            Find us on the beach, check our opening hours, or reach out to reserve a prime sunset table.
          </p>
          <div className="h-[2px] w-20 bg-primary mt-2" />
        </div>

        {/* Dual Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch animate-scroll-scale">
          
          {/* Left Column: Details Cards */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Location & Address Card */}
            <article aria-label="Physical Address" className="glassmorphism-card p-6 md:p-8 rounded-3xl flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold text-slate-900 tracking-wide uppercase">Address</h3>
                <address itemScope itemType="https://schema.org/PostalAddress" className="not-italic font-normal text-sm text-slate-600 leading-relaxed mt-1">
                  <span itemProp="streetAddress">348, Galle Road</span>,<br />
                  <span itemProp="addressLocality">Hikkaduwa</span>,{" "}
                  <span itemProp="addressCountry">Sri Lanka</span>
                </address>
                <span className="text-xs text-slate-400 font-light mt-2 italic">
                  Right on the beachfront
                </span>
              </div>
            </article>

            {/* Contact Details & WhatsApp Booking Card */}
            <article aria-label="Contact Channels" className="glassmorphism-card p-6 md:p-8 rounded-3xl flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold text-slate-900 tracking-wide uppercase">Get In Touch</h3>
                  <a
                    href="tel:+94771048202"
                    className="text-lg font-bold text-slate-900 hover:text-primary transition-colors duration-200 mt-1"
                  >
                    +94 77 104 8202
                  </a>
                  <span className="text-xs text-slate-500 font-light">Available for Calls and WhatsApp</span>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <div className="border-t border-slate-100 pt-4 flex flex-col gap-3">
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  Want to secure a prime table directly on the sand for sunset? Message us directly on WhatsApp for instant confirmation.
                </p>
                <a
                  href="https://wa.me/94771048202?text=Hi%20Tigri%20Beach!%20I'd%20like%20to%20reserve%20a%20table"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25d366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                >
                  {/* WhatsApp Icon */}
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.73.001-2.595-1.013-5.035-2.856-6.88C16.635 2.15 14.195 1.135 11.6 1.135 6.166 1.135 1.74 5.504 1.737 10.867c-.002 1.702.453 3.361 1.32 4.8l-.946 3.454 3.536-.928zM17.387 14.5c-.328-.164-1.94-.957-2.24-1.066-.298-.11-.515-.164-.73.164-.216.329-.838 1.066-1.027 1.284-.19.219-.378.247-.707.082-.328-.164-1.386-.511-2.64-1.631-.975-.87-1.633-1.947-1.824-2.275-.19-.328-.02-.505.143-.669.148-.148.329-.383.493-.574.164-.192.219-.328.329-.547.11-.219.055-.411-.027-.575-.082-.164-.73-1.752-.998-2.409-.263-.64-.526-.55-.73-.561-.19-.01-.41-.01-.628-.01-.218 0-.573.082-.874.411-.3.329-1.148 1.122-1.148 2.736 0 1.614 1.176 3.176 1.34 3.394.164.218 2.316 3.535 5.612 4.957.784.339 1.396.541 1.873.693.788.25 1.505.215 2.072.13.632-.094 1.94-.793 2.214-1.56.273-.768.273-1.424.191-1.56-.082-.136-.299-.219-.627-.383z"/>
                  </svg>
                  Book Table on WhatsApp
                </a>
              </div>
            </article>

            {/* Opening Hours Card */}
            <article aria-label="Opening Hours" className="glassmorphism-card p-6 md:p-8 rounded-3xl flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <h3 className="text-base font-bold text-slate-900 tracking-wide uppercase">Opening Hours</h3>
                <div className="flex flex-col gap-2 mt-3 text-sm text-slate-650 font-light">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                    <span>Monday - Sunday</span>
                    <span className="font-semibold text-slate-900">09:30 AM - 11:00 PM</span>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 italic leading-none">
                    Open daily for Breakfast, Lunch, Sunset, and Dinner
                  </span>
                </div>
              </div>
            </article>

            {/* Explore Nearby Card */}
            <article aria-label="Nearby Attractions" className="glassmorphism-card p-6 md:p-8 rounded-3xl flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-accent/10 border border-accent/20 text-accent shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <h3 className="text-base font-bold text-slate-900 tracking-wide uppercase">Explore Nearby</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-3 text-xs text-slate-600 font-light">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>Hikkaduwa Beach (Right Outside)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>Coral Reef (2 Mins Walk)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Turtle Beach (3 Mins Walk)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>Surf Point (5 Mins Walk)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>Snorkeling (2 Mins Walk)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>Diving (4 Mins Walk)</span>
                  </div>
                </div>
              </div>
            </article>

          </div>

          {/* Right Column: Google Maps Embed Card */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-between">
            <article aria-label="Google Maps Location" className="glassmorphism-card p-4 rounded-3xl flex flex-col gap-4 border border-slate-200 bg-white h-full justify-between">
              
              {/* Map Container */}
              <div className="w-full flex-1 aspect-[16/10] lg:aspect-auto min-h-[300px] lg:h-[450px] rounded-2xl overflow-hidden shadow-inner border border-slate-100 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.8767784013146!2d80.097011!3d6.138402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1df57eb701b2f%3A0xeae0b355fb5ce221!2sTigri%20Beach%20Restaurant!5e0!3m2!1sen!2slk!4v1719313200000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tigri Beach Restaurant Location Google Map"
                  className="absolute inset-0"
                />
              </div>

              {/* Action buttons */}
              <div className="px-2 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 mt-2">
                <div className="flex flex-col" itemScope itemType="https://schema.org/PostalAddress">
                  <span className="text-xs text-slate-400">Google Map Link</span>
                  <span className="text-sm font-semibold text-slate-900 mt-0.5">
                    <span itemProp="streetAddress">348 Galle Road</span>,{" "}
                    <span itemProp="addressLocality">Hikkaduwa</span>
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Tigri+Beach+Restaurant+Hikkaduwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Get Driving Directions
                </a>
              </div>

            </article>
          </div>

        </div>

      </div>
    </section>
  );
}
