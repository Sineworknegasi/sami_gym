import React from 'react'
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import './Mobile_app.css'

const Mobile_app = () => {
  return (
    <section className='Mobile_app'>
        <img src="https://shivaaythemes.in/fithub-demo/assets/images/mobile.png" alt="" className='app_img' />
        <div className='circle1'>1</div>
        <div className='circle2'>2</div>
        <div className='Download_theApp'>
            <h2>DOWNLOAD APP</h2>
            <h1>Get advice on gym & Fitness App</h1>
            <p>mauris vitaa quam tincidunt sollicitudin sapien nec. tincidunt urna. integer commodo iorem</p>
            <div className='download_btn'>
                <button className='Apple'>
                    <FaApple className='icons' />
                    <div>
                        <p>Available on</p>
                        <strong>App Store</strong>
                    </div>
                </button>
                <button className='PlayStore'>
                    <BiLogoPlayStore  className='icons'/>
                    <span>
                        <p>Available on</p>
                        <strong>Play Store</strong>
                    </span>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Mobile_app