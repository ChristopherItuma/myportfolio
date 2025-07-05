'use client'

import { images } from "@/assets/assets"
import Image from "next/image"
import { Button } from "./ui/button"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"


const Hero = () => {
  return (
   <section className="bg-primary min-h-screen px-24 flex flex-col md:flex-row items-center justify-between">
       <div className="basis-1/2 space-y-5">
       <div className=" space-y-5 relative">
         <h3 className="text-secondary text-7xl font-semibold">Hello!</h3>
         <h1 className="text-5xl text-white font-semibold">I am <span className="text-secondary">Christopher Ituma</span></h1>
         <p className="text-white text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, molestiae nesciunt et pariatur nam accusamus iure consequuntur quaerat blanditiis, nostrum ducimus facilis dolorum ad consequatur incidunt rem magnam. Alias, nulla!</p>
         <Button className="mt-4">Get In Touch</Button>
         </div>
         <div className="absolute bottom-20 border-t-1 pt-3">
          <p className="text-xl text-white flex items-center gap-x-4">Let&apos;s Connect - <span className="flex gap-x-2 cursor-pointer"> <FaInstagram className="hover:text-secondary"/> <FaGithub className="hover:text-secondary"/> <FaLinkedin className="hover:text-secondary"/> </span> </p>
         </div>
       </div>
       <div>
        <Image src={images.hero_img} alt="hero image"/>
       </div>
   </section>
  )
}

export default Hero