import React from 'react'
import { RxGithubLogo } from "react-icons/rx";
import { FaLinkedinIn } from "react-icons/fa";
import { RiVercelLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='bg-[#e7f4ff] w-full p-2 relative'>
        <div className='flex gap-3 justify-center py-2'>
            <div className='border-2 rounded-full p-2 cursor-pointer bg-[#9893f2] hover:bg-[#babaf8] text-white'> 
        <a href='https://github.com/Muhammadahmedanis?tab=repositories'target="_blank" rel="noopener noreferrer">
            <RxGithubLogo size={25} />
        </a>  
            </div>
            <div className='border-2 rounded-full p-2 cursor-pointer bg-[#9893f2] hover:bg-[#babaf8] text-white'>
                <a href='https://www.linkedin.com/in/muhammad-ahmed-88b843202'target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn size={25} />
                </a>
            </div>
            <div className='border-2 rounded-full p-2 cursor-pointer bg-[#9893f2] hover:bg-[#babaf8] text-white'>
                <a href='https://vercel.com/muhammadahmedanis-projects'target="_blank" rel="noopener noreferrer">
                    <RiVercelLine size={25} />
                </a>
            </div>
        </div>
        <div className='flex gap-3 justify-center pb-2 text-[#9893f2] font-semibold'>
            <p>FAQ</p>
            <p>Services</p>
            <p>About</p>
            <p>Project</p>
            <p>Contact</p>
        </div>
        <div className='flex gap-2 justify-center text-[#9893f2] font-semibold'>
            <p>© Ahmed</p>
            <p>| All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer