import Image from 'next/image'
import React from 'react'
import myImage from '../../public/images/portada/pet-3.png'

type Props = {}

function Seccion4({}: Props) {
  return (
    <div className="w-screen h-screen p-24 bg-img2 bg-cover">
        <div className="w-full h-full">

            <div className="grid-Seccion4-container max-h-full max-w-screen">

                <div className="Seccion4-1">

                    <div className="m-12 space-y-8">
                        <h1 className="lg:text-xl font-oreglega text-[#2F2B1F]">Compa aca debemos escribir algo...</h1>
                        <h1 className="lg:text-5xl font-philosopher text-[#2F2B1F]">¿Como trabajamos?</h1>
                    </div>

                </div>

                <div className="Seccion4-2 bg-[#04BF68] rounded-2xl min-w-[250px] h-[450px]">

                  <div className="my-12 space-y-8 w-auto  justify-center items-center grid">

                    <div className="w-auto h-auto">
                        <button className="bg-[#F8D571] text-[#2F2B1F] lg:text-xl rounded-2xl p-4 font-philosopher">miboton</button>

                    </div>

                    <div className="w-auto h-auto">
                        <button className="bg-[#F8D571] text-[#2F2B1F] lg:text-xl rounded-2xl p-4 font-philosopher">miboton</button>

                    </div>
 
                    <div className="w-auto h-auto">
                        <button className=" bg-[#F8D571] text-[#2F2B1F] lg:text-xl rounded-2xl p-4 font-philosopher">miboton</button>

                    </div>

                    <div className="w-auto h-auto">
                        <button className=" bg-[#F8D571] text-[#2F2B1F] lg:text-xl rounded-2xl p-4 font-philosopher">miboton</button>

                    </div>


                  </div>

                </div>

                <div className="Seccion4-3 bg-[#34B1BF] w-auto h-[375px] rounded-t-2xl">
                    <div className="m-12 space-y-4 text-white">

                    <h1 className="lg:text-5xl font-philosopher">To Think About <br></br>Next Move!</h1>  
                    <h2 className="lg:text-2xl font-oreglega">Lore itrum compa compa lore ipsun de la conshedirwisodm lore <br></br> components of lore in the dark souls lore lorea impusmcum <br></br> Loream de la loreana itrumunsignificants of magnificent power </h2>
                    </div>
                               
                </div>

                <div className="Seccion4-5 bg-[#F8D571] h-[125px] rounded-b-2xl">

                    <div className="space-y-4 mx-12 my-7">

                    <button className="text-white bg-[#34B1BF] lg:text-xl rounded-2xl p-4 font-philosopher">Reserva tu hora! </button>

                    </div>
                                 
                </div>

                <div className="Seccion4-4 h-full w-auto object-center items-center justify-end grid">

                    <div className="h-auto object-center items-center">

                    <Image 
                      className="cursor-default h-auto w-auto" alt="Descripción de la imagen"
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