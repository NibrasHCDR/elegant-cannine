"use client"
import React from 'react'
import { RxScissors } from "react-icons/rx";
import { AiOutlineForm } from "react-icons/ai";
import { MdPets } from "react-icons/md";
// React
import { animate, motion } from "framer-motion"
import Image from 'next/image';
import myImagen from '../../public/images/seccion5/pets-icon-1de3.png'
import myImagen2 from '../../public/images/seccion5/pets-icon-2de3.png'
import myImagen3 from '../../public/images/seccion5/pets-icon-3de3.png'


type Props = {}

function Seccion5({}: Props) {
  return (
    <div className="w-screen h-screen md:p-24 p-4 bg-img2 bg-cover">
        <div className="w-full h-full justify-between items-center grid xl:px-12">

            <div className="grid-Seccion5-container">

                <div className="Seccion5-1 h-auto">
                  
                <div className="md:mx-12 space-y-4">
                        <h1 className="xl:text-5xl lg:text-3xl text-2xl font-philosopher no-select text-[#2F2B1F]">Somos lo que búscas para el Bienestar de tus Mascotas</h1>
                        <h1 className="lg:text-2xl text-xl font-oreglega no-select text-[#2F2B1F]">En <span className="font-philosopher lg:text-xl no-select">Elegant Cannine</span>, entendemos que tus mascotas son parte de tu familia. Por eso, ofrecemos una gama completa de servicios diseñados para satisfacer todas sus necesidades.</h1>
                </div>

                </div>

                <motion.div
                whileHover={{
                    y: -65 
                }}
                 className="Seccion5-3 md:bg-[#04BF68] bg-[#34B1BF] rounded-2xl shadow-xl">

                <div className="m-8 space-y-auto text-white">
                    <RxScissors className="w-35 h-35" size={35}
                    />         
                    <Image className="cursor-default filter absolute grid ml-[10vh]" alt="Descripción de la imagen"
                      layout='cover'
                      objectFit="cover"
                     src={myImagen} 
               ></Image>
                </div> 

                <div className="m-8">
                   <h1 className="xl:text-lg font-philosopher text-white no-select">Estilo<br></br>Único y<br></br> Elegante</h1>

                    </div>
         
                </motion.div>

                <motion.div
                whileHover={{
                    y: -65 
                }}
                 className="Seccion5-4 md:bg-[#34B1BF] bg-[#04BF68] rounded-2xl shadow-xl">

                    <div className="m-8 space-y-auto text-white">
                    <AiOutlineForm className="w-35 h-35" size={35}
                    />
                    <Image className="cursor-default filter absolute grid ml-[10vh]" alt="Descripción de la imagen"
                      layout='cover'
                      objectFit="cover"
                     src={myImagen2} 
               ></Image>
                </div> 

                <div className="m-8">
                   <h1 className="xl:text-lg font-philosopher text-white no-select">Registro<br></br>Propio y<br></br>Único</h1>

                    </div>

                </motion.div>

                <motion.div
                whileHover={{
                    y: -20
                }}
                 className="Seccion5-5 bg-[#34B1BF] rounded-2xl shadow-xl">
                
                <div className="m-8 flex text-white">
                <MdPets className="w-35 h-35" size={35}
                    />
                        <h1 className="xl:text-xl font-philosopher text-white mx-4 mt-1 no-select">Amor y cuidado</h1>  

                <Image className="cursor-default filter absolute grid mt-[5vh] ml-[9.8vh]" alt="Descripción de la imagen"
                      layout='cover'
                      objectFit="cover"
                     src={myImagen3} 
               ></Image>

                    </div> 
                </motion.div>

            </div>

        </div>
        
    </div>
  )
}

export default Seccion5