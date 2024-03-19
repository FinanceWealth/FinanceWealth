import { Inter } from "next/font/google";
import "./styles/globals.css";
import styled, { css } from 'styled-components';

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finance Wealth",
  description: "App desenvolvido em Next.js, Springboot Web, SQL Server & SCSS",
  icons: {
    icon: '/fav32.png',
    shortcut: '/fav96.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white">{children}</body>
    </html>
  );
};