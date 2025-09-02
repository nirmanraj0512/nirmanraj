import React from 'react';
import { FiArrowDownRight } from "react-icons/fi";

const NavbarBtns = () => {
  // The external link for the button
  const resumeLink = "https://drive.google.com/file/d/1lkMLnvoI1mC4EsLEtfgrF7lHK_fiG6nx/view?usp=sharing";

  return (
    <a 
      href={resumeLink}
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer" // Recommended for security reasons with target="_blank"
      className='px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover-cyan-shadow'
    >
      HireMe
      <FiArrowDownRight/>
    </a>
  );
};

export default NavbarBtns;