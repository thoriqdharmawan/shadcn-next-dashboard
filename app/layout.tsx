import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/header";
import MenuNavigation from "@/components/navigation/MenuNavigation";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Welcome to the Dashboard Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">

          <MenuNavigation />

          <div className="flex flex-col flex-grow overflow-hidden">
            <Header />

            <main className="flex-grow overflow-y-auto p-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
