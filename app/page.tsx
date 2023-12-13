import Image from 'next/image'
import myImage from '../public/images/portada/pet-portada-1.png'
import Portada from './components/Portada'
import Presentacion from './components/Presentacion'
import Seccion3 from './components/Seccion3'
import Seccion4 from './components/Seccion4'
import Seccion5 from './components/Seccion5'
import Footer from './components/Footer'
import Header from './components/Header'

export default function Home() {
  return (
      <>
      <section className="" id="home">
      <Header />
      </section>

      <section className="" id="portada">
      <Portada />
      </section>

      <section className="" id="presentacion">
      <Presentacion/>
      </section>

      <section className="" id="seccion3">
      <Seccion3/>
      </section>

      <section className="" id="seccion4">
      <Seccion4/>
      </section>

      <section className="" id="seccion5">
      <Seccion5/>
      </section>

      <section className="" id="footer">
      <Footer/>
      </section>






      </>
  )
}
