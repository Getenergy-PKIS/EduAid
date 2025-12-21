import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Eduaid Africa",
  description: "Empowering Education, Enabling Futures Across Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <NavbarWrapper />
        <div className="pt-[80px] sm:pt-[100px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
