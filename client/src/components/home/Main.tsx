import React from "react";
import { Container } from "@/components/layout";

import MainComponent from "./MainComponent";

export const Main = () => {
  return (
    <>
      <main className="relative bg-[#E7ECEE] h-[200vh]">
        <Container>
          <MainComponent />
        </Container>
      </main>
    </>
  );
};
