import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const dmSerif = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Lindy Hennen - Realtor, Central MN Realty",
  description:
    "Lindy Hennen is a dedicated realtor at Central MN Realty, committed to helping you find your dream home in Central Minnesota. With personalized service and expert knowledge, Lindy makes your real estate journey seamless and successful.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSerif.className} antialiased`}>
        <Navbar />
        {children}
        <Toaster position="top-center" />
        <Footer />
      </body>
    </html>
  );
}
