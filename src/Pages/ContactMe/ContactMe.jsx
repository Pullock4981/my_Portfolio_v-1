


import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import LeftSideComponent from './LeftSideComponent';
import RightSideComponent from './RightSideComponent';

const ContactMe = () => {


    return (
        <div className='flex-grow flex items-center justify-center py-10 md:py-0'>
            <div className='flex flex-col lg:flex-row items-center gap-10 p-6 bg-black text-white w-full max-w-7xl md:mx-auto md:px-20 px-4'>
                <div className='lg:w-[30%] w-full'>
                    {/* left side */}
                    <LeftSideComponent></LeftSideComponent>
                </div>
                <div className='lg:w-[70%] w-full'>
                    {/* right side */}
                    <RightSideComponent></RightSideComponent>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
