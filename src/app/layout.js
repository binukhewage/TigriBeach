import { Playfair_Display, Outfit } from "next/font/google";
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
        "@type": "Restaurant",
        "@id": "https://tigribeach.com/#restaurant",
        "name": "Tigri Beach Restaurant",
        "image": "https://tigribeach.com/hero_beach.jpg",
        "url": "https://tigribeach.com",
        "telephone": "+94771048202",
        "priceRange": "$$",
        "menu": "https://tigribeach.com/#menu",
        "servesCuisine": [
          "Seafood",
          "Sri Lankan Rice & Curry",
          "Western Seafood Grill",
          "Tropical Cocktails"
        ],
        "acceptsReservations": "true",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "348, Galle Road",
          "addressLocality": "Hikkaduwa",
          "addressRegion": "Galle District, Southern Province",
          "postalCode": "80240",
          "addressCountry": "LK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 6.138402,
          "longitude": 80.097011
        },
        "hasMap": "https://share.google/LtVgjRX3VIP4AQgZl",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
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
          }
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+94771048202",
          "contactType": "reservations",
          "availableLanguage": ["English", "Sinhala"],
          "description": "WhatsApp and direct call booking line"
        },
        "potentialAction": {
          "@type": "ReserveAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://wa.me/94771048202?text=Hi%20Tigri%20Beach!%20I'd%20like%20to%2520reserve%20a%20table",
            "inLanguage": "en",
            "actionPlatform": [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform"
            ]
          },
          "result": {
            "@type": "FoodEstablishmentReservation",
            "name": "Sunset Table Booking"
          }
        },
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
        "@type": "WebPage",
        "@id": "https://tigribeach.com/#webpage",
        "url": "https://tigribeach.com",
        "name": "Tigri Beach Restaurant - Fresh Seafood & Sunset Vibe Hikkaduwa",
        "about": {
          "@id": "https://tigribeach.com/#restaurant"
        },
        "description": "Dine with your feet in the sand at Hikkaduwa's premier beachside seafood restaurant. Enjoy fresh lobster, lagoon crab, traditional curries, and stunning tropical sunsets since 1999."
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
            "name": "Do you have vegetarian, vegan, or gluten-free options?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Along with our seafood focus, we prepare traditional Sri Lankan vegetarian curries (such as dhal, beetroot, and jackfruit curries), fresh tropical fruit salads, and customized dishes. Please inform your server of any dietary needs."
            }
          },
          {
            "@type": "Question",
            "name": "Is there parking available near the restaurant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, roadside parking is available on Galle Road directly outside the restaurant. Additionally, we have beach-level bicycle and scooter parking space."
            }
          },
          {
            "@type": "Question",
            "name": "How do I book a beach table for sunset?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sunset tables are highly sought after (sunset is typically between 06:00 PM and 06:30 PM). You can submit a request using our online booking form above or call us directly at +94 77 104 8202 to confirm your table placement."
            }
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://tigribeach.com/#seafood-dining-service",
        "serviceType": "Beachfront Seafood Dining",
        "provider": {
          "@id": "https://tigribeach.com/#restaurant"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Hikkaduwa, Sri Lanka"
        },
        "description": "Premium feet-in-the-sand beachfront al fresco seafood dining service, including custom grilled lobster, lagoon crab curries, and sunset reservations."
      },
      {
        "@type": "Service",
        "@id": "https://tigribeach.com/#romantic-sunset-dinner",
        "serviceType": "Romantic Sunset Dinner",
        "provider": {
          "@id": "https://tigribeach.com/#restaurant"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Hikkaduwa, Sri Lanka"
        },
        "description": "Private, candle-lit dining directly on the sand with a sunset view."
      },
      {
        "@type": "Service",
        "@id": "https://tigribeach.com/#family-beach-lunch",
        "serviceType": "Family Beach Lunch",
        "provider": {
          "@id": "https://tigribeach.com/#restaurant"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Hikkaduwa, Sri Lanka"
        },
        "description": "Spacious beachfront setups perfect for kids and tropical curries."
      },
      {
        "@type": "Service",
        "@id": "https://tigribeach.com/#post-surf-refuel",
        "serviceType": "Fresh Seafood Post-Surf",
        "provider": {
          "@id": "https://tigribeach.com/#restaurant"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Hikkaduwa, Sri Lanka"
        },
        "description": "Refuel after riding Hikkaduwa waves with calamari and cold beer."
      },
      {
        "@type": "Service",
        "@id": "https://tigribeach.com/#birthday-celebration",
        "serviceType": "Beach Birthday & Group Celebrations",
        "provider": {
          "@id": "https://tigribeach.com/#restaurant"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Hikkaduwa, Sri Lanka"
        },
        "description": "Group dining with lantern decorations and custom beach music."
      },
      {
        "@type": "Service",
        "@id": "https://tigribeach.com/#oceanfront-cocktails",
        "serviceType": "Oceanfront Cocktails & Lounge",
        "provider": {
          "@id": "https://tigribeach.com/#restaurant"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Hikkaduwa, Sri Lanka"
        },
        "description": "Sip Arrack Sours and fruit mojitos directly on our beach loungers."
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
