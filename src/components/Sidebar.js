import React, { useEffect, useState } from 'react'
import motions_graphic from './motions_graphic.png'
import tcs from './tcs.png'
import { BsBell, BsBookmark, BsFillClipboardXFill, BsHourglassSplit, BsPeopleFill, BsSearch } from 'react-icons/bs'
import { BiSearch, BiSolidWallet } from 'react-icons/bi'
import { RxCross1 } from 'react-icons/rx'
import Details from './Details'
import { FaFilter } from 'react-icons/fa'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


const Sidebar = () => {
  const [internships, setInternships] = useState([]);
  const [filter, setFilter] = useState(false)
  const [location, setLocation] = useState([]);
  const [duration, setDuration] = useState([]);
  const [stipend, setStipend] = useState([]);
  const marks = [1, 2, 3, 4, 5, 6, 7]

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setInternships(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const [view, setView] = useState(false);
  const [id, setID] = useState(null);

  const filterResults = () => {
    console.log(location);
    console.log(duration.val);
    var filtered = internships.filter(function (internship) {
      return internship.location === location && internship.duration === duration.val
    })
    console.log(filtered);
    setInternships(filtered);
  }

  const displayDetails = (id) => {
    console.log(id);
    setView(true);
    setID(id);
  }
  return (
    <div className='xs:flex-col md:flex gap-8 relative'>
      <div>
        <div className='flex py-2 mt-4 ml-4 text-violet-700 font-poppins font-bold gap-2 bg-white max-w-sm rounded-lg justify-evenly'>
          <button className='text-violet-700 hover:text-white hover:bg-violet-600 px-4 py-2 rounded-lg'>Popular</button>
          <button className='text-violet-700 hover:text-white hover:bg-violet-600 px-4 py-2 rounded-lg'>Newest</button>
          <button className='text-violet-700 hover:text-white hover:bg-violet-600 px-4 py-2 rounded-lg'>Bookmarks</button>
        </div>
        {internships.map((internship) => (
          <div className='py-3 px-3 mt-4 ml-4 font-poppins bg-white max-w-md rounded-lg items-center gap-1 hover:shadow-violet-700 hover:shadow-sm cursor-pointer' onClick={() => { displayDetails(internship._id) }}>
            <div className='flex justify-between'>
              <div className='text-left mb-5'>
                <h1 className='font-bold text-[16px]'>{internship.role}</h1>
                <p className='font-semibold text-[14px] text-gray-500'>{internship.company}</p>
            </div>
            <BsBookmark />
            </div>
            <div className='flex mb-5 items-center'>
              {internship.company === "Xapo Visuals" ? <img src={motions_graphic} className='h-8 w-8 mr-3' /> : <img src={tcs} className='h-5 w-5 mr-3' />}
              <div className='flex bg-gray-100 rounded-full px-2 divide-x-2 divide-gray-300 border-2 border-gray-300 items-center'>
                {internship.skills.slice(0, 3).map((skill) => (
                  <span className='text-[14px] font-semibold px-2'>{skill}</span>
                ))}
                <span className='text-[14px] px-2'>+2</span>
              </div>
            </div>
            <div className='grid gap-y-2 grid-rows-2 grid-cols-2'>
              <div className='flex items-center gap-1'>
                <BsHourglassSplit className='text-violet-700' />
                <span className="text-[14px] font-bold">{internship.duration} months</span>
              </div>
              <div className='flex items-center gap-1'>
                <BiSolidWallet className='text-violet-700' />
                <span className="text-[14px] font-semibold">{internship.stipend}</span>
              </div>
              <div className='flex items-center gap-1'>
                <BsPeopleFill className='text-violet-700' />
                <span className="text-[14px] font-semibold">{internship.applicants} Applicants</span>
              </div>
              <div className='flex items-center gap-1'>
                <BsFillClipboardXFill className='text-violet-700' />
                <span className="text-[14px] font-semibold">Ends in {internship.ends_in} days</span>
              </div>
            </div>

          </div>
        ))}
      </div>
      <div className='max-w-sm md:max-w-5xl grow flex-col mt-4'>
        <div className='flex items-center mr-4 gap-4'>
          <div className='flex grow rounded-lg bg-white pl-3'>
            <input type='text' placeholder='Search' className=' bg-white outline-none grow' />
            <button className='bg-violet-600 py-5 px-6 rounded-r-lg text-white'><BsSearch /></button>
          </div>
          <button onClick={() => { setFilter(true) }}><FaFilter className='h-[25px] w-[25px] text-violet-600' /></button>
        </div>
        {/* <h1>hiii</h1> */}
        {view ? <Details id={id} /> : null}
      </div>
      {filter && (
        <div className='absolute top-16 right-28 bg-white text-left p-8 font-poppins drop-shadow-lg z-1'>
          <h1 className='text-center mb-4 font-bold text-[20px] text-violet-600'>Filters</h1>
          <button onClick={() => { setFilter(false) }}><RxCross1 className='absolute top-8 right-4' /></button>
          <div className='flex gap-8'>
            <div className='float-left'>
              <label className='block font-bold text-[16px] mb-2' for="category">Category</label>
              <input className='block outline outline-1 rounded-md p-1' type='text' id="category" />
            </div>
            <div className='float-left'>
              <label className='block font-bold text-16px mb-2' for="skills">Skills</label>
              <input className='block outline outline-1 rounded-md p-1' type='text' id="skills"></input>
            </div>
          </div>
          <div className='grid grid-rows-1 grid-cols-2 gap-8 mt-5'>
            <div className='space-y-4'>
              <h1 className='font-bold text-16px mb-2'>Timings</h1>
              <div className='flex items-center gap-2'>
                <input type="checkbox" id="part_time" className='w-[24px] h-[24px]'></input>
                <p className='px-4 py-1 bg-violet-100 rounded-md'>Part Time</p>
              </div>
              <div className='flex items-center gap-2'>
                <input type="checkbox" id="full_time" className='w-[24px] h-[24px]'></input>
                <p className='px-4 py-1 bg-violet-100 rounded-md'>Full Time</p>
              </div>
            </div>
            <div className='space-y-4'>
              <h1 className='font-bold text-16px mb-2'>Type</h1>
              <div className='flex items-center gap-2'>
                <input type="checkbox" id="work_home" className='w-[24px] h-[24px]'></input>
                <p className='px-4 py-1 bg-violet-100 rounded-md'>Work from Home</p>
              </div>
              <div className='flex items-center gap-2'>
                <input type="checkbox" id="in_office" className='w-[24px] h-[24px]'></input>
                <p className='px-4 py-1 bg-violet-100 rounded-md'>In Office</p>
              </div>
            </div>
          </div>
          <div className='flex justify-between mt-4 items-center'>
            <div>
              <h1 className='font-bold text-16px mb-2'>Duration</h1>
              <div className='w-36'>
                <Slider min={0} max={6} dots={true} step={1} dotStyle={{ backgroundColor: "#6838EE", width: "12px", height: "12px", bottom: "-4px" }} activeDotStyle={{ width: "20px", height: "20px", bottom: "-8px" }} marks={marks} onChange={(val) => { setDuration({ val }) }} />
              </div>
            </div>
            <div className='float-right'>
              <label className='block font-bold text-16px mb-2' for="category">Location</label>
              <input className='block outline outline-1 p-1 rounded-md' type='text' id="location" onChange={(e) => { setLocation(e.target.value) }} />
            </div>
          </div>
          <div className='flex justify-between mt-8 items-center'>
            <div>
              <h1 className='font-bold text-16px mb-2'>Stipend</h1>
              <div className='max-w-xl w-36'>
                <Slider min={0} max={6} dots={true} step={1} dotStyle={{ backgroundColor: "#6838EE", width: "12px", height: "12px", bottom: "-4px" }} activeDotStyle={{ width: "20px", height: "20px", bottom: "-8px" }} marks={marks} />
              </div>
            </div>
            <div>
              <h1 className='font-bold text-16px mb-2'>Applicants</h1>
              <div className='max-w-2xl w-40'>
                <Slider min={0} max={6} dots={true} step={1} dotStyle={{ backgroundColor: "#6838EE", width: "12px", height: "12px", bottom: "-4px" }} activeDotStyle={{ width: "20px", height: "20px", bottom: "-8px" }} marks={marks} />
              </div>
            </div>
          </div>
          <div className='flex mt-12 justify-around'>
            <button className='font-poppins text-[16px] font-bold'>Clear all</button>
            <button onClick={filterResults} className='px-10 py-2 text-white font-bold text-[14px] bg-violet-600 rounded-lg'>Apply</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar

