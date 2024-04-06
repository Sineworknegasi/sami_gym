import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className='AboutUs'>
        <div className='About_img'>
            <div className='circle1'>
                <div className='circle2'>

                </div>
            </div>
        </div>
        <div className='About_content'>
            <h2>About Us</h2>
            <h1>Welcome To Our Fitness Gym</h1>
            <p>Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.</p>
            <p>Integer placerat vitae metus posuere tincidunt. Nullam suscipit ante ac aliquet viverra vestibulum ante ipsum primis</p>
            <div className='About_Couch'>
                <img src="https://th.bing.com/th/id/R.49c279cd1f951a19bbc28de478f6b84a?rik=s3NKjZ3vBpITMA&pid=ImgRaw&r=0" alt="" width={45} height={45} />
                <span className='name'>
                    <h3>Sinework Negasi</h3>
                    <p>Our Couch</p>
                </span>
                <a href='#' className='About_btn'>Explore More</a>
            </div>
        </div>
    </section>
  )
}

export default About
