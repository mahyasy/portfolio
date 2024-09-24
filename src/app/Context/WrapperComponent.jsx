"use client";

import Contact from "@/Components/Contact";
import Projects from "@/Components/Projects";
import Record from "@/Components/Record";
import Resume from "@/Components/Resume";
import { createContext } from "react";

export const WrapperContext = createContext();
const WrapperComponent = ({ children }) => {
  const Tabname = [
    { id: 1, name: "Projects", href: "#Projects",tag:<Projects/> },
    { id: 2, name: "Resume", href: "#Resume",tag:<Resume/> },
    { id: 3, name: "academic Record", href: "#academic Record",tag:<Record/>},
    { id: 4, name: "Contact me", href: "#Contact me",tag:<Contact/> },
  ];
  return (
    <WrapperContext.Provider value={{ Tabname }}>
      {children}
    </WrapperContext.Provider>
  );
};

export default WrapperComponent;
