import React from 'react';
import { Outlet } from 'react-router';
import DashBoardNavbar from './DashBoardNavbar';

const DashBoardLayout = () => {
    return (
        <div>
            <DashBoardNavbar></DashBoardNavbar>
               <Outlet></Outlet>
        </div>
    );
};

export default DashBoardLayout;