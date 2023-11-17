"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import myImage from '../../public/images/header/elegant-canine-logotransparent.png'

type Props = {}

function Header({}: Props) {

  const [isClick, setisClick] = useState(false)

  const toogleNavBar = () => {
    setisClick(!isClick)
  }


  return (
    <nav className="bg-[#F8D571]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 no-select">
            <div className="flex items-center no-select">
              <div className="flex-shrink-0 no-select">
                <Image className="w-35 h-35 no-select" src={myImage} alt={''}>
                  
                </Image>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <a href="/"
                className="text-black hover:bg-[#34B1BF] hover:text-white rounded-lg p-2"
                >
                  Home

                </a>

                <a href="/"
                className="text-black hover:bg-[#34B1BF] hover:text-white rounded-lg p-2"
                >
                  Nosotros

                </a>

                <a href="/"
                className="text-black hover:bg-[#34B1BF] hover:text-white rounded-lg p-2"
                >
                  Servicios

                </a>

                <a href="/"
                className="text-black hover:bg-[#34B1BF] hover:text-white rounded-lg p-2"
                >
                  Contacto

                </a>

              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button 
               className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white
              hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toogleNavBar}>
                {isClick ? (
                  <svg  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor" >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                ) : (
                  <svg  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

            <a href="/"
                className="text-black block hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Home

                </a>

                <a href="/"
                className="text-black block hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Nosotros

                </a>

                <a href="/"
                className="text-black block hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Servicios

                </a>

                <a href="/"
                className="text-black block hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Contacto

                </a>

            </div>

          </div>
        )}
 
    </nav>
  )
}

export default Header