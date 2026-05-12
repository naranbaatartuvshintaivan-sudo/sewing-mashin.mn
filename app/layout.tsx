import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Оёдлын Дэлгүүр",
  description: "Монголын оёдлын машины дэлгүүр",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
