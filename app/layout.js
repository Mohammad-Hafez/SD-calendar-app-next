import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ThemeToggle } from './ThemeToggle'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Calendar App",
  description: "This is a calendar app for booking a slots",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="border-b-2 p-2">
          <ThemeToggle/>
          </div>
          {children}
          </Providers>
        </body>
    </html>
  );
}
