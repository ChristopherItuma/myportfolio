import mowebsys from "@/assets/Experience/mowebsys.png"
import ashtech from '@/assets/Experience/ashtech.jpg'
import delite from '@/assets/Experience/delite-resonance.jpg'
import { StaticImageData } from "next/image";



export interface ExperienceType {
  id: number;
  logo: StaticImageData; // or use StaticImageData if you want strict typing with Next.js Image
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}
export const Experiences: ExperienceType[] = [
  {
    id: 1,
    logo:ashtech,
    title: "Frontend Developer intern",
    company: "Ash tech Solutions",
    location: "Remote",
    startDate: "May 2025",
    endDate: "Present",
    description: "Developed and maintained web applications using React, Typescript and Tailwind CSS. Collaborated with cross-functional teams to deliver high-quality software solutions.",
  },
  {
    id: 2,
    logo:delite,
    title: "Web Developer II",
    company: "D'elite Resonance Company LTD",
    location: "Lagos, Nigeria",
    startDate: "June 2023",
    endDate: "February 2025",
    description: "Designed and implemented user interfaces and backend logic for various client projects. Worked closely with designers to ensure a seamless user experience using wordpress, PHP and Javascript",
  },
  {
    id: 3,
    logo:mowebsys,
    title: "Junior Web developer",
    company: "Mowebsys ICT Solutions",
    location: "Onsite",
    startDate: "March 2021",
    endDate: "January 2023",
    description: "Assisted in the development of internal tools and real world applications. Gained hands-on experience in software development practices, while working with a team of experts",
  },
]