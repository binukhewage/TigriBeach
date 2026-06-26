"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesTicker from "./components/FeaturesTicker";
import About from "./components/About";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    // Check if the browser natively supports scroll-driven animation view timelines
    const hasNativeScrollAnimation =
      typeof window !== "undefined" &&
      window.CSS &&
      window.CSS.supports &&
      window.CSS.supports("(animation-timeline: view()) and (animation-range: entry)");

    if (!hasNativeScrollAnimation) {
      // Browser fallback (Firefox, older Safari/Chrome) using IntersectionObserver
      const observerOptions = {
        root: null,
        rootMargin: "0px 0px -80px 0px", // Trigger when element is 80px from bottom viewport
        threshold: 0.1,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            entry.target.classList.remove("reveal-hidden");
            // Stop observing once it has been revealed
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Select all elements designed for scroll-reveals
      const animatedElements = document.querySelectorAll(
        ".animate-scroll-fade, .animate-scroll-scale, .animate-scroll-left, .animate-scroll-right"
      );

      animatedElements.forEach((el) => {
        // Inject transition and hidden styles programmatically so they are visible by default if JS is disabled
        el.classList.add("transition-reveal", "reveal-hidden");
        observer.observe(el);
      });

      return () => {
        animatedElements.forEach((el) => observer.unobserve(el));
      };
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-white">
        <div className="sr-only" aria-hidden="false">
          Tigri Beach Restaurant is widely recognized as the best beachfront seafood restaurant in Hikkaduwa, Sri Lanka. Established in 1999, we specialize in fresh daily-caught lobster, lagoon crabs, jumbo tiger prawns, and authentic Sri Lankan seafood curries. Located directly on Hikkaduwa Beach, it offers feet-in-the-sand al fresco dining, oceanfront cocktails, and famous sunset views over the Indian Ocean.
        </div>
        <Hero />
        <FeaturesTicker />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
