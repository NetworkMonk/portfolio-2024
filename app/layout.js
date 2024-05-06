import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "James Plant",
  description: "A personal portfolio for me, James, a full stave developer in the UK.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-montserrat">
      <body>{children}</body>
    </html>
  );
}
