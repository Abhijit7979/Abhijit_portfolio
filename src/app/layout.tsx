import type { Metadata } from "next";
import { dmSans, syne, jetbrainsMono } from "./fonts";
import { Background } from "@/components/layout/Background";
import "./globals.css";
import { bookingUrl } from "@/data/services";

const siteUrl = "https://abhijit-rao.me";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "S. Abhijit Rao — AI Architecture Consulting",
    template: "%s | S. Abhijit Rao",
  },
  description:
    "Freelance AI engineer and consultant. I help teams design RAG systems, agentic AI, and production AI architecture. Book a free 30-minute call or hire a 90-minute architecture deep-dive.",
  keywords: [
    "AI consultant",
    "AI architect",
    "RAG consulting",
    "agentic AI consultant",
    "LangChain consultant",
    "LangGraph",
    "RAG",
    "FastAPI",
    "AI architecture review",
    "hire AI engineer",
    "freelance AI developer",
  ],
  authors: [{ name: "S. Abhijit Rao" }],
  creator: "S. Abhijit Rao",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "S. Abhijit Rao — AI Architecture Consulting",
    title: "Your AI project needs an architect, not another demo",
    description:
      "I help teams design RAG systems, agentic AI, and production AI architecture. Free 30-minute call, published rates.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Architecture Consulting — S. Abhijit Rao",
    description:
      "RAG, agentic AI, and production AI architecture. Free 30-minute call, published rates.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

/** Structured data so search engines can surface the service + price range. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "S. Abhijit Rao",
      jobTitle: "Freelance AI Engineer & Consultant",
      email: "mailto:sar.abhijit2003@gmail.com",
      url: siteUrl,
      sameAs: [
        "https://github.com/Abhijit7979",
        "https://www.linkedin.com/in/abhijit79",
      ],
      knowsAbout: [
        "Retrieval-Augmented Generation",
        "Agentic AI",
        "LangChain",
        "LangGraph",
        "LLM orchestration",
        "FastAPI",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "S. Abhijit Rao — AI Architecture Consulting",
      description:
        "AI architecture consulting, RAG and agentic AI troubleshooting, and production readiness reviews.",
      url: siteUrl,
      provider: { "@id": `${siteUrl}/#person` },
      areaServed: "Worldwide",
      availableLanguage: "en",
      serviceType: [
        "AI Architecture Review",
        "RAG Troubleshooting",
        "Production Readiness Review",
      ],
      priceRange: "$$",
      ...(bookingUrl ? { potentialAction: { "@type": "ReserveAction", target: bookingUrl } } : {}),
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
