"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("seafood");

  const categories = [
    { id: "seafood", name: "Tigri Special Seafood" },
    { id: "breakfast", name: "Breakfast" },
    { id: "drinks", name: "Drinks" },
  ];

  const menuItems = {
    seafood: [
      {
        name: "01. Tigri Special Full Fish",
        description: "Served with chips and salad (For One Person). Your choice of Dorado, Barracuda, or Coral Fish, cooked with fresh tomato, ginger, lime, and tasty garlic butter sauce.",
        priceLkr: "LKR 3,000",
        priceUsd: "~$10.00",
        tags: ["Fresh Catch", "Popular"],
        ingredients: "Dorado, Barracuda or Coral Fish, Fresh Tomato, Ginger, Lime, Garlic Butter Sauce",
        cuisine: "Sri Lankan Seafood",
        category: "Catch of the Day",
        whyPopular: "One of our signature seafood dishes prepared using freshly caught reef fish.",
        imageAlt: "Tigri Special Full Fish with chips and salad",
      },
      {
        name: "02. Tigri Special Mix Prawns",
        description: "Served with chips and salad (For One Person). Jumbo prawns and tiger prawns cooked with fresh tomato, ginger and lime.",
        priceLkr: "LKR 5,000",
        priceUsd: "~$16.50",
        tags: ["Popular"],
        ingredients: "Jumbo Prawns, Tiger Prawns, Fresh Tomato, Ginger, Lime",
        cuisine: "Sri Lankan Seafood",
        category: "Catch of the Day",
        whyPopular: "Fresh jumbo and tiger prawns prepared with simple coastal flavors.",
        imageAlt: "Tigri Special Mix Prawns with chips and salad",
      },
      {
        name: "03. Tigri Special Crabs",
        description: "Served with chips and salad (For One Person). Fresh crabs cooked with Tigri Special Mix Sauce.",
        priceLkr: "LKR 8,500",
        priceUsd: "~$28.00",
        tags: ["Chef Special"],
        ingredients: "Fresh Local Crabs, Tigri Special Mix Sauce",
        cuisine: "Sri Lankan Seafood",
        category: "Catch of the Day",
        whyPopular: "A signature crab dish cooked in our house special seafood sauce.",
        imageAlt: "Tigri Special Crabs with chips and salad",
      },
  ],

    breakfast: [
      {
        name: "07. Breakfast",
        description: "Pot of tea or coffee, egg (boiled, fried or scrambled), toast with butter and jam, slice of cheese and fruit juice.",
        priceLkr: "LKR 2,000",
        priceUsd: "~$6.50",
        tags: ["Classic"],
        ingredients: "Tea/Coffee, Eggs, Toast, Butter, Jam, Cheese, Fruit Juice",
        cuisine: "Continental Breakfast",
        category: "Breakfast",
        whyPopular: "A hearty breakfast before exploring Hikkaduwa.",
        imageAlt: "Breakfast with eggs toast and coffee",
      },
      {
        name: "08. Sri Lankan Breakfast",
        description: "Pot of tea or coffee with String Hoppers, Coconut Rotti or Milk Rice served with dhal curry, fish curry, egg curry, fried egg or coconut sambol.",
        priceLkr: "LKR 2,000",
        priceUsd: "~$6.50",
        tags: ["Authentic", "Must Try"],
        ingredients: "Tea/Coffee, String Hoppers, Coconut Rotti, Milk Rice, Dhal Curry, Fish Curry, Egg Curry, Fried Egg, Coconut Sambol",
        cuisine: "Authentic Sri Lankan",
        category: "Breakfast",
        whyPopular: "A traditional Sri Lankan breakfast loved by locals and visitors.",
        imageAlt: "Sri Lankan Breakfast",
      },
    ],
    drinks: [
      {
        name: "13. Virgin Mojito",
        description: "Fresh mint, lime, ice and soda.",
        priceLkr: "LKR 1,200",
        priceUsd: "~$4.00",
        tags: ["Mocktail", "Non-Alcoholic"],
        ingredients: "Mint, Lime, Ice, Soda",
        cuisine: "Mocktail",
        category: "Drinks",
        whyPopular: "A refreshing tropical cooler.",
        imageAlt: "Virgin Mojito",
      },
      {
        name: "14. Pineapple Mojito",
        description: "Mint, pineapple juice, soda, lime and ice.",
        priceLkr: "LKR 1,200",
        priceUsd: "~$4.00",
        tags: ["Mocktail", "Non-Alcoholic"],
        ingredients: "Mint, Pineapple Juice, Soda, Lime, Ice",
        cuisine: "Mocktail",
        category: "Drinks",
        whyPopular: "Made with sweet local pineapple juice.",
        imageAlt: "Pineapple Mojito",
      },
      {
        name: "16. Tigri Special Cocktail",
        description: "White rum, lime, sugar, orange juice, pineapple juice and ice.",
        priceLkr: "LKR 1,800",
        priceUsd: "~$6.00",
        tags: ["Signature Cocktail", "Alcoholic"],
        ingredients: "White Rum, Lime, Sugar, Orange Juice, Pineapple Juice, Ice",
        cuisine: "Signature Cocktail",
        category: "Drinks",
        whyPopular: "Tigri Beach's signature tropical cocktail.",
        imageAlt: "Tigri Special Cocktail",
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

        {/* Interactive Menu Grid */}
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
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm font-light text-slate-600 leading-relaxed max-w-xl">
                  {item.description}
                </p>

                {/* Ingredients */}
                {item.ingredients && (
                  <p className="text-[11px] md:text-xs text-slate-500 font-light italic mt-1">
                    <span className="font-semibold not-italic text-slate-700">Ingredients: </span>
                    {item.ingredients}
                  </p>
                )}

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

          {/* Right: Immersive Picture Card Showcase & PDF Downloads */}
          <div className="col-span-1 lg:col-span-5 h-full lg:sticky lg:top-28 flex flex-col gap-6 animate-scroll-right">
            
            {/* The Experience Card */}
            <div className="glassmorphism-card p-4 rounded-3xl overflow-hidden flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-100">
                <Image
                  src="/seafood_platter.jpg"
                  alt="Tigri Special Sea Food Full Plate"
                  title="Tigri Special Sea Food Full Plate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-white/10">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest leading-none glow-text-amber">
                    Tigri Special
                  </span>
                </div>
              </div>
              <div className="px-2 py-4 flex flex-col gap-2">
                <h3 className="font-serif text-xl font-bold text-slate-900">Tigri Special Full Plate</h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  Our ultimate signature seafood feast featuring prawns, jumbo prawns, tiger prawns, calamari, crabs, lobster, and full fish. Cooked with lime, fresh tomato sauce, and tasty garlic butter.
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">Total Price</span>
                    <span className="text-lg font-bold text-primary">LKR 14,000</span>
                  </div>
                  <Link
                    href="/#contact"
                    className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 glow-btn-primary"
                  >
                    Reserve Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Premium Download PDF Card */}
            <div className="glassmorphism-card p-6 rounded-3xl border border-slate-200/80 shadow-lg bg-white text-slate-900 flex flex-col gap-4 relative overflow-hidden">
              {/* Decorative backgrounds */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-[40px] pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-accent/5 rounded-full blur-[30px] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col gap-1">
                <h4 className="font-serif text-base font-bold text-slate-900">Tigri Full Menu</h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  See Our Complete Menu From Here
                </p>
              </div>
              
              <div className="relative z-10 grid grid-cols-2 gap-3">
                <a
                  href="/Tigri_Full_Food_Menu.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-primary hover:bg-primary-hover text-white rounded-2xl text-[11px] font-bold tracking-wider uppercase transition-all duration-300 shadow-md shadow-primary/20 hover:scale-102 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                  Food Menu
                </a>
                <a
                  href="/Tigri_Full_Drinks_Menu.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-2xl text-[11px] font-bold tracking-wider uppercase transition-all duration-300 border border-slate-200 hover:scale-102 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                  Drinks Menu
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
