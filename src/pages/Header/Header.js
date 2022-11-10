import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import logo from '../../images/logo.png';
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-base-100 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'><li className='md:px-5'>Home</li></Link>
                        <Link to='/blog'><li className='md:px-5'>Blog</li></Link>
                        {
                            user?.uid ?
                                <>
                                    <Link to='/myReviews'><li className='md:px-5'>My Reviews</li></Link>
                                    <Link to='/addServices'><li className='md:px-5'>Add Services</li></Link>
                                </>
                                :
                                <Link to='/login'><li className='md:px-5'>Login</li></Link>
                        }
                        <Link to='/signup'><li className='md:px-5'>Signup</li></Link>
                    </ul>
                </div>
                <img className='w-16' src={logo} alt="" />
                <Link to='/' className="btn btn-ghost md:text-xl font-bold ml-0 text-sm">LENS-QUEEN</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <Link to='/'><li className='md:px-5'>Home</li></Link>
                    <Link to='/blog'><li className='md:px-5'>Blog</li></Link>
                    {
                        user?.uid ?
                            <>
                                <Link to='/myReviews'><li className='md:px-5'>My Reviews</li></Link>
                                <Link to='/addServices'><li className='md:px-5'>Add Services</li></Link>
                            </>
                            :
                            <Link to='/login'><li className='md:px-5'>Login</li></Link>
                    }
                    <Link to='/signup'><li className='md:px-5'>Signup</li></Link>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <>
                            <span className='tooltip tooltip-bottom' data-tip={user?.displayName}><img className="rounded-full h-10" src={user.photoURL} alt="" /></span>
                            <button onClick={handelLogOut} className='px-2'>LogOut</button>
                        </>
                        :
                        <FaUserAlt></FaUserAlt>
                }
            </div>
        </div>
    );
};

export default Header;