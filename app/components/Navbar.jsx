"use client"
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import Image from 'next/image';
import { useState } from "react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (

        <div>
            {/* mobile Navbar */}
            <nav className='flex items-center justify-between cursor-pointer  w-[100vw] px-4 py-2 border-b-2 md:hidden'>
                {isOpen ? <IoClose className='text-2xl' onClick={toggleMenu} /> : <TiThMenu className='text-2xl' onClick={toggleMenu} />}
                <div>
                    <Image alt="logo" src="/images/Logo.png" width={100} height={60} />
                </div>
                <div className='flex space-x-4 items-center'>
                    <FaSearch className=' text-2xl' />
                    <FaShoppingCart className=' text-2xl cursor-pointer' />
                </div>

            </nav>
            {isOpen && <div className="md:hidden flex flex-col px-4 py-2 space-y-2  ">
                <button className="bg-white text-black px-4 py-2  hover:bg-zinc-300 border-[1px] border-black">
                    Log in
                </button>
                <button className="bg-zinc-800 text-white px-4 py-2  hover:bg-zinc-700">
                    Sign up
                </button>
            </div>}
            {/* desktop Nav bar */}
            <nav className="hidden md:flex items-center justify-between px-4 py-2 shadow-md ">
                <div className="flex items-center flex-grow space-x-6">
                    <Image src="/images/Logo.png" alt="Logo" width={120} height={70} />
                    <div className="relative flex flex-grow items-center ">
                        <input
                            type="text"
                            placeholder="Search for anything"
                            className="flex-grow border-[2px] rounded-full p-3 pl-12 border-black focus:outline-none text-black "
                        />
                        <FaSearch className="absolute left-3 text-2xl text-black  cursor-pointer " />
                    </div>
                </div>
                <div className="flex items-center space-x-4 ml-4">
                    <FaShoppingCart className=' text-2xl cursor-pointer' />
                    <button className="bg-white text-black px-4 py-2  hover:bg-zinc-300 border-[1px] border-black">
                        Log in
                    </button>
                    <button className="bg-zinc-800 text-white px-4 py-2  hover:bg-zinc-700">
                        Sign up
                    </button>
                </div>

            </nav>
        </div>
    );
}

export default Navbar;


