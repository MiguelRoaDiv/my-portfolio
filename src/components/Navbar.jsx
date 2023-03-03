import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import logo1 from "../img/logo1.png"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

 return (
    <nav className=' relative flex justify-between items-center font-serif p-4 '>

        <img src={logo1} className="aspect-square w-40" alt="logo" />

        <ul className=' hidden justify-around space-x-4 sm:flex'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/projects"}>Projects</Link></li>
            <li><Link to={"/testimonials"}>Skills</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
        </ul>

        <div className='block sm:hidden' onClick={() => setIsOpen(!isOpen)}>
            <FaBars/>
        </div>

        { isOpen &&(
            <ul className=' block absolute top-24 right-0 bg-black-300  text-right p-4 sm:hidden bg-neutral-900 text-white'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/projects"}>Projects</Link></li>
            <li><Link to={"/testimonials"}>Testimonials</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
        </ul>
        )
        
        }

    </nav>
  )
}

export default Navbar