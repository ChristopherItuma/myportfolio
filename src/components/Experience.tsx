'use client'
import { Experiences } from '@/data/Experience'
import React from 'react'
import Image from 'next/image'
import Heading from './ui/Heading'
import {motion, AnimatePresence} from "motion/react"

const Experience = () => {
  return (
   <section className='bg-foreground px-5 md:px-12 lg:px-24 py-24' id="experience">
    <div className='mb-10 md:mb-24'>
    <Heading name='Experiences'/>
    </div>
    <AnimatePresence>
    <div className='flex flex-col lg:flex-row gap-y-10 justify-evenly divide-y lg:divide-y-0 lg:divide-x md:divide-gray-500 divide-gray-500'>
      {
        Experiences.map((experience)=>(
         <motion.div 
           initial={{ opacity: 0.4, y:50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "linear"}}
         key={experience.id} className='flex flex-col items-center text-center gap-y-2 px-4 pb-12'>
          <Image className='h-25 w-25 rounded-full mb-2' src={experience.logo} alt={experience.company}/>
          <h3 className='text-white uppercase text-lg font-semibold'>{experience.company}</h3>
          <h4 className='text-secondary uppercase text-md font-semibold'>{experience.title}</h4>
          <p className='text-white'>{experience.startDate} - {experience.endDate}</p>
          <p className='text-white md:w-sm w-full light-font'>{experience.description}</p>
         </motion.div>
        ))
      }
    </div>
    </AnimatePresence>
   </section>
  )
}

export default Experience