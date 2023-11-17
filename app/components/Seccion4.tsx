"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import myImage from '../../public/images/portada/pet-3.png'
import { GiMoneyStack } from 'react-icons/gi'

type Props = {}

function Seccion4({}: Props) {

    const [isClick, setisClick] = useState("Nuestra peluquería")
    const [isClick2, setisClick2] = useState("Mimamos a tus mascotas con servicios excepcionales.")
    const [isClick3, setisClick3] = useState("Expertos en aseo y estilismo. ")
    const [isClick4, setisClick4] = useState("Mascotas felices y radiantes.")

    const toogleNavBar = (text: React.SetStateAction<string>, text2:React.SetStateAction<string>, text3:React.SetStateAction<string>, text4:React.SetStateAction<string> ) => {
      setisClick(text)
      setisClick2(text2)
      setisClick3(text3)
      setisClick4(text4)
    }


  return (
    <div className="w-screen h-screen lg:p-24 bg-img2 bg-cover">
        <div className="w-full h-full">

            <div className="grid-Seccion4-container max-h-full max-w-screen">

                <div className="Seccion4-1">

                    <div className="md:m-12 space-y-8">
                        <h1 className="lg:text-2xl text-lg font-oreglega text-[#2F2B1F]">Entérate de todo!</h1>
                        <h1 className="lg:text-5xl text-2xl font-philosopher text-[#2F2B1F]">¿Como trabajamos?</h1>
                    </div>

                </div>

                <div className="Seccion4-2 md:bg-[#04BF68] rounded-2xl md:w-[250px] md:h-[450px] mx-auto">

                  <div className="md:my-12 space-y-8 w-auto md:grid mx-auto">

                    <div className="space-y-8 md:mx-[15%]">

                    

                    <div className="w-auto h-auto">
                        <button 
                        className="w-14 h-14 border-4 rounded-full transition-all duration-300 hover:scale-110 lg:text-3xl font-oreglega hover:text-[#F8D571] hover:border-[#F8D571] md:text-white"
                        onClick={() => toogleNavBar("Nuestra peluquería","Mimamos a tus mascotas con servicios excepcionales.","Expertos en aseo y estilismo. ","Mascotas felices y radiantes.")}>
                        A
                        </button>

                    </div>

                    <div className="w-auto h-auto">
                    <button 
                    className="w-14 h-14 border-4 rounded-full transition-all duration-300 hover:scale-110 lg:text-3xl md:text-white font-oreglega hover:text-[#F8D571] hover:border-[#F8D571] "
                    onClick={() => toogleNavBar("Registro de mascotas","Garantizamos un servicio excepcional que incluye el registro y ","cuidado de tus compañeros peludos. Expertos en documentación.","Mascotas felices y en regla.")}>
                        B
                        </button>

                    </div>
 
                    <div className="w-auto h-auto">
                    <button 
                    className="w-14 h-14 border-4 rounded-full transition-all duration-300 hover:scale-110 lg:text-3xl md:text-white font-oreglega hover:text-[#F8D571] hover:border-[#F8D571] "
                    onClick={() => toogleNavBar("Paseos para mascotas"," Disfruta de la tranquilidad sabiendo que tus amigos peludos están en buenas manos","  Especialistas en recorridos, bienestar y diversión.","Mascotas felices y llenas de energía.")}>
                        C
                        </button>

                    </div>

                    <div className="w-auto h-auto">
                    <button 
                    className="w-14 h-14 border-4 rounded-full transition-all duration-300 hover:scale-110 lg:text-3xl md:text-white font-oreglega hover:text-[#F8D571] hover:border-[#F8D571]"
                    onClick={() => toogleNavBar("Reserva de horas","Programa citas para paseos, peluquería y más.","Controla su bienestar y felicidad con nosotros.","")}>
                        D
                        </button>

                    </div>

                    </div>


                  </div>

                </div>

                <div className="Seccion4-3 bg-[#34B1BF] lg:w-[90%] h-[375px] rounded-t-2xl md:rounded-b-none rounded-b-2xl">
                    <div className="md:m-12 md:pt-0 md:pl-0 pl-2 pt-2 text-white">

                    <h1 className="lg:text-5xl text-2xl font-philosopher xl:pb-4">{isClick}</h1>  
                    <h2 className="lg:text-2xl text-xl font-oreglega">{isClick2} </h2>
                    <h2 className="lg:text-2xl text-xl font-oreglega">{isClick3} </h2>
                    <h2 className="lg:text-2xl text-xl font-oreglega">{isClick4} </h2>
                    </div>
                               
                </div>

                <div className="Seccion4-5 md:bg-[#F8D571] h-[125px] lg:w-[90%] rounded-b-2xl mx-auto md:mx-0">

                    <div className="space-y-4 md:mx-12 m-7 ml-[7vh]">

                    <button className="text-white bg-[#34B1BF] lg:text-xl rounded-2xl p-4 font-philosopher transition-all duration-300 hover:scale-105 no-select">Reserva tu hora! </button>

                    </div>
                                 
                </div>

                <div className="Seccion4-4 h-full w-auto object-center items-center justify-end hidden sm:inline-flex">

                    <div className="h-auto object-center items-center">

                    <Image 
                      className="cursor-default filter h-auto w-auto" alt="Descripción de la imagen"
                      layout='cover'
                      objectFit="cover"
                     src={myImage} 
             /> 

                    </div>

                </div>

            </div>

        </div>
        
    </div>
  )
}

export default Seccion4