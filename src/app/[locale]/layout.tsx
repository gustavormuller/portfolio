import type { Metadata } from "next";
import { Inter } from "next/font/google";
import i18nConfig from "../../../i18n.config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return i18nConfig.locales.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: "Gustavo Portofolio",
  description: "Gustavo Müller's developer portfolio.",
};

type Props = Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>;

export default function RootLayout({ children, params: { locale } }: Props) {
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
