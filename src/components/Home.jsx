import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import code from "../assets/Binary.png";
import { resume } from '../constant/constant';
import { motion } from 'framer-motion'

function Home() {
    const roles = [
        "MERN STACK DEVELOPER",
        "FRONTEND DEVELOPER",
        "BACKEND DEVELOPER",
        "FREELANCER",
    ];
    const waitTime = 2000;
  return (
    <div id='home' className='flex flex-wrap items-center justify-around bg-[#dcddf8]'>
        <div>
            <div>
                <div className="flex justify-center">
                <div className="bubble2"></div>
                <div className="bubble1"></div>
                <div className="bubble3"></div>
                {/* <div className="bubble4"></div> */}
                <div className="bubble5"></div>
                <motion.h2
                    initial={{ opacity: 0, x: -75 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className={` lg:text-[39px] text-[28px] pt-[20px] font-bold text-black`}>
                    <div>Hey there!</div>
                    I'm <span className="text-[#a898f9] font-extrabold">Muhammad Ahmed,</span>
                </motion.h2>
                </div>
                <div className='py-5 font-bold text-2xl text-center md:text-left'>
                <TypeAnimation
                    sequence={roles.flatMap(role => [role, waitTime])}
                    wrapper="span"
                    // speed={50}
                    repeat={Infinity}
                    />
                </div>
                <div className="flex justify-center px-2">
                 <motion.h4
                    initial={{ opacity: 0, x: -75 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className={`px-6 py-4 text-[14px] uppercase font-semibold text-white bg-[#261e57]`}
                    style={{ letterSpacing: "6px" }}>
                    I create eye-catching websites
                </motion.h4>
                </div>
            </div>
            <div className='flex justify-center gap-2 pt-6'>
                <button className='px-6 py-2 border-none text-xl rounded cursor-pointer bg-[#261e57] hover:bg-[#a09de8] text-white'>
                <a href={resume} target='_blank' rel='noreferrer'>
                    see my resume
                </a>
                </button>
                <button className='px-6 py-2 border-none text-xl rounded cursor-pointer bg-[#261e57] hover:bg-[#a09de8] text-white'>Portfolio</button>
            </div>
        </div>

        <motion.div
            initial={{ opacity: 0, x: 75 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className='col-lg-6 col-md-12 col-12 homeImgDiv d-flex justify-content-center align-items-center'>
            <img src={code} className='w-[500px]' alt="" />
        </motion.div>
    </div>

  )
}

export default Home