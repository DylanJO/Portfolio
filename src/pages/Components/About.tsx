import { motion } from 'framer-motion'
import { SiNextdotjs, SiExpress } from "react-icons/si"
import { BiLogoTypescript, BiLogoAdobe } from "react-icons/bi"
import { DiReact, DiHtml5, DiPostgresql} from 'react-icons/di'

const Experience = [
  {
    title: 'Lead Video Automation Engineer: Oliver+',
    duration: 'NOV 2020 - PRESENT',
    description: 'Facilitating in the automation of large quantities of video media for a large multinational corporation client that is produced for several countries, for social media, online video, TV and cinema. Training and leading a team of motion designers to produce these assets across these media types for various durations, aspect ratios and languages'
  },
  {
    title: 'Motion Graphic Designer: Oliver+',
    duration: 'Aug 2020 - Jun 2022',
    description: 'Producing ADHOC motion graphics assets / videos for various large brands to be used for social media and online video platforms'
  },
  {
    title: 'Multimedia Designer: Thwack',
    duration: 'Mar 2020 - Aug 2020',
    description: 'Producing and designing media for various brands to be used on billboards, social media and web design'
  },
  {
    title: 'Web Designer: Prime Visibility',
    duration: 'Jan 2016 - Mar 2020',
    description: 'Designing websites, logos and graphic elements for various small companies'
  },
]

const skills = [ 'Skills', 'React', 'Html/CSS', 'Express js', 'Next js', 'Typescript', 'postgreSQL', 'Adobe creative suite' ]

//most likely a better way to do this
const iconSelect = (index: number) => {
  if (index === 1) {
    return (
      <DiReact/>
    );
  } else if (index === 2) {
    return (
      <DiHtml5/>
    );
  }
  else if (index === 3) {
    return (
      <SiExpress/>
    );
  }
  else if (index === 4) {
    return (
      <SiNextdotjs/>
    );
  }
  else if (index === 5) {
    return (
      <BiLogoTypescript/>
    );
  }
  else if (index === 6) {
    return (
      <DiPostgresql/>
    );
  } else {
    return (
      <BiLogoAdobe/>
    );
  } 
}

const fadeInVariants =  {
   initial: {
    opacity: 0,
    y: 30
   },
   animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      type: "spring",
      stiffness: 75,
    }
   })
}

const About = () => {

    return (
      <section className="w-[100%] bg-light-grey p-10 md:p-20">

        <a id="about" className='top-[-15vh] relative'></a>

        <div className='grid lg:grid-cols-3 space-y-5 lg:auto-rows-[1fr] content-stretch'>

          <div className='col-span-1 mx-2'>

            <div className="drop-shadow-[0_0_1px_rgba(34,34,34,0.8)] rounded-md overflow-hidden bg-cover bg-[url('/Sky-BG2.png')] p-10 md:h-full flex flex-col place-content-around">

              <div className="flex align-middle">
                <h3 className='drop-shadow-[0_1px_0_rgba(34,34,34,0.5)] text-tangerine font-sans font-bold text-7xl tracking-wide pb-5 uppercase self-center'> About <br/> me </h3>
              </div>
              
              <div className='font-Noto justify-center align-middle text-old-lace'>
                <p className='drop-shadow-[0_1px_0_rgba(34,34,34,1)]'>
                    Experienced Multimedia Designer with a demonstrated history of working in the marketing and advertising industry.
                    Skilled in Motion Design, Web development with React, Adobe Creative Suite, and WordPress.
                    Currently working in the automation space to produce large amounts of media for a global clothing brand
                    utilizing motion design, programming, logistics and team leadership skills.
                    Strong arts and design professional with a Bachelor’s Degree focused in Digital Communication and Media/Multimedia from Vega School of Brand Leadership.
                </p>
                <div className='flex py-5 text-old-lace font-sans text-xl'>
                  <button className='uppercase rounded-sm bg-tangerine py-1 px-3 flex tracking-widest'><a href='#contact' className='drop-shadow-[0_1px_0_rgba(34,34,34,0.5)]'>Contact</a></button>
                  <button className='uppercase rounded-sm bg-tangerine mx-3 py-1 px-3 flex tracking-widest'><a href='#contact' className='drop-shadow-[0_1px_0_rgba(34,34,34,0.5)]'>Download CV</a></button>
                </div>
              </div>

              <div className='text-old-lace font-Noto'>
                <h4 className='drop-shadow-[0_1px_0_rgba(34,34,34,1)] font-sans font-medium text-4xl tracking-wide pb-5'>Education</h4>
                <p className='text-lg font-bold drop-shadow-[0_1px_0_rgba(34,34,34,0.5)]'>Vega School</p>
                <p className='drop-shadow-[0_1px_0_rgba(34,34,34,0.5)] pb-3'>Bachelor’s Degree, Digital Communication and Media/Multimedia</p>
                <p className='text-lg font-bold drop-shadow-[0_1px_0_rgba(34,34,34,0.5)]'>Zero To Mastery Academy</p>
                <p className='drop-shadow-[0_1px_0_rgba(34,34,34,0.5)]'>Fullstack React developer course</p>
              </div>

            </div>
          </div>

        

          <div className='col-span-2 mx-2'>
            <div className='drop-shadow-[0_0_1px_rgba(34,34,34,0.5)] bg-old-lace p-10 rounded-md'>
              <h4 className='text-eerie-black font-sans font-medium text-4xl tracking-wide pb-5 self-center'> Experience </h4>
              <ul className='font-Noto'>
                {Experience.map((job, index) => {
                  return (
                    <motion.li
                    className='flex'
                    key={index}
                    variants={fadeInVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true
                    }}
                    custom={index}
                    >
                      <div className={`relative ${index === 0 ? 'mt-3' : 'mt-0'}`}>
                        <span className={`p-1 bg-eerie-black rounded-full h-1 absolute mx-[30%] ${index === 0 ? 'mt-0' : 'mt-3'}`}></span>
                        <div className='flex bg-eerie-black h-full w-[0.05rem] mx-2 justify-center'></div>
                      </div>
                      <div className='align-text-top'>
                        <p className='pl-2 text-lg font-bold text-tangerine drop-shadow-[0_1px_0_rgba(34,34,34,0.5)]'>{job.title}</p>
                        <p className='pl-2 text-md font-medium uppercase'>{job.duration}</p>
                        <p className='pl-2 py-3'>
                          {job.description}
                        </p>
                      </div>
                    </motion.li>
                  )
                })}
              </ul>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-x-4 justify-items-stretch'>
              {skills.map((skill, index) => {
                  return (
                <motion.div variants={fadeInVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true
                }}
                custom={index}
                key={index}
                className='mt-4 bg-tangerine p-10 rounded-md flex justify-center text-old-lace text-center'>
                  { index < 1 ? <h4 className='font-sans font-medium text-4xl tracking-wide self-center drop-shadow-[0_1px_0_rgba(34,34,34,0.5)]'> Skills </h4> :
                  <div className='drop-shadow-[0_1px_0_rgba(34,34,34,0.5)] flex flex-col items-center justify-center text-5xl'>{iconSelect(index)}<p className='font-Noto font-bold text-lg self-center'>{skill}</p></div>}
                </motion.div>
              )
            })}
            </div>
          </div>

        </div>

      </section>
    );
}

export default About;