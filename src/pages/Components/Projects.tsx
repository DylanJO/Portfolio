import { motion, useMotionValue } from "framer-motion"
import { useEffect, useRef, useState } from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import { DiGithubBadge, DiReact } from 'react-icons/di'

const featuredImages = [
  {
    img: 'Slider-2.png',
    title: 'Workout app',
    description: 'An app to create and edit workouts with sets, reps and a rest timer. Additionally has stats for tracking progression with charts, saving the data once a workout has been completed',
    github: '',
    live: ''
  },
  {
    img: 'Slider-1.png',
    title: 'Facial recognition app',
    description: 'An app that detects faces within an image supplied by the user with a link using the ClarifAI API and keeps track of the number of entries submitted by each user',
    github: 'https://github.com/DylanJO/Facial-Recognition-App',
    live: 'https://facial-recognition-app.onrender.com/'
  },
  {
    img: 'Slider-2.png',
    title: 'Roguelite Deckbuilding game',
    description: 'A basic roguelite deckbuilding game inspired by Slay the spire and monster train',
    github: '',
    live: ''
  }
];
const Projects = () => {

  const [ current, setCurrent ] = useState(1)
  const sliderRef = useRef<HTMLDivElement>(null)
  const slidesRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0);

  const onPrevClick = () => {
    current > 0 ? setCurrent(current - 1) : setCurrent(featuredImages.length - 1)
  }

  const onNextClick = () => {
    current < featuredImages.length - 1 ? setCurrent(current + 1) : setCurrent(0)
  }
  
  useEffect(() => {
  }, [])

    return (
        <section className="flex flex-col w-[100%] bg-old-lace text-eerie-black py-20">
          <a id="projects" className='top-[-15vh] relative'></a>
          <div className='flex px-20 pb-5'>
            <div className='bg-eerie-black w-full h-[1px] self-center mx-5'></div>
            <h3 className='text-tangerine font-sans font-bold text-7xl tracking-wide uppercase self-center drop-shadow-[0_1px_0_rgba(34,34,34,0.5)]'>Projects</h3>
            <div className='bg-eerie-black w-full h-[1px] self-center mx-5'></div>
          </div>
          <div
          ref={sliderRef}
          className='flex py-5 flex-nowrap justify-center overflow-x-scroll no-scrollbar'>
            <div className="absolute left-10 right-10 flex justify-between z-10 self-center text-4xl">
              <button onClick={onPrevClick}><FaCaretLeft/></button>
              <button onClick={onNextClick}><FaCaretRight/></button>
            </div>
            <motion.div
            className="flex"
            animate={{ x: `calc(-${current * 45}vw + 45vw)`}}
            transition={{ 
              type: "spring",
              stiffness: 40,
              ease: "ease" 
            }}
            >
              {featuredImages.map((project, index) => {
                return (
                  <motion.div
                  ref={slidesRef}
                  key={index}
                  animate={{ opacity: index === current ? 1 : 0.3}}
                  className="rounded-md overflow-hidden grid grid-cols-5 mx-2 min-w-[45vw] drop-shadow-[0_1px_3px_rgba(34,34,34,0.5)]">
                    <div className='col-span-2 flex'>
                      <img src={project.img} className='object-cover min-h-[300px] pointer-events-none' alt="" />
                    </div>
                    <div className='bg-old-lace p-10 col-span-3 flex flex-col '>
                      <h4 className='font-sans font-medium text-4xl tracking-wide'>{project.title}</h4>
                      <p className='font-Noto py-3'>{project.description}</p>
                      <div className='flex h-full align-middle'>
                        <a className='self-end text-4xl hover:text-tangerine' href={project.live}><DiReact /></a>
                        <a className='self-end text-4xl hover:text-tangerine' href={project.github}><DiGithubBadge /></a>
                      </div>
                    </div> 
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>
    );
}

export default Projects;