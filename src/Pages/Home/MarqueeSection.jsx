import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeSection = () => {
    return (
        <div className='flex md:flex-row flex-col justify-between items-center gap-6 bg-gradient-to-br from-[#2b2b2b] to-[#131212] p-3 px-5 rounded-3xl'>
            <Marquee speed={50} gradient={false} className="text-lg font-semibold text-sky-600">
                🚀 MERN Stack | React.js | Node.js | Express.js | MongoDB | Tailwind CSS | REST API | Git & GitHub | Firebase | Redux | JavaScript | HTML5 & CSS3 | Responsive Design | Problem Solving | Debugging | UI/UX Focus | Continuous Learning
            </Marquee>
        </div>
    );
};

export default MarqueeSection;