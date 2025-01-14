
import "./globals.css";
import Navbar from "../Components/Navbar";
import WrapperComponent from "./Context/WrapperComponent";
import Head from "next/head";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head></Head>
      <body>

        <WrapperComponent>
       <Navbar/>
        {children}
        </WrapperComponent>
  
       
      
      </body>
    </html>
  );
}
