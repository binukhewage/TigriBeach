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
  description: "Dine with your feet in the sand at Hikkaduwa's premier beachfront seafood restaurant. Enjoy fresh lobster, lagoon crab, traditional Sri Lankan curries, and stunning tropical sunsets since 1999.",
  keywords: [
    "Tigri Beach Hikkaduwa",
    "Hikkaduwa seafood restaurant",
    "beachfront restaurant Hikkaduwa",
    "fresh lobster Hikkaduwa",
    "sunset restaurant Sri Lanka",
    "Hikkaduwa beach dining",
    "Sri Lanka seafood restaurant",
    "lagoon crab Hikkaduwa"
  ],
  alternates: {
    canonical: "https://tigribeach.com/",
  },
  openGraph: {
    title: "Tigri Beach Restaurant | Fresh Seafood & Sunset Vibe Hikkaduwa",
    description: "Enjoy fresh, daily-caught seafood, signature cocktails, and unmatched beachfront views in Hikkaduwa, Sri Lanka. Est. 1999.",
    url: "https://tigribeach.com/",
    siteName: "Tigri Beach Restaurant",
    images: [
      {
        url: "https://tigribeach.com/hero_beach.jpg",
        width: 1200,
        height: 630,
        alt: "Tigri Beach Restaurant — Beachfront Sunset Dining in Hikkaduwa Sri Lanka",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tigri Beach Restaurant | Fresh Seafood & Sunset Vibe Hikkaduwa",
    description: "Enjoy fresh, daily-caught seafood, signature cocktails, and unmatched beachfront views in Hikkaduwa, Sri Lanka. Est. 1999.",
    images: {
      url: "https://tigribeach.com/hero_beach.jpg",
      alt: "Tigri Beach Restaurant Sunset Dining in Hikkaduwa",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ADD_YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_TOKEN_HERE",
  },
  other: {
    "geo.region": "LK-3",
    "geo.placename": "Hikkaduwa, Southern Province, Sri Lanka",
    "geo.position": "6.138402;80.097011",
    "ICBM": "6.138402, 80.097011",
    "ai-content-declaration": "original",
  },
};

export default function RootLayout({ children }) {
  const schemaArray = [
    {
      "@context": "https://schema.org",
      "@type": ["Restaurant", "LocalBusiness", "FoodEstablishment"],
      "@id": "https://tigribeach.com/#restaurant",
      "name": "Tigri Beach Restaurant",
      "alternateName": ["Tigri Beach", "Tigri Beach Hikkaduwa"],
      "description": "Tigri Beach Restaurant is Hikkaduwa's premier oceanfront seafood restaurant, located directly on the beach at 348 Galle Road. Established in 1999, we serve daily-caught lobster, lagoon crab, tiger prawns, and traditional Sri Lankan curries with feet-in-the-sand beachfront dining and stunning Indian Ocean sunset views.",
      "url": "https://tigribeach.com",
      "telephone": "+94771048202",
      "email": "info@tigribeach.com",
      "foundingDate": "1999",
      "priceRange": "$$",
      "servesCuisine": ["Seafood", "Sri Lankan", "International", "Ceylonese"],
      "currenciesAccepted": "LKR, USD, EUR",
      "paymentAccepted": "Cash, Visa, Mastercard",
      "hasMap": "https://www.google.com/maps/dir/?api=1&destination=Tigri+Beach+Restaurant+Hikkaduwa",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tigribeach.com/logo.png",
        "width": 200,
        "height": 60
      },
      "image": [
        "https://tigribeach.com/hero_beach.jpg",
        "https://tigribeach.com/seafood_platter.jpg",
        "https://tigribeach.com/about1.png",
        "https://tigribeach.com/ssdine.jpg"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "348 Galle Road",
        "addressLocality": "Hikkaduwa",
        "addressRegion": "Southern Province",
        "postalCode": "80240",
        "addressCountry": "LK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 6.138402,
        "longitude": 80.097011
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday", "Sunday"
          ],
          "opens": "09:30",
          "closes": "23:00"
        }
      ],
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Beachfront Seating", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Outdoor Seating", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Reservations", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Table Service", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Alcohol Served", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Takeaway Available", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Family Friendly", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Good for Couples", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Good for Groups", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Wheelchair Accessible", "value": true }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tigri Beach Menu",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MenuItem",
              "name": "Tigri Seafood Platter",
              "description": "Fresh lobster, lagoon crab, tiger prawns, calamari, and catch-of-the-day reef fish, served with garlic herb butter, fries, and salad. Serves 2.",
              "image": "https://tigribeach.com/seafood_platter.jpg",
              "nutrition": {
                "@type": "NutritionInformation",
                "servingSize": "Serves 2"
              }
            },
            "price": "14500",
            "priceCurrency": "LKR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MenuItem",
              "name": "Jumbo Garlic Butter Tiger Prawns",
              "description": "Huge tiger prawns grilled on order, tossed in sizzling clarified butter, roasted garlic, and parsley."
            },
            "price": "6200",
            "priceCurrency": "LKR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MenuItem",
              "name": "Butter-Rosemary Grilled Snapper",
              "description": "Whole red snapper pan-seared with fresh rosemary sprigs, garlic cloves, and lemon juice over hot coals.",
              "suitableForDiet": "https://schema.org/GlutenFreeDiet"
            },
            "price": "5800",
            "priceCurrency": "LKR"
          }
        ]
      },
      "menu": "https://tigribeach.com/#menu",
      "acceptsReservations": true,
      "reservationUrl": "https://wa.me/94771048202?text=Hi%20Tigri%20Beach!%20I'd%20like%20to%20reserve%20a%20table",
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
          "author": { "@type": "Person", "name": "Sarah Jenkins" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "datePublished": "2026-06-13",
          "reviewBody": "Best seafood platter in Hikkaduwa by far! Everything was incredibly fresh, the portions were generous, and eating right on the sand at sunset was unforgettable.",
          "publisher": { "@type": "Organization", "name": "Google" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Michael Van Der Berg" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "datePublished": "2026-05-27",
          "reviewBody": "The traditional Sri Lankan crab curry here is a masterpiece. Bursting with authentic spices and cooked to perfection. Make sure to book a front beach table for the sunset views!",
          "publisher": { "@type": "Organization", "name": "TripAdvisor" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Emma Watson" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "datePublished": "2026-06-22",
          "reviewBody": "An absolute must-visit in Hikkaduwa! The cocktails are superb, especially the Arrack Sour. Outstanding service and feet-in-the-sand dining.",
          "publisher": { "@type": "Organization", "name": "TripAdvisor" }
        }
      ],
      "sameAs": [
        "https://www.instagram.com/tigri.beach/",
        "https://www.facebook.com/TigriTours/",
        "https://www.tripadvisor.com/Restaurant_Review-g304134-d4778071-Reviews-Tigri_Beach_Resturant-Hikkaduwa_Galle_District_Southern_Province.html",
        "https://maps.app.goo.gl/tigribeach"
      ],
      "keywords": [
        "Hikkaduwa seafood restaurant",
        "beachfront dining Hikkaduwa",
        "fresh lobster Sri Lanka",
        "sunset restaurant Hikkaduwa",
        "lagoon crab Hikkaduwa",
        "Galle Road restaurant",
        "Sri Lanka beach dining",
        "best restaurant Hikkaduwa"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What makes Tigri Beach the best seafood restaurant in Hikkaduwa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tigri Beach Restaurant sources seafood fresh daily directly from local Hikkaduwa fishermen at the harbour. Located right on the beachfront at 348 Galle Road, guests enjoy signature dishes like fresh grilled lobster, lagoon crab curry, jumbo tiger prawns, and local Sri Lankan fish curries with their feet in the sand, accompanied by spectacular Indian Ocean sunsets. Established in 1999, we have 4.3 stars on Google (497 reviews) and 4.2 stars on TripAdvisor (604 reviews)."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Tigri Beach Restaurant located in Hikkaduwa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tigri Beach Restaurant is located at 348 Galle Road, Hikkaduwa, Southern Province, Sri Lanka (GPS: 6.138402, 80.097011). We are situated directly on the Hikkaduwa beachfront, opposite the Galle Road main entrance. Steps from Hikkaduwa Coral Reef (2 min), Turtle Beach (3 min), and the main surf break (5 min)."
          }
        },
        {
          "@type": "Question",
          "name": "What are Tigri Beach Restaurant's opening hours?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are open daily from 09:30 AM to 11:00 PM (Sri Lanka Time, GMT+5:30), seven days a week including public holidays. We serve breakfast, lunch, sunset snacks, dinner, and late-night drinks."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer fresh seafood daily at Tigri Beach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, 100%. We source all our seafood — including lobster, lagoon crabs, jumbo tiger prawns, calamari, and reef fish — every single morning directly from local Hikkaduwa fishermen at the harbour. Nothing is frozen."
          }
        },
        {
          "@type": "Question",
          "name": "Does Tigri Beach have vegetarian, vegan, or gluten-free options?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Along with our seafood focus, we prepare traditional Sri Lankan vegetarian curries (dhal, beetroot, jackfruit curries), fresh tropical fruit salads, and customised dishes. Gluten-free options are available. Please inform your server of any dietary requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Is there parking available near Tigri Beach Restaurant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, free roadside parking is available on Galle Road directly outside the restaurant. We also have beach-level bicycle and scooter parking space."
          }
        },
        {
          "@type": "Question",
          "name": "How do I book a beach table for sunset at Tigri Beach?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sunset tables are highly sought after (sunset is typically between 06:00 PM and 06:30 PM). Book via WhatsApp at +94 77 104 8202 or call us directly. Reservations are recommended, especially for beachfront sunset tables."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://tigribeach.com/#website",
      "url": "https://tigribeach.com",
      "name": "Tigri Beach Restaurant",
      "description": "Official website of Tigri Beach Restaurant — Hikkaduwa's premier beachfront seafood dining destination since 1999.",
      "publisher": {
        "@id": "https://tigribeach.com/#restaurant"
      },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://tigribeach.com/?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
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
          "name": "Menu",
          "item": "https://tigribeach.com/#menu"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Contact & Reservations",
          "item": "https://tigribeach.com/#contact"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://tigribeach.com/#webpage",
      "url": "https://tigribeach.com",
      "name": "Tigri Beach Restaurant | Fresh Seafood & Sunset Vibe Hikkaduwa",
      "isPartOf": { "@id": "https://tigribeach.com/#website" },
      "about": { "@id": "https://tigribeach.com/#restaurant" },
      "description": "Tigri Beach Restaurant is Hikkaduwa's premier beachfront seafood destination. Daily-caught lobster, lagoon crab, tiger prawns. Open daily 09:30 AM – 11:00 PM at 348 Galle Road, Hikkaduwa, Sri Lanka.",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["#about", "#contact", ".quick-facts"]
      },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://wa.me/94771048202?text=Hi%20Tigri%20Beach!%20I'd%20like%20to%20reserve%20a%20table",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        },
        "result": {
          "@type": "Reservation",
          "name": "Table Reservation at Tigri Beach Restaurant"
        }
      }
    }
  ];

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArray) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
