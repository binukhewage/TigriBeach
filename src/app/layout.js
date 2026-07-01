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
  description: "Dine with your feet in the sand at Hikkaduwa's premier beachfront seafood restaurant. Enjoy fresh lobster, lagoon crab, traditional Sri Lankan curries, and stunning tropical sunsets.",
  keywords: [
    "Tigri Beach Hikkaduwa",
    "TigriBeach",
    "TigriBeach Restaurant",
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
    description: "Enjoy fresh, daily-caught seafood, signature cocktails, and beachfront views in Hikkaduwa, Sri Lanka.",
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
    description: "Enjoy fresh, daily-caught seafood, signature cocktails, and beachfront views in Hikkaduwa, Sri Lanka.",
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
  const schemaGraph = {
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
        "@type": ["Restaurant", "LocalBusiness", "FoodEstablishment"],
        "@id": "https://tigribeach.com/#restaurant",
        "parentOrganization": { "@id": "https://tigribeach.com/#organization" },
        "name": "Tigri Beach Restaurant",
        "alternateName": ["Tigri Beach", "Tigri Beach Hikkaduwa", "TigriBeach", "TigriBeach Hikkaduwa"],
        "description": "Tigri Beach Restaurant is Hikkaduwa's premier oceanfront seafood restaurant, located directly on the beach at 348 Galle Road. We serve daily-caught lobster, lagoon crab, tiger prawns, and traditional Sri Lankan curries with feet-in-the-sand beachfront dining and stunning Indian Ocean sunset views.",
        "url": "https://tigribeach.com",
        "telephone": "+94771048202",
        "priceRange": "$$",
        "servesCuisine": ["Seafood", "Sri Lankan", "International"],
        "image": [
          {
            "@type": "ImageObject",
            "@id": "https://tigribeach.com/#image-hero",
            "url": "https://tigribeach.com/hero_beach.jpg",
            "caption": "Tigri Beach Restaurant Sunset Dining in Hikkaduwa"
          },
          {
            "@type": "ImageObject",
            "@id": "https://tigribeach.com/#image-seafood",
            "url": "https://tigribeach.com/seafood_platter.jpg",
            "caption": "Tigri Special Seafood Platter"
          },
          {
            "@type": "ImageObject",
            "@id": "https://tigribeach.com/#image-about",
            "url": "https://tigribeach.com/about1.png",
            "caption": "Golden hour beachfront dining at Hikkaduwa Sri Lanka"
          },
          {
            "@type": "ImageObject",
            "@id": "https://tigribeach.com/#image-dining",
            "url": "https://tigribeach.com/ssdine.jpg",
            "caption": "Beachfront table setup at Tigri Beach Hikkaduwa"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "@id": "https://tigribeach.com/#postaladdress",
          "streetAddress": "348 Galle Road",
          "addressLocality": "Hikkaduwa",
          "addressRegion": "Southern Province",
          "postalCode": "80240",
          "addressCountry": "LK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "@id": "https://tigribeach.com/#geocoordinates",
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
          { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true }
        ],
        "hasMenu": {
          "@type": "Menu",
          "@id": "https://tigribeach.com/#menu-schema",
          "name": "Tigri Beach Restaurant Menu",
          "url": "https://tigribeach.com/#menu",
          "inLanguage": "en-US",
          "offers": {
            "@type": "Offer",
            "priceRange": "$$ (LKR 3,000 - 9,000 per person)"
          },
          "hasMenuSection": [
            {
              "@type": "MenuSection",
              "@id": "https://tigribeach.com/#menu-section-seafood",
              "name": "Tigri Special Seafood",
              "description": "Daily caught fresh seafood specialties",
              "hasMenuItem": [
                {
                  "@type": "MenuItem",
                  "name": "Tigri Special Full Plate",
                  "description": "Our signature seafood feast featuring prawns, jumbo prawns, tiger prawns, calamari, crabs, lobster, and full fish. Cooked with lime, fresh tomato sauce, and garlic butter. Serves 2.",
                  "offers": {
                    "@type": "Offer",
                    "price": "14000",
                    "priceCurrency": "LKR"
                  }
                },
                {
                  "@type": "MenuItem",
                  "name": "01. Tigri Special Full Fish",
                  "description": "Served with chips and salad (For One Person). Your choice of Dorado, Barracuda, or Coral Fish, cooked with fresh tomato, ginger, lime, and garlic butter sauce.",
                  "offers": {
                    "@type": "Offer",
                    "price": "3000",
                    "priceCurrency": "LKR"
                  }
                },
                {
                  "@type": "MenuItem",
                  "name": "02. Tigri Special Mix Prawns",
                  "description": "Served with chips and salad (For One Person). Jumbo prawns and tiger prawns cooked with fresh tomato, ginger and lime.",
                  "offers": {
                    "@type": "Offer",
                    "price": "5000",
                    "priceCurrency": "LKR"
                  }
                },
                {
                  "@type": "MenuItem",
                  "name": "03. Tigri Special Crabs",
                  "description": "Served with chips and salad (For One Person). Fresh crabs cooked with Tigri Special Mix Sauce.",
                  "offers": {
                    "@type": "Offer",
                    "price": "8500",
                    "priceCurrency": "LKR"
                  }
                }
              ]
            },
            {
              "@type": "MenuSection",
              "@id": "https://tigribeach.com/#menu-section-breakfast",
              "name": "Breakfast",
              "description": "Hearty local and international breakfast options",
              "hasMenuItem": [
                {
                  "@type": "MenuItem",
                  "name": "07. Breakfast",
                  "description": "Pot of tea or coffee, egg (boiled, fried or scrambled), toast with butter and jam, slice of cheese and fruit juice.",
                  "offers": {
                    "@type": "Offer",
                    "price": "2000",
                    "priceCurrency": "LKR"
                  }
                },
                {
                  "@type": "MenuItem",
                  "name": "08. Sri Lankan Breakfast",
                  "description": "Pot of tea or coffee with String Hoppers, Coconut Rotti or Milk Rice served with dhal curry, fish curry, egg curry, fried egg or coconut sambol.",
                  "offers": {
                    "@type": "Offer",
                    "price": "2000",
                    "priceCurrency": "LKR"
                  }
                }
              ]
            },
            {
              "@type": "MenuSection",
              "@id": "https://tigribeach.com/#menu-section-drinks",
              "name": "Drinks",
              "description": "Refreshing mocktails and cocktails",
              "hasMenuItem": [
                {
                  "@type": "MenuItem",
                  "name": "13. Virgin Mojito",
                  "description": "Fresh mint, lime, ice and soda.",
                  "offers": {
                    "@type": "Offer",
                    "price": "1200",
                    "priceCurrency": "LKR"
                  }
                },
                {
                  "@type": "MenuItem",
                  "name": "14. Pineapple Mojito",
                  "description": "Mint, pineapple juice, soda, lime and ice.",
                  "offers": {
                    "@type": "Offer",
                    "price": "1200",
                    "priceCurrency": "LKR"
                  }
                },
                {
                  "@type": "MenuItem",
                  "name": "16. Tigri Special Cocktail",
                  "description": "White rum, lime, sugar, orange juice, pineapple juice and ice.",
                  "offers": {
                    "@type": "Offer",
                    "price": "1800",
                    "priceCurrency": "LKR"
                  }
                }
              ]
            }
          ]
        },
        "acceptsReservations": true,
        "aggregateRating": {
          "@type": "AggregateRating",
          "@id": "https://tigribeach.com/#aggregaterating",
          "ratingValue": "4.3",
          "reviewCount": "497",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "@id": "https://tigribeach.com/#review-sarah-jenkins",
            "itemReviewed": { "@id": "https://tigribeach.com/#restaurant" },
            "author": { "@type": "Person", "name": "Sarah Jenkins" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "datePublished": "2026-06-17",
            "reviewBody": "Best seafood platter in Hikkaduwa by far! Everything was incredibly fresh, the portions were generous, and eating right on the sand at sunset was unforgettable."
          },
          {
            "@type": "Review",
            "@id": "https://tigribeach.com/#review-erky-b",
            "itemReviewed": { "@id": "https://tigribeach.com/#restaurant" },
            "author": { "@type": "Person", "name": "Erky B" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "datePublished": "2024-12-15",
            "reviewBody": "Superb seafood at a fraction of the price. The mixed seafood grill was outstanding, the friendly host made us feel welcome, and the unobstructed beachfront views made sunset dinner unforgettable."
          },
          {
            "@type": "Review",
            "@id": "https://tigribeach.com/#review-ruwan-bandara",
            "itemReviewed": { "@id": "https://tigribeach.com/#restaurant" },
            "author": { "@type": "Person", "name": "Ruwan Bandara" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "datePublished": "2026-06-10",
            "reviewBody": "Cozy beachfront gem. Friendly, attentive staff who let us choose our catch. The butter-rosemary snapper was incredibly tender. Very reasonable pricing for the quality."
          },
          {
            "@type": "Review",
            "@id": "https://tigribeach.com/#review-forster",
            "itemReviewed": { "@id": "https://tigribeach.com/#restaurant" },
            "author": { "@type": "Person", "name": "Forster" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "datePublished": "2022-04-15",
            "reviewBody": "Among the best seafood I've had anywhere, not just Sri Lanka. The seafood platter with lobster, prawns, crab, and squid in a Thai-style lime sauce was exceptional, complemented by friendly service and great music."
          },
          {
            "@type": "Review",
            "@id": "https://tigribeach.com/#review-david-miller",
            "itemReviewed": { "@id": "https://tigribeach.com/#restaurant" },
            "author": { "@type": "Person", "name": "David Miller" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "datePublished": "2026-06-24",
            "reviewBody": "Incredible food and atmosphere. The staff are so welcoming and the fish is caught daily. Sitting by the waves with a cold beer and fresh seafood is pure heaven. Highly recommend!"
          },
          {
            "@type": "Review",
            "@id": "https://tigribeach.com/#review-prdh1968",
            "itemReviewed": { "@id": "https://tigribeach.com/#restaurant" },
            "author": { "@type": "Person", "name": "Prdh1968" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "datePublished": "2022-03-15",
            "reviewBody": "Amazing fresh seafood, stunning sea views, and excellent service. Owner Nishan was incredibly helpful, and the food was some of the best we enjoyed in Sri Lanka at very reasonable prices."
          },
          {
            "@type": "Review",
            "@id": "https://tigribeach.com/#review-harrys",
            "itemReviewed": { "@id": "https://tigribeach.com/#restaurant" },
            "author": { "@type": "Person", "name": "Harry S" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "datePublished": "2023-08-15",
            "reviewBody": "A hidden gem with fantastic seafood. The platter featuring fish, crab, and prawns was beautifully cooked, the vegetables were perfectly seasoned, and the staff made great recommendations."
          },
          {
            "@type": "Review",
            "@id": "https://tigribeach.com/#review-veronicac",
            "itemReviewed": { "@id": "https://tigribeach.com/#restaurant" },
            "author": { "@type": "Person", "name": "Veronica C" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "datePublished": "2024-11-15",
            "reviewBody": "A romantic seaside dinner with delicious fresh fish, kind and attentive service, and a welcoming family-run atmosphere. Excellent value for money and highly recommended for couples and families alike."
          }
        ],
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
      },
      {
        "@type": "WebSite",
        "@id": "https://tigribeach.com/#website",
        "url": "https://tigribeach.com/",
        "name": "Tigri Beach Restaurant",
        "description": "Official website of Tigri Beach Restaurant — Hikkaduwa's beachfront seafood dining destination.",
        "publisher": { "@id": "https://tigribeach.com/#organization" }
      },
      {
        "@type": "WebPage",
        "@id": "https://tigribeach.com/#webpage",
        "url": "https://tigribeach.com/",
        "name": "Tigri Beach Restaurant | Fresh Seafood & Sunset Vibe Hikkaduwa",
        "isPartOf": { "@id": "https://tigribeach.com/#website" },
        "about": { "@id": "https://tigribeach.com/#restaurant" },
        "primaryImageOfPage": { "@id": "https://tigribeach.com/#image-hero" },
        "description": "Dine with your feet in the sand at Hikkaduwa's premier beachfront seafood restaurant. Enjoy fresh lobster, lagoon crab, traditional Sri Lankan curries, and stunning tropical sunsets.",
        "inLanguage": "en-US",
        "breadcrumb": { "@id": "https://tigribeach.com/#breadcrumb" }
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
        "@type": "FAQPage",
        "@id": "https://tigribeach.com/#faqpage",
        "isPartOf": { "@id": "https://tigribeach.com/#webpage" },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What makes Tigri Beach the best seafood restaurant in Hikkaduwa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tigri Beach Restaurant sources seafood fresh daily directly from local Hikkaduwa fishermen at the harbour. Located right on the beachfront at 348 Galle Road, guests enjoy signature dishes like fresh grilled lobster, lagoon crab curry, jumbo tiger prawns, and local Sri Lankan fish curries with their feet in the sand, accompanied by spectacular Indian Ocean sunsets. We have 4.3 stars on Google (497 reviews) and 4.2 stars on TripAdvisor (604 reviews)."
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
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
