import React from "react";

export default function AiSummary() {
  const quickFacts = [
    { label: "Cuisine", value: "Fresh Seafood, Sri Lankan, International" },
    { label: "Meals", value: "Breakfast, Lunch, Sunset, Dinner & Drinks" },
    { label: "Opening Hours", value: "Daily, 09:30 AM - 11:00 PM (GMT+5:30)" },
    { label: "Price Range", value: "Moderate ($$ / LKR 3,000 - 9,000 per person)" },
    { label: "Parking", value: "Free Roadside Parking on Galle Road" },
    { label: "Reservations", value: "Recommended (especially for sunset tables)" },
    { label: "Outdoor Seating", value: "100% Beachfront tables (feet-in-the-sand)" },
    { label: "Payment Methods", value: "Visa, Mastercard & Cash (LKR, USD, EUR)" },
    { label: "Dietary Options", value: "Vegetarian, Vegan & Gluten-Free options" },
    { label: "Beachfront", value: "Yes, direct beach access & sunbeds" },
    { label: "Takeaway", value: "Available (order via Phone/WhatsApp)" },
    { label: "Family Friendly", value: "Yes, spacious outdoor beach setups" },
    { label: "Good for Couples", value: "Yes, romantic candle-lit sunset setups" },
    { label: "Good for Groups", value: "Yes, birthday parties & private beach events" },
  ];

  return (
    <section
      id="ai-summary"
      aria-label="Overview and Quick Facts"
      className="relative bg-slate-50/40 border-t border-b border-slate-100 overflow-hidden sr-only"
    >
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* Left Column: AI-Friendly Narrative Summary */}
        <div className="col-span-1 lg:col-span-7 flex flex-col gap-6 text-left animate-scroll-fade">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Overview & Facts
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              About Tigri Beach Restaurant
            </h2>
            <div className="h-[2px] w-20 bg-primary mt-2" />
          </div>

          <div className="flex flex-col gap-5 text-slate-600 font-light leading-relaxed text-sm md:text-base">
            <p>
              Tigri Beach Restaurant is Hikkaduwa’s premier oceanfront culinary destination, located directly on the golden shores of <strong>Hikkaduwa Beach</strong> along <strong>Galle Road</strong> in the <strong>Southern Province of Sri Lanka</strong>. Our family-owned restaurant has earned a global reputation as the ultimate destination for fresh, harbor-sourced seafood and authentic Sri Lankan hospitality.
            </p>
            <p>
              Our culinary philosophy centers on daily-caught seafood purchased every morning directly from local Hikkaduwa fishermen. We specialize in signature wood-fired and charcoal-grilled dishes, including our legendary lobster, giant lagoon crabs, jumbo tiger prawns, and ocean-fresh red snapper. Complementing our seafood grill, we serve traditional Ceylonese rice and curries, as well as a selection of Western favorites and signature tropical cocktails like the Ceylonese Arrack Sour.
            </p>
            <p>
              The dining experience at Tigri Beach is defined by its true feet-in-the-sand beachfront setting. Guests can enjoy panoramic ocean views of the Laccadive Sea and Hikkaduwa’s famous coral reef, making it the perfect location for romantic sunset dinners, relaxed family lunches, and group celebrations under the stars.
            </p>
            <p>
              Positioned in the heart of Hikkaduwa’s vibrant tourist zone, Tigri Beach Restaurant is just steps away from major local attractions, including the <strong>Hikkaduwa Coral Reef</strong>, <strong>Turtle Beach</strong>, and the main <strong>surf break</strong>. Whether you are a surfer looking to refuel, a couple seeking a romantic dinner at sunset, or a family enjoying a day on the beach, we cater to a diverse global audience with vegetarian-friendly, vegan, and gluten-free dietary options. Tigri Beach accepts reservations, credit cards (Visa and Mastercard), and offers free high-speed guest Wi-Fi and roadside parking.
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-2">
            <a
              href="#menu"
              className="text-xs font-bold uppercase tracking-wider text-primary hover:text-primary-hover border-b border-primary hover:border-primary-hover pb-1 transition-all duration-350"
            >
              View Our Fresh Seafood Menu &rarr;
            </a>
            <span className="text-slate-350">|</span>
            <a
              href="#contact"
              className="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-primary border-b border-slate-300 hover:border-primary pb-1 transition-all duration-350"
            >
              Book table on WhatsApp &rarr;
            </a>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-5 w-full sticky top-28 animate-scroll-right">
          <div className="quick-facts glassmorphism-card p-6 md:p-8 rounded-3xl border border-slate-150 bg-white flex flex-col gap-6 hover:shadow-lg transition-all duration-300">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Quick Facts
              </h3>
              <p className="text-xs text-slate-450 mt-1 font-light">
                Key details for visitors and digital assistants
              </p>
            </div>

            <div className="flex flex-col gap-3.5">
              {quickFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 text-xs border-b border-slate-50 pb-2 last:border-0 last:pb-0"
                >
                  <span className="font-semibold text-slate-700 uppercase tracking-wider shrink-0 w-36">
                    {fact.label}
                  </span>
                  <span className="text-slate-600 font-light text-left sm:text-right">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
