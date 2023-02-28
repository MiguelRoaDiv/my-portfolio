import React from 'react'
import { FaWhatsapp } from "react-icons/fa"

const Contact = () => {
  return (
    <>

      <div className='Contact text-start text-lg p-40 font-serif font-light text-slate-100'>
        <div class=" container mx-auto my-20 w-1/3 border border-blue-500 bg-white">
          <div class="p-5 space-y-5 shadow-xl">

            <form>
              <div class="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Last Name"
                />
                <input
                  type="email"
                  class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                  placeholder="Email"
                />
                <input
                  type="tel"
                  class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-blue-500 col-span-2"
                  placeholder="Phone"
                />
                <textarea
                  cols="10"
                  rows="5"
                  class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-blue-500 col-span-2"
                  placeholder="Write your message..."
                ></textarea>
              </div>
              <input
                type="submit"
                value="Send Message"
                class="focus:outline-none mt-5 bg-blue-500 px-4 py-2 text-white font-bold w-full"
              />
            </form>
          </div>
        </div>
      </div>
      <a href="https://api.whatsapp.com/send?phone=3142074008&text=Buen%20día,%20quisiera%20más%20información" class="float" target="_blank">
        <FaWhatsapp size='3.7rem' />
      </a>
    </>
  )
}

export default Contact