"use client"

import { skills } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import Heading from './ui/Heading';
import {motion} from 'motion/react';

const Skills = () => {
  return (
    <div className='bg-foreground px-5 md:px-12 lg:px-24 py-24'>
      <motion.div 
      initial={{ opacity: 0.4, y:50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "linear"}}

      className='flex flex-col items-center justify-center'>
        <Heading name="Skills"/>
        <p className='text-lg text-white my-7 text-center lg:max-w-[60%] mx-auto'>Over the past 3+ years, I’ve been learning, building, and solving real-world problems using the technologies below. From personal projects to client work, I’ve applied these tools to create efficient, scalable, and user-friendly web solutions.</p>
      </motion.div>
      <div>
        <div>
          <motion.div 
          initial={{ opacity: 0.7, y:50}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "linear" }}

          className='grid grid-cols-4 md:grid-cols-5 mx-auto place-items-center gap-x-4 gap-y-12 mt-10'>
            {
              skills.map((skill, index)=>(
                <motion.div 
                initial={{ opacity: 0.4, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 3, ease: "linear" , repeat: Infinity, repeatType: "reverse" }}
                key={index}>
                  <Image src={skill.image} alt='' className='w-10 h-10 md:h-15 md:w-15 lg:w-24 lg:h-24'/>
                </motion.div>
              ))
            }
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Skills