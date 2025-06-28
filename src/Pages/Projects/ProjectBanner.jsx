// import React from 'react';
// import prijectBannerImg from "../../assets/project.png";
// import { motion } from 'framer-motion';
// import { FaArrowRight } from 'react-icons/fa';

// const ProjectBanner = () => {
//     return (
//         <div className='bg-gradient-to-br from-[#2b2b2b] to-[#131212] text-gray-400 p-6 items-center rounded-3xl'>
//             {/* <h1>
//                 Projects
//             </h1> */}
//             <h1 className=" text-2xl font-bold mb-1 text-center">Projects</h1>
//             <div className='flex justify-center items-center'>
//                 <img
//                     className='w-32'
//                     src={prijectBannerImg} alt="" />
//             </div>
//             <p className="text-xl font-semibold mt-2 flex items-center gap-2">
//                 Explore Here
//                 <motion.span
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{ repeat: Infinity, duration: 1 }}
//                 >
//                     <FaArrowRight />
//                 </motion.span>
//             </p>
//         </div>
//     );
// };

// export default ProjectBanner;

import React from 'react';
import prijectBannerImg from "../../assets/project.png";
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const ProjectBanner = () => {
    return (
        <div className='bg-gradient-to-br from-[#2b2b2b] to-[#131212] text-gray-400 hover:text-white p-6 items-center rounded-3xl'>
            <h1 className="text-2xl font-bold mb-1 text-center">Projects</h1>

            <div className='flex justify-center items-center'>
                <motion.img
                    src={prijectBannerImg}
                    alt="Project Preview"
                    className="w-32"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                />
            </div>

            <p className="text-xl font-semibold mt-2 flex items-center gap-2 justify-center">
                Explore Here
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

export default ProjectBanner;
