import React from 'react'

type Props = {}

function Seccion3({}: Props) {
  return (
    <div className="w-screen h-auto px-24 pb-24">
        <div className="w-full h-full">

            <div className="grid-Seccion3-container bg-[#34B1BF] rounded-sm p-12">

                <div className="Seccion3-1 justify-center items-center text-center">
                 <h1 className="lg:text-5xl text-white font-philosopher">Acerca de Nosotros</h1>
                </div>

                <div className="Seccion3-2 px-32">
                <h1 className="lg:text-2xl font-oreglega text-white">Este sera nuestra descripcion, asi que es necesario que contenga mucha mas informacion respecto a lo que nosotros hacemos como servicio ams que todo para que se logre mostrar de manera definitiva y con el texto extendido ahh me extendi compa</h1>                 
                </div>

                <div className="Seccion3-3">
                    <div className="h-auto w-auto text-center m-4">
                        <h1 className="lg:text-3xl font-philosopher text-white">54</h1>
                        <h1 className="lg:text-xl font-oreglega text-white">Members!</h1>     
                    </div>
                    

                               
                </div>

                <div className="Seccion3-4 border-x-4">
                
                <div className="h-auto w-auto text-center m-4">
                        <h1 className="lg:text-3xl font-philosopher text-white">+ 10,280</h1>
                        <h1 className="lg:text-xl font-oreglega text-white">Mascotas han visitado nuestros services</h1>     
                    </div>
                            
                </div>

                <div className="Seccion3-5">

                <div className="h-auto w-auto text-center m-4">
                        <h1 className="lg:text-3xl font-philosopher text-white">10</h1>
                        <h1 className="lg:text-xl font-oreglega text-white">Recomendacioones</h1>     
                    </div>
                            
                </div>


            </div>

        </div>
        
    </div>
  )
}

export default Seccion3