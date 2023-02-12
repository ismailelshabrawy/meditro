import React from "react";
import footerlogo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPhone } from '@fortawesome/free-solid-svg-icons';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';




const Footer = ()=>{
    return(
        <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <img src={footerlogo} className="footer logo" />
                    <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                    <div className="footer-contact">
                        <div className="footer-icon">
                        <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className="footer-text">
                            <h6>Contact Us</h6>
                            <h4>+01 123 456 7890</h4>
                        </div>
                    </div>

                </div>
                <div className="col-md-3 col-sm-6">
                    <h2>Quick Links</h2>
                    <ul>
                       <li><a href="#">Home</a></li>
                       <li><a href="#">About</a></li>
                       <li><a href="#">Blog</a></li>
                       <li><a href="#">Bokking</a></li>
                       <li><a href="#">Faqs</a></li>
                       <li><a href="#">Our team</a></li>
                       <li><a href="#">Services</a></li>
                    </ul>
                    
                </div>
                <div className="col-md-3 col-sm-6">
                    <h2>Our Services</h2>
                    <ul>
                        <li><a href="#">Dental Care</a></li>
                        <li><a href="#">Cardial Clinic</a></li>
                        <li><a href="#">Massage Therapy</a></li>
                        <li><a href="#">Cardiology</a></li>
                        <li><a href="#">precise Digaosis</a></li>
                        <li><a href="#">Abomulance Services</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                    
                </div>
                <div className="col-md-3 col-sm-6">
                    <h2>Subscribe</h2>
                    <form>
                        <input type="email" placeholder="Enter Email" />
                        <button type="submit">Subscribe now</button>
                    </form>
                    <ul className="social">
                        <li><a href="#"><img src={facebook} /></a></li>
                        <li><a href="#"><img src={instagram} /></a></li>
                        <li><a href="#"><img src={twitter} /></a></li>
                        <li><a href="#"><img src={linkedin} /></a></li>
                    </ul>
                    
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <span>Copyright © 2022 Design & Developed by ThemeTrades</span>
                    </div>
                </div>
            </div>
        </div>
       </footer>
    )
}

export default Footer;


