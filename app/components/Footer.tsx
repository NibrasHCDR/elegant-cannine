"use client"
import { motion } from 'framer-motion'
import React from 'react'
import { FaRegEnvelope } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlineSmartphone } from 'react-icons/md'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiFillYoutube } from 'react-icons/ai'

type Props = {}

const Footer = (props: Props) => {
  return (
    <motion.div className="w-screen h-full bg-img2 bg-cover">

      <div className="w-full h-full">

        <div className="grid-Footer-container">

          <div className="Footer-1 lg:ml-24 lg:my-24 m-8 lg:space-y-16 space-y-4">
             <div className="space-y-8">
                <h1 className="lg:text-5xl text-2xl font-philosopher">Pónte en Contacto</h1>
                <h2 className="lg:text-2xl text-lg font-oreglega">Si deseas más información sobre nuestros servicios, tienes preguntas o deseas reservar una cita para tu mascota, no dudes en ponerte en contacto con nosotros.</h2>
             </div>

             <div className="lg:space-y-5 space-y-2">

                  <div className="flex space-x-4">
                  <FaRegEnvelope className="w-35 h-35 text-[#34B1BF]" size={35}/>
                  <h1 className="lg:text-2xl text-lg font-oreglega">Elegant.cannine@cannines.cl</h1>
                  </div>

                  <div className="flex space-x-4">
                  <MdOutlineSmartphone className="w-35 h-35 text-[#34B1BF]" size={35}/>
                  <h1 className="lg:text-2xl text-lg font-oreglega">+569 40898950</h1>
                  </div>

                  <div className="flex space-x-4">
                  <FaLocationDot className="w-35 h-35 text-[#34B1BF]" size={35}/>
                  <h1 className="lg:text-2xl text-lg font-oreglega">Calle las casas 254, La Serena Chile.</h1>
                  </div>

             </div>

          </div>

          <div className="Footer-2 shadow-lg bg-white border-2 border-[#34B1BF] m-4 lg:my-24 lg:mr-10 xl:mr-32 lg:m-0 md:min-w-[45vh] max-h-[670px] md:mx-auto"> 
          <div className="w-auto md-h-auto md:h-[450px] m-12 block lg:space-y-8 space-y-4 ">

          <h1 className="lg:text-5xl text-2xl font-philosopher">Agenda una cita</h1>
          <input type="text" placeholder=" Tu nombre" className="lg:text-xl text-md font-oreglega border-2 border-[#34B1BF] w-full"></input>
          <input type="text" placeholder=" Tu Email" className="lg:text-xl text-md font-oreglega border-2 border-[#34B1BF] w-full"></input>
          <textarea maxLength={250} placeholder=" Mensaje"  className="lg:text-xl text-md font-oreglega border-2 border-[#34B1BF] w-full min-h-[13vh] max-h-[13vh]"></textarea>
          <div className="grid justify-center items-center">
          <button className="text-white bg-[#34B1BF] lg:text-2xl rounded-xl p-4 font-philosopher transition-all duration-300 hover:scale-105 no-select">Enviar 🐶</button>
          </div>
          

          </div>
              

          </div>

          <div className="Footer-3 bg-[#F8D571] h-auto w-screen">
            <div className="flex m-24 ">

            <div className="space-y-8 block">

              <h1 className="lg:text-5xl font-philosopher">Nuestras Redes</h1>
                  <div className="flex space-x-4">
                  <AiOutlineInstagram className="w-35 h-35 transition-all duration-300 hover:scale-105 hover:text-[#34B1BF]" size={35}/>
                  <AiOutlineWhatsApp className="w-35 h-35 transition-all duration-300 hover:scale-105 hover:text-[#34B1BF]" size={35}/>
                  <AiFillYoutube className="w-35 h-35 transition-all duration-300 hover:scale-105 hover:text-[#34B1BF]" size={38}/>
      
                  </div>

                  <div className="space-y-4">

                  <h1 className="lg:text-5xl font-philosopher">Acerca de</h1>
                  <div className="block">
                  <h2 className="no-select lg:text-2xl text-lg font-oreglega hover:text-[#34B1BF]">Créditos</h2>
                  <h2 className="no-select lg:text-2xl text-lg font-oreglega hover:text-[#34B1BF]">Más información</h2>

                  </div>
            </div>
            </div>

            </div>

            <div className="flex justify-center items-center md:my-8">

            <h1 className="md:text-xl text-sm font-philosopher hover:text-[#34B1BF] no-select">© 2023 XplenDev | Code By Luis Rivera Araya</h1>
           </div>
          </div>
        </div>

      </div>

    </motion.div>
  )
}

export default Footer