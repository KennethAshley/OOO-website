import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Out of Office. Cinema for the decentralized intelligence era.",
  description:
    "An independent documentary studio covering the people building artificial intelligence in the open.",
  applicationName: "Out of Office Media Group",
  authors: [{ name: "Out of Office Media Group" }],
  creator: "Out of Office Media Group",
  publisher: "Out of Office Media Group",
  openGraph: {
    title: "Out of Office. Cinema for the decentralized intelligence era.",
    description:
      "An independent documentary studio covering the people building artificial intelligence in the open.",
    siteName: "Out of Office Media Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Out of Office",
    description: "Cinema for the decentralized intelligence era.",
  },
};

export const viewport: Viewport = {
  themeColor: "#fcfaf6",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
