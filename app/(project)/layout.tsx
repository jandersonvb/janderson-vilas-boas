import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  style: ["normal", "italic"],
  fallback: ["system-ui", "sans-serif"],
  preload: true,
  adjustFontFallback: true
});


export const metadata: Metadata = {
  title: 'Janderson Vilas Boas - Site Oficial',
  description: 'Cantor Sertanejo - Agenda, Contato e Redes Sociais',
  icons: {
    icon: { url: "/logo_branco.png", sizes: "32x32" },
    shortcut: { url: "/logo_branco.png", sizes: "32x32" },
    apple: { url: "/logo_branco.png", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} bg-gray-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
