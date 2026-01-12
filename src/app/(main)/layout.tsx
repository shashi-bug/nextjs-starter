import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';
import '@/app/atelier.css';

import classNames from "classnames";
import { baseURL, meta } from "@/resources/once-ui.config";
import { Meta, Column, Flex } from "@once-ui-system/core";
import { Providers } from '@/components/Providers';
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export async function generateMetadata() {
  return Meta.generate({
    title: "Shilpa Paira | Visual Architect",
    description: meta.home.description,
    baseURL: baseURL,
    path: meta.home.path,
    canonical: meta.home.canonical,
    image: meta.home.image,
    robots: meta.home.robots,
    alternates: meta.home.alternates,
  });
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillWidth
      className={classNames(
        playfair.variable,
        inter.variable,
      )}
    >
      <head>
      </head>
      <Providers>
        <Column as="body" background="page" fillWidth margin="0" padding="0">
          <div className="texture-overlay" />
          {children}
        </Column>
      </Providers>
    </Flex>
  );
}
