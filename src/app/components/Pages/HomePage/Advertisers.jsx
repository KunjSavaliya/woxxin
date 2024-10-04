import React, { useEffect, useRef } from 'react';
import Button from '@/app/Reusable/Button';
import Text from '@/app/Reusable/Text';
import VideoButton from '@/app/Reusable/VideoButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Advertisers() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div
        ref={(el) => (sectionsRef.current[0] = el)}
        className="flex flex-wrap gap-5 p-6 mt-20 lg:p-0 justify-evenly"
      >
        <div>
          <img
            src="/HomePages/converting4.png"
            className="w-auto h-[250px] sm:h-[300px] md:h-[300px] lg:h-[350px] xl:h-[400px]"
            alt="hello"
          />
        </div>
        <div>
          <Text size={'text-xl md:text-4xl lg:text-5xl xl:text-[42px] text-start'}>
            Popunder
          </Text>
          <div className="flex flex-col gap-4 font-normal text-[#333] mt-3">
            <p className="text-xl">
              Non-intrusive formats with great viewability, Popunders remain among the
              highest-paying ads.
            </p>
            <p className="text-lg">
              • A full-page ad that appears in a new browser tab or window.
            </p>
            <p className="text-lg">
              • Pop ads don’t require any space on a website and can be combined with
              any other ad unit.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start mt-7">
            <Button
              text="Learn More"
              className="mt-5 text-white bg-[#373435] hover:bg-[#6C63FF]"
            />
            <VideoButton
              text="Learn More"
              className="mt-5 text-white bg-[#373435]"
            />
          </div>
        </div>
      </div>

      <div
        ref={(el) => (sectionsRef.current[1] = el)}
        className="flex flex-wrap gap-5 p-6 mt-20 lg:p-0 justify-evenly"
      >
        <div>
          <Text size={'text-xl md:text-4xl lg:text-5xl xl:text-[42px] text-start'}>
            Social Bar
          </Text>
          <div className="flex flex-col gap-4 font-normal text-[#333] mt-3">
            <p className="text-xl">
              A must-have ad code for extra monetization that delivers great UX and
              competitive CPMs.
            </p>
            <p className="text-lg">
              • A set of super-engaging ads includes In-Page Push, Interstitials, and
              dozens of profitable visuals.
            </p>
            <p className="text-lg">
              • Social Bar ads are best for publishers who send mobile traffic.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start mt-7">
            <Button
              text="Learn More"
              className="mt-5 text-white bg-[#373435] hover:bg-[#6C63FF]"
            />
            <VideoButton
              text="Learn More"
              className="mt-5 text-white bg-[#373435]"
            />
          </div>
        </div>
        <div>
          <img
            src="/HomePages/converting5.png"
            className="w-auto h-[250px] sm:h-[300px] md:h-[300px] lg:h-[350px] xl:h-[400px]"
            alt="hello"
          />
        </div>
      </div>

      <div
        ref={(el) => (sectionsRef.current[2] = el)}
        className="flex flex-wrap gap-5 p-6 mt-10 lg:p-0 justify-evenly"
      >
        <div>
          <img
            src="/HomePages/converting6.png"
            className="w-auto h-[250px] sm:h-[300px] md:h-[300px] lg:h-[350px] xl:h-[400px]"
            alt="hello"
          />
        </div>
        <div>
          <Text size={'text-xl md:text-4xl lg:text-5xl xl:text-[42px] text-start'}>
            Direct Link
          </Text>
          <div className="flex flex-col gap-4 font-normal text-[#333] mt-3">
            <p className="text-xl">
              The Link can be used on HTML sites, WordPress and Blogger blogs. It is
              also possible to use it in APK files.
            </p>
            <p className="text-lg">
              • Direct Link is the easiest way to profit from website traffic.
            </p>
            <p className="text-lg">
              • Publishers can add it to texts, buttons, or pictures as a simple link.
              Also, it&apos;s the best option to earn from social traffic.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start mt-7">
            <Button
              text="Learn More"
              className="mt-5 text-white bg-[#373435]"
            />
            <VideoButton
              text="Learn More"
              className="mt-5 text-white bg-[#373435]"
            />
          </div>
        </div>
      </div>

      <div
        ref={(el) => (sectionsRef.current[3] = el)}
        className="flex flex-wrap gap-5 p-6 mt-10 lg:p-0 justify-evenly"
      >
        <div>
          <Text size={'text-xl md:text-4xl lg:text-5xl xl:text-[42px] text-start'}>
            Native Banners
          </Text>
          <div className="flex flex-col gap-4 font-normal text-[#333] mt-3">
            <p className="text-xl">
              Native Banners don’t annoy users and spark higher interest. They fit all
              interfaces and platforms.
            </p>
            <p className="text-lg">
              • Simple but extra-effective ads that are consumed like editorial
              content.
            </p>
            <p className="text-lg">
              • Publishers decide on the size of ad blocks, pick colors and font sizes
              to match the website content perfectly.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start mt-7">
            <Button
              text="Learn More"
              className="mt-5 text-white bg-[#373435] hover:bg-[#6C63FF]"
            />
            <VideoButton
              text="Learn More"
              className="mt-5 text-white bg-[#373435]"
            />
          </div>
        </div>
        <div>
          <img
            src="/HomePages/converting1.png"
            className="w-auto h-[250px] sm:h-[300px] md:h-[300px] lg:h-[350px] xl:h-[400px]"
            alt="hello"
          />
        </div>
      </div>

      <div
        ref={(el) => (sectionsRef.current[4] = el)}
        className="flex flex-wrap gap-5 p-6 mt-10 lg:p-0 justify-evenly"
      >
        <div>
          <img
            src="/HomePages/converting2.png"
            className="w-auto h-[250px] sm:h-[300px] md:h-[300px] lg:h-[350px] xl:h-[400px]"
            alt="hello"
          />
        </div>
        <div>
          <Text size={'text-xl md:text-4xl lg:text-5xl xl:text-[42px] text-start'}>
            Banners
          </Text>
          <div className="flex flex-col gap-4 font-normal text-[#333] mt-3">
            <p className="text-xl">
              Banners come in several sizes: 160x300, 160x600, 300x250, 320x50, 468x60,
              728x90
            </p>
            <p className="text-lg">
              • Static ad formats run on desktop and mobile websites, sending stable
              profits to publishers and bloggers.
            </p>
            <p className="text-lg">
              • Banners can complement any inventory, from blogs to e-shops.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start mt-7">
            <Button
              text="Learn More"
              className="mt-5 text-white bg-[#373435] hover:bg-[#6C63FF]"
            />
            <VideoButton
              text="Learn More"
              className="mt-5 text-white bg-[#373435]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Advertisers;
