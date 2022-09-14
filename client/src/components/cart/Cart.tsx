import React from "react";

import laptop from '../../assets/mackbook.png'


import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/outline";


const Cart = () => {
 

  return (
    <div className="flex container xs:flex-col xs:gap-3 flex-row justify-between items-center p-[15px] bg-white shadow rounded-md mb-[20px]">
      <img className="w-[80px]" src={laptop} alt="product" />
      <div className="text-left">
        <h3 className="text-[#1a73e8] mb-[10px]">apple</h3>
        <p className="text-[#34a853] text-center font-bold">2177 $</p>
      </div>
      <div className="flex flex-wrap items-center">
        <button
          className={`p-[5px] hover:bg-[#0b499b] text-[1.6rem]  text-center font-bold  leading-[30px] transition-colors ease-in duration-100 bg-[#1a73e8]
          text-white rounded-[4px] cursor-pointer ml-[5px] shadow`}
         
        >
          <MinusIcon className="w-5 h-5" />
        </button>

        <span className="bg-[#FFA500FF] text-white inherit px-1 py-.5 ml-1  rounded text-center leading-[25px]">
          12
        </span>

        <button
          className="p-[5px] hover:bg-[#0b499b] text-[1.6rem]  text-center font-bold  leading-[30px] transition-colors ease-in duration-100 bg-[#1a73e8]
                text-white rounded-[4px] cursor-pointer ml-[5px] shadow"

        >
          <PlusIcon className="w-5 h-5" />
        </button>
      </div>

      <div>
        <button
          className="p-[5px] hover:bg-red-700 text-[1.6rem] font-bold leading-[30px] transition-all duration-100 ease-in
                         bg-red-600  text-white rounded-[4px] cursor-pointer ml-[5px] shadow"
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Cart;