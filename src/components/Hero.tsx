'use client'

import { images } from "@/assets/assets"
import Image from "next/image"
import { Button } from "./ui/button"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { ReactTyped } from "react-typed"
import { motion } from "motion/react"


const Hero = () => {
  return (
   <section className="bg-primary min-h-screen md:min-h-[70%] lg:min-h-screen px-5 md:px-10 md:py-12 lg:px-24 lg:py-24 py-12 flex flex-col flex-col-reverse md:flex-row items-center justify-between gap-y-5 md:gap-y-10 transition duration-300 ease-in-out">
       <motion.div 
         initial={{ opacity: 0.4, x: -800 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 1, ease: "easeInOut" }}
       
       className="basis-1/2 space-y-5">
       <div className=" space-y-5 relative text-center md:text-left">
         <h1 className="text-4xl md:text-5xl leading-[1.5] uppercase text-white font-semibold text-center md:text-left">I am <span className="text-secondary block  text-3xl md:text-5xl">
          <ReactTyped 
           strings={['Christopher Ituma']}
           typeSpeed={100}
           backSpeed={150}
           showCursor={false}
          
          />
          </span></h1>
         <p className="text-white text-lg">A Fullstack Web Developer specializing in turning ideas into performant and user-friendly web applications. From pixel-perfect frontends to powerful backends, I bridge design and functionality to deliver seamless digital experiences.
</p>
         <Button className="mt-4">Get In Touch</Button>
         </div>
         <div className="mt-10 lg:absolute lg:bottom-20 border-t-1 pt-3 ">
          <p className="text-xl text-white flex items-center justify-center md:justify-start gap-x-4">Let&apos;s Connect - <span className="flex gap-x-2 cursor-pointer"> <FaInstagram className="hover:text-secondary"/> <FaGithub className="hover:text-secondary"/> <FaLinkedin className="hover:text-secondary"/> </span> </p>
         </div>
       </motion.div>
       <motion.div
       initial={{scale: 0.5, opacity: 0.6}}
       animate={{ opacity: 1 , scale:1}}
       transition={{ duration: 1.5, ease:"linear" }}
       >
        <Image src={images.hero_img} alt="hero image" className="h-60 w-60 md:w-100 md:h-100"/>
       </motion.div>
   </section>
  )
}

export default Hero