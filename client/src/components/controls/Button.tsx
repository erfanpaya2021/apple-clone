import { FC, MouseEvent, ButtonHTMLAttributes } from "react";

interface IProps {
  text: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<IProps> = ({ text, onClick }) => {
  return (
    <button className="bg-gradient-to-r from-indigo-400 to-pink-400 text-white py-2 px-8 rounded-sm" onClick={onClick}>
      {text}
    </button>
  );
};
