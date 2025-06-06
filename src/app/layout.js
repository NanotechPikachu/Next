import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AniChu.DB",
  description: "A JSON DataBase of anime info",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  );
}
