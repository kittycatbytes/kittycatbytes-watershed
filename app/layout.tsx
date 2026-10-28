import type { Metadata } from "next";
import { Geist_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const title = "Catherine Taneyhill — for Watershed";
const description =
  "Staff product engineer. Thirteen years shipping production software, eight of them on Netflix’s TV and web player. Written for the Watershed team.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Catherine Taneyhill", url: "https://github.com/kittycatbytes" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Catherine Taneyhill",
  email: "mailto:ctaneyhill@gmail.com",
  jobTitle: "Senior software engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
  },
  sameAs: [
    "https://www.linkedin.com/in/kittycatbytes",
    "https://github.com/kittycatbytes",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
