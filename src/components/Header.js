import React, { useState } from 'react'
import {BsFillClipboardCheckFill,BsBellFill} from 'react-icons/bs'
import {FaTasks} from 'react-icons/fa'
import {AiOutlineMenu} from 'react-icons/ai'
import {BiLogoBlogger} from 'react-icons/bi'
import { RxCross1 } from 'react-icons/rx'
import {MdQuestionAnswer} from 'react-icons/md'
import robot from './robot.jpg'

function Header() {
    const [toggle,setToggle] = useState(false);
    return (
        <div className='flex relative justify-between py-5 shadow-md px-5 items-center bg-white'>
            <div>
                <h1 className='text-[24px] font-bold font-poppins'>InternBrand</h1>
            </div>
            <div className='items-center cursor-pointer justify-between hidden md:gap-4 md:inline-flex'>
                <BsFillClipboardCheckFill />
                <p className='text-violet-600 font-poppins'>Browse Listings</p>
                <FaTasks />
                <p className='text-gray-500 font-poppins'>Application History</p>
                <BiLogoBlogger />
                <p className='text-gray-500 font-poppins'>Blog</p>
                <MdQuestionAnswer />
                <p className='text-gray-500 font-poppins'>Contact Us</p>
            </div>
            <div className='flex gap-2 items-center'>
                <BsBellFill />
                <img src={robot} className='h-10 w-10 rounded-full'></img>
                <button className='md:hidden sm:inline-flex' onClick={()=>{setToggle(true)}}><AiOutlineMenu className='h-6 w-6'/></button>
            </div>
            {toggle && (
                <div className='absolute top-14 right-10 bg-white p-6 z-10 outline outline-1 rounded-md space-y-8'>
                    <button onClick={()=>{setToggle(false)}}><RxCross1 className='absolute top-4 right-4'/></button>
                    <a><p>Browse Listings</p></a>
                    <a><p>Application History</p></a>
                    <a><p>Blog</p></a>
                    <a><p>Contact Us</p></a>
                </div>
            )}
        </div>
    )
}

export default Header
