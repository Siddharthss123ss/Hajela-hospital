import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  metadataBase: new URL("https://hajelahospital.com"),

  title: {
    default:
      "Hajela Hospital Bhopal | Best Multispeciality Hospital in Bhopal",

    template:
      "%s | Hajela Hospital Bhopal",
  },

  description:
    "Hajela Hospital Bhopal provides advanced healthcare services including ENT, IVF & Infertility, Orthopaedics, Robotic Surgery, ICU, NICU, Sonology, Trauma Care, Emergency Services and modern medical treatments with expert doctors.",

  keywords: [

    "Hajela Hospital",
    "Hajela Hospital Bhopal",
    "Best Hospital in Bhopal",
    "Multispeciality Hospital Bhopal",
    "ENT Hospital in Bhopal",
    "IVF Centre Bhopal",
    "Orthopaedic Hospital Bhopal",
    "Robotic Surgery Bhopal",
    "ICCU Care Bhopal",
    "NICU Hospital Bhopal",
    "Cochlear Implant Centre",
    "Emergency Hospital Bhopal",
    "Sonology Centre Bhopal",
    "Best Doctors in Bhopal",
    "Trauma Care Hospital",

  ],

  authors: [
    {
      name: "Hajela Hospital",
    },
  ],

  creator: "Hajela Hospital",

  publisher: "Hajela Hospital",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {

    title:
      "Hajela Hospital Bhopal | Advanced Healthcare Services",

    description:
      "Advanced healthcare services with experienced doctors, IVF, ENT, Orthopaedics, ICU, NICU, Robotic Surgery and Emergency Care in Bhopal.",

    url: "https://hajelahospital.com",

    siteName: "Hajela Hospital",

    images: [

      {
        url: "/images/Logo.avif",

        width: 1200,

        height: 630,

        alt:
          "Hajela Hospital Bhopal",
      },

    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {

    card: "summary_large_image",

    title:
      "Hajela Hospital Bhopal",

    description:
      "Advanced healthcare services with expert doctors and modern medical facilities.",

    images: ["/images/Logo.avif"],

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

  alternates: {

    canonical:
      "https://hajelahospital.com",

  },

  category: "hospital",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html
      lang="en"

      className={`
      ${geistSans.variable}
      ${geistMono.variable}

      h-full

      antialiased
      `}
    >

      <body className="min-h-full flex flex-col">

        {/* SCHEMA MARKUP */}

        <script
          type="application/ld+json"

          dangerouslySetInnerHTML={{
            __html: JSON.stringify({

              "@context":
                "https://schema.org",

              "@type": "Hospital",

              name: "Hajela Hospital",

              image:
                "https://hajelahospital.com/images/Logo.avif",

              url:
                "https://hajelahospital.com",

              telephone:
                "07552773393",

              address: {

                "@type":
                  "PostalAddress",

                streetAddress:
                  "Hajela Hospital",

                addressLocality:
                  "Bhopal",

                addressRegion:
                  "Madhya Pradesh",

                postalCode:
                  "462001",

                addressCountry:
                  "IN",

              },

              geo: {

                "@type":
                  "GeoCoordinates",

                latitude:
                  "23.2599",

                longitude:
                  "77.4126",

              },

              openingHours:
                "Mo-Su 00:00-23:59",

              medicalSpecialty: [

                "ENT",
                "Orthopaedics",
                "IVF",
                "Critical Care",
                "Radiology",
                "Emergency Care",

              ],

            }),
          }}
        />

        {children}

      </body>

    </html>

  );

}