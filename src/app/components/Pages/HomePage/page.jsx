'use client';
import WaveText from '@/app/Pages/BubbleText';
import React from 'react';

function MainPage() {
  return (
    <>
      {/* Header Section */}
      <div className='flex flex-col items-center justify-center w-full pt-4 bg-white'>
        <div className='cursor-pointer w-full h-[100px] sm:h-[150px] md:h-[250px] lg:h-[350px] xl:h-[350px] flex justify-center items-center'>
          <WaveText />
        </div>
      </div>
      
      {/* Content Section */}
      <div className='flex flex-col items-start justify-around p-4 mt-8 gap-11 md:flex-row'>
  {/* Left Section: Text and Button */}
  <div className='flex flex-col w-[100%] md:w-[50%] max-w-[600px]'>
    <h1 className='text-4xl md:text-6xl text-[#000000] font-bold mb-4'>
      Accelerate your app growth
    </h1>
    <p className='text-lg md:text-xl text-[#000000] mb-4'>
      All-in-one solution for all your app monetization and user acquisition needs so that you can concentrate on making awesome apps.
    </p>
    <button className="bg-[#6C63FF] text-white  px-4 py-2 md:px-6 md:py-3 font-bold rounded mb-4 w-[40%] md:w-[40%]">
      Get Started
    </button>
    {/* Smaller image under the text */}
    <img src="/header-image.png" alt="header-image" className="mb-4 w-96 md:w-96" />
  </div>

  {/* Right Section: Larger Image */}
  <div className='w-full md:w-[50%] max-w-[600px] flex justify-center'>
    <img src="/homepage.png" alt="homepage" className="w-96 md:w-96" />
  </div>
</div>



<div className='flex flex-col items-start justify-around p-4 mt-8 gap-11 md:flex-row'>
  {/* Left Section: Text and Button */}
  <div className='flex flex-col w-[100%] md:w-[50%] max-w-[600px]'>
    <h1 className='text-4xl md:text-6xl text-[#000000] font-bold mb-4'>
      Accelerate your app growth
    </h1>
    <p className='text-lg md:text-xl text-[#000000] mb-4'>
      All-in-one solution for all your app monetization and user acquisition needs so that you can concentrate on making awesome apps.
    </p>
    <button className="bg-[#6C63FF] text-white  px-4 py-2 md:px-6 md:py-3 font-bold rounded mb-4 w-[40%] md:w-[40%]">
      Get Started
    </button>
    {/* Smaller image under the text */}
    <img src="/header-image.png" alt="header-image" className="mb-4 w-96 md:w-96" />
  </div>

  {/* Right Section: Larger Image */}
  <div className='w-full md:w-[50%] max-w-[600px] flex justify-center'>
    <img src="/homepage.png" alt="homepage" className="w-96 md:w-96" />
  </div>
</div>

    </>
  );
}

export default MainPage;
