import { Inconsolata} from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/page";
import Footer from "./Components/Footer/page";

const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-inconsolata" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body
         className={`${inconsolata.className} antialiased`}>
      
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
