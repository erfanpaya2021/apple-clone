import React from "react";
import NavLi from "./NavLi";
import { Container } from "@/components/layout";
import { MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";
import logo from "../../../assets/apple-logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 w-full bg-[#E7ECEE]">
      <Container>
        <div className="flex justify-between p-4">
          <img alt="logo" src={logo} className="w-6 h-6 cursor-pointer" />

          <ul className="md:flex items-center gap-7  hidden">
            <NavLi path="/" name="Product" />
            <NavLi path="/" name="Explore" />
            <NavLi path="/" name="Support" />
            <NavLi path="/" name="Business" />
          </ul>
          <div className="flex items-center gap-4 ">
            <MagnifyingGlassIcon className="w-9 transition-all duration-100 ease-linear h-6 text-gray-600 cursor-pointer hover:text-black" />
            <div className="relative">
            <Link to='/cart'>
             <ShoppingBagIcon className="w-9 h-6 transition-all duration-100 ease-linear text-gray-600 cursor-pointer hover:text-black" />
            </Link>
             <span className="absolute top-0 right-0 bg-red-600 w-[18px] h-[18px] leading-[18px] text-[0.75rem] rounded-full text-center font-bold text-white">5</span>
            </div>
            
            <UserIcon className="w-9 h-6 top-0 left-0 transition-all duration-100 ease-linear text-gray-600 cursor-pointer hover:text-black" />
          </div>
        </div>
      </Container>
    </header>
  );
};
