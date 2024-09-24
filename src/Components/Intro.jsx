import React from "react";
import Image from "next/image";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { CiRuler } from "react-icons/ci";
import "../app/ui/animate.css";

const Intro = () => {
  return (
    <div className="flex justify-between items-center">
      <section>
        <span className="flex justify-between gap-3 items-center text-3xl md:text-6xl">
          <h1 className="slideup">MAHKAM</h1>
          <TfiRulerAlt2 className="opacity-40" />
        </span>
        <span className="flex justify-between text-3xl md:text-6xl font-bold">
          <CiRuler className="opacity-40 relative left-2" />
          <h1 className="slideup2">YOUSEFI</h1>
        </span>
        <span className='slide-width'>
        <h1 className="relative left-28 md:left-[280px] font-semibold move">
          Architect
        </h1>
        </span>
      
      </section>

      <figure>
        <Image
          width={100}
          height={100}
          className="w-40 h-60"
          src="/profile.png"
          alt="mahkam yousefi"
        />
      </figure>
    </div>
  );
};

export default Intro;
