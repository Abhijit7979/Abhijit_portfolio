import type { Metadata } from "next";
import { dmSans, syne, jetbrainsMono } from "./fonts";
import { Background } from "@/components/layout/Background";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "S. Abhijit Rao - Data Engineer",
    template: "%s | S. Abhijit Rao",
  },
  description:
    "Data Engineer specializing in scalable data pipelines, ETL/ELT workflows, and distributed data systems using Python, PySpark, and SQL. B.Tech AI Graduate.",
  keywords: [
    "Data Engineer",
    "PySpark",
    "ETL",
    "SQL",
    "Python",
    "AWS",
    "Apache Airflow",
    "PostgreSQL",
    "Data Pipelines",
    "Distributed Computing",
    "Data Warehousing",
  ],
  authors: [{ name: "S. Abhijit Rao" }],
  creator: "S. Abhijit Rao",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "S. Abhijit Rao Portfolio",
    title: "S. Abhijit Rao - Data Engineer",
    description:
      "Data Engineer specializing in scalable data pipelines, ETL/ELT workflows, and distributed data systems using Python, PySpark, and SQL.",
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
