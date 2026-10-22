import type { Metadata } from "next";
import { dmSans, syne, jetbrainsMono } from "./fonts";
import { Background } from "@/components/layout/Background";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "S. Abhijit Rao - Junior Full Stack & UI Developer",
    template: "%s | S. Abhijit Rao",
  },
  description:
    "Junior Full Stack & UI Developer building React and Next.js interfaces with FastAPI and PostgreSQL backends.",
  keywords: [
    "Full Stack Developer",
    "UI Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "AI Applications",
  ],
  authors: [{ name: "S. Abhijit Rao" }],
  creator: "S. Abhijit Rao",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "S. Abhijit Rao Portfolio",
    title: "S. Abhijit Rao - Junior Full Stack & UI Developer",
    description:
      "Junior Full Stack & UI Developer building React and Next.js interfaces with FastAPI and PostgreSQL backends.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${syne.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Background />
        {children}
      </body>
    </html>
  );
}
