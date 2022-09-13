import React from "react";
import { Link } from "react-router-dom";

import cover from "../../assets/iphone.png";
import { Button } from "../controls";

const MainComponent = () => {
  return (
    <section className="fixed top-[60px] mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
      <div className="flex flex-col gap-8">
        <h1 className="space-y-3 text-5xl font-bold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Powered
          </span>
          <span className="block">By Intellect</span>
          <span className="block">Driven By Values</span>
        </h1>
        <div>
          <Button text="Buy Now" onClick={() => {}} />
          <Link to="/" className="leading-[1.75rem] text-[1.125rem] font-bold px-8 before:">
            Learn More
          </Link>
        </div>
      </div>
      <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
        <img className="w-full h-full object-contain" src={cover} alt="cover" />
      </div>
    </section>
  );
};

export default MainComponent;
