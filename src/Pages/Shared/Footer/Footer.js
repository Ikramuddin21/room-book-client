import React from 'react';
import logo from '../../../images/logo.png';
import { FiMail } from 'react-icons/fi';
import { BiPhone } from 'react-icons/bi';
import { FaRegFlag, FaFacebook } from 'react-icons/fa';
import { AiFillInstagram, AiFillTwitterCircle, AiFillDribbbleCircle } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-left-area">
                    <Link to="/"><img src={logo} alt="" /></Link>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe quam exercitationem sint, error, eveniet incidunt facere quidem reprehenderit facilis ipsum tempora tenetur placeat iste? Blanditiis fugiat repellendus itaque corrupti facilis magni nostrum reiciendis, doloremque adipisci.</p>
                    <div className="social-media">
                        <h2 className="highlight">Follow us :</h2>
                        <ul>
                            <li><Link to="#"><FaFacebook /></Link></li>
                            <li><Link to="#"><AiFillTwitterCircle /></Link></li>
                            <li><Link to="#"><AiFillInstagram /></Link></li>
                            <li><Link to="#"><AiFillDribbbleCircle /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-middle">
                    <h2>Contact us</h2>
                    <p><BiPhone /> <span>+32432564324789</span></p>
                    <p><FaWhatsapp /> <span>076565785435344</span></p>
                    <p><FiMail /> <span>info@example.com</span></p>
                    <p><FaRegFlag /> <span>203 New York, USA</span></p>
                </div>
                <div className="footer-right">
                    <h2>Support</h2>
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="#">Contact us</Link>
                        </li>
                        <li>
                            <Link to="/room">Room</Link>
                        </li>
                        <li>
                            <Link to="#">Our Blogs</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright-area">
                <p><small>Copyright &copy; Ikram Uddin - 2022</small></p>
            </div>
        </footer>
    );
};

export default Footer;