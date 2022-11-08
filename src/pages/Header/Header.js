import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
    const menuItem =
        <>
            <Link to='/'><li className='md:px-5'>Home</li></Link>
            <Link to='/login'><li className='md:px-5'>Login</li></Link>
            <Link to='/signup'><li className='md:px-5'>Signup</li></Link>
        </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <img className='w-16' src={logo} alt="" />
                <Link to='/' className="btn btn-ghost text-xl font-bold ml-0">LENS-QUEEN</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Header;