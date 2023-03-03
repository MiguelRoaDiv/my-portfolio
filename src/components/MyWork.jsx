import React from 'react'
import {projectData} from '../data/Projectdata'
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const MyWork = () => {
  return (
    <>
     {projectData.map((item, index) => {
        return(
          <div className='work columns-2  content-between font-serif text-center items-center px-4 py-6  text-white'>
            <h1 className=' text-center items-center px-4 py-6'>{item.title}</h1>
            <a className=' text-center items-center px-4 py-6' href={item.subtitle}  target="_blank">Demo</a>
            <p className=' text-center items-center px-4 py-6'>{item.description}</p>
            <a  className=' text-center items-center px-4 py-6' href={item.link} target="_blank"><img className='' src={item.image} alt={item.title} /></a>
           
          </div>
        )
     })}
    </>
  )
}

export default MyWork