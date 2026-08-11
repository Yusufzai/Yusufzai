import localFont from "next/font/local";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = localFont({
  src: [
    { path: "../fonts/PlayfairDisplay-Variable.ttf", style: "normal" },
    { path: "../fonts/PlayfairDisplay-Italic-Variable.ttf", style: "italic" },
  ],
  variable: "--font-playfair",
  weight: "400 900",
  display: "swap",
});

const inter = localFont({
  src: "../fonts/Inter-Variable.ttf",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const caveat = localFont({
  src: "../fonts/Caveat-Variable.ttf",
  variable: "--font-caveat",
  weight: "400 700",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Owaiz Yusufi — Senior Frontend Developer",
    template: "%s — Owaiz Yusufi",
  },
  description:
    "Owaiz Yusufi is a senior frontend developer with 9+ years of experience building refined, performant interfaces and full-stack web products.",
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='%230D0D0D'/%3E%3Ctext x='32' y='44' font-family='Georgia,serif' font-size='34' fill='white' text-anchor='middle'%3EA%3C/text%3E%3C/svg%3E",
  },
};

// Runs before paint to avoid a flash of the wrong theme.
// Defaults to dark mode; remembers the visitor's choice after that.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var isDark = stored ? stored === 'dark' : true;
    document.documentElement.classList.toggle('dark', isDark);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${caveat.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>
      <body className="bg-cream text-ink dark:bg-ink dark:text-cream font-sans transition-colors duration-300">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
