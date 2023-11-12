import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navigation from './Components/Navigation'
import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa'
import { DiGithubBadge } from 'react-icons/di'
import Portait from '../../public/Portrait.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <head>
        <title>Dylan Oosthuizen Portfolio</title>
        <meta name="description" content="Portfolio website"/>
        <link rel='icon' href='/portfolio-site/public/favicon.ico'/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono" rel="stylesheet"></link>
      </head>

      <main>
        <Navigation />
        <section className="flex min-h-screen bg-cover bg-[url('../../public/Sky-BG.png')]">
          <div className='grid grid-cols-2 grid-rows-1 min-h-full w-full'>
            <div className='flex items-center justify-center'>
              <div>
                <h1 className='text-tangerine font-sans font-bold uppercase text-8xl py-6'>Dylan Oosthuizen</h1>
                <h2 className='font-Noto text-3xl py-3'>Web Developer and Multimedia Designer</h2>
                <div className='flex space-x-7 items-center py-1'>
                  <a className='text-4xl text-eerie-black hover:text-tangerine' href='https://www.linkedin.com/in/dylan-oosthuizen/'><FaLinkedinIn /></a>
                  <a className='text-4xl text-eerie-black hover:text-tangerine' href='https://github.com/DylanJO'><DiGithubBadge /></a>
                  <a className='text-4xl text-eerie-black hover:text-tangerine' href='#'><FaEnvelope  /></a>
                </div>
              </div>
            </div>
            <div className='flex items-end'>
              <div className="w-full h-full bg-[url('../../public/Portrait.png')] bg-cover bg-no-repeat"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
