import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
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
        <Navigation/>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  )
}
