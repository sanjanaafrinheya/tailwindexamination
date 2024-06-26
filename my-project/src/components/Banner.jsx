import React from 'react'
import bann from "../assets/bann.jpg"
const Banner = () => {
  return (
    <div style={{ backgroundImage: `url(${bann})` }} className='py-[100px]'>
      <div className="max-w-container mx-auto">
        <h4 className='text-white font-[16px] font-sans'>Welcome to our CHURCH</h4>
        <h2 className='text-white text-6xl font-sans w-1/2'>Become a part of our community</h2>
        <button className='px-[64px] py-[20px] bg-[#FFD2A4] rounded-xl my-4 font-sans'>Learn More</button>
        <p className='text-[white] font-sans text-[16px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
      </div>
    </div>
  )
}

export default Banner