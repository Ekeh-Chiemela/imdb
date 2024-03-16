"use client";
import Providers from "./Providers";
import Header from "./components/Header"
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> 
      
        <Providers>
           {/* Header*/}
        <Header />
       

       {/* Nav bar*/
       <Navbar></Navbar>}
       {/* Search box*/}
       {children}
        </Providers>
      
      </body>
    </html>
  );
}
