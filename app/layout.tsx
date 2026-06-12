import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Mayowa",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={playfair.variable}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </body>
  </html>
  );
}