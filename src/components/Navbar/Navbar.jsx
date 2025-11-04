import React from 'react';
import navLogo from '../../assets/navLogo.png'
import gitHubLogo from '../../assets/gitHubLogo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Apps</a></li>
                        <li><a>Installation</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl "><span><img src={navLogo} alt="" /></span><h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-700 to-indigo-500 bg-clip-text text-transparent">
                    HERO.IO
                </h1></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Apps</a></li>
                    <li><a>Installation</a></li>
                </ul>
            </div>
            <div className=" navbar-end">

                <button className='flex gap-3 rounded-xl py-2 px-3 bg-gradient-to-r from-purple-500 to-blue-500'><span><img src={gitHubLogo} alt="" /></span>Contribute</button>
            </div>
        </div>
    );
};

export default Navbar;   