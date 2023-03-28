import React, { Component } from 'react';
import { Accordion } from 'flowbite-react';
import { HiOutlineArrowCircleDown } from "react-icons/hi";

import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'


class Faq extends Component {
    render() {
        return (
          <div className="w-full  px-4 pt-16">
          <h2 className='mb-3 mr-auto ml-auto text-center font-align-center'>
                <span className='text-white relative font-bold text-3xl'>
                Preguntas Frecuentes
                </span>
              </h2>
            <div className="mx-auto w-full rounded-2xl bg-transparent p-2">
              <Disclosure as="div" className="mr-auto ml-auto hover:w-5/6 w-4/5 mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg text-white bg-gradient-to-r from-[#6c70b8] to-[#2B2C49] px-4 py-2 text-left text-sm font-bold  hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span> Los sitios web Se mantienen?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-6 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-300">
                    Si, los sitios web se mantienen, dependiendo del uso que le des y de la cantidad de actualizaciones que van surgiendo desooues de su finalizacion.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mr-auto ml-auto hover:w-5/6 w-4/5 mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg text-white bg-gradient-to-r from-[#6c70b8] to-[#2B2C49] px-4 py-2 text-left text-sm font-bold  hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span> No se como puede ser el diseño de mi sitio web</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-6 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-300">
                    No Importa si no tenes un diseño para presentarnos, podemos analizar tu proyecto y diseñarte uno que tenga tu estilo y presentartelo para discutir sus cambios.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure  as="div" className="mr-auto ml-auto hover:w-5/6 w-4/5 mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg text-white bg-gradient-to-r from-[#6c70b8] to-[#2B2C49] px-4 py-2 text-left text-sm font-bold hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>Donde se almacena mi sitio web?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-6 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-300">
                    Trabajamos con <a className='text-sky-300' href='https://www.hostinger.com.ar/'>Hostinger</a> para el alojamiento de los sitios web.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure  as="div" className="mr-auto ml-auto hover:w-5/6 w-4/5 mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg text-white bg-gradient-to-r from-[#6c70b8] to-[#2B2C49] px-4 py-2  text-left text-sm font-bold hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span> Que pasa si quiero modificar algo en mi pagina?</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-6 w-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-300">
                   En caso de querer hacerlo nos avisas y nosotros nos encargamos de modificarlo, esto lleva un costo a parte.
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>

        );
    }
}

export default Faq;
