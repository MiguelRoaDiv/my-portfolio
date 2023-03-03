import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaJs} from "react-icons/fa";
import { BsGithub, BsFillBootstrapFill } from "react-icons/bs";
import { SiVite,  SiVercel, SiNetlify, SiTailwindcss } from "react-icons/si";

const Testimonials = () => {
  return (
    <div className='Testimonials text-center  columns-2 text-lg p-40 font-serif font-light text-slate-100 top-6'> 
     S k i l l s    &    T o o l s 
     <p className=' columns-12 text-start'>
      <FaHtml5 size={30}/> 
      <FaCss3Alt size={30}/> 
      <FaJs size={30}/> 
      <FaReact size={30}/>  
      <SiVite size={30}/> 
      <BsFillBootstrapFill size={30}/> 
      <SiTailwindcss size={30}/>
      <BsGithub size={30}/> 
      <SiVercel size={30}/> 
      <SiNetlify size={30}/> 
      </p>  
      </div>
  )
}

export default Testimonials