import React from 'react';
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-black text-primary-content p-10">
            <aside>
                <img
                    className='h-20'
                    src={logo} alt="" />
                
                <p>© All rights reserved by <span className='text-[#5B78F6]'>Syed Ashik Mahmud Pullock</span></p>
            </aside>
        </footer>
    );
};

export default Footer;