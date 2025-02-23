"use client";


import React, { useState } from "react";
import Image from 'next/image'
import { AiOutlineMenuFold } from "react-icons/ai";
import { MdRestaurantMenu } from "react-icons/md";
import NavLink from './NavLink';
import  Button  from './Button';

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => {
        setOpen(!open);
         console.log("menu toggled");
       };
  return (
    <div className="font-serif grid grid-cols-2 justify-items-center items-center md:grid-cols-3">
      <div className="">
      <Image 
          src='/techathon.svg'
          alt='TECHATHON'  
          width={220}
          height={60}
          priority
            />
      </div>
    
    <div className="text-2xl text-[#663BC4] col-start-3 col-end-4 lg:hidden md:col-start-1 md:col-end-2 md:row-start-1 place-items-end grid-flow-row" onClick={toggleMenu}>
    {!open ? <AiOutlineMenuFold /> : <MdRestaurantMenu />}
    </div>

     <div className={`place-items-center justify-items-center font-light space-y-4 ${!open ? 'hidden' : 'block col-start-2 md:col-start-1'} lg:flex lg:flex-row lg:space-x-32 `}>
      <NavLink href="/" label="Home"/>
      <NavLink href="/aboutus" label="About Us"/>
      <NavLink href="/tracks" label="Tracks"/>
    </div>


    <div className={`flex flex-col space-y-4 mt-10 font-thin ${!open ? 'hidden' : 'block col-start-2 '} lg:flex lg:flex-row lg:space-x-12 md:block md:col-start-3 md:row-start-1 md:mt-0 lg:mt-0`}>
      <Button className="bg-[#481DA6] text-gray-200 w-32 h-8 lg:mt-4 rounded-sm" label="GET STARTED"/>
      <Button className="bg-gray-100 text-[#481DA6] w-32 h-8 block md:hidden lg:block rounded-sm" label="SIGN IN"/>
    </div>
    </div>
  )
}

export default Navbar