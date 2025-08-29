'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile menu
  const [isOpen, setIsOpen] = useState(false); // desktop dropdown menu
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // mobile dropdown menu

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const menuItems = [
    { label: "Antibiotics", path: "/antibiotics" },
    { label: "Nutraceuticals", path: "/nutraceuticals" },
    { label: "Premixes", path: "/premixes" },
    { label: "Phytogenic", path: "/phytogenics" },
    { label: "Monoglycerides", path: "/monoglycerides" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  const handleMobileNavigation = (path: string) => {
    router.push(path);
    setIsMenuOpen(false); // Close mobile menu after navigation
    setIsMobileDropdownOpen(false); // Close dropdown as well
  };

  return (
    <header className="bg-[#95D5B2] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-19">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            <Image
              src="/logo.png"
              alt="Medi-Solutions Logo"
              width={180}
              height={40}
              className="cursor-pointer"
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="text-gray-700 hover:text-green-800 px-3 py-2 text-lg font-medium transition-colors duration-200 hover:scale-105 cursor-pointer transform origin-center flex items-baseline gap-1"
              >
                Medicines
                <svg
                  className={`w-3 h-3 transition-transform duration-200 mt-0.5 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute mt-1 w-48 bg-white shadow-lg rounded-md z-50">
                  {menuItems.map((item) => (
                    <div
                      key={item.path}
                      onClick={() => {
                        router.push(item.path);
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation('/ourteam')}
              className="text-gray-700 hover:text-green-800 px-3 py-2 text-lg font-medium transition-colors duration-200 hover:scale-105 cursor-pointer transform origin-center"
            >
              Our Team
            </button>
            <button
              onClick={() => handleNavigation('/aboutus')}
              className="text-gray-700 hover:text-green-800 px-3 py-2 text-lg font-medium transition-colors duration-200 hover:scale-105 cursor-pointer transform origin-center"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavigation('/contactus')}
              className="text-gray-700 hover:text-green-800 px-3 py-2 text-lg font-medium transition-colors duration-200 hover:scale-105 cursor-pointer transform origin-center"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2 relative z-50"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={toggleMenu}
            />
          )}

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-80 bg-[#95D5B2] shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col pt-16 px-6">
              {/* Mobile Medicines Dropdown */}
              <div>
                <button
                  onClick={toggleMobileDropdown}
                  className="text-gray-700 hover:text-green-800 px-3 py-4 text-lg font-medium transition-colors duration-200 hover:bg-gray-50 rounded-lg text-left flex items-center justify-between w-full"
                >
                  <span className="flex items-baseline gap-1">
                    Medicines
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 mt-0.5 ${
                        isMobileDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>

                {/* Mobile Dropdown Items */}
                {isMobileDropdownOpen && (
                  <div className="ml-6 mt-2 space-y-1">
                    {menuItems.map((item) => (
                      <button
                        key={item.path}
                        onClick={() => handleMobileNavigation(item.path)}
                        className="text-gray-600 hover:text-green-800 px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-gray-50 rounded-lg text-left w-full"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleMobileNavigation('/team')}
                className="text-gray-700 hover:text-green-800 px-3 py-4 text-lg font-medium transition-colors duration-200 hover:bg-gray-50 rounded-lg text-left"
              >
                Our Team
              </button>

              <button
                onClick={() => handleMobileNavigation('/aboutus')}
                className="text-gray-700 hover:text-green-800 px-3 py-4 text-lg font-medium transition-colors duration-200 hover:bg-gray-50 rounded-lg text-left"
              >
                About Us
              </button>

              <button
                onClick={() => handleMobileNavigation('/contactus')}
                className="text-gray-700 hover:text-green-800 px-3 py-4 text-lg font-medium transition-colors duration-200 hover:bg-gray-50 rounded-lg text-left"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;