import React from 'react';

const Experience = () => {
    return (
        <div className=''>
            <div className='bg-gradient-to-br from-[#2b2b2b] to-[#131212] rounded-3xl p-6'>
                <h1 className='font-bold mb-6'>
                    EXPERIENCE
                </h1>
                <div className='flex flex-col gap-4'>
                    {/* Neonecy */}
                    <div className='bg-gradient-to-br from-[#2b2b2b] to-[#131212] rounded-3xl p-6 shadow-md'>
                        <p className='text-gray-400 mb-1 text-sm md:text-base'>
                            March 2026 to Present | Remote
                        </p>
                        <h1 className='text-lg md:text-xl font-semibold mb-2'>
                            Front-end Developer
                        </h1>
                        <p className='text-gray-400 text-sm md:text-base font-bold mb-3'>
                            Neonecy
                        </p>
                        <ul className='list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base'>
                            <li>Developed reusable React.js and TypeScript components, improving development efficiency across multiple projects.</li>
                            <li>Built responsive and user-friendly interfaces using Tailwind CSS, ensuring cross-browser compatibility and consistent user experience.</li>
                            <li>Optimized frontend performance and application usability, contributing to improved customer engagement and satisfaction.</li>
                            <li>Collaborated with designers and backend developers to deliver scalable web solutions, supporting approximately 20–30% company growth during my tenure.</li>
                        </ul>
                    </div>
                    {/* RootX Softwares */}
                    <div className='bg-gradient-to-br from-[#2b2b2b] to-[#131212] rounded-3xl p-6 shadow-md'>
                        <p className='text-gray-400 mb-1 text-sm md:text-base'>
                            August 2025 to February 2026 | Remote
                        </p>
                        <h1 className='text-lg md:text-xl font-semibold mb-2'>
                            MERN Stack Developer
                        </h1>
                        <p className='text-gray-400 text-sm md:text-base font-bold mb-3'>
                            RootX Softwares
                        </p>
                        <ul className='list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base'>
                            <li>Developed and maintained full-stack MERN applications using React.js, Node.js, Express.js, and MongoDB.</li>
                            <li>Designed RESTful APIs and implemented secure JWT-based authentication.</li>
                            <li>Optimized database performance and application scalability through efficient schema design and query optimization.</li>
                            <li>Collaborated in Agile development cycles, participating in code reviews and feature planning.</li>
                            <li>Contributed to product improvements and client-facing solutions during a period of approximately 40% company growth.</li>
                        </ul>
                    </div>
                    {/* Daffodil */}
                    <div className='bg-gradient-to-br from-[#2b2b2b] to-[#131212] rounded-3xl p-6 shadow-md'>
                        <p className='text-gray-400 mb-1 text-sm md:text-base'>
                            January - 2023 to September - 2023
                        </p>
                        <h1 className='text-lg md:text-xl font-semibold mb-2'>
                            Student Associate
                        </h1>
                        <p className='text-gray-400 text-sm md:text-base font-bold mb-3'>
                            Daffodil International University
                        </p>
                        <ul className='list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base'>
                            <li>Managed comprehensive front desk operations, serving as the primary point of contact for university-related inquiries.</li>
                            <li>Handled administrative tasks including document collection, distribution, and managing incoming calls.</li>
                            <li>Fostered positive student relationships by providing guidance, support, and resolving queries.</li>
                            <li>Facilitated international communication by efficiently routing and connecting abroad calls.</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Experience;