import type { Metadata } from "next";
import { dmSans, syne, jetbrainsMono } from "./fonts";
import { Background } from "@/components/layout/Background";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "S. Abhijit Rao - Agentic AI Engineer",
    template: "%s | S. Abhijit Rao",
  },
  description:
    "AI Engineer specializing in agentic workflows, RAG pipelines, and multi-agent systems. B.Tech AI Graduate with experience at Prodigal AI.",
  keywords: [
    "AI Engineer",
    "LangChain",
    "LangGraph",
    "RAG",
    "FastAPI",
    "Python",
    "Machine Learning",
    "Multi-Agent Systems",
    "Agentic AI",
    "Vector Databases",
    "ChromaDB",
  ],
  authors: [{ name: "S. Abhijit Rao" }],
  creator: "S. Abhijit Rao",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "S. Abhijit Rao Portfolio",
    title: "S. Abhijit Rao - Agentic AI Engineer",
    description:
      "AI Engineer specializing in agentic workflows, RAG pipelines, and multi-agent systems.",
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
