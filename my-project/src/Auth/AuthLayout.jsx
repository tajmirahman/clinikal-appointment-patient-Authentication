import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <div className='bg-[#32a3ac]'>

            <Header></Header>
            </div>
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default AuthLayout;