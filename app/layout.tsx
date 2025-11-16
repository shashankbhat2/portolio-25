import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-white text-gray-900`}>
        <Navigation />
        <div className="relative">
          {/* Decorative Background Elements */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {/* Vertical Lines */}
            <div className="line-vertical left-[20%] top-0 h-full" />
            <div className="line-vertical left-[50%] top-0 h-full" />
            <div className="line-vertical left-[80%] top-0 h-full" />
            
            {/* Gradient Blobs */}
            <div className="gradient-blob w-96 h-96 bg-indigo-500 top-20 -left-20" />
            <div className="gradient-blob w-96 h-96 bg-purple-500 bottom-20 -right-20" />
          </div>
          
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
