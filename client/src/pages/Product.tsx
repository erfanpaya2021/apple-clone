import { FC } from "react";

import { Container } from "@/components/layout";

import { IMAGES } from "@/utils/constants";
import { Button } from "@/components/controls";

const product = {
  id: 1,
  title: "iPhone",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid odit consectetur magni ab ut, dignissimos a voluptatum voluptate culpa unde.",
  image: IMAGES.iPhone,
  price: 1000,
  category: "iPhone",
};

export const Product: FC = () => {
  return (
    <>
      {/* Product */}
      <main className="bg-[#E7ECEE] min-h-screen py-16 md:py-24">
        <Container>
          <div className="flex flex-col md:flex-row border-2 border-[#c1c1c1] py-4 px-8 md:p-8 ">
            {/* Product Image */}
            <div className=" max-w-sm mx-auto p-8">
              <img className="object-cover" src={product.image} alt={product.title} />
            </div>
            {/* Product Detail */}
            <div className=" space-y-4 flex flex-col items-start justify-center">
              <h2 className="text-2xl md:text-3xl font-bold">{product.title}</h2>
              <span className="text-base md:text-lg  text-[#929292]">Category: {product.category}</span>
              <p className="text-base md:text-lg">{product.description} </p>
              <span className="text-lg md:text-xl  font-bold">{product.price.toFixed(2)} $</span>
              <div className="flex items-center">
                <Button text="Buy Now" onClick={() => {}} />
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};
