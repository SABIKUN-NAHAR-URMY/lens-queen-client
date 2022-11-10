import React from 'react';
import logo from '../../images/logoWhite.png';

const Footer = () => {
    return (
        <footer className="footer justify-around items-center mt-14 p-4 bg-black text-white">
            <div className="items-center grid-flow-col">
                <img className='w-32' src={logo} alt="" />
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div className="footer p-10 ">
                <div>
                    <span className="footer-title">ABOUT LENS-QUEEN</span>
                    <p>Essentially, the purpose of photography
                        <br /> is to communicate and document
                        <br /> moments in time.</p>
                    <p>About us</p>
                    <p>Contact</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;