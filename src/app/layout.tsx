import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Educere Classes",
    default: "Educere Classes — Best UGC NET, JRF & SLET Coaching Institute",
  },
  description:
    "Educere Classes is a premier coaching institute for UGC NET, JRF, and SLET preparation. Expert faculty, proven results, and personalized attention to help you achieve your dream rank.",
  keywords: [
    "UGC NET coaching",
    "JRF preparation",
    "SLET NE coaching",
    "NET Paper 1 coaching",
    "Guwahati coaching institute",
    "best coaching for NET",
  ],
  openGraph: {
    title: "Educere Classes — Best UGC NET & JRF Coaching Institute",
    description:
      "Premier coaching institute for UGC NET & JRF with expert faculty and proven results.",
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
