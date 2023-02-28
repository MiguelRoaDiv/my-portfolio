import React from 'react'
import {  FaGithub, FaLinkedin } from "react-icons/fa"

function About() {
  return (
    <div className='About text-start columns-2 text-lg p-40 font-serif font-light text-slate-100'>
      <p>Soy estudiante de desarrollo web, tengo 23 años y soy de Bogotá - Colombia</p>
      
      <a className='-tracking-2' href="https://github.com/MiguelRoaDiv" class='github' target="_blank">
        <FaGithub size='1.5rem' />
      </a>

      <a  href="https://www.linkedin.com/in/miguel-eduardo-garcía-roa-a0ab61203/" target="_blank">
        <FaLinkedin size='1.5rem' />
      </a>
      
      
     </div>
  )
}

export default About