import React from 'react';
import profile from "../../assets/Ashik.profile_1.0.jpg"
import { FiGithub } from 'react-icons/fi';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='bg-gradient-to-br from-[#2b2b2b] to-[#131212] p-8 rounded-3xl'>
            <div className='flex md:flex-row flex-col justify-between items-center gap-6'>
                <div className='lg:w-[45%]'>
                    <img className='rounded-tl-3xl rounded-br-3xl w-full h-52' src={profile} alt="" />
                </div>
                <div className='lg:w-[50%]'>
                    <p className='text-gray-400 text-center lg:text-start font-bold'>
                        APPLICATION DEVELOPER
                    </p>
                    <h1 className='md:text-3xl text-2xl text-center lg:text-start font-semibold'>
                        Syed Ashik Mahmud Pullock
                    </h1>
                    <p className='text-gray-400 text-center lg:text-start'>
                        React, MERN Stack Developer & Learner
                    </p>
                    <div className='flex justify-center gap-6 mt-4'>

                        <a
                            target='_blank'
                            className='bg-gray-600 hover:bg-white hover:text-black p-3 text-2xl rounded-full items-center'
                            href="https://github.com/Pullock4981">
                            <FiGithub />
                        </a>
                        <a
                            target='_blank'
                            className='bg-gray-600 hover:bg-white hover:text-black p-3 text-2xl rounded-full items-center'
                            href="https://www.linkedin.com/in/ashikpullock/">
                            <FaLinkedinIn />
                        </a>
                        <a
                            target='_blank'
                            className='bg-gray-600 hover:bg-white hover:text-black p-3 text-2xl rounded-full items-center'
                            href="https://www.facebook.com/mahmudashik.pullock">
                            <FaFacebookF />
                        </a>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;