import { Playfair_Display, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://tigribeach.com'),
  title: "Tigri Beach Restaurant | Fresh Seafood & Sunset Vibe Hikkaduwa",
  description: "Dine with your feet in the sand at Hikkaduwa's premier beachside seafood restaurant. Enjoy fresh lobster, lagoon crab, traditional curries, and stunning tropical sunsets since 1999.",
  keywords: "Tigri Beach Hikkaduwa, Tigri Beach Restaurant, Hikkaduwa seafood restaurant, Sri Lanka beach dining, fresh lobster Hikkaduwa, sunset restaurant Sri Lanka, Hikkaduwa lagoon crab curry",
  alternates: {
    canonical: "https://tigribeach.com",
  },
  openGraph: {
    title: "Tigri Beach Hikkaduwa | Seafood Restaurant & Sunset Vibe",
    description: "Enjoy fresh, daily-caught seafood, signature cocktails, and unmatched beachfront views in Hikkaduwa, Sri Lanka. Est. 1999.",
    url: "https://tigribeach.com",
    siteName: "Tigri Beach Restaurant",
    images: [
      {
        url: "/hero_beach.jpg",
        width: 1200,
        height: 630,
        alt: "Tigri Beach Restaurant Sunset Dining in Hikkaduwa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  // Inject structured JSON-LD data for Restaurant, WebPage, BreadcrumbList, FAQPage, and Services (SEO & AI Visibility)
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://tigribeach.com/#organization",
        "name": "Tigri Beach Restaurant",
        "url": "https://tigribeach.com",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://tigribeach.com/#logo",
          "url": "https://tigribeach.com/logoonly.png",
          "caption": "Tigri Beach Restaurant Logo"
        },
        "sameAs": [
          "https://www.instagram.com/tigri.beach/",
          "https://www.facebook.com/TigriTours/",
          "https://www.tripadvisor.com/Restaurant_Review-g304134-d4778071-Reviews-Tigri_Beach_Resturant-Hikkaduwa_Galle_District_Southern_Province.html"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://tigribeach.com/#website",
        "name": "Tigri Beach Restaurant",
        "url": "https://tigribeach.com",
        "publisher": {
          "@id": "https://tigribeach.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://tigribeach.com/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://tigribeach.com/#webpage",
        "url": "https://tigribeach.com",
        "name": "Tigri Beach Restaurant | Fresh Seafood & Sunset Vibe Hikkaduwa",
        "isPartOf": {
          "@id": "https://tigribeach.com/#website"
        },
        "about": {
          "@id": "https://tigribeach.com/#restaurant"
        },
        "description": "Dine with your feet in the sand at Hikkaduwa's premier beachside seafood restaurant. Enjoy fresh lobster, lagoon crab, traditional curries, and stunning tropical sunsets since 1999."
      },
      {
        "@type": ["Restaurant", "LocalBusiness"],
        "@id": "https://tigribeach.com/#restaurant",
        "name": "Tigri Beach Restaurant",
        "image": {
          "@id": "https://tigribeach.com/#hero-image"
        },
        "url": "https://tigribeach.com",
        "telephone": "+94771048202",
        "priceRange": "$$",
        "menu": {
          "@id": "https://tigribeach.com/#menu-schema"
        },
        "servesCuisine": [
          "Seafood",
          "Sri Lankan",
          "International"
        ],
        "acceptsReservations": "true",
        "address": {
          "@id": "https://tigribeach.com/#postal-address"
        },
        "geo": {
          "@id": "https://tigribeach.com/#geo-coordinates"
        },
        "hasMap": "https://share.google/LtVgjRX3VIP4AQgZl",
        "openingHoursSpecification": [
          {
            "@id": "https://tigribeach.com/#opening-hours"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.3",
          "reviewCount": "497",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sarah Jenkins"
            },
            "datePublished": "2026-06-12",
            "reviewBody": "Best seafood platter in Hikkaduwa by far! Everything was incredibly fresh, the portions were generous, and eating right on the sand at sunset was unforgettable.",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Michael Van Der Berg"
            },
            "datePublished": "2026-05-26",
            "reviewBody": "The traditional Sri Lankan crab curry here is a masterpiece. Bursting with authentic spices and cooked to perfection. Make sure to book a front beach table for the sunset views!",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Emma Watson"
            },
            "datePublished": "2026-06-22",
            "reviewBody": "An absolute must-visit in Hikkaduwa! We had the grilled prawns and calamari. The cocktails are superb, especially the Arrack Sour. Outstanding service and feet-in-the-sand dining!",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            }
          }
        ],
        "sameAs": [
          "https://www.instagram.com/tigri.beach/",
          "https://www.facebook.com/TigriTours/",
          "https://www.tripadvisor.com/Restaurant_Review-g304134-d4778071-Reviews-Tigri_Beach_Resturant-Hikkaduwa_Galle_District_Southern_Province.html",
          "https://share.google/LtVgjRX3VIP4AQgZl"
        ]
      },
      {
        "@type": "PostalAddress",
        "@id": "https://tigribeach.com/#postal-address",
        "streetAddress": "348, Galle Road",
        "addressLocality": "Hikkaduwa",
        "addressRegion": "Southern Province",
        "postalCode": "80240",
        "addressCountry": "LK"
      },
      {
        "@type": "GeoCoordinates",
        "@id": "https://tigribeach.com/#geo-coordinates",
        "latitude": 6.138402,
        "longitude": 80.097011
      },
      {
        "@type": "OpeningHoursSpecification",
        "@id": "https://tigribeach.com/#opening-hours",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:30",
        "closes": "23:00"
      },
      {
        "@type": "ImageObject",
        "@id": "https://tigribeach.com/#hero-image",
        "url": "https://tigribeach.com/hero_beach.jpg",
        "caption": "Tigri Beach Restaurant Sunset Dining in Hikkaduwa",
        "width": {
          "@type": "QuantitativeValue",
          "value": 1200,
          "unitCode": "E57"
        },
        "height": {
          "@type": "QuantitativeValue",
          "value": 630,
          "unitCode": "E57"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://tigribeach.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://tigribeach.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": "https://tigribeach.com/#about"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Menu",
            "item": "https://tigribeach.com/#menu"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Gallery",
            "item": "https://tigribeach.com/#gallery"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Contact",
            "item": "https://tigribeach.com/#contact"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://tigribeach.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What makes Tigri Beach the best seafood restaurant in Hikkaduwa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tigri Beach Restaurant is widely regarded as the best seafood restaurant in Hikkaduwa because we source our seafood fresh daily directly from local Hikkaduwa fishermen at the harbor. Located right on the beachfront, guests can enjoy signature dishes like fresh grilled lobster, lagoon crab curry, jumbo prawns, and local Sri Lankan fish curries with their feet in the sand, accompanied by spectacular Indian Ocean sunsets."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Tigri Beach Restaurant located in Hikkaduwa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tigri Beach Restaurant is located at 348, Galle Road, Hikkaduwa, Sri Lanka. We are situated directly on the Hikkaduwa beachfront, opposite the Galle Road main entrance. You can dine with your feet in the sand and enjoy direct ocean views."
            }
          },
          {
            "@type": "Question",
            "name": "What are your opening hours?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are open daily from 09:30 AM to 11:00 PM (Sri Lanka Time / GMT+5:30). We serve breakfast, lunch, sunset snacks, dinner, and late-night drinks."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer fresh seafood daily?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, 100%! We source all our seafood—including lobster, lagoon crabs, jumbo tiger prawns, calamari, and reef fish—every single morning directly from local Hikkaduwa fishermen at the harbor."
            }
          },
          {
            "@type": "Question",
            "name": "Do you serve fresh lobster?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we serve fresh rock lobster caught daily from the Laccadive Sea. You can select your lobster by weight, which is prepared fresh to order: charcoal-grilled with lemon herb butter or pan-seared with local spices."
            }
          },
          {
            "@type": "Question",
            "name": "Can I reserve a beach table for sunset?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sunset tables are highly sought after (sunset is typically between 06:00 PM and 06:30 PM). You can submit a request using our online booking links or call/WhatsApp us directly at +94 77 104 8202 to confirm your table placement directly on the sand."
            }
          },
          {
            "@type": "Question",
            "name": "Do you have parking available near the restaurant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, roadside parking is available on Galle Road directly outside the restaurant. Additionally, we have beach-level bicycle and scooter parking space."
            }
          },
          {
            "@type": "Question",
            "name": "Do you have vegetarian, vegan, or gluten-free options?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Along with our seafood focus, we prepare traditional Sri Lankan vegetarian curries (such as dhal, beetroot, and jackfruit curries), fresh tropical fruit salads, and customized dishes. Please inform your server of any dietary needs."
            }
          },
          {
            "@type": "Question",
            "name": "Are there gluten-free dishes on your menu?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, many of our fresh seafood grills (like grilled snapper, prawns, and lobsters) are naturally gluten-free as they are basted with butter, lemon, and garlic. Our traditional coconut milk curries and steamed basmati rice are also gluten-free."
            }
          },
          {
            "@type": "Question",
            "name": "Is Tigri Beach Restaurant family-friendly and good for children?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We are a family-owned establishment and welcome children. Our beachfront location provides a spacious outdoor space where kids can safely play in the sand while parents enjoy their meals. We also offer mild, kid-friendly dining options."
            }
          },
          {
            "@type": "Question",
            "name": "Do you accept credit cards?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we accept major credit cards, including Visa and Mastercard, as well as cash payments in Sri Lankan Rupees (LKR), US Dollars (USD), and Euros (EUR)."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer takeaway or delivery services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer fresh takeaway services. You can place your order via phone or WhatsApp at +94 77 104 8202 and pick it up at the restaurant. We currently do not offer home delivery, to ensure our seafood is enjoyed at peak freshness."
            }
          },
          {
            "@type": "Question",
            "name": "What cocktails do you recommend?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our signature cocktail is the Ceylonese Arrack Sour, made with premium local coconut arrack, fresh lime juice, and cane sugar. We also highly recommend our Hikkaduwa Sunset Mojito and the fresh King Coconut (Tambili) Rum Punch served in the shell."
            }
          },
          {
            "@type": "Question",
            "name": "Can you accommodate large groups and private events?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Our spacious beachfront setup can accommodate large tour groups, family gatherings, and corporate events. Please contact us via phone or WhatsApp at +94 77 104 8202 in advance to coordinate menu options and table layouts."
            }
          },
          {
            "@type": "Question",
            "name": "Do you host birthday parties or anniversary celebrations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We can set up decorated tables with tropical lanterns, custom seating layouts directly on the sand, and play background music for your special beachfront birthday or anniversary celebration."
            }
          },
          {
            "@type": "Question",
            "name": "How close is the restaurant to Hikkaduwa Beach and local attractions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tigri Beach Restaurant is situated directly on Hikkaduwa Beach. We are a 2-minute walk from the famous Hikkaduwa Coral Reef and Snorkeling Zone, a 3-minute walk from Turtle Beach where wild sea turtles feed, and a 5-minute walk from the main surf break."
            }
          },
          {
            "@type": "Question",
            "name": "Is there free Wi-Fi for guests?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer free high-speed guest Wi-Fi throughout the restaurant and beachfront lounge area, so you can stay connected or share your sunset photos instantly."
            }
          },
          {
            "@type": "Question",
            "name": "What is the price range at Tigri Beach Restaurant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer a moderate price range. Main dishes range from LKR 3,000 to LKR 9,000 per person (approximately USD 10 to USD 30), with premium items like fresh grilled lobsters and large crab platters priced by market weight."
            }
          },
          {
            "@type": "Question",
            "name": "Do you serve authentic Sri Lankan crab curry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Our Hikkaduwa Lagoon Crab Curry is a chef specialty. We simmer fresh local mud crabs in a rich, spicy coconut milk gravy flavored with toasted curry powder, lemongrass, fenugreek, and fresh curry leaves. It is served with steamed rice and dhal curry."
            }
          },
          {
            "@type": "Question",
            "name": "Are there indoor seating options if it rains?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we have a large covered open-air dining pavilion that provides full shelter from tropical rains while still offering beautiful ocean views and cool sea breezes."
            }
          },
          {
            "@type": "Question",
            "name": "What is the best time to visit for sunset dining?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recommend arriving between 05:00 PM and 05:30 PM. This gives you plenty of time to settle into your beachfront table, order a cocktail, and watch the sky change color as the sun sets over the Indian Ocean around 06:00 PM - 06:30 PM."
            }
          },
          {
            "@type": "Question",
            "name": "Do you have direct beach access from the restaurant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we have direct beach access. You can walk straight from Galle Road through our dining pavilion onto the sandy beach and step directly into the water. We also provide beach loungers for diners."
            }
          },
          {
            "@type": "Question",
            "name": "Can we choose our own fresh fish or lobster?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we have a daily fresh seafood display where you can view the catches of the day (snapper, barracuda, tuna, lobster, crabs) and hand-select the exact fish or shellfish you would like our chefs to prepare."
            }
          },
          {
            "@type": "Question",
            "name": "Do you serve breakfast?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we open at 09:30 AM and serve fresh tropical breakfasts, including king coconut water, fresh fruit platters, eggs, toast, and traditional Sri Lankan breakfast items upon request."
            }
          },
          {
            "@type": "Question",
            "name": "How can I contact the restaurant for urgent inquiries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For urgent inquiries, table reservations, or event bookings, please call or text us directly via phone or WhatsApp at +94 77 104 8202."
            }
          }
        ]
      },
      {
        "@type": "Menu",
        "@id": "https://tigribeach.com/#menu-schema",
        "name": "Tigri Beach Restaurant Menu",
        "mainEntityOfPage": "https://tigribeach.com/#menu",
        "inLanguage": "en",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "LKR",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "value": 1
          }
        },
        "hasMenuSection": [
          {
            "@type": "MenuSection",
            "name": "Signatures",
            "hasMenuItem": [
              {
                "@type": "MenuItem",
                "name": "Tigri Seafood Platter",
                "description": "A colossal grill platter featuring fresh lobster, lagoon crab, tiger prawns, calamari, and catch-of-the-day reef fish, served with garlic herb butter, fries, and salad.",
                "offers": {
                  "@type": "Offer",
                  "price": "14500",
                  "priceCurrency": "LKR"
                }
              },
              {
                "@type": "MenuItem",
                "name": "Jumbo Garlic Butter Tiger Prawns",
                "description": "Huge tiger prawns grilled on order, tossed in a sizzling pan of clarified butter, roasted garlic, and fine parsley.",
                "offers": {
                  "@type": "Offer",
                  "price": "6200",
                  "priceCurrency": "LKR"
                }
              },
              {
                "@type": "MenuItem",
                "name": "Butter-Rosemary Grilled Snapper",
                "description": "Whole red snapper pan-seared with fresh rosemary sprigs, garlic cloves, and lemon juice over hot coals.",
                "offers": {
                  "@type": "Offer",
                  "price": "5800",
                  "priceCurrency": "LKR"
                }
              }
            ]
          },
          {
            "@type": "MenuSection",
            "name": "Fresh Catch",
            "hasMenuItem": [
              {
                "@type": "MenuItem",
                "name": "Deviled Calamari",
                "description": "Tender ocean calamari rings tossed in a fiery, sweet-and-sour Sri Lankan deviled sauce with thick-cut bell peppers and onions.",
                "offers": {
                  "@type": "Offer",
                  "price": "3900",
                  "priceCurrency": "LKR"
                }
              },
              {
                "@type": "MenuItem",
                "name": "Charcoal Grilled Lobster",
                "description": "Freshly harvested rock lobster basted with lemon juice and olive oil, slowly grilled over coconut charcoal.",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "LKR",
                  "description": "Market Price by weight / 100g"
                }
              },
              {
                "@type": "MenuItem",
                "name": "Crispy Fried Reef Fish Fillet",
                "description": "Locally caught white fish coated in a light spiced batter, fried until golden, served with homemade tartar sauce.",
                "offers": {
                  "@type": "Offer",
                  "price": "3600",
                  "priceCurrency": "LKR"
                }
              }
            ]
          },
          {
            "@type": "MenuSection",
            "name": "Ceylonese Curries",
            "hasMenuItem": [
              {
                "@type": "MenuItem",
                "name": "Hikkaduwa Lagoon Crab Curry",
                "description": "Aromatic Sri Lankan mud crab simmered in a rich toasted coconut gravy with fresh curry leaves, lemongrass, and local spices. Served with steamed basmati rice and dhal.",
                "offers": {
                  "@type": "Offer",
                  "price": "7500",
                  "priceCurrency": "LKR"
                }
              },
              {
                "@type": "MenuItem",
                "name": "Traditional Fish Ambul Thiyal",
                "description": "A Southern Sri Lankan specialty: cubed tuna cooked in a sour and dry thick curry paste made from black goraka (garcinia), black pepper, and spices.",
                "offers": {
                  "@type": "Offer",
                  "price": "4200",
                  "priceCurrency": "LKR"
                }
              },
              {
                "@type": "MenuItem",
                "name": "Red Prawn Coconut Curry",
                "description": "Medium-sized tiger prawns simmered in mild coconut milk, seasoned with turmeric, fenugreek, and fresh green chilies.",
                "offers": {
                  "@type": "Offer",
                  "price": "4900",
                  "priceCurrency": "LKR"
                }
              }
            ]
          },
          {
            "@type": "MenuSection",
            "name": "Sunset Cocktails",
            "hasMenuItem": [
              {
                "@type": "MenuItem",
                "name": "Ceylonese Arrack Sour",
                "description": "Premium local coconut arrack shaken with fresh lime juice, cane sugar syrup, and egg whites, served over crushed ice with an orange wheel.",
                "offers": {
                  "@type": "Offer",
                  "price": "1800",
                  "priceCurrency": "LKR"
                }
              },
              {
                "@type": "MenuItem",
                "name": "Hikkaduwa Sunset Mojito",
                "description": "White rum muddled with fresh mint leaves, lime chunks, organic wild bee honey, and topped with sparkling soda water.",
                "offers": {
                  "@type": "Offer",
                  "price": "1600",
                  "priceCurrency": "LKR"
                }
              },
              {
                "@type": "MenuItem",
                "name": "Tambili (King Coconut) Rum Punch",
                "description": "Fresh local sweet king coconut water spiked with white rum, triple sec, a dash of lime, and served in the shell.",
                "offers": {
                  "@type": "Offer",
                  "price": "2100",
                  "priceCurrency": "LKR"
                }
              }
            ]
          }
        ]
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
