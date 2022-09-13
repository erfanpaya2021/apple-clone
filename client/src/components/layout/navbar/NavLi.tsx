import React, { FC } from "react";
import { Link } from 'react-router-dom';

interface IProps {
    name: string,
    path:string
  }

const NavLi:FC<IProps> = ({name , path}) => {
    return (
     <li>
        <Link className='text-gray-600 font-medium text-[17px] hover:text-black transition-all duration-100 ease-linear' to={path}>{name}</Link>
    </li>
    );
};

export default NavLi;