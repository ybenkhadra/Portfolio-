/**
 * Layout principal de l'application
 * Contient la navbar, le contenu principal et le footer
 */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Youssef Benkhadra | Portfolio",
  description:
    "Portfolio de Youssef Benkhadra - Étudiant Ingénieur en Informatique à l'ESISA. Découvrez mes projets, compétences et parcours.",
  keywords: [
    "Youssef Benkhadra",
    "Portfolio",
    "Développeur",
    "Ingénieur Informatique",
    "ESISA",
    "Next.js",
  ],
  authors: [{ name: "Youssef Benkhadra" }],
  openGraph: {
    title: "Youssef Benkhadra | Portfolio",
    description:
      "Étudiant Ingénieur en Informatique - Découvrez mes projets et compétences",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
