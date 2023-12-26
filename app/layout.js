import { Cormorant } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant({
  subsets: ["latin"],
});

export const metadata = {
  title: "Deniz Weber Çeviri",
  description: "Deniz Weber Çeviri Hizmetleri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cormorant.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
