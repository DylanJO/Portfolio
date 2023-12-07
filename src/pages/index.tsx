import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [ isMobile, setIsMobile ] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }

  useEffect(() => {
    
  })

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
  },[])
  
  return (
    <div>
      <Head>
        <title>Dylan Oosthuizen Portfolio</title>
        <meta name="description" content="Portfolio website"/>
        <link rel='icon' href='/favicon.ico'/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <main className='m-0 p-0'>
        <Navigation isMobile={isMobile}/>
        <Hero />
        <Projects isMobile={isMobile}/>
        <About />
        <Contact />
      </main>
    </div>
  )
}
