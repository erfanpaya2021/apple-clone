import { FC } from "react";
import { Link } from "react-router-dom";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Macbook from "../../assets/iphone.png";

import { IProduct } from "@/types/Product";

interface IProps {
  productId: string;
  product: IProduct;
}

export const ProductItem: FC<IProps> = ({ productId, product: { title, price } }) => {
  return (
    <div className="max-w-[22rem] md:max-w-full p-8 rounded-2xl bg-[#333] text-white space-y-4">
      {/* Product Image */}
      <div className="h-100 sm:py-4 sm:px-2">
        <img className="" src={Macbook} alt={title} />
      </div>
      {/* Product Detail */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl md:text-2xl">
            <Link to={`/products/${productId}`}>{title}</Link>
          </h2>
          <span className="text-xl md:text-2xl">{price.toFixed(2)} $</span>
        </div>
        <button className="bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] p-4 rounded-full">
          <ShoppingCartIcon className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};
