import React from 'react';
import logo from "../assets/logo.png"
import { Link, NavLink } from 'react-router';
import './Navbar.css';

const NavBar = () => {
    // navLinks
    const navLinks = <>
        <div className='flex md:flex-row flex-col gap-4 text-lg font-bold'>
            <li className='text-gray-400 hover:text-white'><NavLink to="/">Home</NavLink></li>
            <li className='text-gray-400 hover:text-white'><NavLink to="/about">About</NavLink></li>
            <li className='text-gray-400 hover:text-white'><NavLink to="/skills">Skills</NavLink></li>
            <li className='text-gray-400 hover:text-white'><NavLink to="/projects">Projects</NavLink></li>
            <li className='text-gray-400 hover:text-white'><NavLink to="/contact">Contact</NavLink></li>
        </div>
    </>
    return (
        <div className="navbar bg-black text-white max-w-7xl mx-auto md:px-20 py-4 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            navLinks
                        }
                    </ul>
                </div>

                <Link to="/">
                    <img className='w-28' src={logo} alt="" />
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a
                    target='_blank'
                    href='https://drive.google.com/file/d/1xozYHydK6FAVCWWyRFwK7ie0O0Vu9i37/view?usp=drive_link'
                    className="bg-gray-700 text-white text-lg font-bold border-0 rounded-xl px-6 py-2 cursor-pointer hover:bg-white hover:text-black">
                    My Resume
                </a>
            </div>
        </div>
    );
};

export default NavBar;