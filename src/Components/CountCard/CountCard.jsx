import React from 'react';

const CountCard = () => {
    return (
        <div className='flex justify-center gap-8 bg-gradient-to-br from-[#2b2b2b] to-[#131212] p-5 rounded-3xl'>
            <div className='bg-gradient-to-br from-[#2b2b2b] to-[#131212] p-5 rounded-3xl text-center'>
                <h1 className='text-3xl font-bold'>
                    1.5
                </h1>
                <p className='text-gray-500 font-bold'>
                    YEARS <br /> EXPERIENCE
                </p>
            </div>
            <div className='bg-gradient-to-br from-[#2b2b2b] to-[#131212] p-5 rounded-3xl text-center'>
                <h1 className='text-3xl font-bold'>
                    10+
                </h1>
                <p className='text-gray-500 font-bold'>
                    TOTAL <br />PROJECTS
                </p>
            </div>
        </div>
    );
};

export default CountCard;