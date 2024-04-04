import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import  CartProvider  from "@/components/cart/CartProvider";
import { Toaster } from "@/components/ui/toaster";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "XCommerce",
  description: "XCommerce by Xplendev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <CartProvider>
        <Header/>
        {children}
        <Toaster />
        <Footer/>
        </CartProvider>
        
      </body>
    </html>
  );
}
