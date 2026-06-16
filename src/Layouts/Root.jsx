import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar></NavBar>
            <div className="flex-grow flex flex-col">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;