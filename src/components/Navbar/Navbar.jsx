import React,{useState} from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { FaBlog } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { MdMessage, MdHomeRepairService } from "react-icons/md";
import './Navbar.css';

const Navbar = () => {
  const [Toggle, ShowMenu] = useState(false);
  return (
    <section className='Navbar_section'>
        <nav className="nav">
        <a href="#Home" className="nav__logo">
          Sami<span>Gym.</span>
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item ">
              <a href="/" className="nav__link active-link">
                <FaHome class=" nav__icon"></FaHome>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#Aboutus" className="nav__link">
                <MdMenuBook class="nav__icon"></MdMenuBook>
                AboutUs
              </a>
            </li>
            <li className="nav__item">
              <a href="#Class" className="nav__link">
                <IoFastFood class=" nav__icon"></IoFastFood>
                Classes
              </a>
            </li>
            <li className="nav__item">
              <a href="#Trainer" className="nav__link">
              <MdHomeRepairService class="uil uil-briefcase-alt nav__icon"></MdHomeRepairService>
              Trainer
              </a>
            </li>
            <li className="nav__item">
              <a href="#Blog" className="nav__link">
                <FaBlog  class="uil uil-message nav__icon"></FaBlog>
              Blog
              </a>
            </li>
            <li className="nav__item">
              <a href="#Contactus" className="nav__link">
                <IoIosContacts class="uil uil-message nav__icon"></IoIosContacts>
              Contact us
              </a>
            </li>
          </ul>

          <MdClose class="nav__icon nav__close" onClick={() => ShowMenu(!Toggle)}></MdClose>
        </div>

        <div className="nav__toggle" onClick={() => ShowMenu(!Toggle)}>
            <RiMenu3Fill className="nav__icon"></RiMenu3Fill>
        </div>
      </nav>
    </section>
  )
}

export default Navbar