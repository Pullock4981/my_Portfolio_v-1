import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Shared/NavBar';
import Footer from '../Shared/Footer';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;