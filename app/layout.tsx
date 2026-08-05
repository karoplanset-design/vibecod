import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "delent — студия архитектуры и интерьера",
    template: "%s — delent",
  },
  description:
    "Спокойные и функциональные интерьеры, созданные вокруг вашей жизни.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body id="top">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
