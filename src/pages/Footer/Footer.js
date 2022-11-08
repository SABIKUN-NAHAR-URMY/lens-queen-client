import React from 'react';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <footer className="footer items-center mt-14 p-4 bg-black text-white">
            <div className="items-center grid-flow-col">
                <img className='w-32' src={logo} alt="" />
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div className="footer p-10 ">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;