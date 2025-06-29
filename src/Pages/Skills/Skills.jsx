// // import React from 'react';

// // const Skills = () => {
// //     return (
// //         <div>
// //             <h1>
// //                 Skills section
// //             </h1>
// //         </div>
// //     );
// // };

// // export default Skills;

// import React from 'react';
// import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub } from 'react-icons/fa';
// import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

// const skills = [
//     {
//         name: 'React',
//         icon: <FaReact className="text-sky-400 text-5xl" />,
//         description: 'Modern JavaScript library for building responsive and scalable user interfaces using component-based architecture.',
//     },
//     {
//         name: 'JavaScript',
//         icon: <SiJavascript className="text-yellow-400 text-5xl" />,
//         description: 'Core programming language of the web, enabling dynamic functionality, logic, and interactivity in web apps.',
//     },
//     {
//         name: 'HTML5',
//         icon: <FaHtml5 className="text-orange-500 text-5xl" />,
//         description: 'Markup language for structuring content on the web, essential for page layouts and SEO.',
//     },
//     {
//         name: 'CSS3',
//         icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
//         description: 'Style sheet language used for designing beautiful, responsive, and animated websites.',
//     },
//     {
//         name: 'Tailwind CSS',
//         icon: <SiTailwindcss className="text-teal-400 text-5xl" />,
//         description: 'Utility-first CSS framework for rapidly building custom designs directly in your HTML/JSX.',
//     },
//     {
//         name: 'Node.js',
//         icon: <FaNodeJs className="text-green-500 text-5xl" />,
//         description: 'Server-side runtime environment for building scalable backend services using JavaScript.',
//     },
//     {
//         name: 'Express.js',
//         icon: <SiExpress className="text-gray-400 text-5xl" />,
//         description: 'Minimal and flexible Node.js web framework used for building RESTful APIs and web applications.',
//     },
//     {
//         name: 'MongoDB',
//         icon: <SiMongodb className="text-green-600 text-5xl" />,
//         description: 'NoSQL database for storing JSON-like documents with dynamic schemas and high scalability.',
//     },
//     {
//         name: 'GitHub',
//         icon: <FaGithub className="text-white text-5xl" />,
//         description: 'Version control platform for managing code, collaborating with others, and deploying projects.',
//     },
// ];

// const Skills = () => {
//     return (
//         <div className="bg-gradient-to-b from-black to-[#1a1a1a] text-white max-w-7xl md:mx-auto mt-4 md:px-20 px-4 py-8">
//             <h1 className="text-4xl font-bold text-center mb-10">My Tech Stack</h1>

//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {skills.map((skill, index) => (
//                     <div
//                         key={index}
//                         className="bg-[#2b2b2b] p-6 rounded-2xl hover:bg-[#3a3a3a] transition-all shadow-md"
//                     >
//                         <div className="flex items-center gap-4 mb-4">
//                             {skill.icon}
//                             <h2 className="text-2xl font-semibold">{skill.name}</h2>
//                         </div>
//                         <p className="text-gray-400 text-sm">{skill.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Skills;

import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiFirebase } from 'react-icons/si';

const skills = [
    {
        name: 'React',
        icon: <FaReact className="text-sky-400 text-5xl" />,
        description: 'Modern JavaScript library for building responsive and scalable user interfaces using component-based architecture.',
    },
    {
        name: 'JavaScript',
        icon: <SiJavascript className="text-yellow-400 text-5xl" />,
        description: 'Core programming language of the web, enabling dynamic functionality, logic, and interactivity in web apps.',
    },
    {
        name: 'HTML5',
        icon: <FaHtml5 className="text-orange-500 text-5xl" />,
        description: 'Markup language for structuring content on the web, essential for page layouts and SEO.',
    },
    {
        name: 'CSS3',
        icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
        description: 'Style sheet language used for designing beautiful, responsive, and animated websites.',
    },
    {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className="text-teal-400 text-5xl" />,
        description: 'Utility-first CSS framework for rapidly building custom designs directly in your HTML/JSX.',
    },
    {
        name: 'Node.js',
        icon: <FaNodeJs className="text-green-500 text-5xl" />,
        description: 'Server-side runtime environment for building scalable backend services using JavaScript.',
    },
    {
        name: 'Express.js',
        icon: <SiExpress className="text-gray-400 text-5xl" />,
        description: 'Minimal and flexible Node.js web framework used for building RESTful APIs and web applications.',
    },
    {
        name: 'MongoDB',
        icon: <SiMongodb className="text-green-600 text-5xl" />,
        description: 'NoSQL database for storing JSON-like documents with dynamic schemas and high scalability.',
    },
    {
        name: 'Firebase',
        icon: <SiFirebase className="text-orange-400 text-5xl" />,
        description: 'Google\'s platform for building web and mobile apps, offering authentication, real-time databases, hosting, and cloud functions.',
    },
    {
        name: 'GitHub',
        icon: <FaGithub className="text-white text-5xl" />,
        description: 'Version control platform for managing code, collaborating with others, and deploying projects.',
    },
];

const Skills = () => {
    return (
        <div className="bg-gradient-to-b from-black to-[#1a1a1a] text-white max-w-7xl md:mx-auto mt-4 md:px-20 px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-10">My Tech Stack</h1>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-[#2b2b2b] p-6 rounded-2xl hover:bg-[#3a3a3a] transition-all shadow-md"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            {skill.icon}
                            <h2 className="text-2xl font-semibold">{skill.name}</h2>
                        </div>
                        <p className="text-gray-400 text-sm">{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
