import React from 'react';
import aboutPic from "../../assets/profile_pic1.jpg"

const AboutMe = () => {
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
                        <p className='mt-4'>
                            I'm a dedicated MERN stack developer with a strong passion for creating dynamic,
                            responsive, and scalable web applications. With expertise in MongoDB, Express.js, React,
                            and Node.js, I enjoy building robust backends and seamless user interfaces. I take pride
                            in writing clean, maintainable code and transforming
                            complex requirements into intuitive digital experiences that are both functional and user-focused.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;