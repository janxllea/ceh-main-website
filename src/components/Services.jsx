import React from 'react';
import { FaBuilding, FaCouch, FaHome, FaTools, FaLightbulb, FaPen} from "react-icons/fa";
import { AiOutlineLine } from "react-icons/ai";

const Services = () => {
    return (
        <div className="w-full bg-[#231F20] mx-auto h-100hv">
            <h2 className='text-white text-lg py-5 px-3 flex gap-2'><AiOutlineLine size={30}/>WHAT WE HAVE TO OFFER</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="px-12 py-10">
                    <div className="flex gap-5 md:w-[75%] my-3">
                        <FaBuilding size={25} color='white' /><h4 className="font-medium text-white text-lg mb-4">ARCHITECTURE</h4>
                    </div>
                        
                        <p className="font-normal text-[#747474] text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>

                <div className="px-12 py-10">
                    <div className="flex gap-5 md:w-[75%] my-3">
                        <FaCouch size={25} color='white' /><h4 className="font-medium text-white text-lg mb-4">INTERIOR DESIGN</h4> 
                    </div>
                        <p className="font-normal text-[#747474] text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>

                <div className="px-12 py-10">
                    <div className="flex gap-5 md:w-[75%] my-3">
                        <FaHome size={25} color='white' /><h4 className="font-medium text-white text-lg mb-4">REAL ESTATE</h4>
                    </div>
                        <p className="font-normal text-[#747474] text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div className="px-12 py-10">
                    <div className="flex gap-5 md:w-[75%] my-3">
                        <FaPen size={25} color='white' /><h4 className="font-medium text-white text-lg mb-4">PLANNING</h4>
                    </div>
                        <p className="font-normal text-[#747474] text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>

                <div className="px-12 py-10">
                    <div className="flex gap-5 md:w-[75%] my-3">
                        <FaTools size={25} color='white' /><h4 className="font-medium text-white text-lg mb-4">BUILDING RENOVATION</h4>  
                    </div>
                        <p className="font-normal text-[#747474] text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>

                <div className="px-12 py-10">
                    <div className="flex gap-5 md:w-[75%] my-3">
                        <FaLightbulb size={25} color='white' /><h4 className="font-medium text-white text-lg mb-4">CONCEPT DESIGN</h4>
                    </div>
                        <p className="font-normal text-[#747474] text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
             </div>
        </div> 
    );
};

export default Services;