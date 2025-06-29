import React from 'react';

const Education = () => {
    return (
        <div >
            <div className='bg-gradient-to-br from-[#2b2b2b] to-[#131212] rounded-3xl p-6'>
                <h1 className='font-bold mb-6'>
                    EDUCATION
                </h1>
                {/* bsc */}
                <div>
                    <p className='text-gray-400 mb-1'>
                        2022 - Ongoing
                    </p>
                    <h1 className='text-lg font-semibold mb-1'>
                        BSc in Computer Science & Engineering
                    </h1>
                    <p className='text-gray-400'>
                        Daffodil International University
                    </p>
                </div>
                {/* higher secondery */}
                <div className='mt-6'>
                    <p className='text-gray-400 mb-1'>
                        2017 - 2019
                    </p>
                    <h1 className='text-lg font-semibold mb-1'>
                        Higher Secondary School Certificate
                    </h1>
                    <p className='text-gray-400'>
                        Narsingdi Science College
                    </p>
                </div>
                {/* secondery */}
                <div className='mt-6'>
                    <p className='text-gray-400 mb-1'>
                        2012-2017
                    </p>
                    <h1 className='text-lg font-semibold mb-1'>
                        Secondary School Certificate
                    </h1>
                    <p className='text-gray-400'>
                        Daffodil International University
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Education;