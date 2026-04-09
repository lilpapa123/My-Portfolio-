import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { styles } from "../styles";
// Import the logo directly (replace .svg with .png or .jpg if necessary)
import logo from "../assets/logo.svg"; 

const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" 
          className='w-9 h-9 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Khaled Elsaady &nbsp;
            <span className='sm:block hidden'>| Front-End Developer</span>
          </p> 

        </Link>
        </div>
    </nav>
  )
}

export default Navbar;
