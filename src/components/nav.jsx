import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

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
    <Disclosure as="nav" className="bg-zinc-900 opacity-50 z-30 sticky top-0" >
      {({ open }) => (
        <nav>
          <div className="items-center mx-auto max-w-7xl h-20 px-2 sm:px-8 lg:px-10">
            <div className=" h-14 items-center">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 font-sans text-white mr-10">
                  <img src="/eth.png" class="absolute h-20" alt="Ethereal"/>
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
                    <div className='relative mt-2 justify-end'>
                      <label for="AcceptConditions" class="relative justify-end h-8 w-14 cursor-pointer">
                        <input
                          type="checkbox"
                          id="AcceptConditions"
                          class="peer sr-only [&:checked_+_span_svg[data-unchecked-icon]]:hidden [&:checked_+_span_svg[data-checked-icon]]:block"
                        />

                        <span
                          class="absolute inset-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition peer-checked:translate-x-6 peer-checked:text-green-600"
                        >
                          <svg
                            data-unchecked-icon
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>

                          <svg
                            data-checked-icon
                            xmlns="http://www.w3.org/2000/svg"
                            class="hidden h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>

                        <span
                          class="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"
                        ></span>
                      </label>
                    </div>
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
