import React from 'react';
import profile from "../../assets/Ashik.profile_1.0.jpg"

const Banner = () => {
    return (
        <div>
            <div className='flex md:flex-row flex-col justify-center items-center gap-6 bg-gradient-to-br from-[#2b2b2b] to-[#131212] p-12 rounded-3xl'>
                <div>
                    <img className='rounded-tl-3xl rounded-br-3xl w-72' src={profile} alt="" />
                </div>
                <div>
                    <p className='text-gray-400 md:text-lg font-bold'>
                        APPLICATION DEVELOPER
                    </p>
                    <h1 className='md:text-4xl text-2xl font-bold'>
                        Syed Ashik Mahmud Pullock
                    </h1>
                    <p className='text-gray-400'>
                        React, MERN Stack Developer & Learner
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;