import type { Metadata } from "next";
import "./globals.css";
import '@fontsource-variable/inter';

export const metadata: Metadata = {
  title: "Crea Landing Pages altamente efectivas con Lali.",
  description: "Crea tu página de aterrizaje ideal en segundos y administrala con un panel sencillo pero eficaz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
