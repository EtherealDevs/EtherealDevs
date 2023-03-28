import React, { Component } from 'react';
import mateo from '../img/mateo.jpg'
import joaco from '../img/joacco.jpeg'
import kevin from '../img/kevin2.jpeg'
import rodri from '../img/rodri.jpeg'

class About2 extends Component {
    render() {
        return (
           <div>
            <div class="mt-8 grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <a
                  class="ml-3 block h-full w-44 sm:w-44 md:w-44 lg:w-3/4 rounded-xl border border-gray-400 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-fuchsia-200/10"
                  href="/"
                >
                  <div className='text-center'>
                    <img className='relative rounded-full w-4/5' src={mateo}/>
                    <h2 class="mt-4 text-xl font-bold text-white">Mateo Dans</h2>
                  </div>
                </a>
              </div>

              <div>
                <a
                  class="block h-full w-44 sm:w-44 md:w-44 lg:w-3/4 ml-1 rounded-xl border border-gray-400 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-fuchsia-200/10"
                  href="/s"
                >
                <div className='text-center'>
                  <img className='rounded-full w-4/5' src={joaco}/>
                  <h2 class="mt-4 text-xl font-bold text-white">Joaquin Franco</h2>
                </div>
                </a>
              </div>
             
             <div>
             <a
                class="block h-full w-44 sm:w-44 md:w-44 lg:w-3/4 ml-3 rounded-xl border border-gray-400 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-fuchsia-200/10"
                href="/"
              >
              <div className='text-center'>
                <img className='rounded-full w-3/4' src={kevin}/>
                <h2 class="text-xl mt-4 font-bold text-white">Kevin Reyes</h2>
              </div>
              </a>
             </div>

             <div>
              <a
                  class="block h-full w-44 sm:w-44 md:w-44 lg:w-3/4 ml-1 rounded-xl border border-gray-400 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-fuchsia-200/10"
                  href="/"
                >
                <div className='text-center'>
                  <img className='rounded-full w-4/5' src={rodri}/>
                  <h2 class="mt-4 text-xl font-bold text-white">Rodrigo Zanabria</h2>
                </div>
                </a>
             </div>
            </div>
          </div>
        );
    }
}

export default About2;
