import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import {
  Cinzel_Decorative,
  Cormorant_Garamond,
  Great_Vibes,
} from "next/font/google";

import { Cursor } from "@/components/cursor";
import { colorValues, rootCssVariables } from "@/styles/theme";
import "@/styles/globals.css";

const script = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const heading = Cinzel_Decorative({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const body = Cormorant_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Wedding Experience",
  description: "A premium digital memory book",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: colorValues.ivory,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${script.variable} ${heading.variable} ${body.variable} h-full`}
      style={rootCssVariables as CSSProperties}
    >
      <body className="experience-body min-h-dvh overflow-hidden">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
