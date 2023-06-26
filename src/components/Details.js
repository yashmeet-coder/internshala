import React, { useEffect, useState } from 'react'
import robot from './robot.jpg'
import { BsBell, BsClipboardXFill, BsHourglassSplit } from 'react-icons/bs'
import {FaCalendarDay, FaUserCheck, FaUsers, FaWallet} from 'react-icons/fa'
import { BiSolidMedal } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import motions_graphic from './motions_graphic.png'
import tcs from './tcs.png'

const Details = ({ id }) => {
  const [internship, setInternship] = useState(null);
  const date = new Date();
  console.log("invoked");
  useEffect(() => {
    fetch("https://internshala-4.onrender.com/" + new URLSearchParams({
      id: id
    }))
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setInternship(data);
      })
  }, [id])
  return (
    <div className=' mr-8 rounded-lg relative bg-white mt-4 p-8'>
      <div className='text-left flex items-center gap-4 mb-4 font-poppins'>
      {internship?.company==="Xapo Visuals" ? <img src={motions_graphic} className='h-10 w-10' /> : <img src={tcs} className='h-10 w-10' /> }
        <div>
          <h1 className='font-bold text-[20px]'>{internship?.role}</h1>
          <p className='text-[15px] text-gray-500 font-semibold'>{internship?.company}</p>
        </div>
      </div>
      <div className='grid md:max-w-3xl font-poppins grid-cols-auto grid-rows-auto items-center text-left md:grid-cols-4 md:grid-rows-2'>
        <div className="flex items-center gap-2 border-b-2 py-2">
          <BsHourglassSplit  className="text-violet-700"/>
          <div>
            <h1 className="font-bold">{internship?.duration} months</h1>
            <p>Duration</p>
          </div>
        </div>
        <div className="flex items-center border-b-2 py-2 gap-2">
          <BiSolidMedal  className="text-violet-700"/>
          <div>
            <h1 className="font-bold">{internship?.experience}</h1>
            <p>Experience</p>
          </div>
        </div>
        <div className="flex items-center border-b-2 py-2 gap-2">
          <FaWallet  className="text-violet-700"/>
          <div>
            <h1 className="font-bold">{internship?.stipend}</h1>
            <p>Stipend</p>
          </div>
        </div>
        <div className="flex items-center border-b-2 py-2 gap-2">
          <MdLocationOn  className="text-violet-700"/>
          <div>
            <h1 className="font-bold">{internship?.location}</h1>
            <p>Location</p>
          </div>
        </div>
        <div className="flex items-center py-2 gap-2">
          <FaCalendarDay  className="text-violet-700"/>
          <div>
            <h1 className="font-bold">9 days ago</h1>
            <p>Posted</p>
          </div>
        </div>
        <div className="flex items-center py-2 gap-2">
          <BsClipboardXFill  className="text-violet-700"/>
          <div>
            <h1 className="font-bold">{internship?.ends_in} days</h1>
            <p>Ends in</p>
          </div>
        </div>
        <div className="flex items-center py-2 gap-2">
          <FaUserCheck  className="text-violet-700"/>
          <div>
            <h1 className="font-bold">{internship?.open_positions}</h1>
            <p>Open Positions</p>
          </div>
        </div>
        <div className="flex items-center py-2 gap-2">
          <FaUsers  className="text-violet-700"/>
          <div>
            <h1 className="font-bold">{internship?.applicants}</h1>
            <p>Total Applicants</p>
          </div>
        </div>
      </div>
      <div className='flex items-center mt-6 gap-4 flex-wrap'>
        {internship?.skills.map((skill) => (
            <span className='px-2 py-1 bg-gray-300 rounded-full items-center font-semibold'>{skill}</span>
        ))}
      </div>
      <div className='text-left mt-6'>
        <h1 className='font-bold'>About Us</h1>
        <p>{internship?.about}</p>
      </div>
      <div className='text-left mt-6'>
        <h1 className='font-bold'>Requirements</h1>
        {internship?.requirements.map((element)=>(
          <li>{element}</li>
        ))}
      </div>
      <div className='text-left mt-5'>
        <h1 className='font-bold'>Responsibilities</h1>
        {internship?.responsibilities.map((element)=>(
          <li>{element}</li>
        ))}
      </div>
      <button className='px-6 py-2 bg-violet-600 text-white font-bold mt-6 rounded-full'>Apply Now</button>
      <div className='absolute top-0 right-0 px-10 py-4 font-poppins font-bold text-violet-600 rounded-bl-full bg-violet-100 hidden md:inline-flex'>IT Services</div>
      <h1 className='font-poppins font-bold text-[16px] text-violet-600 text-left'>Visit Website</h1>
    </div>
  )
}

export default Details
