import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme-Provider";
import NavSection from "@/components/NavSection";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ui/theme-toggle";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Brapurple",
  description: "Stay in touch with Brapurple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <NavSection />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <div className="fixed bottom-4 right-4 z-50">
            <ThemeToggle />
          </div>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
