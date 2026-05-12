import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Out of Office — Cinema for the decentralized intelligence era.",
  description:
    "Out of Office is a film studio covering the people, ideas, and protocols building AI in the open.",
  applicationName: "Out of Office",
  authors: [{ name: "Out of Office" }],
  creator: "Out of Office",
  publisher: "Out of Office",
  openGraph: {
    title: "Out of Office",
    description:
      "Cinema for the decentralized intelligence era. A film studio covering the people, ideas, and protocols building AI in the open.",
    siteName: "Out of Office",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Out of Office",
    description: "Cinema for the decentralized intelligence era.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
