import ThemeToggle from "@/components/ui/themeToggle";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shivender Kumar | Software Engineer",
  description:
    "Full-stack software engineer building modern web applications using React, Next.js, Node.js, and TypeScript.",
  applicationName: "SK Portfolio",
  authors: [{ name: "Shivender Kumar", url: "https://www.shivender.pro" }],
  creator: "Shivender Kumar",
  keywords: [
    "Shivender Kumar",
    "Portfolio",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Software Engineer",
  ],
  icons: {
    icon: [
      {
        url: "/icons/favicon_192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icons/favicon_300x300.png",
        sizes: "300x300",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b3954" }, // Dark blue
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} scroll-smooth`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
