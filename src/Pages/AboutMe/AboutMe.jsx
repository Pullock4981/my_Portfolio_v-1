
import React from 'react';
import AboutContain from './AboutContain';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import ContactBanner from '../../Components/ContactBanner/ContactBanner';
import SocialLinks from './SocialLinks';
import { Link } from 'react-router';


const AboutMe = () => {
    return (
        <div>
            <AboutContain></AboutContain>
            <div className='flex justify-between gap-6 flex-col max-w-7xl md:mx-auto mt-4 md:px-20 py-4'>
                <div className='p-4 lg:p-0'>
                    <Experience></Experience>
                </div>
                
                <div className='p-4 lg:p-0'>
                    <Education></Education>
                </div>
            </div>
            <div className='max-w-7xl md:mx-auto mt-4 md:px-20 py-4 flex lg:flex-row flex-col-reverse justify-between items-center gap-6'>

                <div className='lg:w-[50%]'>
                    <SocialLinks></SocialLinks>
                </div>
                <div className='lg:w-[50%]'>
                    <Link to="/contact">
                        <ContactBanner></ContactBanner>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;