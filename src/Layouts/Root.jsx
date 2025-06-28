import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='min-h-[calc(100vh-276px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;