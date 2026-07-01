"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question:
        "What makes Tigri Beach the best seafood restaurant in Hikkaduwa?",
      answer:
        "Tigri Beach Restaurant is widely regarded as the best seafood restaurant in Hikkaduwa because we source our seafood fresh daily directly from local Hikkaduwa fishermen at the harbor. Located right on the beachfront, guests can enjoy signature dishes like fresh grilled lobster, lagoon crab curry, jumbo prawns, and local Sri Lankan fish curries with their feet in the sand, accompanied by spectacular Indian Ocean sunsets.",
    },
    {
      question: "Where is Tigri Beach Restaurant located in Hikkaduwa?",
      answer:
        "Tigri Beach Restaurant is located at 348, Galle Road, Hikkaduwa, Sri Lanka. We are situated directly on the Hikkaduwa beachfront, opposite the Galle Road main entrance. You can dine with your feet in the sand and enjoy direct ocean views.",
    },
    {
      question: "What are your opening hours?",
      answer:
        "We are open daily from 09:30 AM to 11:00 PM (Sri Lanka Time / GMT+5:30). We serve breakfast, lunch, sunset snacks, dinner, and late-night drinks.",
    },
    {
      question: "Do you offer fresh seafood daily?",
      answer:
        "Yes, 100%! We source all our seafood—including lobster, lagoon crabs, jumbo tiger prawns, calamari, and reef fish—every single morning directly from local Hikkaduwa fishermen at the harbor.",
    },
    {
      question: "Do you have vegetarian, vegan, or gluten-free options?",
      answer:
        "Absolutely. Along with our seafood focus, we prepare traditional Sri Lankan vegetarian curries (such as dhal, beetroot, and jackfruit curries), fresh tropical fruit salads, and customized dishes. Please inform your server of any dietary needs.",
    },
    {
      question: "Is there parking available near the restaurant?",
      answer:
        "Yes, roadside parking is available on Galle Road directly outside the restaurant. Additionally, we have beach-level bicycle and scooter parking space.",
    },
    {
      question: "How do I book a beach table for sunset?",
      answer:
        "Sunset tables are highly sought after (sunset is typically between 06:00 PM and 06:30 PM). You can submit a request using our online booking form above or call us directly at +94 77 104 8202 to confirm your table placement.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative py-24 md:py-32 bg-white border-t border-slate-100 overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16 animate-scroll-fade">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Helpful Information
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="max-w-md text-sm md:text-base text-slate-500 font-light mt-1">
            Find answers to common questions about dining with us in Hikkaduwa.
          </p>
          <div className="h-[2px] w-20 bg-primary mt-2" />
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4 animate-scroll-scale">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <article
                key={index}
                itemScope
                itemType="https://schema.org/Question"
                aria-label={`Frequently Asked Question: ${faq.question}`}
                className="bg-slate-50/50 hover:bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:border-primary/20 transition-all duration-300"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-sm md:text-base text-slate-800 hover:text-primary transition-colors duration-200 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span itemProp="name">{faq.question}</span>
                  <span
                    className={`ml-4 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen
                      ? "max-h-[250px] opacity-100 border-t border-slate-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    itemScope
                    itemType="https://schema.org/Answer"
                    itemProp="acceptedAnswer"
                    className="px-6 py-5 text-xs md:text-sm font-light text-slate-650 leading-relaxed"
                  >
                    <p itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
