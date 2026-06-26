"use client";

import { useState } from "react";

export default function Reviews() {
  const reviews = [
    {
      author: "Sarah Jenkins",
      source: "Google Review",
      rating: 5,
      text: "Best seafood platter in Hikkaduwa by far! Everything was incredibly fresh, the portions were generous, and eating right on the sand at sunset was unforgettable.",
      date: "2 weeks ago",
    },
    {
      author: "Michael Van Der Berg",
      source: "TripAdvisor Traveler",
      rating: 5,
      text: "The traditional Sri Lankan crab curry here is a masterpiece. Bursting with authentic spices and cooked to perfection. Make sure to book a front beach table for the sunset views!",
      date: "1 month ago",
    },
    {
      author: "Ruwan Bandara",
      source: "Google Local Guide",
      rating: 5,
      text: "Cozy beachfront gem. Friendly, attentive staff who let us choose our catch. The butter-rosemary snapper was incredibly tender. Very reasonable pricing for the quality.",
      date: "3 weeks ago",
    },
    {
      author: "Emma Watson",
      source: "TripAdvisor Reviewer",
      rating: 5,
      text: "An absolute must-visit in Hikkaduwa! We had the grilled prawns and calamari. The cocktails are superb, especially the Arrack Sour. Outstanding service and feet-in-the-sand dining!",
      date: "5 days ago",
    },
    {
      author: "David Miller",
      source: "Google Review",
      rating: 5,
      text: "Incredible food and atmosphere. The staff are so welcoming and the fish is caught daily. Sitting by the waves with a cold beer and fresh seafood is pure heaven. Highly recommend!",
      date: "1 week ago",
    },
    {
      author: "Sophia Martinez",
      source: "TripAdvisor Reviewer",
      rating: 5,
      text: "An absolute tropical paradise. The atmosphere is calm and romantic, and the seafood is cooked to absolute perfection. The garlic butter prawns are out of this world!",
      date: "4 days ago",
    },
    {
      author: "Liam Gallagher",
      source: "Google Review",
      rating: 5,
      text: "Wonderful beachfront seafood spot. Best grilled lobster on the coast, super fresh catch. Sitting under the stars with the sound of the ocean is amazing.",
      date: "10 days ago",
    },
  ];

  return (
    <section
      id="reviews"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/[0.015] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16 animate-scroll-fade">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Guest Sentiment
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            What Our Diners Say
          </h2>
          <p className="max-w-md text-sm md:text-base text-slate-500 font-light mt-1">
            Real guest reviews aggregated from TripAdvisor and Google Business platforms.
          </p>
          <div className="h-[2px] w-20 bg-primary mt-2" />
        </div>

        {/* Aggregates Dashboard Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20 items-stretch animate-scroll-scale">
          
          {/* TripAdvisor Card (matching exact interface) */}
          <div className="glassmorphism-card p-6 md:p-8 rounded-3xl border border-slate-150 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  {/* TripAdvisor Brand Icon */}
                  <div className="w-8 h-8 rounded-full bg-[#00aa6c] flex items-center justify-center text-white p-1">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800 tracking-tight text-sm leading-none">Tripadvisor</span>
                    <span className="text-[10px] text-slate-400 font-light mt-0.5">Community verified</span>
                  </div>
                </div>
                <span className="font-serif text-sm font-bold text-slate-900 uppercase tracking-wider">Reviews</span>
              </div>

              {/* Content Body Grid */}
              <div className="grid grid-cols-12 gap-6 items-center">
                {/* Left Score */}
                <div className="col-span-12 sm:col-span-5 flex flex-col items-center justify-center text-center sm:border-r border-slate-100 sm:pr-6 pb-4 sm:pb-0">
                  <span className="text-6xl font-extrabold text-slate-900 tracking-tighter">4.2</span>
                  <span className="text-sm font-bold text-slate-800 uppercase tracking-wider mt-1">Good</span>
                  
                  {/* 5-Bubble Rating representation (4.5 filled circles) */}
                  <div className="flex items-center gap-1.5 mt-3">
                    <div className="flex gap-1 text-[#00aa6c]">
                      <span className="w-3 h-3 rounded-full bg-[#00aa6c] border border-[#00aa6c]" />
                      <span className="w-3 h-3 rounded-full bg-[#00aa6c] border border-[#00aa6c]" />
                      <span className="w-3 h-3 rounded-full bg-[#00aa6c] border border-[#00aa6c]" />
                      <span className="w-3 h-3 rounded-full bg-[#00aa6c] border border-[#00aa6c]" />
                      <span className="w-3 h-3 rounded-full bg-transparent border border-[#00aa6c]" />
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium">(604)</span>
                  </div>
                </div>

                {/* Right Bars */}
                <div className="col-span-12 sm:col-span-7 flex flex-col gap-2.5">
                  {/* Excellent */}
                  <div className="flex items-center justify-between gap-3 text-[11px] text-slate-700">
                    <span className="w-16 shrink-0 font-medium text-slate-600">Excellent</span>
                    <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#00aa6c] h-full rounded-full w-[56%]" />
                    </div>
                    <span className="w-8 shrink-0 text-right font-medium text-slate-500">340</span>
                  </div>
                  {/* Good */}
                  <div className="flex items-center justify-between gap-3 text-[11px] text-slate-700">
                    <span className="w-16 shrink-0 font-medium text-slate-600">Good</span>
                    <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#00aa6c] h-full rounded-full w-[24%]" />
                    </div>
                    <span className="w-8 shrink-0 text-right font-medium text-slate-500">146</span>
                  </div>
                  {/* Average */}
                  <div className="flex items-center justify-between gap-3 text-[11px] text-slate-700">
                    <span className="w-16 shrink-0 font-medium text-slate-600">Average</span>
                    <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#00aa6c] h-full rounded-full w-[8%]" />
                    </div>
                    <span className="w-8 shrink-0 text-right font-medium text-slate-500">49</span>
                  </div>
                  {/* Poor */}
                  <div className="flex items-center justify-between gap-3 text-[11px] text-slate-700">
                    <span className="w-16 shrink-0 font-medium text-slate-600">Poor</span>
                    <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#00aa6c] h-full rounded-full w-[6%]" />
                    </div>
                    <span className="w-8 shrink-0 text-right font-medium text-slate-500">35</span>
                  </div>
                  {/* Terrible */}
                  <div className="flex items-center justify-between gap-3 text-[11px] text-slate-700">
                    <span className="w-16 shrink-0 font-medium text-slate-600">Terrible</span>
                    <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#00aa6c] h-full rounded-full w-[6%]" />
                    </div>
                    <span className="w-8 shrink-0 text-right font-medium text-slate-500">34</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Explicit TripAdvisor Review CTA button */}
            <div className="border-t border-slate-100 pt-5 mt-6 flex justify-end">
              <a
                href="https://www.tripadvisor.com/Restaurant_Review-g304134-d4778071-Reviews-Tigri_Beach_Resturant-Hikkaduwa_Galle_District_Southern_Province.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-5 py-2.5 bg-[#00aa6c] hover:bg-[#008f58] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm cursor-pointer font-sans"
              >
                Checkout TripAdvisor Reviews
              </a>
            </div>
          </div>

          {/* Google Business Card (matching exact interface) */}
          <div className="glassmorphism-card p-6 md:p-8 rounded-3xl border border-slate-150 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div className="flex flex-col">
                  <span className="font-serif text-sm font-bold text-slate-900 tracking-wider">Reviews</span>
                  <div className="flex items-center gap-1 mt-0.5 text-[10px] text-slate-450 font-light">
                    <span>Google review summary</span>
                    <span className="w-3.5 h-3.5 rounded-full border border-slate-300 text-slate-400 flex items-center justify-center text-[8px] font-bold">i</span>
                  </div>
                </div>
                
                {/* Write a review button linking to page */}
                <a
                  href="https://share.google/LtVgjRX3VIP4AQgZl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-slate-200 rounded-md bg-[#f8f9fa] hover:bg-slate-100 text-xs font-semibold text-slate-700 shadow-sm transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 text-slate-500 fill-current" viewBox="0 0 24 24">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                  </svg>
                  Write a review
                </a>
              </div>

              {/* Content Body Grid */}
              <div className="grid grid-cols-12 gap-6 items-center">
                {/* Left Bars */}
                <div className="col-span-12 sm:col-span-7 flex flex-col gap-2">
                  {/* 5 */}
                  <div className="flex items-center gap-3 text-[11px] text-slate-700">
                    <span className="w-3 shrink-0 font-medium text-slate-600 text-center">5</span>
                    <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#fbbc05] h-full rounded-full w-[75%]" />
                    </div>
                  </div>
                  {/* 4 */}
                  <div className="flex items-center gap-3 text-[11px] text-slate-700">
                    <span className="w-3 shrink-0 font-medium text-slate-600 text-center">4</span>
                    <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#fbbc05] h-full rounded-full w-[15%]" />
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="flex items-center gap-3 text-[11px] text-slate-700">
                    <span className="w-3 shrink-0 font-medium text-slate-600 text-center">3</span>
                    <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#fbbc05] h-full rounded-full w-[5%]" />
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="flex items-center gap-3 text-[11px] text-slate-700">
                    <span className="w-3 shrink-0 font-medium text-slate-600 text-center">2</span>
                    <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#fbbc05] h-full rounded-full w-[2%]" />
                    </div>
                  </div>
                  {/* 1 */}
                  <div className="flex items-center gap-3 text-[11px] text-slate-700">
                    <span className="w-3 shrink-0 font-medium text-slate-600 text-center">1</span>
                    <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-[#fbbc05] h-full rounded-full w-[3%]" />
                    </div>
                  </div>
                </div>

                {/* Right Score */}
                <div className="col-span-12 sm:col-span-5 flex flex-col items-center justify-center text-center sm:border-l border-slate-100 sm:pl-6 pt-4 sm:pt-0">
                  <span className="text-6xl font-extrabold text-slate-900 tracking-tighter">4.3</span>
                  
                  {/* Star rating display (4.5 Stars) */}
                  <div className="flex items-center gap-0.5 mt-2 text-[#fbbc05]">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    
                    {/* Custom Half Star */}
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <defs>
                        <linearGradient id="google-half-star">
                          <stop offset="50%" stopColor="#fbbc05" />
                          <stop offset="50%" stopColor="#cbd5e1" />
                        </linearGradient>
                      </defs>
                      <path fill="url(#google-half-star)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-2 font-medium">497 reviews</span>
                  
                  {/* Brand Logo in bottom corner */}
                  <div className="flex items-center gap-1.5 mt-4">
                    {/* Google Brand G Logo */}
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                    </svg>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Google</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Explicit Google Review CTA button */}
            <div className="border-t border-slate-100 pt-5 mt-6 flex justify-end">
              <a
                href="https://share.google/LtVgjRX3VIP4AQgZl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-5 py-2.5 bg-[#4285F4] hover:bg-[#357ae8] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
              >
                Checkout Google Reviews
              </a>
            </div>
          </div>
        </div>

        {/* Moving In-Line Testimonials Marquee */}
        <div className="relative w-full overflow-hidden py-4 -mx-6 px-6">
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-track {
              display: flex;
              width: max-content;
              animation: marquee 50s linear infinite;
            }
            .animate-marquee-track:hover {
              animation-play-state: paused;
            }
          `}} />
          {/* Side Gradients for fading effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="flex gap-6 w-max animate-marquee-track cursor-grab active:cursor-grabbing">
            {/* Copy 1 */}
            {reviews.map((rev, idx) => (
              <ReviewCard key={`copy-1-${idx}`} rev={rev} />
            ))}
            {/* Copy 2 (needed for seamless looping) */}
            {reviews.map((rev, idx) => (
              <ReviewCard key={`copy-2-${idx}`} rev={rev} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* Individual Review Card sub-component */
function ReviewCard({ rev }) {
  const isTripAdvisor = rev.source.includes("TripAdvisor");
  
  return (
    <div className="glassmorphism-card p-6 md:p-8 rounded-3xl w-[320px] md:w-[380px] shrink-0 flex flex-col justify-between select-none">
      <div className="flex flex-col gap-4">
        {/* Header info */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            {/* Small Source Badge */}
            {isTripAdvisor ? (
              <div className="w-6 h-6 rounded-full bg-[#00aa6c] flex items-center justify-center text-white p-0.5 shrink-0">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z"/>
                </svg>
              </div>
            ) : (
              <div className="w-6 h-6 rounded-full bg-white border border-slate-100 flex items-center justify-center shrink-0 p-0.5 shadow-sm">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
              </div>
            )}
            <div className="flex flex-col">
              <h3 className="text-xs font-bold text-slate-800 tracking-wide">
                {rev.author}
              </h3>
              <span className="text-[9px] font-semibold text-slate-400 mt-0.5 uppercase tracking-wider">
                {rev.source}
              </span>
            </div>
          </div>
          <span className="text-[10px] text-slate-400 font-light">
            {rev.date}
          </span>
        </div>

        {/* Rating stars */}
        <div className="flex gap-0.5 text-amber-500">
          {[...Array(rev.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Review body */}
        <blockquote className="text-[12px] md:text-[13px] text-slate-600 font-light leading-relaxed italic">
          "{rev.text}"
        </blockquote>
      </div>
    </div>
  );
}
