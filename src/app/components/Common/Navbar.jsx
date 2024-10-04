'use client';
import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import 'animate.css'; // Import animate.css

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isScrolled
          ? 'fixed top-0 left-0 w-full z-50 bg-white shadow-lg animate__animated animate__fadeInDown'
          : 'relative'
      } transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between p-3 text-black lg:justify-around">
        {/* Logo */}
        <div>
          <img src="/logo.png" alt="logo" className="w-28" />
        </div>

        {/* Links (Hidden on Mobile) */}
        <div className="items-center hidden font-bold cursor-pointer lg:flex">
          <div className="flex gap-8 text-xl font-light">
            <p>About us</p>
            <p>News & Events</p>
            <p>Careers</p>
            <p>Product</p>
            <p>Resources</p>
            <p>Contact Us</p>
          </div>
        </div>

        <div className="hidden gap-5 lg:flex">
          <button className="bg-[#6C63FF] text-white px-4 py-2 font-bold rounded">
            Login
          </button>
          <button className="bg-[#6C63FF] text-white px-4 py-2 font-bold rounded">
            Sign up
          </button>
        </div>

        {/* Hamburger Menu for Mobile View */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>

        {/* Sidebar for Mobile */}
        {isOpen && (
          <div
            className="fixed top-0 left-0 z-50 w-full p-3 bg-white shadow-lg lg:w-1/2 animate__animated animate__fadeInDown"
          >
            {/* Sidebar Header: Logo + Close Icon */}
            <div className="flex items-center justify-between mb-5">
              <img src="/logo.png" alt="logo" className="w-28" />
              <button onClick={() => setIsOpen(false)}>
                <HiX size={30} />
              </button>
            </div>

            {/* Sidebar Links */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3 cursor-pointer">
                <p className="text-xl font-semibold">About us</p>
                <p className="text-xl font-semibold">News & Events</p>
                <p className="text-xl font-semibold">Careers</p>
                <p className="text-xl font-semibold">Product</p>
                <p className="text-xl font-semibold">Resources</p>
                <p className="text-xl font-semibold">Contact Us</p>
              </div>

              {/* Buttons */}
              <button className="bg-[#6C63FF] text-white px-4 py-2 font-bold rounded">
                Login
              </button>
              <button className="bg-[#6C63FF] text-white px-4 py-2 font-bold rounded">
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
