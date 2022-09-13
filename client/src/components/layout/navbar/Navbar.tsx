import React from "react";
import NavLi from "./NavLi";
import { Container } from "@/components/layout";
import { MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";
import logo from "../../../assets/apple-logo.png";

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
            <MagnifyingGlassIcon className="w-6 transition-all duration-100 ease-linear h-6 text-gray-600 cursor-pointer hover:text-black" />
            <ShoppingBagIcon className="w-6 transition-all duration-100 ease-linear h-6 text-gray-600 cursor-pointer hover:text-black" />
            <UserIcon className="w-6 h-6 transition-all duration-100 ease-linear text-gray-600 cursor-pointer hover:text-black" />
          </div>
        </div>
      </Container>
    </header>
  );
};
