import React from 'react'
import Heading from './ui/Heading'
import { Progress } from './ui/progress'
import { Proficiencies } from '@/data/Proficiency'

const Proficiency = () => {
  return (
     <section className='bg-primary px-5 md:px-12 lg:px-24 py-24 relative' id="proficiency">
      <div className="custom-shape-divider-top-1752344746">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill2"></path>
    </svg>
</div>
    <div className='mb-10'>
    <Heading name='Proficiency'/>
    </div>
     <div className='grid md:grid-cols-2 gap-x-20 gap-y-5'>
      {
        Proficiencies.map((proficiency) => (
          <div key={proficiency.id}>
            <p className='text-white'>{proficiency.name}</p>
            <Progress value={proficiency.value}/>
          </div>
        ))
      }
     </div>
   </section>
  )
}

export default Proficiency