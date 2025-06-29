import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { IoMdMail } from 'react-icons/io';

const LeftSideComponent = () => {
    return (

        <div className='flex flex-col gap-3'>
            <h1 className='uppercase'>
                Contact Info
            </h1>
            <div className='bg-gradient-to-br from-[#2b2b2b] to-[#131212] p-6 rounded-3xl'>
                <h3 className='text-sm text-gray-400 mb-2'>EMAIL ME</h3>
                <p className='flex items-center gap-2'><IoMdMail /> ashikpullock99@gmail.com</p>
                <p className='flex items-center gap-2'><IoMdMail /> pullock15-4981@diu.edu.bd</p>
            </div>
            <div className='bg-gradient-to-br from-[#2b2b2b] to-[#131212] p-6 rounded-3xl'>
                <h3 className='text-sm text-gray-400'>CONTACT ME</h3>
                <p className='flex items-center gap-2'><FaPhone className='text-sky-600' /> <a href="tel:01624334044">01624334044</a></p>
            </div>
            <div className='bg-gradient-to-br from-[#2b2b2b] to-[#131212] p-6 rounded-3xl'>
                <h3 className='text-sm text-gray-400'>LOCATION</h3>
                <p className='flex items-center gap-2'><FaLocationDot className='text-sky-600' /> Mirpur, Dhaka</p>
            </div>
            <div>
                <h3 className='text-sm text-white mt-2'>SOCIAL INFO</h3>
                <div className='flex gap-4 mt-2'>
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
    );
};

export default LeftSideComponent;