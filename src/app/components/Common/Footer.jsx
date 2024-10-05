import React from 'react';
import Text from '@/app/Reusable/Text'

function Footer() {
    const Advertisers = [
        { title: 'Benefits for Advertisers' },
        { title: 'Pricing Models' },
        { title: 'Self-Serve Platform' },
        { title: 'RTB Traffic' }
    ];
    const AdFormats = [
        { title: 'Popunder Ads' },
        { title: 'In-Page Push Ads' },
        { title: 'Social Bar' },
        { title: 'Native Advertising' },
        { title: 'Display Banners' }
    ];
    const Verticals = [
        { title: 'Games' },
        { title: 'E-Commerce' },
        { title: 'Sweepstakes' },
        { title: 'VPN, Utility and Software' }
    ];
    const Resources = [
        { title: 'Blog' },
        { title: 'Tips for Publishers' },
        { title: 'FAQ for Advertisers' },
        { title: 'Case Studies' },
        { title: 'Adsterra Newsletter' },
        { title: 'Glossary' },
    ];
    const Company = [
        { title: 'About Us' },
        { title: 'Careers' },
        { title: 'Events' },
        { title: 'CSR Policy' }
    ];
    const OurContacts = [
        { title: '+91 1234567890' },
        { title: 'Address' },
         
    ];
    const Publishers = [
        { title: 'Traffic Monetization' },
        { title: 'Referral Program' },
        { title: 'Adsterra API' },
    ];
    const PricingModels = [
        { title: 'CPA' },
        { title: 'CPC' },
        { title: 'CPM' },
        { title: 'CPI' },
        { title: 'CPL' }

    ];

    return (
        <div className=' bg-[#263238]'>
            <div className='flex flex-wrap justify-between p-11 gap-y-10 sm:p-8 md:p-8 md:justify-around lg:gap-20 lg:p-20 xl:ml-48 xl:mr-48'>
                <div>
            <Text size="text-md md:text-xl lg:text-3xl xl:text-[25px] text-white text-start">
            Advertisers
              </Text>
                <div className='mt-8'>
                    {Advertisers.map((item, index) => (
                        <p key={index} className={`mt-${index === 0 ? '0' : '5'} text-sm md:text-lg`}>
                            {item.title}
                        </p>
                    ))}
                </div>
            </div>
            <div className=''>
            <Text size="text-md md:text-xl lg:text-3xl xl:text-[25px] text-white text-start">
            Ad Formats
              </Text>
                <div className='mt-8'>
                    {AdFormats.map((item, index) => (
                        <p key={index} className={`mt-${index === 0 ? '0' : '5'} text-sm md:text-lg`}>
                            {item.title}
                        </p>
                    ))}
                </div>
            </div>
            <div className=''>
            <Text size="text-md md:text-xl lg:text-3xl xl:text-[25px] text-white text-start">
            Verticals
              </Text>
                <div className='mt-8'>
                    {Verticals.map((item, index) => (
                        <p key={index} className={`mt-${index === 0 ? '0' : '5'} text-sm md:text-lg`}>
                            {item.title}
                        </p>
                    ))}
                </div>
            </div>
            <div className=''>
            <Text size="text-md md:text-xl lg:text-3xl xl:text-[25px] text-white text-start">
            Resources
              </Text>
                <div className='mt-8'>
                    {Resources.map((item, index) => (
                        <p key={index} className={`mt-${index === 0 ? '0' : '5'} text-sm md:text-lg`}>
                            {item.title}
                        </p>
                    ))}
                </div>
            </div>
            <div className=''>
            <Text size="text-md md:text-xl lg:text-3xl xl:text-[25px] text-white text-start">
            Company
              </Text>
                <div className='mt-8'>
                    {Company.map((item, index) => (
                        <p key={index} className={`mt-${index === 0 ? '0' : '5'} text-sm md:text-lg`}>
                            {item.title}
                        </p>
                    ))}
                </div>
            </div>
            <div className=''>
            <Text size="text-md md:text-xl lg:text-3xl xl:text-[25px] text-white text-start">
            Our Contacts
              </Text>
                <div className='mt-8'>
                    {OurContacts.map((item, index) => (
                        <p key={index} className={`mt-${index === 0 ? '0' : '5'} text-sm md:text-lg`}>
                            {item.title}
                        </p>
                    ))}
                </div>
            </div>
            <div className=''>
            <Text size="text-md md:text-xl lg:text-3xl xl:text-[25px] text-white text-start">
            Publishers
              </Text>
                <div className='mt-8'>
                    {Publishers.map((item, index) => (
                        <p key={index} className={`mt-${index === 0 ? '0' : '5'} text-sm md:text-lg`}>
                            {item.title}
                        </p>
                    ))}
                </div>
            </div>
            <div className=''>
            <Text size="text-md md:text-xl lg:text-3xl xl:text-[25px] text-white text-start">
            Pricing Models
              </Text>
                <div className='flex gap-2 mt-2 '>
                    {PricingModels.map((item, index) => (
                        <p key={index} className={`mt-${index === 0 ? '5' : '5'} text-sm md:text-lg`}>
                            {item.title}
                        </p>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
}

export default Footer;
