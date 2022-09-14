import { FC, MouseEvent, ButtonHTMLAttributes } from "react";

interface IProps {
  text: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<IProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="ease group relative z-30 box-border inline-flex w-auto undefined cursor-pointer items-center justify-center overflow-hidden rounded bg-indigo-600 bg-gradient-to-r from-pink-500 to-violet-500 px-8 py-3 font-bold text-white transition-all duration-300 focus:outline-none"
    >
      <span className="absolute bottom-0 right-0 -mb-8 -mr-5 h-20 w-8 translate-x-1 rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0"></span>
      <span className="absolute top-0 left-0 -mt-1 -ml-12 h-8 w-20 -translate-x-1 -rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0"></span>
      <span className="relative z-20 flex items-center font-semibold">{text ? text : "Buy Now"}</span>
    </button>
  );
};
