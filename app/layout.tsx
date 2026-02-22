import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chain of Thought Research",
  description: "Understanding chain of thought AI models",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
