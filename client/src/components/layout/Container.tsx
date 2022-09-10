import React, { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const Container: FC<IProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};
