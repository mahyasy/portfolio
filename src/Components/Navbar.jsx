"use client";
import { WrapperContext } from "@/app/Context/WrapperComponent";
import { usePathname } from "next/navigation";
import { useContext } from "react";


const Navbar = () => {
  const pathname = usePathname();
  const isActive =(path)=> path === pathname;
console.log(pathname)

  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",

      });
    });
  });

  const link = ["#Projects", "#Reseme", "#academic Record", "#Contact me"];

  const {Tabname} =useContext(WrapperContext)
  return (
  
      <nav className="sticky z-100 p-4 top-0 bg-white rounded-bl-full rounded-tr-full text-white flex justify-center md:gap-8 m-8 gap-4 backdrop-filter backdrop-blur-lg bg-opacity-20">
        {link.map((item,index) => (
          <a className="text-red-400" key={index} href={item}>{Tabname[index]}</a>
        ))}
      </nav>
    
  
  );
};

export default Navbar;
