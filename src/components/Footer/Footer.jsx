import React from 'react'
import './Footer.css'
import { WiTime4 } from "react-icons/wi";
import { FaFacebook, FaTwitter, FaInstagram , FaTiktok} from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaGreaterThan } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='footer'>
        <div className='footer_container'>
            <div className='myLogo'>
              <h1>Sami<span> Gym.</span></h1>
              <p>Etiam suscipit fringilla ullamcorper sed malesuada urna nec odio.</p>
              <div className='Programm'>
                <WiTime4 className='Footer_time'/>
                <div>
                  <strong>Monday-Saturday</strong>
                  <p>7:00AM - 10:00PM</p>
                </div>
              </div>
              <div>
                  <strong>Sunday</strong>
                  <p>Rest</p>
                </div>
            </div>
            <div className='Ourlinks'>
              <h3>Our Links</h3>
              <ul>
                <li>
                  <a href='#'>Home</a>
                </li>
                <li>
                  <a href='#'>About</a>
                </li>
                <li>
                  <a href='#'>Services</a>
                </li>
                <li>
                  <a href='#'>Contact</a>
                </li>
              </ul>
            </div>
            <div className='Contact'>
              <h3>Contact Us</h3>
              <ul>
                <li>
                <IoLocation className='FooterIcon'/>
                  <p>
                  DIsaporam, Mekelle <br /> Tigray, Ethiopia
                  </p>
                </li>
                <li>
                  <FaPhone className='FooterIcon'/>
                  <p>
                  +251966855900 <br /> +91 555 234-8765
                  </p>
                </li>
                <li>
                  <IoIosMail className='FooterIcon'/>
                  <p>
                  info@gmail.com <br />services@gmail.com
                  </p>
                </li>
              </ul>
            </div>
            <div className='OurLetter'>
              <h3>Our Newsletter</h3>
              <p>Subscribe to our newsletter and get our newest updates right on your inbox.</p>
              <div className='Footer_mail'>
              <input type='text' placeholder='Enter Address' />
              <button><FaGreaterThan className='Footer_Subs_icon'/></button>
              </div>
            </div>
        </div>
        <div className='black_footer'>
          <p>Copyright © <span className='Sinework'>{new Date().getFullYear()}</span> Sami Gym. All Rights Reserved. Created by <span className='Sinework'>Sinework</span></p>
          <div className='Social_medias'>
            <a href='#www.facebook.com'><FaFacebook /></a>
            <a href='#www.x.com'><FaTwitter /></a>
            <a href='#'><FaInstagram/></a>
            <a href='#'><FaTiktok /></a>
          </div>
        </div>
    </section>
  )
}

export default Footer
