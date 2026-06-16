import React from 'react';
import aboutPic from "../../assets/profile_pic1.jpg"

const AboutContain = () => {
    return (
        <div className='max-w-7xl md:mx-auto mt-4 md:px-20 py-4'>
            <div className='flex justify-between px-4 lg:flex-row flex-col gap-6'>
                <div className='lg:w-[40%] lg:p-10 p-6 bg-gradient-to-br from-[#2b2b2b] to-[#131212] rounded-3xl'>
                    <img
                        className='h-64 w-full rounded-3xl'
                        src={aboutPic} alt="" />
                </div>
                <div className='lg:w-[60%]'>
                    <h1 className='lg:text-6xl text-3xl uppercase text-center font-bold'>
                        Self-summary
                    </h1>
                    <div className='bg-gradient-to-br from-[#2b2b2b] to-[#131212] rounded-3x p-6 mt-8 rounded-3xl'>
                        <h2 className='lg:text-3xl text-xl uppercase font-bold'>
                            Syed Ashik Mahmud Pullock
                        </h2>
                        <p className='mt-4 text-gray-300 leading-relaxed'>
                            I am a passionate MERN Stack Developer dedicated to building intuitive user interfaces and efficient backend systems. I specialize in delivering end-to-end solutions within collaborative, agile environments. With hands-on experience in crafting scalable, reusable UI components and handling database optimizations, I strive to ensure responsive, consistent designs and cross-browser support for seamless digital experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContain;