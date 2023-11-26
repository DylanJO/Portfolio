import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ mailSent, setMailSent ] = useState(false)
  const formRef = useRef<HTMLFormElement | any>()

  const mailSentFalse = () => {
    setMailSent(false)
  }

  const sendEmail = (e: any) => {
    e.preventDefault();
    const SERVICE_ID: string = process.env.NEXT_PUBLIC_SERVICE_ID ?? ''
    const TEMPLATE_ID: string = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? ''
    const PUBLIC_KEY: string = process.env.NEXT_PUBLIC_PUBLIC_KEY ?? ''

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          console.log('email sent');
          setMailSent(true);
          setTimeout(mailSentFalse, 3000);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

    return (
      <section id="contact" className="flex w-[100%] h-[90vh] bg-eerie-black p-20 align-middle">
        <div className='self-center w-full'>
          <div className='grid grid-cols-2 content-stretch w-full'>
            <div className='text-old-lace font-Noto flex flex-col p-10 mx-2 align-middle place-content-center bg-eerie-black rounded-md drop-shadow-[0_0_1px_rgba(247,237,219,0.8)] gap-y-2'>
              <h4 className='drop-shadow-[0_1px_0_rgba(34,34,34,1)] font-sans font-medium text-4xl tracking-wide pb-5'>Send a message</h4>
              <form ref={formRef} onSubmit={sendEmail} className='flex flex-col gap-y-2'>
                <div className='flex gap-x-5'>
                  <div className='flex flex-col w-full '>
                    <label>Name</label>
                    <input className='bg-eerie-black drop-shadow-[0_0_1px_rgba(247,237,219,0.8)] py-2 rounded-md px-1' type="text" required id="name" name="name" placeholder="Your name"/>
                  </div>
                  <div className='flex flex-col w-full'>
                    <label >Email</label>
                    <input className='bg-eerie-black drop-shadow-[0_0_1px_rgba(247,237,219,0.8)] py-2 rounded-md px-1' type="email" required id="email" name="email" placeholder=""/>
                  </div>
                </div>          

                <label >Company</label>
                <input className='bg-eerie-black drop-shadow-[0_0_1px_rgba(247,237,219,0.8)] py-2 rounded-md px-1' type="text" id="company" name="company" placeholder="Company"/>

                <label>Message</label>
                <textarea className='bg-eerie-black drop-shadow-[0_0_1px_rgba(247,237,219,0.8)] py-2 rounded-md px-1' id="message" name="message" placeholder="Message"></textarea>

                <input className='w-full bg-tangerine rounded-md py-2 mt-2 cursor-pointer' type="submit" value="Submit"/>
                { mailSent && <motion.label
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{duration: 0.4}}>
                  Message sent
                  </motion.label>}
              </form>
            </div>

            <div className='mx-2 flex align-middle justify-center flex-col h-full place-content-around'>
              <h3 className='text-tangerine font-sans font-bold text-7xl tracking-wide pb-5 uppercase self-center'> Get in Touch </h3>  
              <div className="rounded-md overflow-hidden bg-cover bg-[url('/Sky-BG3.png')] h-full flex flex-col p-10 gap-4">
                  <div className='text-3xl font-medium text-eerie-black p-5 flex space-x-4 align-middle bg-old-lace rounded-lg drop-shadow-[0_0_1px_rgba(34,34,34,0.5)]'>
                    <p className='tracking-wider'>Email:</p>
                    <a className='hover:text-tangerine font-Noto font-normal text-2xl' href='mailto:dylanoosthuizen@gmail.com'>dylanoosthuizen@gmail.com</a>
                  </div>
                  <div className='text-3xl font-medium text-eerie-black p-5 flex space-x-4 align-middle bg-old-lace rounded-lg drop-shadow-[0_0_1px_rgba(34,34,34,0.5)]'>
                    <p className='tracking-wider'>Location:</p>
                    <a className='font-normal text-2xl font-Noto'>Johannesburg, Gauteng, South Africa</a>
                  </div>     
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Contact;