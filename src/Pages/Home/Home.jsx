import React from 'react';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='mx-4 md:mx-0'>
            {/* banner section */}
            <div className='max-w-7xl mx-auto md:px-20 py-4'>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;