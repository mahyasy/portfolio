"use client";
import { WrapperContext } from "@/app/Context/WrapperComponent";
import { useContext } from "react";

const Navbar = () => {
  const { Tabname } = useContext(WrapperContext);

  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  //const link = ["#Projects", "#Reseme", "#academic Record", "#Contact me"];

  return (
    <nav className="sticky z-2000 p-4 top-0 bg-white rounded-bl-full rounded-tr-full text-white flex justify-center md:gap-8 m-8 gap-4 backdrop-filter backdrop-blur-lg bg-opacity-20">
      {Tabname.map((item) => (
        <a className="text-[10px] md:text-base"  href={item.href} key={item.id}>
          {item.name}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
