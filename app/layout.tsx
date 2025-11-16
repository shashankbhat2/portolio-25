import type { Metadata } from "next";
import { Bodoni_Moda } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shashank Bhat — Full-Stack Engineer & AI Product Builder",
  description: "Full-stack engineer specializing in React, FastAPI, Node.js, and AI-enabled product development. View work across SaaS platforms, enterprise dashboards, and creator tools.",
  keywords: ["Full-Stack Engineer", "React", "FastAPI", "Node.js", "AI Products", "Web Development", "Portfolio"],
  authors: [{ name: "Shashank Bhat" }],
  openGraph: {
    title: "Shashank Bhat — Full-Stack Engineer & AI Product Builder",
    description: "Full-stack engineer specializing in React, FastAPI, Node.js, and AI-enabled product development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${bodoniModa.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
