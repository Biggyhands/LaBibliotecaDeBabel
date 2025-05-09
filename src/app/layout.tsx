import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/landing/Navbar";
import { FooterSection } from "@/components/landing/FooterSection";
import { Toaster } from "sonner";
import { SessionProvider } from "@/lib/context/session-context";
import { CartProvider } from "@/lib/context/cart-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "La Biblioteca De Babel",
  description: "Generated by create next app",
  icons: {
    icon: "/file.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className + "flex flex-col justify-between"}>
        <SessionProvider>
          <CartProvider>
            <Navbar />

            <main className=" bg-background">{children}</main>

            <Toaster />
            <FooterSection />
          </CartProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
