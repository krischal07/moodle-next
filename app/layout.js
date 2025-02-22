import { Fugaz_One, Geist, Geist_Mono, Inter, Open_Sans } from "next/font/google";
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
 const fugaz = Fugaz_One({ subsets: ['latin'],weight:['400'] });
 const openSans = Open_Sans({ subsets: ['latin'],weight:['400'] });


export const metadata = {
  title: "Moodle",
  description: "Track your Daily Mood Everyday of the Year!!",
};

export default function RootLayout({ children }) {

  const header = (
    <header className="border-4 border-green-500 p-4 sm:p-8 flex items-center justify-between gap-4  ">
      <h1 className={'border-2 border-red-500 text-base sm:text-lg textGradient ' + fugaz.className}>Moodles</h1>
    </header>
  )

  const footer = (
    <footer className="border-4 border-blue-500 p-4 sm:p-8 place-items-center">
        <p className={'text-indigo-600 '+ fugaz.className}>Created with 💖</p>
    </footer>
  )
  return (
    <html lang="en">
      <body
        className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 ' + openSans.className}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
