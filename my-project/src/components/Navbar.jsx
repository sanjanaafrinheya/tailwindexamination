import React, { useState } from 'react'
import logo from "../assets/Logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  let [show ,setShow]= useState(false)
  let handleShow = ()=>{
    setShow(!show)
  }
  return (
  
    <nav className='bg-[#0D0D0D] p-3'>
 <div className="max-w-container mx-auto"> 
<div className="flex items-center justify-between flex-wrap">
  <div className="w-[15%]">
    <img src={logo}alt="" />
  </div>
  <div className="w-[80%] items-center">
    < ul className={`lg:flex lg: gap-x-12 lg:static ${show==true ? "bg-[#0D0D0D]  absolute left-0 top-[40px] transition ease-in-out duration-500 w-full text-center py-5 lg:py-0 " :" absolute  left-0 top-[-290px] ease-in-out duration-500 w-full text-center justify-end" }`}>
      <li className='text-white font-sans font[16px] py-2 lg: p-2 hover:text-[red] ease-in-out duration-300 uppercase'>Home</li>
      <li  className='text-white font-sans font[16px]  py-2 lg:p-2 hover:text-[red] transition ease-in-out duration-300  uppercase'>About Us</li>
      <li  className='text-white  font-sans font[16px]  py-2  lg:p-2 hover:text-[red] transition ease-in-out duration-300  uppercase'>Sermon</li>
      
      <li  className='text-white  font-sans font[16px] py-2  lg:p-2  hover:text-[red] transition ease-in-out duration-300  uppercase'>blog</li>
     <li className=' text-[black]  font-sans font[16px] py-2 bg-[#FFD2A4] lg:p-2  hover:text-[red] transition ease-in-out duration-300 hover:bg-[white] inline-block p-3 rounded-xl  uppercase'>Contact us</li>
    </ul>
  </div>
  <div className="w-[10%] justify-end">



  </div>
  <div className="lg:hidden" onClick={handleShow}>
    {show==true ? <RxCross1 className='text-[white]' /> :  <FaBars  className='text-[white]'/>}
 
  
  </div>
 
</div>
 </div>
    </nav>

  )
}

export default Navbar