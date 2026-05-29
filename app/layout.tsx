import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dattatreya M K | Data Science & ML Portfolio",
  description: "Personal portfolio of Dattatreya M K — Data Science and Machine Learning enthusiast building AI-powered solutions.",
  keywords: ["Data Science", "Machine Learning", "AI", "NLP", "Python", "Streamlit", "LangChain", "Portfolio"],
  authors: [{ name: "Dattatreya M K" }],
  openGraph: {
    title: "Dattatreya M K | Data Science & ML Portfolio",
    description: "Building AI-powered solutions using ML, NLP, and Generative AI",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
