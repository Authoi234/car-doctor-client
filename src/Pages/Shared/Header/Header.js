import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // console.log('User Signed Out');
            })
            .catch((err) => {
                // console.error(err);
            })
    }

    const menuItems = <>
        <li className="font-semibold"><Link to={'/'}>Home</Link></li>
        {user?.email ?
            <>
                <li className='font-semibold'><Link to={'/orders'}>Orders</Link></li>
                <li className='font-semibold'><button className="btn-ghost" onClick={handleLogOut}>Sign Out</button></li>
            </>
            : <li className="font-semibold"><Link to={'/login'}>Login </Link></li>
        }
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
                <button className="btn btn-outline btn-warning hover:scale-110 duration-500 mx-3">APPOINTMENT</button>
            </div>
        </div>
    );
};

export default Header;