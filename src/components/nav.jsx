import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../img/eth.png'

const navigation = [
  { name: 'Inicio', href: '#home', current: false },
  { name: 'Nosotros', href: '#about', current: false },
  { name: 'Servicios', href: '#marketing', current: false },
  { name: 'Contactanos', href: '#footer', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="sm:bg-transparent md:bg-transparent lg:bg-zinc-900 opacity-50 z-30 sticky top-0" >
    
    
      {({ open }) => (
        <nav>
          <div className="items-center mx-auto max-w-7xl h-20 px-2 sm:px-8 lg:px-10">
            <div className=" h-14 items-center">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                {/* Mobile menu button*/}
                <Disclosure.Button className=" items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
                  <span className="mt-10 sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="ml-60 sm:ml-60 md:ml-10 lg:mr-0  flex flex-sh rink-0 font-sans text-white mr-10">
                  <img src={logo} class="absolute h-20" alt="Ethereal"/>
                </div>
                <div className="ml-10 mt-3 text-center justify-center hidden sm:ml-6 sm:block">
                  <div className="ml-10 flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white focus:text-white focus:bg-gray-700',
                          'rounded-md px-3 py-2 text-lg font-medium ml-64'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
          
        </nav>
      )}
    </Disclosure>
  )
}
