import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Case E-commerce App",
  description: "A website for selling phone cases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
