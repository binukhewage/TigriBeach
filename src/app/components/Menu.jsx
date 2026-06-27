"use client";

import { useState } from "react";
import Image from "next/image";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("signatures");

  const categories = [
    { id: "signatures", name: "Signatures" },
    { id: "seafood", name: "Fresh Catch" },
    { id: "curries", name: "Ceylonese Curries" },
    { id: "drinks", name: "Sunset Cocktails" },
  ];

  const menuItems = {
    signatures: [
      {
        name: "Tigri Seafood Platter",
        description: "A colossal grill platter featuring fresh lobster, lagoon crab, tiger prawns, calamari, and catch-of-the-day reef fish, served with garlic herb butter, fries, and salad.",
        priceLkr: "LKR 14,500",
        priceUsd: "~$48.00",
        tags: ["Popular", "Sourced Today", "Serves 2"],
        ingredients: "Fresh Rock Lobster, Lagoon Crab, Tiger Prawns, Calamari, Snapper, Garlic, Lemon Butter, Herbs",
        cuisine: "Sri Lankan Seafood / Western Grill",
        category: "Signatures",
        whyPopular: "Featuring a daily selection of harbor-fresh catches grilled over coconut charcoal to smoky perfection.",
        imageAlt: "Colossal grilled seafood platter with lobster, crab, prawns and calamari",
      },
      {
        name: "Jumbo Garlic Butter Tiger Prawns",
        description: "Huge tiger prawns grilled on order, tossed in a sizzling pan of clarified butter, roasted garlic, and fine parsley.",
        priceLkr: "LKR 6,200",
        priceUsd: "~$20.50",
        tags: ["Chef Special"],
        ingredients: "Jumbo Tiger Prawns, Clarified Butter, Roasted Garlic, Fresh Parsley, Lemon Juice",
        cuisine: "Sri Lankan / Western Fusion",
        category: "Signatures",
        whyPopular: "Highly requested for the massive size of the local prawns and the rich, garlic-infused butter sauce.",
        imageAlt: "Grilled jumbo tiger prawns served with garlic butter sauce and lemon slices",
      },
      {
        name: "Butter-Rosemary Grilled Snapper",
        description: "Whole red snapper pan-seared with fresh rosemary sprigs, garlic cloves, and lemon juice over hot coals.",
        priceLkr: "LKR 5,800",
        priceUsd: "~$19.20",
        tags: ["Fresh Catch"],
        ingredients: "Whole Red Snapper, Fresh Rosemary, Garlic Cloves, Olive Oil, Lemon Juice, Sea Salt",
        cuisine: "Mediterranean Seafood Grill",
        category: "Signatures",
        whyPopular: "A classic beachfront dish showcasing the fresh, clean flavors of daily-caught white reef fish.",
        imageAlt: "Whole grilled red snapper fish garnished with rosemary sprigs and lemon",
      },
    ],
    seafood: [
      {
        name: "Deviled Calamari",
        description: "Tender ocean calamari rings tossed in a fiery, sweet-and-sour Sri Lankan deviled sauce with thick-cut bell peppers and onions.",
        priceLkr: "LKR 3,900",
        priceUsd: "~$13.00",
        tags: ["Spicy"],
        ingredients: "Ocean Calamari, Red Chili Paste, Bell Peppers, Red Onions, Garlic, Ginger, Soy Sauce, Green Chili",
        cuisine: "Sri Lankan Deviled",
        category: "Fresh Catch",
        whyPopular: "A local favorite featuring a perfect balance of spicy, sweet, and tangy flavors that pair well with cold beer.",
        imageAlt: "Spicy Sri Lankan deviled calamari rings with peppers and onions in a red sauce",
      },
      {
        name: "Charcoal Grilled Lobster",
        description: "Freshly harvested rock lobster basted with lemon juice and olive oil, slowly grilled over coconut charcoal.",
        priceLkr: "By Weight / 100g",
        priceUsd: "Market Price",
        tags: ["Premium", "Live Catch"],
        ingredients: "Live Rock Lobster, Olive Oil, Fresh Lemon Juice, Sea Salt, Cracked Black Pepper, Garlic Butter",
        cuisine: "Fresh Seafood Grill",
        category: "Fresh Catch",
        whyPopular: "Guests hand-select their lobster from our daily display to be custom-grilled on the beach.",
        imageAlt: "Fresh whole lobster charcoal-grilled on the beach and served with lemon",
      },
      {
        name: "Crispy Fried Reef Fish Fillet",
        description: "Locally caught white fish coated in a light spiced batter, fried until golden, served with homemade tartar sauce.",
        priceLkr: "LKR 3,600",
        priceUsd: "~$12.00",
        tags: [],
        ingredients: "White Reef Fish Fillet, Spiced Flour Batter, Tartar Sauce (Mayonnaise, Dill, Capers, Lemon)",
        cuisine: "International Seafood",
        category: "Fresh Catch",
        whyPopular: "Crispy, golden batter locking in the delicate juices of the fresh daily-caught reef fish.",
        imageAlt: "Crispy golden fried fish fillets served with tartar sauce",
      },
    ],
    curries: [
      {
        name: "Hikkaduwa Lagoon Crab Curry",
        description: "Aromatic Sri Lankan mud crab simmered in a rich toasted coconut gravy with fresh curry leaves, lemongrass, and local spices. Served with steamed basmati rice and dhal.",
        priceLkr: "LKR 7,500",
        priceUsd: "~$24.80",
        tags: ["Authentic", "Highly Recommended"],
        ingredients: "Lagoon Mud Crab, Roasted Curry Powder, Coconut Milk, Lemongrass, Curry Leaves, Fenugreek, Pandan Leaves",
        cuisine: "Authentic Sri Lankan",
        category: "Ceylonese Curries",
        whyPopular: "Our signature local specialty, showcasing the rich spices and fresh seafood heritage of Hikkaduwa.",
        imageAlt: "Spicy traditional Sri Lankan mud crab curry in a clay pot served with rice",
      },
      {
        name: "Traditional Fish Ambul Thiyal",
        description: "A Southern Sri Lankan specialty: cubed tuna cooked in a sour and dry thick curry paste made from black goraka (garcinia), black pepper, and spices.",
        priceLkr: "LKR 4,200",
        priceUsd: "~$14.00",
        tags: ["Sour & Spicy"],
        ingredients: "Cubed Yellowfin Tuna, Black Goraka Paste, Ground Black Pepper, Cardamom, Cloves, Curry Leaves",
        cuisine: "Southern Sri Lankan",
        category: "Ceylonese Curries",
        whyPopular: "An ancient southern method of preserving fish, delivering a unique, tangy, and deeply peppery flavor profile.",
        imageAlt: "Traditional dark and dry tuna fish curry Ambul Thiyal in a clay dish",
      },
      {
        name: "Red Prawn Coconut Curry",
        description: "Medium-sized tiger prawns simmered in mild coconut milk, seasoned with turmeric, fenugreek, and fresh green chilies.",
        priceLkr: "LKR 4,900",
        priceUsd: "~$16.20",
        tags: ["Mild"],
        ingredients: "Tiger Prawns, Coconut Milk, Turmeric, Fenugreek, Onion, Garlic, Green Chilies, Pandan Leaves",
        cuisine: "Sri Lankan Coconut Curry",
        category: "Ceylonese Curries",
        whyPopular: "A mild, creamy curry with aromatic spices that highlight the sweetness of fresh ocean prawns.",
        imageAlt: "Mild and creamy yellow prawn coconut curry with fresh herbs",
      },
    ],
    drinks: [
      {
        name: "Ceylonese Arrack Sour",
        description: "Premium local coconut arrack shaken with fresh lime juice, cane sugar syrup, and egg whites, served over crushed ice with an orange wheel.",
        priceLkr: "LKR 1,800",
        priceUsd: "~$6.00",
        tags: ["Signature Cocktail"],
        ingredients: "Coconut Arrack, Fresh Lime Juice, Cane Sugar Syrup, Egg White, Ice, Orange Slices",
        cuisine: "Sri Lankan Cocktail",
        category: "Sunset Cocktails",
        whyPopular: "A classic Sri Lankan beach cocktail utilizing the unique sweet flavor of distilled coconut nectar.",
        imageAlt: "Ceylonese Arrack Sour cocktail in a glass garnished with an orange wheel",
      },
      {
        name: "Hikkaduwa Sunset Mojito",
        description: "White rum muddled with fresh mint leaves, lime chunks, organic wild bee honey, and topped with sparkling soda water.",
        priceLkr: "LKR 1,600",
        priceUsd: "~$5.30",
        tags: ["Refreshing"],
        ingredients: "White Rum, Fresh Mint Leaves, Lime Chunks, Wild Bee Honey, Club Soda, Crushed Ice",
        cuisine: "Tropical Cocktail",
        category: "Sunset Cocktails",
        whyPopular: "Light, sweet, and minty, making it the perfect refreshing companion as the sun goes down.",
        imageAlt: "Refreshing tropical mojito cocktail with mint leaves and lime chunks",
      },
      {
        name: "Tambili (King Coconut) Rum Punch",
        description: "Fresh local sweet king coconut water spiked with white rum, triple sec, a dash of lime, and served in the shell.",
        priceLkr: "LKR 2,100",
        priceUsd: "~$7.00",
        tags: ["Must Try"],
        ingredients: "King Coconut Water, White Rum, Triple Sec, Lime Juice, Cherry, served inside the Tambili Shell",
        cuisine: "Tigri Signature Drink",
        category: "Sunset Cocktails",
        whyPopular: "Served inside a freshly cut local orange king coconut, offering a true tropical island aesthetic.",
        imageAlt: "Signature Rum Punch cocktail served inside a fresh orange king coconut shell",
      },
    ],
  };

  return (
    <section id="menu" aria-label="Tigri Beach Menu" className="relative py-24 md:py-32 bg-slate-50/60 border-t border-slate-100">
      {/* Soft color glow matching Light Mode style */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16 animate-scroll-fade">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Culinary Offerings
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Explore Our Menu
          </h2>
          <p className="max-w-md text-sm md:text-base text-slate-500 font-light mt-1">
            Hand-crafted beachfront specialties focusing on fresh catches and rich Sri Lankan heritage.
          </p>
          <div className="h-[2px] w-20 bg-primary mt-2" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-16 animate-scroll-fade">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-lg shadow-primary/20 scale-102"
                  : "bg-white text-slate-500 hover:text-slate-900 border border-slate-200 shadow-sm"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Interactive Menu Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Dishes List */}
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-6 min-h-[400px]">
            {menuItems[activeCategory].map((item, index) => (
              <div
                key={item.name}
                className="glassmorphism-card p-6 md:p-8 rounded-2xl flex flex-col gap-3 relative overflow-hidden animate-[fadeInUp_0.5s_ease-out]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Name & Price */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="text-lg md:text-xl font-serif font-bold text-slate-900 hover:text-primary transition-colors duration-205">
                    {item.name}
                  </h3>
                  <div className="flex flex-col items-start sm:items-end">
                    <span className="text-base md:text-lg font-bold text-primary">
                      {item.priceLkr}
                    </span>
                    <span className="text-[10px] text-slate-400 tracking-wide">
                      {item.priceUsd}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm font-light text-slate-600 leading-relaxed max-w-xl">
                  {item.description}
                </p>

                {/* Badges / Tags */}
                {item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[9px] font-semibold tracking-wider uppercase bg-primary/5 border border-primary/10 text-primary rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Immersive Picture Card Showcase */}
          <div className="col-span-1 lg:col-span-5 h-full lg:sticky lg:top-28 animate-scroll-right">
            <div className="glassmorphism-card p-4 rounded-3xl overflow-hidden flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-100">
                <Image
                  src="/seafood_platter.jpg"
                  alt="Tigri Seafood Platter signature dish"
                  title="Tigri Beach Signature Seafood Platter"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-white/10">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest leading-none glow-text-amber">
                    Catch of the Day
                  </span>
                </div>
              </div>
              <div className="px-2 py-4 flex flex-col gap-2">
                <h3 className="font-serif text-xl font-bold text-slate-900">The Seafood Platter Experience</h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  Our signature platter showcases the finest bounty that the Laccadive Sea provides. Prepared fresh over natural coconut charcoal grills and spiced with local herbs.
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">Total Price</span>
                    <span className="text-lg font-bold text-primary">LKR 14,500 <span className="text-xs font-normal text-slate-400">/ ~$48</span></span>
                  </div>
                  <a
                    href="#contact"
                    className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 glow-btn-primary"
                  >
                    Reserve Now
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
