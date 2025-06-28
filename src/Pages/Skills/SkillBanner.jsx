
import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const SkillBanner = () => {
    return (
        <div className="bg-gradient-to-br from-[#2b2b2b] to-[#131212] text-gray-400 hover:text-white p-8 rounded-3xl">
            <h1 className=" text-2xl font-bold mb-6 text-center">Tech Stack</h1>

            <Marquee speed={50} gradient={false}>
                <div className="flex gap-12 text-5xl text-sky-400 items-center">
                    <FaReact title="React" />
                    <SiJavascript title="JavaScript" />
                    <FaHtml5 title="HTML5" className="text-orange-500" />
                    <FaCss3Alt title="CSS3" className="text-blue-500" />
                    <SiTailwindcss title="Tailwind CSS" className="text-teal-400" />
                    <FaNodeJs title="Node.js" className="text-green-500" />
                    <SiExpress title="Express.js" className="text-gray-400" />
                    <SiMongodb title="MongoDB" className="text-green-600" />
                    <FaGithub title="GitHub" className="text-white mr-8" />
                </div>
            </Marquee>
            <p className="text-xl font-semibold mt-2 flex items-center gap-2">
                More about Skills
                <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                >
                    <FaArrowRight />
                </motion.span>
            </p>
        </div>
    );
};

export default SkillBanner;
