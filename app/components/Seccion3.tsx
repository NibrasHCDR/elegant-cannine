import React from 'react'

type Props = {}

function Seccion3({}: Props) {
  return (
    <div className="w-screen h-auto lg:px-24 lg:pb-24">
        <div className="w-full h-full">

            <div className="grid-Seccion3-container bg-[#34B1BF] rounded-sm lg:p-12 p-12">

                <div className="Seccion3-1 justify-center items-center text-center">
                 <h1 className="lg:text-5xl text-white font-philosopher">Acerca de Nosotros</h1>
                </div>

                <div className="Seccion3-2 lg:px-32 p-2">
                <h1 className="lg:text-2xl font-oreglega text-white">En <span className="font-philosopher lg:text-xl">Elegant Cannine </span>somos amantes de los animales comprometidos con su bienestar. Ofrecemos paseos llenos de diversión, aseo de calidad y, sobre todo, amor incondicional. Tu confianza en nosotros significa todo. ¡Únete a nuestra familia de amantes de los animales!</h1>                 
                </div>

                <div className="Seccion3-3">
                    <div className="h-auto w-auto text-center lg:m-4">
                        <h1 className="lg:text-3xl font-philosopher text-white">130</h1>
                        <h1 className="lg:text-xl font-oreglega text-white">Miembros Activos!</h1>     
                    </div>
                    

                               
                </div>

                <div className="Seccion3-4 border-x-4">
                
                <div className="h-auto w-auto text-center lg:m-4">
                        <h1 className="lg:text-3xl font-philosopher text-white">+ 10,280</h1>
                        <h1 className="lg:text-xl font-oreglega text-white">Mascotas han visitado nuestros servicios</h1>     
                    </div>
                            
                </div>

                <div className="Seccion3-5">

                <div className="h-auto w-auto text-center lg:m-4">
                        <h1 className="lg:text-3xl font-philosopher text-white">+ 100</h1>
                        <h1 className="lg:text-xl font-oreglega text-white">Recomendaciones</h1>     
                    </div>
                            
                </div>


            </div>

        </div>
        
    </div>
  )
}

export default Seccion3