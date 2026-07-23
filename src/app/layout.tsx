import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Educere Classes — Best IIT-JEE & NEET Coaching Institute",
    template: "%s | Educere Classes",
  },
  description:
    "Educere Classes is a premier coaching institute for IIT-JEE & NEET preparation. Expert faculty, proven results, and personalized attention to help you achieve your dream rank.",
  keywords: [
    "IIT JEE coaching",
    "NEET coaching",
    "Educere Classes",
    "JEE Advanced preparation",
    "NEET UG preparation",
    "best coaching institute",
    "competitive exam coaching",
  ],
  openGraph: {
    title: "Educere Classes — Best IIT-JEE & NEET Coaching Institute",
    description:
      "Premier coaching institute for IIT-JEE & NEET with expert faculty and proven results.",
    type: "website",
    locale: "en_IN",
    siteName: "Educere Classes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
