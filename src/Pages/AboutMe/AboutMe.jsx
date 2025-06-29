
import React from 'react';
import AboutContain from './AboutContain';
import Education from '../Education/Education';
import Expeerience from '../Experience/Expeerience';
import ContactBanner from '../../Components/ContactBanner/ContactBanner';
import SocialLinks from './SocialLinks';
import { Link } from 'react-router';


const AboutMe = () => {
    return (
        <div>
            <AboutContain></AboutContain>
            <div className='flex justify-between gap-6 lg:flex-row flex-col max-w-7xl md:mx-auto mt-4 md:px-20 py-4'>
                <div className='lg:w-[50%] p-4 lg:p-0'>
                    <Education></Education>
                </div>
                <div className='lg:w-[50%] p-4 lg:p-0'>
                    <Expeerience></Expeerience>
                </div>
            </div>
            <div className='max-w-7xl md:mx-auto mt-4 md:px-20 py-4 flex justify-between items-center gap-6'>

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