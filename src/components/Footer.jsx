import React from 'react';
import {FaFacebookSquare,FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-10 text-center text-gray-300'>
      <div>
        <p className='py-4'>&copy; 2023 Cal Estate Holdings. All rights reserved.</p>
        {/* <div className='flex justify-center gap-8 md:w-[100%]'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
        </div> */}
      </div>
    </div>
  );
};

export default Footer;