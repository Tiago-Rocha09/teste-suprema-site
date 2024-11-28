import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar";
import pageService from "@/services/page";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Site desafio Suprema",
  description: "Site desenvolvido para o desafio da Suprema",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pages = await pageService.listPages();

  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar pages={pages} />
        {children}
      </body>
    </html>
  );
}

export const relalidate = 5;
