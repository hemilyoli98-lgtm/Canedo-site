import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Canedo Sacabollos | Academia Premium PDR",
  description: "27 años formando especialistas en reparación artesanal sin pintura.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
