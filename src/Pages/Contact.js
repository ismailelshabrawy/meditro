import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEnvelope, faGlobe, faHeart, faMap, faMobile} from '@fortawesome/free-solid-svg-icons';
import React from "react";
import Banner from "../Components/Banner/Banner";
import './Contact.css';
import FormContact from "./FormContact";



const Contact = ()=>{
    return(
        <>
           <Banner title="Contact" smtitle="contact" />
           <section className="contact-us">
            <div className="container">
                <div className="col-lg-6 col-md-6">
                   <FormContact />

                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="side">
                        <div className="overlay">
                            <h3>Contact Us For Any Information</h3>
                            <li><FontAwesomeIcon icon={faMap} />Location</li>
                            <hr/>
                            <p>2005 Stokes Isle Apt. 896, venaville 10010, USA</p>
                            <li><FontAwesomeIcon icon={faEnvelope} />Email & Phone</li>
                            <hr/>
                            <p>esma3eel18@gmail.com</p>
                            <p>01007384259</p>
                            <li><FontAwesomeIcon icon={faGlobe}/>Follow Us</li>
                            <ul>
                                <li><FontAwesomeIcon icon={faHeart}/></li>
                                <li><FontAwesomeIcon icon={faGlobe}/></li>
                                <li><FontAwesomeIcon icon={faMobile}/></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
           </section>
        </>
    )
}

export default Contact;