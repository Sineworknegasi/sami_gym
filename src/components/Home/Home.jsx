import React from 'react'
import './Home.css'
import { FaHeart } from "react-icons/fa";

const Home = () => {
  return (
    <section className='Home_container_section' id='Home'>
      <div className='Home_container'>
        <div className='Home_Content'>
            <h1>THE BEST FITNESS CLUB</h1>
            <h2>Work Hard To <br /> Get Better Life</h2>
            <p>Duis mollis felis quis libero dictum vehicula. Duis dictum lorem mi, a faucibus nisi eleifend eu.</p>
            <a href='#' className='Home_btn'>Get Started</a>
        </div>
        <div className='Home_image'>
          <div className='Calorie'>
            <FaHeart />
            <p>Calorie burned</p>
            <p>1000 cal</p>
          </div>
          <div className='HeartRate'>
            <FaHeart />
            <p>Heart Rate</p>
            <p>100bpm</p>
          </div>
            <img src="https://www.pngarts.com/files/6/Male-Fitness-PNG-Transparent-Image.png" alt=""/>
        </div>
    </div>
    </section>
  )
}

export default Home