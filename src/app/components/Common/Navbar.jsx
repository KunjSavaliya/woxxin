'use client';
import React, { useState, useEffect, useRef } from 'react';
import { HiMenu, HiX, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import 'animate.css';
import { useRouter } from 'next/navigation';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const router = useRouter();

  const dropdownRef = useRef(null);
  const handleNavigation = (path) => {
    router.push(path);
  }

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    if (isDropdownOpen || isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isDropdownOpen, isOpen]);
  useEffect(() => {
    const savedIsOpen = localStorage.getItem('isOpen') === 'true';
    setIsOpen(savedIsOpen);
  }, []);
  useEffect(() => {
    localStorage.setItem('isOpen', isOpen);
  }, [isOpen]);
  const dropdownItems = [
    { title: "Benefits for Advertisers", subtitle: "Why choose Adsterra" , navigate :'/components/Pages/Advertisers/Benefits'},
    { title: "Pricing Models", subtitle: "CPA, CPC, CPM and more" },
    { title: "RTB traffic for advertisers", subtitle: "How to buy traffic via RTB" },
    { title: "Smart CPM", subtitle: "Automate your CPM bidding strategy" },
    { title: "CPA Goal", subtitle: "Optimize CPM/CPC traffic for conversions" },
  ];
  return (
    <div
      className={`${isScrolled
          ? 'fixed top-0 left-0 w-full z-50 bg-white shadow-lg animate__animated animate__fadeInDown'
          : 'relative'
        } transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between p-3 text-black lg:justify-around">
        <div>
          <img src="/logo.png" alt="logo" className="cursor-pointer w-28" onClick={() => router.push('/')}/>
        </div>
        <div className="items-center hidden font-bold cursor-pointer lg:flex">
          <div className="flex gap-8 text-xl font-light">
            <div className="relative" ref={dropdownRef}>
              <p
                className="flex items-center cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Advertisers
                {isDropdownOpen ? <HiChevronUp className="ml-1" /> : <HiChevronDown className="ml-1" />}
              </p>
              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 bg-white border border-[#6C63FF] shadow-xl rounded-2xl p-6 w-72">
                  {dropdownItems.map((item, index) => (
                    <div key={index}>
                      <div className="flex flex-col cursor-pointer hover:text-blue-500" onClick={() => {
                        setSelectedItem(item);
                        setIsDropdownOpen(false);
                        handleNavigation(item.navigate)
                      }}>
                        <p className="text-lg">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.subtitle}</p>
                      </div>
                      {index < dropdownItems.length - 1 && <hr className="my-2" />}
                    </div>
                  ))}
                </div>
              )}
            </div>
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
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
        {isOpen && (
          <div
            className=" overflow-scroll fixed top-0 left-0 z-50 w-full h-[100vh] p-3 bg-white shadow-lg lg:w-1/2 animate__animated animate__fadeInDown"
          >
            <div className="flex items-center justify-between mb-5">
              <img src="/logo.png" alt="logo" className="w-28"  onClick={() => router.push('/')}/>
              <button onClick={() => setIsOpen(false)}>
                <HiX size={30} />
              </button>
            </div>
            <div className="mb-5">
              <p
                className="flex items-center justify-between block text-xl font-semibold cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Advertisers
                {isDropdownOpen ? <HiChevronUp className="inline ml-1" /> : <HiChevronDown className="inline ml-1" />}
              </p>
              {isDropdownOpen && (
                <div className="mt-2">
                  {dropdownItems.map((item, index) => (
                    <div key={index}>
                      <div className="cursor-pointer hover:text-blue-500" onClick={() => {
                        setSelectedItem(item);
                        // setIsDropdownOpen(false);
                        handleNavigation(item.navigate)
                      }}>
                        <p className="text-md">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.subtitle}</p>
                      </div>
                      {index < dropdownItems.length - 1 && <hr className="my-2" />}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-xl font-semibold">News & Events</p>
              <p className="text-xl font-semibold">Careers</p>
              <p className="text-xl font-semibold">Product</p>
              <p className="text-xl font-semibold">Resources</p>
              <p className="text-xl font-semibold">Contact Us</p>

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
