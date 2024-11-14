import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Projeto Energia Solidária",
  description: "Projeto para sustentabilidade de energia verde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-behind-color">{children}</body>
    </html>
  );
}
