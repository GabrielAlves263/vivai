import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito();

export const metadata: Metadata = {
  title: "VivAI",
  description:
    "VivAI é uma solução inteligente, acolhedora e preventiva voltada para o cuidado de idosos e pessoas com necessidades especiais. Unindo tecnologia assistiva, inteligência artificial e design inclusivo, o app promove bem-estar, segurança e companhia no dia a dia de quem mais precisa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
