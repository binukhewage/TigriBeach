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
  // Inject structured JSON-LD data for Restaurant Schema (SEO & AI Visibility)
  const jsonLd = {
    "@context": "https://schema.org",
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
      "reviewCount": "402",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.tripadvisor.com/Restaurant_Review-g304134-d4778071-Reviews-Tigri_Beach_Resturant-Hikkaduwa_Galle_District_Southern_Province.html",
      "https://share.google/LtVgjRX3VIP4AQgZl"
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
