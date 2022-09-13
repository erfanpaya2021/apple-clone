import React from "react";
import { Container } from "@/components/layout";
import { Navbar } from "../layout/navbar/Navbar";
import MainComponent from "./MainComponent";

export const Main = () => {
  return (
    <>
      <Navbar />
      <main className="relative bg-[#E7ECEE]  h-[200vh]">
        <Container>
          <MainComponent />
        </Container>
      </main>
    </>
  );
};
