import type { Metadata } from "next";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Inter } from "next/font/google";
import React from "react";

import { ThemeProvider } from "@/components/theme-provider";
import { analytics, basePath } from "@/config/site-config";
import QueryProvider from "@/components/query-provider";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DailyFOSS Helper-Scripts",
  description:
    "The official website for the DailyFOSS Helper-Scripts (Community) repository. Featuring over 400+ scripts to help you manage your Proxmox Virtual Environment.",
  applicationName: "DailyFOSS Helper-Scripts",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Proxmox VE",
    "Helper-Scripts",
    "tteck",
    "helper",
    "scripts",
    "proxmox",
    "VE",
    "virtualization",
    "containers",
    "LXC",
    "VM",
  ],
  authors: [
    { name: "Bram Suurd", url: "https://github.com/BramSuurdje" },
    { name: "Community Scripts", url: "https://github.com/Community-Scripts" },
  ],
  creator: "Bram Suurd",
  publisher: "Community Scripts",
  metadataBase: new URL(`https://medival.github.io/${basePath}/`),
  alternates: {
    canonical: `https://medival.github.io/${basePath}/`,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "DailyFOSS Helper-Scripts",
    description:
      "The official website for the DailyFOSS Helper-Scripts (Community) repository. Featuring over 400+ scripts to help you manage your Proxmox Virtual Environment.",
    url: `https://medival.github.io/${basePath}/`,
    siteName: "DailyFOSS Helper-Scripts",
    images: [
      {
        url: `https://medival.github.io/${basePath}/defaultimg.png`,
        width: 1200,
        height: 630,
        alt: "DailyFOSS Helper-Scripts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DailyFOSS Helper-Scripts",
    creator: "@BramSuurdje",
    description:
      "The official website for the DailyFOSS Helper-Scripts (Community) repository. Featuring over 400+ scripts to help you manage your Proxmox Virtual Environment.",
    images: [`https://medival.github.io/${basePath}/defaultimg.png`],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "DailyFOSS Helper-Scripts",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script defer src={`https://${analytics.url}/script.js`} data-website-id={analytics.token}></script>
        <link rel="canonical" href={metadata.metadataBase?.href} />
        <link rel="manifest" href="manifest.webmanifest" />
        <link rel="preconnect" href="https://api.github.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex w-full flex-col justify-center">
            <NuqsAdapter>
              <QueryProvider>
                <Navbar />
                <div className="flex min-h-screen flex-col justify-center">
                  <div className="flex w-full">
                    <div className="w-full">
                      {children}
                      <Toaster richColors />
                    </div>
                  </div>
                  <Footer />
                </div>
              </QueryProvider>
            </NuqsAdapter>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
