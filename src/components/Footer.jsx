import React from 'react'
import { RxGithubLogo } from "react-icons/rx";
import { FaLinkedinIn } from "react-icons/fa";
import { RiVercelLine } from "react-icons/ri";

function Footer() {
  return (
    <div className='bg-gray-400 w-full p-2'>
        <div className='flex gap-3 justify-center py-2'>
            <div className='border-2 rounded-full p-1.5 cursor-pointer hover:bg-purple-400 hover:text-white'>   
                <RxGithubLogo size={23} />
            </div>
            <div className='border-2 rounded-full p-1.5 cursor-pointer hover:bg-purple-400 hover:text-white'>
                <FaLinkedinIn size={23} />
            </div>
            <div className='border-2 rounded-full p-1.5 cursor-pointer hover:bg-purple-400 hover:text-white'>
                <RiVercelLine size={23} />
            </div>
        </div>
        <div className='flex gap-3 justify-center pb-2'>
            <p>FAQ</p>
            <p>Services</p>
            <p>About</p>
            <p>Project</p>
            <p>Contact</p>
        </div>
        <div className='flex gap-2 justify-center'>
            <p>© Ahmed</p>
            <p>| All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer