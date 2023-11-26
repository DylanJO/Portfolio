import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa'
import { DiGithubBadge } from 'react-icons/di'

const Hero = () => {


    return (
        <section className="flex min-h-screen w-[100%] bg-cover bg-[url('/Sky-BG.png')]">
          <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 max-h-screen md:min-h-full w-full overflow-hidden'>
            <motion.div
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={{duration: 0.5, delay: 0.6}}
            className='flex items-end md:items-center'>
              <div className='px-20'>
                <h1 className='text-tangerine font-sans tracking-tight uppercase text-6xl lg:text-9xl py-3 md:py-6 drop-shadow-[0_1px_0_rgba(34,34,34,0.5)]'>Dylan Oosthuizen</h1>
                <h2 className='font-Noto font-thin text-xl md:text-3xl py-3'>Web Developer and Multimedia Designer</h2>
                <div className='flex space-x-3 items-center py-1'>
                  <a className='text-3xl bg-old-lace p-3 drop-shadow-[0_0_1px_rgba(34,34,34,0.5)] rounded-md text-eerie-black hover:text-tangerine' href='https://www.linkedin.com/in/dylan-oosthuizen/'><FaLinkedinIn /></a>
                  <a className='text-3xl bg-old-lace p-3 drop-shadow-[0_0_1px_rgba(34,34,34,0.5)] rounded-md text-eerie-black hover:text-tangerine' href='https://github.com/DylanJO'><DiGithubBadge /></a>
                  <a className='text-3xl bg-old-lace p-3 drop-shadow-[0_0_1px_rgba(34,34,34,0.5)] rounded-md text-eerie-black hover:text-tangerine' href='#contact'><FaEnvelope  /></a>
                </div>
              </div>
            </motion.div>
            <motion.div
            variants={{
                hidden: { opacity: 0, x: 120 },
                visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={{duration: 0.5, delay: 0.6}}
            className='flex items-end justify-end transition-transform	ease-out translate-x-7'>
              <motion.img src='/Portrait.png' className='max-h-full lg:max-h-[80%] w-auto'/>
            </motion.div>
          </div>
        </section>
    );
}

export default Hero;