import { RiHome4Fill } from 'react-icons/ri';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Class from './components/Class/Class';
import Schedule from './components/Schedule/Schedule';
import Trainer from './components/Trainer/Trainer';
import Pricing from './components/Pricing/Pricing';
import OurStatics from './components/Ourstatics/OurStatics';
import Testimonial from './components/Testimonial/Testimonial';
import Mobile_app from './components/Mobile_app/Mobile_app';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Class/>
    <Schedule/>
    <Trainer/>
    <Pricing/>
    <OurStatics/>
    <Testimonial/>
    <Mobile_app/>
    <Blog/>
    <Footer/>
    </>
  );
}

export default App;
