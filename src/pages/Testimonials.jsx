import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaJs} from "react-icons/fa";
import { BsGithub, BsFillBootstrapFill } from "react-icons/bs";
import { SiVite,  SiVercel, SiNetlify, SiTailwindcss } from "react-icons/si";

const Testimonials = () => {
  return (
    <div className='Testimonials text-center columns-2 text-lg p-40 font-serif font-light text-slate-100 top-6'> 
     S k i l l s    &    T o o l s 
     <p className=' columns-12 text-start  '>
      <FaHtml5 size={40}/> 
      <FaCss3Alt size={40}/> 
      <FaJs size={40}/> 
      <FaReact size={40}/>  
      <SiVite size={40}/> 
      <BsFillBootstrapFill size={40}/> 
      <SiTailwindcss size={40}/>
      <BsGithub size={40}/> 
      <SiVercel size={40}/> 
      <SiNetlify size={40}/> 
      </p>  
      </div>
  )
}

export default Testimonials