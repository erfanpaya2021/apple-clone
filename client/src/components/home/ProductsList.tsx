import { FC, useState } from "react";

import { IProduct, TProductTab } from "@/types/Product";
import { IMAGES } from "@/utils/constants";

import { Container } from "@/components/layout";
import { ProductItem } from "./ProductItem";

interface IProps {}

const Products: IProduct[] = [
  { id: "1", title: "Mac", price: 1000, category: "MAC", image: IMAGES.iPhone },
  { id: "2", title: "Mac", price: 1000, category: "MAC", image: IMAGES.iPhone },
  { id: "3", title: "Mac", price: 1000, category: "MAC", image: IMAGES.iPhone },
  { id: "4", title: "Mac", price: 1000, category: "MAC", image: IMAGES.iPhone },
  { id: "5", title: "iPhone", price: 1000, category: "IPHONE", image: IMAGES.iPhone },
  { id: "6", title: "iPhone", price: 1000, category: "IPHONE", image: IMAGES.iPhone },
  { id: "7", title: "iPhone", price: 1000, category: "IPHONE", image: IMAGES.iPhone },
  { id: "8", title: "iPhone", price: 1000, category: "IPHONE", image: IMAGES.iPhone },
  { id: "10", title: "Apple Watch", price: 1000, category: "APPLE_WATCH", image: IMAGES.iPhone },
  { id: "11", title: "Apple Watch", price: 1000, category: "APPLE_WATCH", image: IMAGES.iPhone },
  { id: "12", title: "iPad", price: 1000, category: "IPAD", image: IMAGES.iPhone },
  { id: "13", title: "iPad", price: 1000, category: "IPAD", image: IMAGES.iPhone },
];

export const ProductsList: FC<IProps> = () => {
  const [selectedTab, setSelectedTab] = useState<TProductTab>("MAC");

  const filteredProducts = Products.filter((product) => product.category === selectedTab && product);

  const changeSelectedTabHandler = (tabValue: TProductTab) => {
    setSelectedTab(tabValue);
  };

  return (
    <section className="relative min-h-screen bg-black/90 text-white py-16">
      <Container>
        <div className="space-y-6">
          <h1 className="text-center text-3xl font-semibold tracking-wide md:text-5xl">New Promos</h1>
          {/* Categories */}
          <ul className="flex justify-center items-center ">
            <TabItem onClick={changeSelectedTabHandler} tabState={selectedTab} tabValue={"MAC"} label={"Mac"} />
            <TabItem onClick={changeSelectedTabHandler} tabState={selectedTab} tabValue={"IPHONE"} label={"iPhone"} />
            <TabItem
              onClick={changeSelectedTabHandler}
              tabState={selectedTab}
              tabValue={"APPLE_WATCH"}
              label={"Apple Watch"}
            />
            <TabItem onClick={changeSelectedTabHandler} tabState={selectedTab} tabValue={"IPAD"} label={"iPad"} />
          </ul>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center items-center gap-8">
            {filteredProducts.map((product) => (
              <ProductItem key={product.id} product={product} productId={product.id} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

interface ITabProps {
  onClick: (tabValue: TProductTab) => void;
  tabValue: TProductTab;
  tabState: TProductTab;
  label: string;
}

const TabItem: FC<ITabProps> = ({ onClick, tabValue, tabState, label }) => {
  const clickHandler = () => {
    onClick(tabValue);
  };

  return (
    <li>
      <button
        onClick={clickHandler}
        className={`py-3 px-5 text-sm font-light text-gray-500 md:text-base md:py-4 md:px-6 ${
          tabState === tabValue
            ? "borderGradient mt-[2px] bg-[#333] text-gray-200  rounded-t-lg"
            : "border-b-2 border-b-gray-500"
        }`}
      >
        {label}
      </button>
    </li>
  );
};
