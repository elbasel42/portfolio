import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "../globals.css";
import { Net } from "@app/components/Net";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elbasel",
  description: "Frontend Portfolio",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
