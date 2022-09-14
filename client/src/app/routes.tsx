import { Routes as RoutesContainer, Route } from "react-router-dom";

import { Home, ShopCart } from "@/pages";

export const Routes = () => {
  return (
    <RoutesContainer>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<ShopCart/>}/>
    </RoutesContainer>
  );
};
