import React from 'react';
import Banner from './Banner';
import MarqueeSection from './MarqueeSection';
import SkillBanner from '../Skills/SkillBanner';
import ProjectBanner from '../Projects/ProjectBanner';
import { Link } from 'react-router';
import CountCard from '../../Components/CountCard/CountCard';
import ContactBanner from '../../Components/ContactBanner/ContactBanner';

const Home = () => {
    return (
        <div>
            <div className='lg:my-10 m-4 flex lg:flex-row flex-col gap-4 max-w-7xl md:mx-auto mt-4 md:px-20 py-4'>
                <div className='lg:w-[50%]'>
                    <Banner></Banner>
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
            <div className='flex lg:flex-row flex-col gap-6 max-w-7xl md:mx-auto mb-4 md:px-20 px-4'>
                <div className='lg:w-[50%]'>
                    <CountCard></CountCard>
                </div>
                <div className='lg:w-[50%]'>
                    <Link to="/contact">
                        <ContactBanner></ContactBanner>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;