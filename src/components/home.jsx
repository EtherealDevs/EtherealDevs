import React from 'react'

export  const home = () => {
  return (
    <section id='home' className='text-center pb-10'>
      <div class="bg-transparent">
        <div class="relative isolate px-6 lg:px-8">
          <div class="mx-auto max-w-2xl py-28 sm:py-28 lg:py-40">
            <div class="mb-30 sm:mb-30 lg:mb-0 sm:flex sm:justify-center">
              <div class="relative mt-4 rounded-full py-1 px-3 text-sm leading-6 text-gray-200 ring-1 ring-white/10 hover:ring-white/20">
              Planta, germina y colecta. Construyendo hoy a medida del mañana.
              </div>
            </div>
            <div>
              <span className='text-5xl sm:text-4xl mt-32 md:mt-32 lg:mt-10 ml-auto mr-auto relative text-center font-bold typin font-align-center font-dev md:text-6xl lg:text-6xl text-gray-300'>Ethereal Devs</span>
                <p className='text-gray-400 mb-16 text-center text-sm mt-32 sm:mt-32 sm:text-sm md:text-lg lg:text-lg '>
                  <span className='font-bold text-2xl'>
                      Bienvenido(a), somos Ethereal Devs <br/>
                  </span> 
                      la forma mas efectiva de potenciar tus
                    <p className='italic'> proyectos </p>
                </p>
                <div className="mb-40 sm:mb-40 md:mb-10 lg:mb-0 animate-bounce-slow ">
                  <a href="#about" className='text-white bg-gradient-to-r from-[#B5B9FF] to-[#2B2C49] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2'>
                    mas informacion
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  )
}
export default home