import React from 'react';
import logo from '../assets/logo.png'
import SkillBanner from '../Pages/Skills/SkillBanner';
import SocialLinks from '../Pages/AboutMe/SocialLinks';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-black text-primary-content p-10">
            <aside>
                <img
                    className='h-20'
                    src={logo} alt="" />
                <SocialLinks></SocialLinks>
                
                <p>© All rights reserved by <span className='text-sky-600'>Syed Ashik Mahmud Pullock</span></p>
            </aside>
        </footer>
    );
};

export default Footer;