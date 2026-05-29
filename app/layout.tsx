import type { Metadata } from "next";
import { Sora, Space_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

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
    <html lang="en" className={`${sora.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
