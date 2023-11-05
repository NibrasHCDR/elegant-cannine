import Image from 'next/image'
import myImage from '../public/images/portada/pet-portada-1.png'
import Portada from './components/Portada'
import Presentacion from './components/Presentacion'
import Seccion3 from './components/Seccion3'
import Seccion4 from './components/Seccion4'
import Seccion5 from './components/Seccion5'
import Footer from './components/Footer'

export default function Home() {
  return (
      <>
      <Portada />
      <Presentacion />
      <Seccion3/>
      <Seccion4/>
      <Seccion5/>
      <Footer/>
      </>
  )
}
