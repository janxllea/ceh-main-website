import React from "react";
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div className='w-full h-screen mx-auto text-center flex flex-col justify-center hero-bg bg-cover'>
            <h1 className='text-white md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Find your home.</h1>
        <div className='flex justify-center items-center'>
          <p className='text-white md:text-5xl sm:text-4xl text-xl font-bold py-4'>We </p>
          <Typed
          className='text-[#F7941D] md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['design', 'build', 'sell']}
            typeSpeed={80}
            backSpeed={80}
            loop
          />
        </div>
        </div>
    );
};
export default Hero;