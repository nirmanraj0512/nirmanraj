import React, { useState } from 'react';
import NavbarBtns from './NavbarBtns';
import NavbarLinks from './NavbarLinks';
import NavbarLogo from './NavbarLogo';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2'>
      <div className='flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange'>
        <NavbarLogo />

        {/* Mobile menu toggle */}
        <div className={`absolute top-[100%] left-0 w-full bg-black p-4 rounded-b-xl border-t border-orange lg:hidden transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
          <NavbarLinks />
        </div>

        {/* Desktop menu */}
        <div className='hidden lg:block'>
          <NavbarLinks />
        </div>

        <NavbarBtns />
      </div>

      {/* Hamburger icon only visible on small screens */}
      <div className='lg:hidden p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange flex'>
        <button
          className='text-2xl p-3 border border-orange rounded-full text-white'
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
