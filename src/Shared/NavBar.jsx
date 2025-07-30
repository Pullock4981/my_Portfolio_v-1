import React from 'react';
import logo from "../assets/logo.png"
import newLogo from "../assets/A-Logo.png"
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
        <div className="navbar bg-black text-white max-w-7xl mx-auto md:px-20 py-4 shadow-sm sticky top-0 z-50 backdrop-blur bg-opacity-90">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            navLinks
                        }
                    </ul>
                </div>

                <Link to="/">
                    <img className='md:w-28 w-16 hidden lg:block' src={logo} alt="" />
                    <img className='lg:w-28 w-12 block lg:hidden' src={newLogo} alt="" />

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
                    href='https://drive.google.com/file/d/1iKwJDI6NNSu0n951uKYBzoB1ukxrtPfH/view?usp=drive_link'
                    className="bg-gray-700 text-white md:text-lg font-bold border-0 rounded-xl md:px-6 px-3 py-2 cursor-pointer hover:bg-white hover:text-black">
                    My Resume
                </a>
            </div>
        </div>
    );
};

export default NavBar;