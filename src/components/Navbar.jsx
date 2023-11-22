import React, { useState } from 'react';
import { BiMenuAltRight,  BiX} from "react-icons/bi";
import Logo from "../assets/logo.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-[#231F20] sticky top-0 z-50 flex justify-between items-center h-20 w-full mx-auto px-20 text-white'>
      <img className='w-[230px] hidden md:flex' href="#home" src={Logo} alt="/" />
      <ul className='hidden md:flex'>
        <li className='p-4 hover:text-[#F7941D]'>Home</li>
        <li className='p-4 hover:text-[#F7941D]'><a href='./'>About</a></li>
        <li className='p-4 hover:text-[#F7941D]'><a href='../Projects'>Projects</a></li>
        <li className='p-4 hover:text-[#F7941D]'><a href='../services'>Services</a></li>
        <li className='p-4 hover:text-[#F7941D]'><a href=''>Contact</a></li>
      </ul>
      <div onClick={handleNav} className='flex-row-reverse md:hidden'>
          {nav ? <BiX size={20}/> : <BiMenuAltRight size={20}/>}
      </div>
      <ul className={nav ? 'fixed text-center right-0 top-20 w-[100%] h-[50%] border-r border-r-gray-900 bg-[#231F20] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        {/* <img className='w-[200px] p-2' src={Logo} alt="/" /> */}
          <li className='p-4 border-b border-gray-600 hover:text-[#F7941D]'>Home</li>
          <li className='p-4 border-b border-gray-600 hover:text-[#F7941D]'>About</li>
          <li className='p-4 border-b border-gray-600 hover:text-[#F7941D]'>Projects</li>
          <li className='p-4 border-b border-gray-600 hover:text-[#F7941D]'>Services</li>
          <li className='p-4 hover:text-[#F7941D]'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;