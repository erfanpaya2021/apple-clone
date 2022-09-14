import { FC } from "react";
import {Main} from "@/components/home";

import { ProductsList } from "@/components/home";

export const Home: FC = () => {
  return (
    <>
      <Main/>
      <ProductsList />
    </>
  );

};
