import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import NavigationBottom from "./components/NavigationBottom";

import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coffee Shop Next.js",
  description: "Made with Next.js & Love 🥰",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        {/* <NavigationBottom /> */}
      </body>
    </html>
  );
}
