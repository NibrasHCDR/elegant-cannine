import React from 'react'
import Image from 'next/image'
import myImage from '..//../public/images/portada/pet-portada-1.png'

type Props = {}

function Portada({}: Props) {
  return (
    <main className="w-screen h-screen p-24 bg-img bg-cover bg-fixed">

<div className="w-full h-full">

<div className="grid-portada-container h-auto w-auto lg:pt-20 lg:mx-32 pt-32 mx-3">

  <div className="portada-1 flex flex-col justify-center">
     <div className="w-auto h-auto lg:text-start text-center inline:block space-y-6">

          <h1 className="text-[#2F2B1F] lg:text-7xl font-philosopher">Elegant Cannine</h1>
           <h2 className="text-[#2F2B1F] lg:text-2xl font-oreglega">Donde la elegancia se encuentra <br></br>con en el cuidado canino</h2>
         <button className="text-white bg-[#34B1BF] lg:text-2xl rounded-sm p-4 font-philosopher">Explorar 🐾</button>

     </div>
  </div>

   <div className="portada-4 w-full h-full">

  <div className="w-full h-full flex flex-col justify-end items-center">
         <Image
          className="cursor-default h-[800px] w-[800px] lg:pt-32 xl:pt-0" alt="Descripción de la imagen"
          layout='responsive'
          objectFit="cover"
         src={myImage} >
        </Image>
      </div>

 </div>

 </div>


</div>

    </main>
    
  )
}

export default Portada