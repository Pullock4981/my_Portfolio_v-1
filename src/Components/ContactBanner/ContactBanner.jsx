import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const ContactBanner = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold bg-gradient-to-br from-[#2b2b2b] to-[#131212] p-10.5 rounded-3xl'>
                Let's <br />
                work <span className='text-sky-600'>together.</span>
                <motion.span
                    className="inline-block ml-2 text-sky-600"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                >
                    <FaArrowRight />
                </motion.span>
            </h1>
        </div>
    );
};

export default ContactBanner;
