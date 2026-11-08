import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles.css";
import PiedDePage from "@/components/pied-de-page";
import Menu from "@/components/menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Decret Lucas – Portfolio",
  description: "Portfolio de Lucas Decret : projets de développement web et de 3D.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="mx-auto flex min-h-full w-full max-w-5xl flex-col px-6">
        <Menu />
        <main className="flex-1 py-12">
          {children}
        </main>
        <PiedDePage />
      </body>
    </html>
  );
}