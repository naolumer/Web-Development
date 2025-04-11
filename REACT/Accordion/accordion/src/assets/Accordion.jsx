import React, { useState } from 'react'
import '../index.css'
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

function Accordion({title,content}) {
    const [isActive,setIsActive]= useState(false)

    const handleClick = ()=> {
        setIsActive(prev=> !prev)
    }
  return (
    <div className='container2'>
        <div className='title-container' onClick={handleClick}>
            <h3 className='title'>{title}</h3>
            <p  className='icons'>{isActive? <IoIosArrowDropup className='icons'/>:<IoIosArrowDropdown className='icons'/>}</p>
        </div>
        {isActive? 
        <div className='content-container'>
            <p className='content'>{content}</p>
        </div> : "" }
    </div>
  )
}

export default Accordion