import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shivender Kumar | Software Engineer",
  description:
    "Full-stack software engineer building modern web applications using React, Next.js, Node.js, and TypeScript.",
  applicationName: "SK Portfolio",
  authors: [{ name: "Shivender Kumar", url: "https://shivender.pro" }],
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
  themeColor: "#0b3954",
  colorScheme: "dark",
  icons: {
    icon: [
      { url: "/sk_icons/favicon_32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/sk_icons/favicon_16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/sk_icons/apple-touch-icon.png",
    shortcut: "/sk_icons/favicon.ico",
  },
  // manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
