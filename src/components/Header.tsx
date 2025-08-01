'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { ImMenu3, ImMenu4 } from 'react-icons/im';
import { AnimatePresence, motion } from "motion/react"



const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  console.log(isMobileMenuOpen)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scroll = document.querySelector('header') as HTMLElement | null;
       const textChange = document.querySelectorAll('nav')
       const textChangeMobile = document.querySelectorAll('ul')
      if (scroll) {
        scroll.style.backgroundColor = scrollPosition > 200 ? 'whitesmoke' : '';
        scroll.style.boxShadow= scrollPosition > 200 ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)2":""
      }
      if(textChange){
        textChange.forEach(text => {
          text.style.color = scrollPosition > 200 ? "black": "";
        });
      }
       if(textChangeMobile){
        textChangeMobile.forEach(text => {
          text.style.color = scrollPosition > 200 ? "black": "";
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className='sticky top-0 z-50 px-5 md:px-12 lg:px-24 py-3 md:py-7 bg-primary transition duration-300 ease-in'>
      <nav className='flex justify-between items-center   text-white'>
        <Link href='/'><h3 className='text-2xl md:text-xl lg:text-3xl uppercase '>Christopher Ituma</h3></Link>
        
        <ul className='hidden md:flex space-x-4 lg:space-x-8 text-md lg:text-lg'>
          <li className='hover:text-secondary'><a href="#hero">Home</a></li>
          <li className='hover:text-secondary'><a href="#skills">Skills</a></li>
          <li className='hover:text-secondary'><a href="#education">Education</a></li>
          <li className='hover:text-secondary'><a href="#experience">Experience</a></li>
          <li className='hover:text-secondary'><a href="#proficiency">Proficiency</a></li>
          <li className='hover:text-secondary'><a href="#projects">Projects</a></li>
        </ul>
        {/* mobile menu hamburger */}
        <div className='md:hidden hover:text-secondary' onClick={()=>setIsMobileMenuOpen((prev)=>!prev)}>
          {isMobileMenuOpen ? <ImMenu4 className='w-10 h-10'/> :   <ImMenu3 className='w-10 h-10'/>}
        </div>      
      </nav>
      {/*Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.ul 
       initial={{ opacity: 0, y: -30 }}
       animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
       exit={{ opacity: 0, y: -30, transition: { duration: 0.2, ease: "easeInOut" } }}
      className="flex flex-col space-y-4 text-md lg:text-lg text-white py-5">
          <li className='hover:text-secondary' id='ginger'><a href="#hero">Home</a></li>
          <li className='hover:text-secondary' id='#mobilemenulink'><a href="#skills">Skills</a></li>
          <li className='hover:text-secondary' id='#mobilemenulink'><a href="#education">Education</a></li>
          <li className='hover:text-secondary' id='#mobilemenulink'><a href="#experience">Experience</a></li>
          <li className='hover:text-secondary' id='#mobilemenulink'><a href="#proficiency">Proficiency</a></li>
          <li className='hover:text-secondary'><a href="#projects">Projects</a></li>
        </motion.ul>
        )}
        </AnimatePresence>
    </header>
  )
}

export default Header