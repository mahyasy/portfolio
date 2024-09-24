"use client";

import { useContext } from "react";
import { WrapperContext } from "../Context/WrapperComponent";
import Intro from "@/Components/Intro";

const Main = () => {
  const { Tabname } = useContext(WrapperContext);

  return (
    <div className="flex flex-col items-center justify-center z-0">
      <Intro />
      {Tabname.map((tab) => (
        <section className="h-[400px] p-10" key={tab.id} id={tab.name}>
          {tab.tag}
        </section>
      ))}
    </div>
  );
};

export default Main;
