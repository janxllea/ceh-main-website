import React, { useState } from 'react';
import { BiMenuAltRight,  BiX} from "react-icons/bi";
import Logo from "../assets/logo.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <img className='w-[250px] ' src={Logo} alt="/" />
      <ul className='hidden md:flex'>
        <li className='p-4' href='#'>Home</li>
        <li className='p-4' href='#'>About</li>
        <li className='p-4' href='#'>Projects</li>
        <li className='p-4' href='#'>Services</li>
        <li className='p-4' href='#'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <BiX size={20}/> : <BiMenuAltRight size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <img className='w-[200px] p-2' src={Logo} alt="/" />
          <li className='p-4 border-b border-gray-600' href='#'>Home</li>
          <li className='p-4 border-b border-gray-600' href='#'>About</li>
          <li className='p-4 border-b border-gray-600' href='#'>Services</li>
          <li className='p-4' href='#'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;