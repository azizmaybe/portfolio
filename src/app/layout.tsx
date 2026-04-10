import type { Metadata } from "next";
import { Titillium_Web, Inter } from "next/font/google";
import "./globals.css";
import SpeedLines from "@/components/ui/SpeedLines";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-headlines",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aziz-bs.dev"),
  title: "Mohamed Aziz Ben Salem | Flutter Engineer",
  description: "Portfolio of Mohamed Aziz Ben Salem — Flutter Engineer specializing in high-performance cross-platform mobile apps. Open to relocation and visa sponsorship.",
  keywords: [
    "Flutter engineer",
    "mobile developer",
    "Dart developer",
    "cross-platform",
    "Flutter freelancer",
    "Tunisia developer",
    "open to relocation",
    "Mohamed Aziz Ben Salem",
    "Flutter portfolio",
  ],
  openGraph: {
    title: "Mohamed Aziz Ben Salem | Flutter Engineer",
    description: "Flutter Engineer with 3+ years building cross-platform apps for 10,000+ users. Open to relocation.",
    url: "https://aziz-bs.dev",
    siteName: "Mohamed Aziz Ben Salem Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamed Aziz Ben Salem — Flutter Engineer Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Aziz Ben Salem | Flutter Engineer",
    description: "Flutter Engineer with 3+ years building cross-platform apps for 10,000+ users.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${titillium.variable} ${inter.variable}`}>
      <body>
        <SpeedLines />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
