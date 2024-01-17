import Image from 'next/image'
import Hero from '@/app/ui/hero'
import Socials from '@/app/ui/social'
import styles from './page.module.scss'


export default function Home() {
  return (
    <>
     <Hero />
     <main>
      <section className={styles.soy_rana_fonk}>
        <div className={styles.main_title}><h1>Soy Rana Fonk</h1></div>
        <div className={styles.presentation}>
          <h2 className={styles.intro}>Amo el entretenimiento. Soy un emprendedor, motor y siempre estoy en búsqueda de proyectos retadores.</h2>
          <p>Actualmente soy productor de contenidos audiovisuales, podcast y creador de contenidos sobre cine, tv y música. También conduzco shows en vivo y soy moderador de charlas en eventos sobre entretenimiento.</p> 
          <p>Creé en 2015 Spoiler Time, uno de los medios sobre cine y series más importantes de Latinoamérica y España. Soy uno de sus directores y me encargo del equipo de redes sociales, las relaciones públicas y las operaciones diarias.</p> 
          <p>En 2023 creamos QueVer.com, un web app donde pueden encontrar en segundos qué película/serie ver y donde verla.</p>
          <p>Desde 2010 y hasta la actualidad estoy enfocado al mundo del entretenimiento, especialmente cine, series de TV, streaming y música.</p>
          <p>Soy productor de podcast para Posta en México desde 2021. Produje los programas Nada que ver y Continuar Viendo, los podcast oficiales en español de Netflix.</p>
          <p>Estuve más de quince años trabajando en la industria de la música como emprendedor en diferentes empresas relacionadas con música e internet.</p>
          <p>Claro, también soy baterista, grabé discos, salí en MTV, giré por todo el continente y al día de hoy, cuando puedo sigo haciendo música. También dirigí un documental sobre los fans de Red Hot Chili Peppers alrededor del mundo. Solo me falta escribir un libro... pronto.</p>
        </div>
        <Socials />
      </section>
     </main>
    </>
  )
}
