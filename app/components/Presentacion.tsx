import React from 'react'
import Image from 'next/image'
import myImage from '../../public/images/portada/pet-portada-1.png'
import myImage2 from '../../public/images/portada/pet-2.png'
import myImage3 from '../../public/images/portada/pet-3.png'

type Props = {}

function Presentacion({}: Props) {
  return (
    <div className="w-screen h-auto pt-24 bg-img2 bg-cover">
        <div className="w-full h-auto">

        <div className="grid-Presentacion-container justify-center">
          <div className="Presentacion-1 text-center space-y-4">
             <h1 className="lg:text-5xl font-philosopher">Nuestros Servicios</h1>
             <h2 className="lg:text-2xl font-oreglega">Explora un mundo de cuidado y diversión para tu mascota. <br></br> Nuestros servicios harán sonreír a tu mejor amigo de cuatro patas</h2>
          </div>

          <div className="Presentacion-2 text-center justify-center items-center m-4 space-y-1">
            <div className="h-auto w-auto flex text-center justify-center items-center">
            <Image 
                      className="cursor-default h-[250px] w-[250px] lg:pt-32 xl:pt-0" alt="Descripción de la imagen"
                      layout='intrinsic'
                      objectFit="cover"
                     src={myImage2} 
             />  
            </div>
            <h1 className="lg:text-3xl font-philosopher">Peluquería</h1>   
            <h2 className="lg:text-xl font-oreglega pb-2">Dales a tus peludos amigos un  tratamiento <br></br> VIP con nuestro servicio de peluquería. <br></br> Deja que luzcan como estrellas de cine</h2>  
            <button className="w-14 h-14 border-4 border-[#34B1BF] rounded-full text-[#34B1BF] transition-all duration-300 hover:scale-110 lg:text-3xl font-oreglega hover:text-[#F8D571] hover:border-[#F8D571]">1</button>
          </div>

          <div className="Presentacion-3 text-center justify-center items-center m-4 space-y-1">
          
          <div className="h-auto w-auto flex text-center justify-center items-center">
            <Image 
                      className="cursor-default h-[250px] w-[250px] lg:pt-32 xl:pt-0" alt="Descripción de la imagen"
                      layout='intrinsic'
                      objectFit="cover"
                     src={myImage} 
             />  
            </div>
            <h1 className="lg:text-3xl font-philosopher">Paseo</h1>   
            <h2 className="lg:text-xl font-oreglega pb-2">Mantén a tu perro activo y feliz <br></br> con nuestros paseos en la naturaleza. <br></br> ¡Diversión garantizada para todos!</h2>  
            <button className="w-14 h-14 border-4 border-[#34B1BF] rounded-full text-[#34B1BF] transition-all duration-300 hover:scale-110 lg:text-3xl font-oreglega hover:text-[#F8D571] hover:border-[#F8D571]">2</button>
                
          </div>

          <div className="Presentacion-4 text-center justify-center items-center m-4 space-y-1">
          
          <div className="h-auto w-auto flex text-center justify-center items-center ">
            <Image 
                      className="cursor-default h-[250px] w-[250px] lg:pt-32 xl:pt-0" alt="Descripción de la imagen"
                      layout='intrinsic'
                      objectFit="cover"
                     src={myImage3} 
             />  
            </div>
            <h1 className="lg:text-3xl font-philosopher">Baño & Aseo</h1>   
            <h2 className="lg:text-xl font-oreglega pb-2">Permítenos mimar a tu amigo peludo <br></br> con un baño relajante.  Saldrá oliendo <br></br> y sintiéndose fabuloso.</h2>  
            <button className="w-14 h-14 border-4 border-[#34B1BF] rounded-full text-[#34B1BF] transition-all duration-300 hover:scale-110 lg:text-3xl font-oreglega hover:text-[#F8D571] hover:border-[#F8D571]">3</button>
             
            

          </div>

          </div>

        </div>
    </div>
  )
}

export default Presentacion