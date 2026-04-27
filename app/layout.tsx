import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Stephan | Front-End Portfolio",
  description:
    "An animated developer portfolio with bold typography, immersive cards, and mobile-first responsiveness.",
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
