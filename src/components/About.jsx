import React from 'react';
import { AiOutlineLine } from "react-icons/ai";
import Asset1 from "../assets/about.jpg"

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[430px] mx-auto' src={Asset1} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-black text-lg font-bold py-3 flex gap-2'><AiOutlineLine size={30}/>WHO WE ARE </p>
          <p className='font-bold text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
          enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. <br/><br/></p>
          <p className='text-sm'>
          Duis aute irure dolor in reprehenderit in voluptate velit esse 
          cillum dolore eu fugiat nulla pariatur.<br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
          </p>
          {/* <button className='w-[200px] border-2 border-black my-6 mx-auto md:mx-0 py-2 hover:bg-black hover:text-white hover:border-black'>START VIRTUAL TOUR</button> */}
        </div>
      </div>
    </div>
  );
};

export default About;