import React from 'react'
import { FaHandsHoldingChild } from "react-icons/fa6";

const Headline = () => {
  return (
    <div className="max-w-container mx-auto">
        <div className="w-full text-center">
            <h4 className='font-sans text-[16px] mt-14 mb-4'>sub-headline</h4>
            < h3 className='text-[48px] font-semibold'>a church that's relevant</h3>
        </div>
        <div className="flex lg:justify-between hover:shadow-[#FFD2A4]">
            <div className="lg:w-[30%] md:w-full sm:w-full sm:justify-center bg-[#FFF5EB] h-[300px]">
                <div className="className='justify-center relative after:absolute after:h-[40px] after:w-[40px]  after:rounded after:content-[''] after:bg-[#FFD2A4]'">
                <FaHandsHoldingChild className=''/>
                </div>
            
                <h4>About us</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="lg:w-[30%] sm:w-full bg-[#FFF5EB] h-[300px]"></div>
            <div className="lg:w-[30%] sm:w-full bg-[#FFF5EB] h-[300px]"></div>
        </div>
    </div>
  )
}

export default Headline