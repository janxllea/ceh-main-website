import React from 'react'

const Navbar = () => {
return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold'>Cal Estate Holdings</h1>
        <ul className='flex'>
            <li className='p-4'>HOME</li>
            <li className='p-4'>SERVICES</li>
            <li className='p-4'>CONTACT</li>
        </ul>
    </div>
)
}

export default Navbar