import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import {
  Cinzel,
  Cormorant_Garamond,
  Great_Vibes,
  Noto_Sans_Telugu,
  Noto_Serif_Telugu,
  Poppins,
} from "next/font/google";

import { Cursor } from "@/components/cursor";
import { colorValues, rootCssVariables } from "@/styles/theme";
import "@/styles/globals.css";

import { Providers } from "./providers";

const script = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const heading = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const section = Cinzel({
  variable: "--font-section",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const body = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const teluguHeading = Noto_Serif_Telugu({
  variable: "--font-telugu-heading",
  subsets: ["telugu"],
  weight: ["400", "500", "600", "700"],
});

const teluguBody = Noto_Sans_Telugu({
  variable: "--font-telugu-body",
  subsets: ["telugu"],
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
      className={`${script.variable} ${heading.variable} ${section.variable} ${body.variable} ${teluguHeading.variable} ${teluguBody.variable} h-full`}
      style={rootCssVariables as CSSProperties}
    >
      <body className="experience-body min-h-dvh overflow-hidden">
        <Cursor />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
