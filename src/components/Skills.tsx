import { skills } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Skills = () => {
  return (
    <div className='bg-foreground px-24 py-24'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-5xl text-secondary font-semibold'>Skills</h1>
        <p className='text-lg text-white my-7 text-center max-w-[60%] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum magnam inventore  explicabo nesciunt Lorem ipsum dolor sit amet..</p>
      </div>
      <div>
        <div>
          <div className='grid md:grid-cols-5 mx-auto place-items-center gap-x-4 gap-y-12 mt-10'>
            {
              skills.map((skill, index)=>(
                <div key={index}>
                  <Image src={skill.image} alt='' className='w-24 h-24'/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills