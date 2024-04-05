import React from 'react'
import './Home.css'
import { FaHeart } from "react-icons/fa";

const Home = () => {
  return (
    <section className='Home_container'>
        <div className='Home_Content'>
            <h1><span>THE BEST</span>FITNESS CLUB</h1>
            <h2>Work Hard To Get Better Life</h2>
            <p>Duis mollis felis quis libero dictum vehicula. Duis dictum lorem mi, a faucibus nisi eleifend eu.</p>
            <a href='#' className='Home_btn'>Get Started</a>
        </div>
        <div className='Home_image'>
            <img src="https://www.pngarts.com/files/6/Male-Fitness-PNG-Transparent-Image.png" alt=""/>
            <div className='Calorie'>
              <FaHeart />
              <p>Calorie Burned</p>
              <h1>100Cal</h1>
            </div>
            <div className='HeartRate'>
              <FaHeart />
              <p>Heart Rate</p>
              <h1>100bpm</h1>
            </div>
        </div>
    </section>
  )
}

export default Home