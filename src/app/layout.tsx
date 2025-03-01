import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cris Energy | Energia Verde para um Futuro Sustentável",
  description: "Transforme sua energia em um futuro sustentável com a Cris Energy, afiliada da Igreen Energy. Soluções de energia verde para famílias e empresas.",
  keywords: ["energia verde", "energia sustentável", "energia renovável", "Igreen Energy", "Cris Energy", "painéis solares", "energia limpa"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="scanline" />
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
