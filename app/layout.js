import { Cormorant } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const cormorant = Cormorant({
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Deniz Weber - İngilizce - Türkçe Kitap Çevirisi, Edebi Çeviri ve Kontrol",
  description:
    "İngilizce - Türkçe kitap çevirisi, edebi çeviri ve kontrol alanında uzmanlaşmış profesyonel çeviri hizmeti sunar. Profesyonel çeviri için bana ulaşın.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={cormorant.className}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
