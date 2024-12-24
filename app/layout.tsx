import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Financial Advisor | Expert Market & Crypto Analysis",
  description: "Get expert financial advice on markets and cryptocurrencies. Professional guidance for your investment decisions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white`}>
        {children}
      </body>
    </html>
  );
}
