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
  // Inject structured JSON-LD data for Restaurant, WebPage, BreadcrumbList, and Service (SEO & AI Visibility)
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
        "openingHoursSpecification": {
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
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.3",
          "reviewCount": "497",
          "bestRating": "5",
          "worstRating": "1"
        },
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
