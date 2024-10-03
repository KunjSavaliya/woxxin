'use client';
import WaveText from '@/app/Pages/BubbleText';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from "framer-motion";
import itemVariants from '@/app/Pages/Animation';
import Text from '../../../Reusable/Text';
import Button from '@/app/Reusable/Button';
import { contentArray, images } from '@/app/Pages/HomePage/Data';
import Advertisers from './Advertisers';
import Publishers from './Publishers';

function MainPage() {
  const [active, setActive] = useState('Advertisers');

  return (
    <>
  <div className="relative mb-20">
  <div>
    <img
      src="/HomePages/Home.png"
      alt="Main Background"
      className="w-full h-[600px] object-cover"
    />
  </div>

  <div className="absolute top-0 left-0 flex flex-col items-start justify-center w-full h-full p-4 text-left md:p-10">
    <div className="text-white">
      <Text size="text-4xl md:text-4xl lg:text-5xl xl:text-[50px] text-white text-start">
        Accelerate your app growth
      </Text>
      <Text size="text-xl md:text-2xl lg:text-3xl xl:text-[30px] text-white text-start">
      with a Unique Partner Care Approach

      </Text>
     
      <div className='flex flex-wrap justify-center gap-5 lg:justify-start'>
        <Button text="Learn More" className="mt-5 text-black bg-white hover:bg-[#373435] hover:text-white" />

<Button text="Learn More" className="mt-5 text-black bg-white hover:bg-[#373435] hover:text-white" />
      </div>
      

    </div>
  </div>
</div>



      <div className='lg:px-28 xl:px-32'>
        <div className='bg-[#efefef] pt-16 rounded-md'>
          <Text size={'text-xl md:text-4xl lg:text-5xl xl:text-[42px]'}>
            Who can <span className='text-[#6C63FF]'>benefit from Woxxin</span> ad network
          </Text>

          <div className='flex flex-col gap-32 pb-10 mt-10 lg:flex-row lg:px-28 xl:px-40 lg:pb-32 xl:pb-32'>
            <div className='flex flex-col items-center text-center lg:items-start lg:text-start'>
              <img
                src="/HomePages/advertisers1.svg"
                alt="Advertisers Icon"
                className="w-32 h-32"
              />
              <Text className={'text-3xl p-0 -mt-3'}>
                Advertisers
              </Text>
              <p className='font-normal text-[#333] mt-3 px-10 md:px-28 lg:px-0 '>
                Adsterra is a powerful online advertising network for brands, agencies, and media buyers. With over 20 targeting settings, you deliver ads to the best-matching audiences. Unlock high-quality CPM, CPC, and CPA traffic from 35K+ direct publishers.
              </p>
              <Button text="Learn More" className="mt-5 text-white bg-[#373435] hover:bg-[#6C63FF]" />
            </div>

            <div className='flex flex-col items-center text-center lg:items-start lg:text-start'>
              <img
                src="/HomePages/advertisers2.svg"
                alt="Advertisers Icon"
                className="w-32 h-32"
              />
              <Text className={'text-3xl p-0 -mt-3'}>
                Publishers
              </Text>
              <p className='font-normal text-[#333] mt-3 px-10 md:px-28 lg:px-0 '>
                With the highest-paying ad network, publishers can monetize sites, blogs or social media traffic. We provide solutions for earning without a website. AI algorithms are finetuned to send the most relevant CPM rates and ad feed.
              </p>
              <Button text="Learn More" className="mt-5 text-white bg-[#373435] hover:bg-[#6C63FF]" />
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full pt-4 bg-white">
        <div className="cursor-pointer w-full h-[100px]  lg:h-[250px] xl:h-[350px] hidden lg:flex justify-center items-center">
          <WaveText />
        </div>
      </div>
      <div >
        <Text size={'text-xl md:text-4xl lg:text-5xl xl:text-[42px]'}>
          We deliver <span className='text-[#6C63FF]'>high-converting ads </span>  and traffic
        </Text>
      </div>
      <div className='mt-20 font-bold lg:px-28 xl:px-40'>
        <div className="flex  rounded-[50px] ">
          <div
            onClick={() => setActive('Advertisers')}
            className={`flex-1 text-center p-2 cursor-pointer text-[#373435] rounded-[50px] ${active === 'Advertisers' ? 'bg-[#373435] text-white' : ''}`}
          >
            <p className='text-md md:text-xl '>Advertisers</p>
          </div>
          <div
            onClick={() => setActive('Publishers')}
            className={`flex-1 text-center p-2  text-[#373435] cursor-pointer rounded-[50px] ${active === 'Publishers' ? 'bg-[#373435] text-white' : ''}`}
          >
            <p className='text-md md:text-xl '>Publishers</p>
          </div>
        </div>

      </div>
      <div>
        {active === "Advertisers" ?
          <Advertisers />
          :
          <Publishers />
        }
      </div>
      <div className='mt-20 text-center'>
        <Text size={'text-xl md:text-4xl lg:text-5xl xl:text-[42px] xl:ml-80 xl:mr-80'}>
          Maximize yield from every <span className='text-[#6C63FF]'>single ad impression</span> on your website using a single platform
        </Text>
      </div>

      <div>

      </div>
      <motion.div className='grid justify-around grid-cols-1 p-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7 md:px-8 lg:px-28 xl:px-40'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // trigger animation when 20% of the block is in view
        variants={itemVariants}
      >
        {contentArray.map((content, index) => (
          <div key={index} className='w-auto p-5 mx-auto text-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-2xl'>
            <img src={content.imgSrc} alt={content.title} className="w-16 mx-auto md:w-20 lg:w-24 xl:w-28" />
            <h1 className='text-xl  xl:text-2xl text-[#717171] font-bold mb-4 mt-6'>{content.title}</h1>
            <p className='text-md  xl:text-xl text-[#717171] mb-4'>{content.description}</p>
            <div className='flex justify-center gap-1'>
              <p className="text-blue-500 cursor-pointer text-md ">{content.learnMore} </p>
              <FaArrowRight className="mt-1 ml-2 text-center text-blue-500" />
            </div>
          </div>
        ))}
      </motion.div>

    </>
  );
}

export default MainPage;
