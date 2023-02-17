import React from 'react'
import { FaWhatsapp } from "react-icons/fa"

const Contact = () => {
  return (
    <>
    <div className='Contact text-start text-lg p-40 font-serif font-light text-slate-100'>

    </div>
      <a href="https://api.whatsapp.com/send?phone=3142074008&text=Buen%20día,%20quisiera%20más%20información" class="float" target="_blank">
        <FaWhatsapp size='3.7rem' />
      </a>
    </>
  )
}

export default Contact