import { Navbar } from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SideMenu } from "@/components/SideMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desafio Advice Health",
  description: "Gestão de Consultas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="overflow-auto md:overflow-hidden">
      <body className={inter.className}>
        <Navbar />
        <SideMenu />
        {children}
      </body>
    </html>
  );
}
