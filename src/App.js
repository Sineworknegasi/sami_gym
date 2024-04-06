import { RiHome4Fill } from 'react-icons/ri';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Class from './components/Class/Class';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Class/>
    </>
  );
}

export default App;
