import React from 'react';
import { AiOutlineLine } from "react-icons/ai";
import { FaPhoneAlt, FaRegPaperPlane, FaRegClock} from "react-icons/fa";

const Contact = () => {
  return (
    <div className='w-full bg-white py-10 px-4'>
        <p className='text-black text-lg font-bold py-3 flex gap-2'><AiOutlineLine size={30}/>GET IN TOUCH</p>
        <iframe className='w-full h-[350px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7251243872597!2d-84.27848038796847!3d34.05092147304552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f57564880b6c77%3A0x4134aa5022de0ac7!2s11100%20Atlantis%20Pl%2C%20Alpharetta%2C%20GA%2030022%2C%20USA!5e0!3m2!1sen!2spa!4v1697639891051!5m2!1sen!2spa" frameborder="0" allowfullscreen></iframe>
        <div className='max-w-[1240px] pt-8 mx-auto grid md:grid-cols-3 justify-items-center'>
            <div className='flex flex-col'>
                <h2 className='flex gap-12 text-lg font-bold'><FaRegClock color='#F7941D' size={30}/>Opening hours:</h2>
                <p className='px-20 pb-4'>Monday - Friday: 8 AM - 5 PM <br/>Saturday - Sunday: Closed</p>
            </div>
            <div className='flex flex-col'>
                <h2 className='flex gap-12 text-lg font-bold'><FaRegPaperPlane color='#F7941D' size={30}/>Send us a message:</h2>
                <p className='px-20 pb-4'>@email here</p>
            </div>
            <div className='flex flex-col'>
                <h2 className='flex gap-12 text-lg font-bold'><FaPhoneAlt color='#F7941D' size={30}/>Call us:</h2>
                <p className='px-20 pb-4'>phone here</p>
            </div>
        </div>
    </div>
  );
};

export default Contact;