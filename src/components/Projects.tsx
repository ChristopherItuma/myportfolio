"use client"
import React from 'react'
import Heading from './ui/Heading'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { ProjectsUp } from '@/data/Projects';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';


const Projects = () => {
  return (
    <section className='px-5 md:px-12 py-24 lg:px-24 bg-foreground relative' id="projects">
       <div className="custom-shape-divider-top-1752342995">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill3"></path>
    </svg>
</div>
      <div className='mb-10'>
        <Heading name='Projects'/>
      </div>
      <AnimatePresence>
        <motion.div
         initial={{ opacity: 0.4, y:50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "linear"}}
        >
      <Swiper className='mt-12'
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={50}
      pagination={{ clickable: true }}
      autoplay={{delay:3000, disableOnInteraction:false}}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}

      >
       {
         ProjectsUp.map((project)=>(
          <SwiperSlide key={project.id} className='p-2 md:p-6 rounded-lg shadow-lg hover:opacity-40 hover:bg-white transition-opacity group'>
            <Image src={project.img} alt='' className='rounded-t-lg'/>
            <h3 className='text-xl font-semibold mb-2 uppercase mt-8 text-white group-hover:text-secondary'>{project.title}</h3>
            <p className='text-white/50 group-hover:text-foreground'>{project.description}</p>
            {/* <Link href='/'>
              <button className='mt-4 px-4 py-2 bg-white text-secondary rounded hover:bg-blue-600 transition-colors group-hover:bg-secondary/90 group-hover:text-white cursor-pointer'>
                View Project
              </button>
            </Link> */}
          </SwiperSlide>
         ))
       }
        
        {/* Add more SwiperSlides as needed */}
      </Swiper>
      </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default Projects