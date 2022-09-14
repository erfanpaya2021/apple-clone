import { Routes as RoutesContainer, Route } from "react-router-dom";

import { Home, Product } from "@/pages";

export const Routes = () => {
  return (
    <RoutesContainer>
      <Route path="/" element={<Home />} />
      <Route path="/products/:productId" element={<Product />} />
    </RoutesContainer>
  );
};
