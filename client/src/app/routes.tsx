import { Routes as RoutesContainer, Route } from "react-router-dom";

import { Home } from "@/pages";

export const Routes = () => {
  return (
    <RoutesContainer>
      <Route path="/" element={<Home />} />
    </RoutesContainer>
  );
};
