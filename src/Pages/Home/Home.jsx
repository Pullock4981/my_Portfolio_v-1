import React from 'react';
import Banner from './Banner';
import MarqueeSection from './MarqueeSection';
import SkillBanner from '../Skills/SkillBanner';
import ProjectBanner from '../Projects/ProjectBanner';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div className='lg:my-10 my-4 flex lg:flex-row flex-col gap-4 max-w-7xl md:mx-auto mx-4 md:px-20 py-4'>
            <div className='lg:w-[50%]'>
                <Link to='/about'>
                    <Banner></Banner>
                </Link>
            </div>
            <div className='lg:w-[50%] flex flex-col gap-4'>
                <MarqueeSection></MarqueeSection>

                <div className="flex flex-col lg:flex-row justify-between gap-6">

                    <div className="w-full lg:w-1/2">
                        <Link to='/skills'>
                            <SkillBanner />
                        </Link>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <Link to="/projects">
                            <ProjectBanner />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;