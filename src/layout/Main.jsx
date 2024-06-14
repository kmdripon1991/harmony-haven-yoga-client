import React from 'react';
import Home from '../pages/Home/Home/Home';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;
