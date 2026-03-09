import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Logo from '../assets/images/Logo2.svg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Portfolio",
    "Contact"
  ];

  return (
    <NextUINavbar 
      onMenuOpenChange={setIsMenuOpen} 
      maxWidth="full"
      className="bg-gray-950/70 backdrop-blur-md text-white fixed w-full z-50 h-24"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link to="Home" smooth duration={500} className="cursor-pointer">
            <img src={Logo} alt="logo" className="w-24 h-auto transition-filter duration-300 ease-in-out hover:filter brightness-150 hover:drop-shadow-lg" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8 font-montserrat" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link 
              to={item} 
              smooth 
              duration={500} 
              className="text-lg font-bold hover:text-[#f23f67] cursor-pointer transition-colors"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="bg-gradient-to-b from-gray-950/95 to-blue-950/95 pt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              to={item}
              smooth
              duration={500}
              className="w-full text-2xl font-bold font-montserrat hover:text-[#f23f67] cursor-pointer block mb-6 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
}
