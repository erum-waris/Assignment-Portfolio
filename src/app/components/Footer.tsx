
import Link from "next/link";
import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-gray-500 text-white p-2  text-center text-xl relative bottom-0 w-full h-30 border-0 ">
     <div> <p className="mb-3">&copy; 2024 ERUM WARIS All rights reserved</p> 
     </div>  
     <ul className='flex sm:flex gap-1 md:gap-5 justify-center items-center '>
   <li><Link href="/">Home</Link></li> &nbsp;|
        <li><Link href="#Projects">Projects</Link></li> &nbsp;|
        <li><Link href="#about">About</Link></li> &nbsp;|
        <li><Link href="#contact">Contact</Link></li> &nbsp;|
        <li><Link href="#skills">Skills</Link></li>
   </ul>
     
    </footer>
  );
};

export default Footer;

{/* <ul className='flex gap-5'>
   <li><Link href="/">Home</Link></li> &nbsp;|
        <li><Link href="/projects">Projects</Link></li> &nbsp;|
        <li><Link href="/about">About</Link></li> &nbsp;|
        <li><Link href="/contact">Contact</Link></li> &nbsp;|
        <li><Link href="/skills">Skills</Link></li>
   </ul> */}