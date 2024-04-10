import React from 'react';
import './Navbar.css';

const toggle = () => {
  const navlink = document.getElementById('navlink');
  const toggles_change = document.querySelector('i');
  navlink.classList.toggle('active');
}

const Navbar = () => {
  return (
    <section>
        <nav className='Navbar'>
            <div className='GymLogo'>
                <a href='/'><img src='https://th.bing.com/th/id/OIG4.V9xxKufuCPWLwrHA4uGH?w=1024&h=1024&rs=1&pid=ImgDetMain' alt='Gym Logo' width={55} /></a>
                <h1>Sami<span>Gym.</span></h1>
            </div>
            <ul className='Nav_links' id='navlink'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">AboutUs</a></li>
                <li><a href="#services">Classes</a></li>
                <li><a href="#portfolio">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className='Mobile_menu' id='menu'>
            <i class="fa fa-bars" aria-hidden="true" onClick={toggle}></i>
            </div>
        </nav>
    </section>
  )
}

export default Navbar