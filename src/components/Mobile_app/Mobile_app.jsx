import React from 'react'
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import './Mobile_app.css'

const Mobile_app = () => {
  return (
    <section className='Mobile_app_Section' >
        <div className='Mobile_app'>
        <div className='mobile_image'>
        <img src="https://shivaaythemes.in/fithub-demo/assets/images/mobile.png" alt="" className='app_img' />
        <div className='circle_one'></div>
        <div className='circle2_two'></div>
        </div>
        <div className='Download_theApp'>
            <h2>DOWNLOAD APP</h2>
            <h1>Get advice on gym <br /> & Fitness App</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className='download_btn'>
                <button className='Apple'>
                    <FaApple className='icons' />
                    <div>
                        <p>Available on <br /> <span>Play Store</span></p>
                    </div>
                </button>
                <button className='PlayStore'>
                    <BiLogoPlayStore  className='icons'/>
                    <div>
                    <p>Available on <br /> 
                    <span>Apple Store</span></p>
                    </div>
                </button>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Mobile_app