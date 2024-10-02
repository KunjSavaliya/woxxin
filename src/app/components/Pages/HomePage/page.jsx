'use client';
import WaveText from '@/app/Pages/BubbleText';
import React from 'react';

function MainPage() {
  const images = [
    '/HomePages/Logo1.png',
    '/HomePages/Logo2.png',
    '/HomePages/Logo3.png',
    '/HomePages/Logo4.png',
    '/HomePages/Logo5.png',
    '/HomePages/Logo6.png',
    '/HomePages/Logo7.png',
    '/HomePages/Logo.png'

  ];
  const contentArray = [
    {
      imgSrc: "/ScreenImg/Screen1.png",
      title: "Recover Ad-blocked Revenue",
      description: "We help publishers recover the revenue they are losing due to ad  blockers. Our ads adhere to the highest UX standards as laid out by the Acceptable Ads standards.",
      learnMore: "Learn More",
    },
    {
      imgSrc: "/ScreenImg/Screen2.png",
      title: "Blazing Fast Ad Delivery",
      description: "We help publishers recover the revenue they are losing due to ad  blockers. Our ads adhere to the highest UX standards as laid out by the Acceptable Ads standards.",
      learnMore: "Learn More",
    },
    {
      imgSrc: "/ScreenImg/Screen3.png",
      title: "Drive Bid Competition",
      description: "Open up your ad inventory for bidding by multiple demand partners in  real-time. Our system auto-selects the optimal number of partners, so  that you get the best yield for every single impression.",
      learnMore: "Learn More",
    },
    {
      imgSrc: "/ScreenImg/Screen4.png",
      title: "Highly-viewable Formats",
      description: "Our visual ad manager allows point-and-click creation of new ad units and layouts, while our machine learning based layout optimizer  drives ad revenue growth using automated A/B testing.",
      learnMore: "Learn More",
    },
    {
      imgSrc: "/ScreenImg/Screen5.png",
      title: "Maximize eCPMs & Revenue",
      description: "Open up your ad inventory for bidding by multiple demand partners in  real-time. Our system auto-selects the optimal number of partners, so  that you get the best yield for every single impression.",
      learnMore: "Learn More",
    },
    {
      imgSrc: "/ScreenImg/Screen6.png",
      title: "Improve Clickthrough Rates",
      description: "Our visual ad manager allows point-and-click creation of new ad units and layouts, while our machine learning based layout optimizer  drives ad revenue growth using automated A/B testing.",
      learnMore: "Learn More",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full pt-4 bg-white">
        <div className="cursor-pointer w-full h-[100px] sm:h-[150px] md:h-[250px] lg:h-[250px] xl:h-[350px] hidden lg:flex justify-center items-center">
          <WaveText />
        </div>
      </div>


      <div className='flex flex-col items-start justify-around p-16 lg:mt-8 gap-11 md:flex-row  bg-[#F5F7FA]'>
        <div className='flex flex-col w-[100%] md:w-[50%] max-w-[600px]'>
          <h1 className='text-3xl md:text-5xl text-[#717171] font-bold mb-4'>
            Accelerate your app growth
          </h1>
          <p className='text-lg md:text-xl text-[#717171] mb-4'>
            All-in-one solution for all your app monetization and user acquisition needs so that you can concentrate on making awesome apps.
          </p>
          <button className="bg-[#6C63FF] text-white  px-4 py-2 md:px-6 md:py-3 font-bold rounded mb-4 w-[60%] md:w-[40%]">
            Get Started
          </button>
          <img src="/HeaderImage.png" alt="header-image" className="mb-4 w-96 md:w-96" />
        </div>

        <div className='w-full md:w-[50%] max-w-[600px] flex justify-center'>
          <img src="/homepage.png" alt="homepage" className="w-96 md:w-96" />
        </div>
      </div>
      <div className='mt-8 text-center'>
        <h1 className='text-xl md:text-4xl text-[#717171] font-bold mb-4'>Trusted by top publishers</h1>
        <p className='text-md md:text-xl text-[#717171]'>TRUSTED BY MORE THAN 300 PUBLISHERS ACROSS 50+ COUNTRIES</p>


      </div>

      <div className="flex flex-wrap justify-around mt-20 gap-11">
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`image-${index}`} className="w-16 md:w-16" />
          </div>
        ))}
      </div>

      <div className='mt-20 text-center'>
        <h1 className='text-xl md:text-5xl text-[#717171] font-bold mb-4 xl:ml-80 xl:mr-80'>
          Maximize yield from every single ad impression on your website using a single platform
        </h1>
      </div>

<div>

</div>
<div className='grid justify-around grid-cols-1 p-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7 md:px-8 lg:px-16 xl:px-24'>
      {contentArray.map((content, index) => (
        <div key={index} className='w-auto p-5 mx-auto text-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-2xl'>
          <img src={content.imgSrc} alt={content.title} className="w-16 mx-auto md:w-20 lg:w-24 xl:w-28" />
          <h1 className='text-xl  xl:text-2xl text-[#717171] font-bold mb-4 mt-6'>{content.title}</h1>
          <p className='text-md  xl:text-xl text-[#717171] mb-4'>{content.description}</p>
          <p className="text-blue-500 cursor-pointer">{content.learnMore}</p>
        </div>
      ))}
    </div>
    <div className='p-5 mt-8 text-center md:px-8 lg:px-16 xl:px-24'>
        <h1 className='text-xl md:text-4xl text-[#717171] font-bold mb-4'>Global Demand</h1>
        <p className='text-md md:text-xl text-[#717171] mt-4'>Put your inventory in front of the biggest gaming and brand advertisers.</p>
        <p className='text-md md:text-xl text-[#717171] mt-8'>Generate advertising revenue from global users with access the newest  technologies and features in the market. Monetize supports iOS, Android,
        Windows, and Amazon platforms, so you can maximize your earnings  potential.</p>



      </div>
    </>
  );
}

export default MainPage;
