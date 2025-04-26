import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: 'Janderson Vilas Boas - Site Oficial',
  description: 'Cantor Sertanejo - Agenda, Contato e Redes Sociais',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} bg-gray-50 text-gray-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
