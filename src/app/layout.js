import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aditya Joshi | Portfolio",
  description: "Personal portfolio website of Aditya Joshi - A Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-1 relative overflow-hidden">
        {children}
      </main>
      <Footer />
    </body>
  </html>
  );
}
