import React from 'react';
import Checkout from "./components/Checkout";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        {/* Meta tags, title, etc. */}
      </head>
      <body className={inter.className}>
        <Checkout />
        {/* Não incluir {children}, pois você quer apenas o Checkout */}
      </body>
    </html>
  );
}
