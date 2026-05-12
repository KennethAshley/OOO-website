import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Geist_Mono, Spectral } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  variable: "--font-display",
  subsets: ["latin"],
  display: "block",
  weight: ["700", "800", "900"],
});

const spectral = Spectral({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Out of Office — Cinema for the decentralized intelligence era.",
  description:
    "Out of Office is an independent film studio covering the people, ideas, and protocols building artificial intelligence in the open.",
  applicationName: "Out of Office",
  authors: [{ name: "Out of Office" }],
  creator: "Out of Office",
  publisher: "Out of Office",
  openGraph: {
    title: "Out of Office",
    description:
      "Cinema for the decentralized intelligence era. An independent film studio covering the people, ideas, and protocols building AI in the open.",
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
  themeColor: "#f7f5f0",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bigShoulders.variable} ${spectral.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
