import React from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';
import { AiOutlineGithub, AiOutlineTwitter, AiFillPhone } from 'react-icons/ai';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="copyright">
                <span>Copyright 2023 Benny Makomo</span>
            </div>

            <div className="useful-links">
                <h3>Useful Links</h3>
                <ul>
                    <li><NavLink to="">Privacy policy</NavLink></li>
                    <li><NavLink to="">Shipping policy</NavLink></li>
                    <li><NavLink to="">Terms and conditions</NavLink></li>
                    <li><NavLink to="">FAQs</NavLink></li>
                </ul>
            </div>

            <div className="partners">
                <h3>Partners</h3>
                <ul>
                    <li>Amazon</li>
                    <li>Meta</li>
                    <li>Google</li>
                </ul>
            </div>

            <div className="socials">
                <h3>Socials</h3>
                <ul className=''>
                    <li><NavLink to='https://www.github.com/BenM4k'><AiOutlineGithub /></NavLink></li>
                    <li><NavLink to='https://www.twitter.com/_____anomaly'><AiOutlineTwitter /></NavLink></li>
                    <li><NavLink to='https://www.instagram.com/_b_mak_'><BsInstagram /></NavLink></li>
                    <li><NavLink to='https://www.linkedin.com/in/benedict-makomo'><BsLinkedin /></NavLink></li>
                    <li><NavLink to='tel:+250784702911'><AiFillPhone /></NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer