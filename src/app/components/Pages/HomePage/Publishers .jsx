import Button from '@/app/Reusable/Button'
import Text from '@/app/Reusable/Text'
import VideoButton from '@/app/Reusable/VideoButton'
import React from 'react'

function Publishers() {
  return (
    <>
      <div className='flex flex-wrap gap-5 p-6 mt-20 lg:p-0 justify-evenly'>
        <div>
          <img src='/HomePages/converting4.png' className='w-auto h-[250px] sm:h-[300px] md:h-[300px] lg:h-[350px] xl:h-[400px]' alt='hello'></img>
        </div>
        <div>
          <Text size={'text-xl md:text-4xl lg:text-5xl xl:text-[42px] text-start'}>
            Popunder
          </Text>
          <div className=' flex flex-col gap-4 font-normal text-[#333] mt-3  '>
            <p className='text-xl'>
              Ads open in a new tab after users click anywhere on a website.
            </p>
            <p className='text-lg'>
              • Popunders deliver ad offers directly to high-intent audiences.
            </p>
            <p className='text-lg'>
              • Adsterra serves 11.9B monthly pop impressions.
            </p>
            <p className='text-lg'>
              • Popunders deliver ad offers directly to high-intent audiences.
            </p>
          </div>
          <div className='flex flex-wrap justify-center gap-3 lg:justify-start mt-7'>
          <Button text="Learn More" className="mt-5 text-white bg-[#373435] hover:bg-[#6C63FF]" />
            <VideoButton text="Learn More" className="mt-5 text-white bg-[#373435]" />
          </div>
        </div>
      </div>
      <div className='flex flex-wrap gap-5 p-6 mt-20 lg:p-0 justify-evenly'>

        <div>
          <Text size={'text-xl md:text-4xl lg:text-5xl xl:text-[42px] text-start'}>
          Social Bar
          </Text>
          <div className=' flex flex-col gap-4 font-normal text-[#333] mt-3  '>
            <p className='text-xl'>
            UX-friendly ad formats that run on all OS and in all browsers
            </p>
            <p className='text-lg'>
              • Browser-friendly, non-intrusive ads with 9.9B monthly impressions. 
            </p>
            <p className='text-lg'>
              • Out-of-the-box template creatives with 30X higher CTRs compared to web push.
            </p>
            <p className='text-lg'>
              • Available with CPM, CPC, and CPA.
            </p>
          </div>
          <div className='flex flex-wrap justify-center gap-3 lg:justify-start mt-7'>
          <Button text="Learn More" className="mt-5 text-white bg-[#373435] hover:bg-[#6C63FF]" />
            <VideoButton text="Learn More" className="mt-5 text-white bg-[#373435]" />
          </div>
        </div>
        <div>
          <img src='/HomePages/converting5.png' className='w-auto h-[250px] sm:h-[300px] md:h-[300px] lg:h-[350px] xl:h-[400px]' alt='hello'></img>
        </div>
      </div>

      <div className='flex flex-wrap gap-5 p-6 mt-10 lg:p-0 justify-evenly'>
        <div>
          <img src='/HomePages/converting6.png' className='w-auto h-[250px] sm:h-[300px] md:h-[300px] lg:h-[350px] xl:h-[400px]' alt='hello'></img>
        </div>
        <div>
          <Text size={'text-xl md:text-4xl lg:text-5xl xl:text-[42px] text-start'}>
          In-Page Push
          </Text>
          <div className=' flex flex-col gap-4 font-normal text-[#333] mt-3  '>
            <p className='text-xl'>
            Users receive notifications right in their desktop or mobile browsers
            </p>
            <p className='text-lg'>
              • The most advanced replacement to classic push traffic.
            </p>
            <p className='text-lg'>
              • In-Page Push ads don't require opt-ins, running on all OS and in all browsers.
            </p>
            <p className='text-lg'>
              • In-Page Push ads don't require opt-ins, running on all OS and in all browsers.
            </p>
          </div>
          <div className='flex flex-wrap justify-center gap-3 lg:justify-start mt-7'>
          <Button text="Learn More" className="mt-5 text-white bg-[#373435] hover:bg-[#6C63FF]" />
            <VideoButton text="Learn More" className="mt-5 text-white bg-[#373435]" />
          </div>
        </div>
      </div>
      <div className='flex flex-wrap gap-5 p-6 mt-10 lg:p-0 justify-evenly'>

        <div>
          <Text size={'text-xl md:text-4xl lg:text-5xl xl:text-[42px] text-start'}>
          Interstitials
          </Text>
          <div className=' flex flex-col gap-4 font-normal text-[#333] mt-3  '>
            <p className='text-xl'>
            Full-screen ads appear on top of the website content
            </p>
            <p className='text-lg'>
              • Full-screen ads appear on top of the website content
            </p>
            <p className='text-lg'>
              • Effective templates fine-tuned to fit your vertical and offer
            </p>
            <p className='text-lg'>
              • Interstitial traffic is available with CPM and CPA pricing
            </p>
          </div>
          <div className='flex flex-wrap justify-center gap-3 lg:justify-start mt-7'>
          <Button text="Learn More" className="mt-5 text-white bg-[#373435] hover:bg-[#6C63FF]" />
            <VideoButton text="Learn More" className="mt-5 text-white bg-[#373435]" />
          </div>
        </div>
        <div>
          <img src='/HomePages/converting.png' className='w-auto h-[250px] sm:h-[300px] md:h-[300px] lg:h-[350px] xl:h-[400px]' alt='hello'></img>
        </div>
      </div>





    </>
  )
}

export default Publishers 