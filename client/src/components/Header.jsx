import React from 'react';
import PIC from "../assets/images/logos.png";
import ARROW from "../assets/images/arrow-down.png";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-white to-gray-100 py-4 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <img
              src={PIC}
              className="h-16 w-auto filter drop-shadow-md"
              alt="Aikarthya Logo"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <NavItem href="#" text="Education" />
            <NavItem href="#" text="Subscription" />
            <div className="relative group">
              <button 
                className="nav-item flex items-center"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Resources
                <img 
                  src={ARROW} 
                  className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" 
                  alt="Expand" 
                />
              </button>
              <div 
                className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                role="menu"
                aria-orientation="vertical"
              >
                <div className="py-1">
                  <DropdownItem href="#" text="Resource 1" />
                  <DropdownItem href="#" text="Resource 2" />
                  <DropdownItem href="#" text="Resource 3" />
                </div>
              </div>
            </div>
          </nav>
          <div className="flex items-center">
            <button 
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md"
            >
              Get App
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ href, text }) => (
  <a 
    href={href} 
    className="nav-item"
  >
    {text}
  </a>
);

const DropdownItem = ({ href, text }) => (
  <a 
    href={href} 
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200" 
    role="menuitem"
  >
    {text}
  </a>
);

export default Header;