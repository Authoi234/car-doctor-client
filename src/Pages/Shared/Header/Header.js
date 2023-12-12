import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { FaUser } from "react-icons/fa6";
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext)

    const menuItems = <>
        <li className="font-semibold"><Link to={'/'}>Home</Link></li>
        <li className="font-semibold"><Link to={'/login'}>Login </Link></li>
    </>

    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">
                    <img src={logo} className='hover:scale-125 duration-300 hover:backdrop-contrast-150' alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <div className='flex items-center'>
                    <FaUser className='m-5 border rounded-full border-red-500 text-3xl text-white bg-gradient-to-r from-blue-500 via-pink-600 to-purple-600 tooltip-primary'></FaUser>
                    <button className="btn btn-primary">Logout</button>
                </div> : <div></div>}
                <button className="btn btn-outline btn-warning hover:scale-110 duration-500 mx-3">APPOINTMENT</button>
            </div>
        </div>
    );
};

export default Header;