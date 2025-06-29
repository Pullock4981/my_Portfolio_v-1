


import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import LeftSideComponent from './LeftSideComponent';
import RightSideComponent from './RightSideComponent';

const ContactMe = () => {


    return (
        <div className='flex flex-col lg:flex-row gap-10 p-6 bg-black text-white max-w-7xl md:mx-auto mb-4 md:px-20 px-4'>
            <div className='lg:w-[30%]'>
                {/* left side */}
                <LeftSideComponent></LeftSideComponent>
            </div>
            <div className='lg:w-[70%]'>
                {/* right side */}
                <RightSideComponent></RightSideComponent>
            </div>
        </div>
    );
};

export default ContactMe;
