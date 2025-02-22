import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 const inter = Inter({ subsets: ['latin'] });


export const metadata = {
  title: "Moodle",
  description: "Track your Daily Mood Everyday of the Year!!",
};

export default function RootLayout({ children }) {

  const header = (
    <header className="border-4 border-green-500">
      header
    </header>
  )

  const footer = (
    <footer className="border-4 border-blue-500">
        footer
    </footer>
  )
  return (
    <html lang="en">
      <body
        className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col ' + inter.className}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
