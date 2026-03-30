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
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Mohamed Aziz Ben Salem | Software Engineer",
  description: "Portfolio of Mohamed Aziz Ben Salem - Software Engineer specialized in Flutter and Web Development with a Formula 1 inspired aesthetic.",
  openGraph: {
    title: "Mohamed Aziz Ben Salem | Software Engineer",
    description: "Portfolio of Mohamed Aziz Ben Salem - Software Engineer specialized in Flutter and Web Development.",
    url: "https://mohamedaziz-portfolio.vercel.app", // Adjust with actual URL
    siteName: "Mohamed Aziz Ben Salem Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamed Aziz Ben Salem Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Aziz Ben Salem | Software Engineer",
    description: "Portfolio of Mohamed Aziz Ben Salem - Software Engineer specialized in Flutter and Web Development.",
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
