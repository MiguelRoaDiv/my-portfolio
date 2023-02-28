import React from 'react'
import MyWork from '../components/MyWork'

const Projects = () => {
  return (
    <>
    <div className="Projects text-start text-lg p-56 font-serif font-light text-slate-100 flex flex-col w-full mb-20">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Aplicaciones & desarrollos 
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Durante mi paso por el mundo del desarrollo y hasta el momento he logrado practicar y ser participe de diferentes proyectos de desarrollo y diseño como los mostrados a continuación.
        </p>
      </div>

      
      <MyWork/>




    </>
    
  )
}

export default Projects