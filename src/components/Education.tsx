import Heading from './ui/Heading'
import React from 'react'
import { EducationList } from '@/data/Education'
import { FaCalendar, FaSchool } from 'react-icons/fa'

const Education = () => {
  return (
    <section className='px-5 md:px-12 lg:px-24 py-24 bg-primary relative'>
      <div className="custom-shape-divider-top-1752342995">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="shape-fill"></path>
    </svg>
</div>
       <div className="custom-shape-divider-bottom-1752342434">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
    </svg>
</div>
      <Heading name="Education" />
      <div className='mt-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-y-10 gap-x-5'>
          {
           EducationList.map((education)=>(
             <div key={education.id} className='bg-foreground py-7 px-10 rounded-md max-w-full md:max-w-[95%] lg:max-w-xl'>
              <div className='border-b-1 border-white/20 pb-5 flex flex-col gap-2'>
              <h3 className="text-secondary md:text-2xl text-xl">{education.title}</h3>
              <h5 className='text-white flex items-center gap-x-3 light-font'><FaSchool /> {education.institution} </h5>
              <p className='text-white flex items-center gap-x-3 light-font'><FaCalendar /> {education.startDate} - {education.endDate}</p>
              </div>
              <div className='text-white py-3 flex flex-col gap-y-3'>
                <p className='light-font w-full lg:w-lg'>{education.description}</p>
                <p className='text-secondary italic text-sm'>{education.location}</p>
              </div>
             </div>
           ))
          }

        </div>
      </div>
    </section>
  )
}

export default Education