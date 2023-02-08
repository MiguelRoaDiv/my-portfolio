import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

 return (
    <nav className=' relative flex justify-between items-center bg-purple-300 p-4 '>

        <p>Logo</p>

        <ul className=' hidden justify-around space-x-4 sm:flex'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/projects"}>Projects</Link></li>
            <li><Link to={"/testimonials"}>Testimonials</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
        </ul>

        <div className='block sm:hidden' onClick={() => setIsOpen(!isOpen)}>
            <FaBars/>
        </div>

        { isOpen &&(
            <ul className=' block absolute top-14 right-0 bg-purple-300  text-right p-4 sm:hidden'>
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