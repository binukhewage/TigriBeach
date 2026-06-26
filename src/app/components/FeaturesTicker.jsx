import React from "react";

export default function FeaturesTicker() {
  const features = [
    {
      name: "Beach",
      icon: (
        <svg
          className="w-5 h-5 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20" />
          <path d="M17 9.5a5.5 5.5 0 0 0-10 0" />
          <path d="M12 2a9.9 9.9 0 0 1 8.5 5" />
          <path d="M12 2A9.9 9.9 0 0 0 3.5 7" />
          <path d="M2 17h20" />
        </svg>
      ),
    },
    {
      name: "Free Wifi",
      icon: (
        <svg
          className="w-5 h-5 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 13a10 10 0 0 1 14 0" />
          <path d="M8.5 16.5a5 5 0 0 1 7 0" />
          <path d="M2 9.5a15 15 0 0 1 20 0" />
          <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
        </svg>
      ),
    },
    {
      name: "Outdoor Seating",
      icon: (
        <svg
          className="w-5 h-5 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v14" />
          <path d="M12 6c4 0 7 2.5 7 5H5c0-2.5 3-5 7-5Z" />
          <path d="M8 22h8" />
        </svg>
      ),
    },
    {
      name: "Reservations",
      icon: (
        <svg
          className="w-5 h-5 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="M8 14h.01" strokeWidth="3" />
          <path d="M12 14h.01" strokeWidth="3" />
          <path d="M16 14h.01" strokeWidth="3" />
        </svg>
      ),
    },
    {
      name: "Seating",
      icon: (
        <svg
          className="w-5 h-5 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 18V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v13" />
          <path d="M5 11h14" />
          <path d="M7 11V21" />
          <path d="M17 11V21" />
        </svg>
      ),
    },
    {
      name: "Serves Alcohol",
      icon: (
        <svg
          className="w-5 h-5 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 22H6" />
          <path d="M12 15v7" />
          <path d="M12 15a5 5 0 0 0 5-5V3H7v7a5 5 0 0 0 5 5Z" />
        </svg>
      ),
    },
    {
      name: "Table Service",
      icon: (
        <svg
          className="w-5 h-5 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 17h20" />
          <path d="M6 17a6 6 0 0 1 12 0" />
          <path d="M12 2v4" />
          <path d="M12 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
        </svg>
      ),
    },
    {
      name: "Waterfront",
      icon: (
        <svg
          className="w-5 h-5 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 10c1.5-1.5 2.5-1.5 4 0s2.5 1.5 4 0 2.5-1.5 4 0 2.5 1.5 4 0 2.5-1.5 4 0" />
          <path d="M2 14c1.5-1.5 2.5-1.5 4 0s2.5 1.5 4 0 2.5-1.5 4 0 2.5 1.5 4 0 2.5-1.5 4 0" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative py-6 bg-white overflow-hidden w-full select-none z-30">
      <div className="animate-marquee flex items-center gap-16">
        {/* Set 1 */}
        {features.map((feature, idx) => (
          <div
            key={`a-${idx}`}
            className="flex items-center gap-4 text-slate-800 shrink-0"
          >
            <div className="flex items-center justify-center p-2.5 rounded-xl bg-primary/5 text-primary">
              {feature.icon}
            </div>
            <span className="text-xs font-bold uppercase tracking-widest">
              {feature.name}
            </span>
            <span className="ml-12 text-slate-300 text-lg select-none">•</span>
          </div>
        ))}
        {/* Set 2 (for seamless loop) */}
        {features.map((feature, idx) => (
          <div
            key={`b-${idx}`}
            className="flex items-center gap-4 text-slate-800 shrink-0"
          >
            <div className="flex items-center justify-center p-2.5 rounded-xl bg-primary/5 text-primary">
              {feature.icon}
            </div>
            <span className="text-xs font-bold uppercase tracking-widest">
              {feature.name}
            </span>
            <span className="ml-12 text-slate-300 text-lg select-none">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
