import React from 'react';
import { Outlet, useLocation} from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import HeaderBanner from '../pages/Home/HeaderBanner/HeaderBanner';



const Main = () => {

    const path = useLocation()
    console.log(path.pathname);

    return (
        <div>
            <div className="fixed top-0 z-[99] w-full"><Navbar></Navbar></div>
            <div className={`${path.pathname == '/' ? '': 'hidden'}`}><HeaderBanner></HeaderBanner></div>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;