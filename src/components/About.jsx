import React from 'react';
import pic from "../assets/Programmer.png";
import { FaTag } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaSquareJs, FaNodeJs, FaReact, FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiPostman, SiAntdesign } from "react-icons/si";
import { motion } from 'framer-motion'

const icons = [
  {
    icon: <FaHtml5 size={59} className='hover:text-[#f06529]' />,
    name: "Html",
    bg: "#f06529"
  },
  {
    icon: <FaCss3Alt size={59} className='hover:text-[#2965f1]' />,
    name: "Css",
    bg: "#2965f1"
  },
  {
    icon: <FaBootstrap size={61} className='hover:text-[#7210f5]' />,
    name: "Bootstrap",
    bg: "#7210f5"
  },
  {
    icon: <FaSquareJs size={59} className='hover:text-[#f0db4f]' />,
    name: "JavaScript",
    bg: "#f0db4f"
  },
  {
    icon: <FaReact size={59} className='hover:text-[#61dafb]' />,
    name: "React",
    bg: "#61dafb"
  },
  {
    icon: <RiTailwindCssFill size={59} className='hover:text-[#00bcff]' />,
    name: "Tailwind",
    bg: "#00bcff"
  },
  {
    icon: <FaNodeJs size={59} className='hover:text-[#8cc84b]' />,
    name: "Node",
    bg: "#8cc84b"
  },
  {
    icon: <SiExpress size={59} className='hover:text-[#000000]' />,
    name: "Express",
    bg: "#000000"
  },
  {
    icon: <SiMongodb size={59} className='hover:text-[#47a248]' />,
    name: "Mongo DB",
    bg: "#47a248"
  },
  {
    icon: <SiPostman size={57} className='hover:text-[#ff6c37]' />,
    name: "Postman",
    bg: "#ff6c37"
  },
  {
    icon: <SiAntdesign size={55} className='hover:text-[#F73F50]' />,
    name: "Ant Design",
    bg: "#F73F50"
  }
]

function About() {
  return (
    <div id='about' className='my-2'>
      <h1 className='text-center text-3xl font-bold'>About</h1>
      <div className='flex flex-col md:flex-row flex-wrap justify-around px-6'>
        <motion.div
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }} className='w-full md:w-[37%] md:h-[500px]'>
          <img src={pic} alt="" />
        </motion.div>
        <div className='md:w-[41%]'>
          <motion.div
            initial={{ opacity: 0, x: 75 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }} Name="text-[19px]">
            <h3 className="text-2xl lg:text-[30px] font-semibold text-center line-clamp-2 mb-4">
              Skills
            </h3>
            <div>
              <p className={` text-[16px] text-center mb-2 font-semibold`}>
                Crazy full stack developer who wants to explore every tech stack
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4  mt-10 socials-container">
              {icons.map((val, ind) => (
                <span
                  style={{ "--accent-color": val.bg }}
                  data-social={val.name}
                  key={ind}
                  className="relative text-gray-300 cursor-pointer font-bold"
                >
                  {val.icon}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-x-4">
              <FaTag className="text-yellow-500" />
              <p className="mb-4 pt-4">
                Scalable architectures that grow with your business.
              </p>
            </div>
            <div className="flex items-center gap-x-4">
              <FaTag className="text-yellow-500" />
              <p className="mb-4 pt-1">
                Integrate APIs, auth, databases, and analytics seamlessly.
              </p>
            </div>
            <div className="flex items-center gap-x-4">
              <FaTag className="text-yellow-500" />
              <p className="mb-4 pt-1">
                Optimized code for faster load times and smoother interactions
              </p>
            </div>
            <div className="flex items-center gap-x-4">
              <FaTag className="text-yellow-500" />
              <p className="mb-4 pt-1">
                Develop interactive and responsive user interfaces that engaging front-end experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About