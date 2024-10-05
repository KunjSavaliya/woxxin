'use client'
import Button from '@/app/Reusable/Button'
import Text from '@/app/Reusable/Text'
import VideoButton from '@/app/Reusable/VideoButton'
import React from 'react'

function page() {
  return (
    <div className='mt-3 md:mt-10 md:px-10 lg:px-12 xl:px-12'>
  <div className='flex flex-wrap gap-5 p-3 justify-evenly'>
    <div className='flex flex-col items-center md:items-center md:justify-center lg:items-start lg:justify-start'> 
      <Text 
        size={'text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[45px] text-[#6C63FF] mt-10'} 
        className="max-w-md text-center md:max-w-lg lg:max-w-2xl xl:max-w-3xl md:text-center lg:text-left"
      >
        Woxxin for Advertisers
      </Text>
      <Text 
        size={'text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[45px] text-[#373435] mt-10'} 
        className="max-w-md font-normal text-center md:max-w-2xl lg:max-w-2xl xl:max-w-3xl md:text-center lg:text-left"
      >
        Experience a Superlative Output of Your Marketing
      </Text>
      <Text 
        size={'text-xl xl:text-[25px] text-[#373435] mt-10'} 
        className="max-w-md font-normal text-center md:max-w-2xl lg:max-w-2xl xl:max-w-3xl md:text-center lg:text-left"
      >
        A game-changing advertising network provides media buyers and affiliates with exclusive traffic sources, connecting offers with highly engaged audiences.
      </Text>

      <div className=' mt-7'> 
        <Button text="BUY TOP TRAFFIC" className="mt-5 text-white bg-[#6C63FF] hover:bg-[#373435]" />
      </div>
    </div>
    <div>
      <img src='/Advertisers/Advertisers1.png' className='w-[50vh] h-full' alt='Popunder' />
    </div>
  </div>
  <div className='p-3'>
        <div className='bg-[#efefef] pt-16 pb-16 rounded-2xl'>
          <Text size={'text-xl md:text-4xl lg:text-5xl xl:text-[42px] p-4'}>
          Who benefits from  <span className='text-[#6C63FF]'>Woxxin</span> advertising solutions
          </Text>

          <div className='flex flex-wrap justify-center gap-5 px-4 mt-20 md:px-16 md:justify-evenly'>
  <div className='border border-[#6C63FF] rounded-xl p-4 flex-basis-full max-w-full md:flex-basis-[calc(50%-20px)] md:max-w-[calc(50%-20px)] '>
    <div className='flex flex-col gap-4'>
      <img src='/Advertisers/security-pass.png' className='w-10 h-10' alt='icon' />
      <Text size={'text-2xl sm:text-4xl lg:text-[30px] text-[#6C63FF] text-start'}>
        Advertisers
      </Text>
      <Text size={'text-md lg:text-[20px] text-[#373435] text-start'}>
        Unlock fresh, purchase-ready audiences you wouldn’t find on mainstream networks.
        Discover new markets to expand your brand presence. Get insights into the best
        local and global ad strategies from Woxxin expert managers.
      </Text>
    </div>
  </div>

  <div className='border border-[#6C63FF] rounded-xl p-4 flex-basis-full max-w-full md:flex-basis-[calc(50%-20px)] md:max-w-[calc(50%-20px)]'>
    <div className='flex flex-col gap-4'>
      <img src='/Advertisers/security-pass.png' className='w-10 h-10' alt='icon' />
      <Text size={'text-2xl sm:text-4xl lg:text-[30px] text-[#6C63FF] text-start'}>
      Agencies
      </Text>
      <Text size={'text-md lg:text-[20px] text-[#373435] text-start'}>
      Shake off the stress of meeting KPIs. Drive high-volume traffic with  predictable, quality conversions and leads. Scale and optimize  ad campaigns flawlessly in the most cost-effective way. Apply  ad automation tools to spend less on traffic while reducing time spent  on campaign management.
      </Text>
    </div>
  </div>
</div>

<div className='flex flex-wrap justify-center gap-5 px-4 mt-10 md:px-16 md:justify-evenly'>
  <div className='border border-[#6C63FF] rounded-xl p-4 flex-basis-full max-w-full md:flex-basis-[calc(50%-20px)] md:max-w-[calc(50%-20px)]'>
    <div className='flex flex-col gap-4'>
      <img src='/Advertisers/security-pass.png' className='w-10 h-10' alt='icon' />
      <Text size={'text-2xl sm:text-4xl lg:text-[30px] text-[#6C63FF] text-start'}>
      Affiliate teams
      </Text>
      <Text size={'text-md lg:text-[20px] text-[#373435] text-start'}>
      Add a battle-tested, powerful traffic source to your arsenal. Stay  profitable by acquiring top-quality conversions and increasing your  revenues. If you are a solo affiliate, start with the Offers Wishlist,  where we list examples of trending, high-paying offers.
      </Text>
    </div>
  </div>

  <div className='border border-[#6C63FF] rounded-xl p-4 flex-basis-full max-w-full md:flex-basis-[calc(50%-20px)] md:max-w-[calc(50%-20px)]'>
    <div className='flex flex-col gap-4'>
      <img src='/Advertisers/security-pass.png' className='w-10 h-10' alt='icon' />
      <Text size={'text-2xl sm:text-4xl lg:text-[30px] text-[#6C63FF] text-start'}>
      DSPs and SSPs
      </Text>
      <Text size={'text-md lg:text-[20px] text-[#373435] text-start'}>
      Advance your media-buying toolkit by using Adsterra Premium Traffic  Reselling solutions. Integrate with us as an SSP or DSP partner and  profit from high-intent audiences and A-class ad feed with no remnant  impressions allowed.
      </Text>
      <div className='flex flex-wrap justify-center gap-0 lg:gap-3 lg:justify-start'>
                <Button text="For DSP platforms" iconColor="#373435 hover:white"   className="mt-5 text-black bg-white hover:bg-[#6C63FF] hover:text-white" />
                <Button text="For SSP platforms" iconColor="#373435 hover:white" className="mt-5 text-black bg-white hover:bg-[#6C63FF] hover:text-white" />
              </div>
    </div>
  </div>
</div>




        </div>
      </div>
</div>

  
  
  )
}

export default page
