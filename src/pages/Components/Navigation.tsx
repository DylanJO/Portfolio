import { motion, useScroll, useMotionValue, useMotionValueEvent } from 'framer-motion'
import { useEffect, useState } from 'react'

const navVariants = {
    hidden: { backgroundColor: "rgba(247, 237, 219, 0)",
    filter: "drop-shadow(0px 0px 1px rgba(34,34,34,0))",    
    },
    visible: { backgroundColor: "rgba(247, 237, 219, 1)",
            filter: "drop-shadow(0px 0px 1px rgba(34,34,34,0.8))",
            transition: {
                duration: 0.3,
                delay: 0.1
            }
        }
}

const nameVariants = {
    hidden: { opacity: "0"},
    visible: { opacity: "1",
    transition: {
        duration: 0.3,
        delay: 0.15
    }}
}

const Navigation = () => {
    const [ hidden, setHidden ] = useState(true);
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        latest > 0 ? setHidden(false) : setHidden(true)
    });

    return (
        <div className='w-full flex justify-center px-20 pt-3 fixed z-20'>
            <motion.nav
            initial="hidden"
            animate={hidden ? 'hidden' : 'visible'}
            variants={navVariants}
            className=' text-eerie-black font-sans flex w-full font-bold rounded-lg justify-between px-5'>
                <motion.div
                initial="hidden"
                animate={hidden ? 'hidden' : 'visible'}
                variants={nameVariants}
                className='p-4'>
                    <h3 className='text-tangerine font-sans font-bold text-4xl tracking-wider uppercase drop-shadow-[0_1px_0_rgba(34,34,34,0.5)]'>Dylan Oosthuizen</h3>
                </motion.div>
                <ul className='flex p-4 space-x-10 text-3xl tracking-widest items-center font-medium'>
                    <li className='cursor-pointer hover:text-tangerine'><a href='#projects'>Projects</a></li>
                    <li className='cursor-pointer hover:text-tangerine'><a href='#about'>About</a></li>
                    <li className='cursor-pointer'><button className='rounded hover:bg-tangerine bg-eerie-black text-old-lace py-1 px-3 flex tracking-widest'><a href='#contact' className='drop-shadow-[0_1px_0_rgba(34,34,34,0.5)]'>Contact</a></button></li>
                </ul>
            </motion.nav>
        </div>
        
    );
}

export default Navigation;