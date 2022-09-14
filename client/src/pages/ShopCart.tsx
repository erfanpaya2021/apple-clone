import React from "react";


//components
import Cart from "../components/cart/Cart";


export const ShopCart = () => {

  return (
    <section className="bg-[#f7f7f7] w-screen">
      <div className="flex container flex-col-reverse items-start px-2 lg:flex-row lg:justify-between  mt-[150px] mb-[50px] transition-all ease-in duration-200">
        <div className="lg:w-[70%] w-full">
            <Cart  />
            <Cart  />
            <Cart  />
            <Cart  />
        </div>

          <div className="lg:w-[27%] w-full mb-[20px] lg:mb-0  bg-white shadow text-left rounded-[5px]">
            <p className="text-[#3D3D3DFF] mt-[20px] mb-[10px] mx-[20px]">
              <span className=" text-[#1a73e8] font-bold">Total Items : </span>
            </p>
            <p className="text-[#3D3D3DFF] mt-[20px] mb-[10px] mx-[20px]">
              <span className=" text-[#1a73e8] font-bold">
                Total Payment :
              </span>
            </p>
            <div className="flex justify-between items-baseline mt-[50px] mx-[20px] mb-[10px]">
              <button
                className="cursor-pointer text-red-600 bg-none text-[1rem] hover:text-red-700 transition-all ease-in duration-200"
              >
                Clear
              </button>

              <button
                className="inline-block bg-green-600 px-4 transition-all duration-150 ease-linear py-[7px] text-white font-bold rounded-[5px] mb-[20px] hover:bg-green-700 shadow cursor-pointer "
              >
                Check out
              </button>
            </div>
          </div>

      </div>
    </section>
  );
};

