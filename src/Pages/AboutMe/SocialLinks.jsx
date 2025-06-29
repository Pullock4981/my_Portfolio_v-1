import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

const SocialLinks = () => {
    return (
        <div className='flex justify-center gap-6 mt-4 bg-gradient-to-br from-[#2b2b2b] to-[#131212] rounded-3xl p-6'>

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
    );
};

export default SocialLinks;