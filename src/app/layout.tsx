import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Reparații TV Brăila - Service Televizoare LCD/LED/Smart TV | Garanție 1 An",
  description: "Service reparatii TV Brăila. Reparăm televizoare LCD, LED, Smart TV toate mărcile: Samsung, LG, Sony, Panasonic, Philips. Garanție 1 an. Program Luni-Vineri 8:00-17:00. Telefon: 0729 026 656",
  keywords: "reparatii tv braila, service tv braila, reparatii televizoare, service lcd led, reparatii samsung lg sony, service tv autorizat braila, reparatii smart tv, telecomenzi tv braila, chei auto braila",
  authors: [{ name: "Service Reparații TV Brăila" }],
  creator: "Service Reparații TV Brăila",
  publisher: "Service Reparații TV Brăila",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://reparatii-tv-braila.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Reparații TV Brăila - Service Televizoare LCD/LED/Smart TV | Garanție 1 An",
    description: "Service reparatii TV Brăila. Reparăm televizoare LCD, LED, Smart TV toate mărcile: Samsung, LG, Sony, Panasonic, Philips. Garanție 1 an. Program Luni-Vineri 8:00-17:00.",
    url: 'https://reparatii-tv-braila.com',
    siteName: 'Reparații TV Brăila',
    locale: 'ro_RO',
    type: 'website',
    images: [
      {
        url: '/storefront.webp',
        width: 1200,
        height: 630,
        alt: 'Service Reparații TV Brăila - Televizoare LCD LED Smart TV',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Reparații TV Brăila - Service Televizoare LCD/LED/Smart TV",
    description: "Service reparatii TV Brăila. Reparăm televizoare LCD, LED, Smart TV toate mărcile. Garanție 1 an.",
    images: ['/storefront.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        <link rel="icon" href="/storefront.webp" />
        <link rel="apple-touch-icon" href="/storefront.webp" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FFE14D" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Reparații TV Brăila" />
        <meta name="geo.region" content="RO-BR" />
        <meta name="geo.placename" content="Brăila" />
        <meta name="geo.position" content="45.27880168755801;27.961041100876532" />
        <meta name="ICBM" content="45.27880168755801, 27.961041100876532" />
        <meta name="DC.title" content="Reparații TV Brăila" />
        <meta name="DC.creator" content="Service Reparații TV Brăila" />
        <meta name="DC.subject" content="Reparații televizoare, Service TV, Brăila" />
        <meta name="DC.description" content="Service reparatii TV Brăila. Reparăm televizoare LCD, LED, Smart TV toate mărcile." />
        <meta name="DC.publisher" content="Service Reparații TV Brăila" />
        <meta name="DC.contributor" content="Service Reparații TV Brăila" />
        <meta name="DC.date" content="2024" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://reparatii-tv-braila.com" />
        <meta name="DC.language" content="ro" />
        <meta name="DC.coverage" content="Brăila, România" />
        <meta name="DC.rights" content="Service Reparații TV Brăila" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Reparații TV Brăila",
              "description": "Service reparatii TV Brăila. Oferim servicii de reparatii TV. Reparăm televizoare LCD, LED, Smart TV toate mărcile: Samsung, LG, Sony, Panasonic, Philips. Garanție 1 an.",
              "url": "https://reparatii-tv-braila.com",
              "telephone": "+40729026656",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Str. General Eremia Grigorescu 40",
                "addressLocality": "Brăila",
                "addressRegion": "Brăila",
                "postalCode": "810001",
                "addressCountry": "RO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 45.27880168755801,
                "longitude": 27.961041100876532
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "17:00"
                }
              ],
              "priceRange": "$$",
              "paymentAccepted": ["Cash", "Card"],
              "currenciesAccepted": "RON",
              "areaServed": {
                "@type": "City",
                "name": "Brăila"
              },
              "serviceArea": {
                "@type": "City",
                "name": "Brăila"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicii Reparații TV",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Reparații TV LCD/LED",
                      "description": "Reparații pentru televizoare LCD și LED"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Reparații Smart TV",
                      "description": "Reparații pentru televizoare Smart TV"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Vânzare Telecomenzi TV",
                      "description": "Telecomenzi originale pentru toate mărcile TV"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Servicii Chei Auto",
                      "description": "Servicii profesionale pentru chei auto"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.3",
                "reviewCount": "4",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Gabriel"
                  },
                  "reviewBody": "Super rapid și de încredere! Am cautat in peste 10 locuri ajutoare si toti m-au refuzat. Aici am fost primit cu caldura si problema s-a rezolvat foarte repede."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "bradea doru gabriel"
                  },
                  "reviewBody": "Seriozitate și promptitudine. Am primit ajutor rapid, fără complicații inutile. O experiență pozitivă, exact cum ar trebui să fie peste tot."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Ovidiu Colceru"
                  },
                  "reviewBody": "Seriozitate și amabilitate incredibile"
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Andreea Cristina"
                  },
                  "reviewBody": "Recomand! Seriozitate și profesionalism!"
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Roxana Manea"
                  },
                  "reviewBody": "Un service Serios și profesionist. Recomand"
                }
              ],
              "image": "/storefront.webp",
              "logo": "/storefront.webp"
            })
          }}
        />
      </head>
      <body
        className={`${comfortaa.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
