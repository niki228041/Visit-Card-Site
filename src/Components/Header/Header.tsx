import React, { useState } from 'react'
import "../../index.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import logo from "../../img/logo.svg"

const Header =()=> {
  var [openMenu,setOpenMenu] = useState(false);
  const handleOpenMenu=()=>
  {
    setOpenMenu(!openMenu);
  }


  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const routeChange = (path:string) =>{ 
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
    navigate(path);
  }


  return (
    <div className="w-full bg-black py-10   " >
      <div className=' 2xl:px-96  mx-10 xl:mx-40 flex '>
        <div className='w-full'>
            <div>
              <span className=' text-white text-6xl font-monocode_semibold'>Nikita-Zigfrid Lopocz </span>
            </div>

            <div className='mt-2'>
              <span className=' text-white text-xl '>Full Stack Developer</span>
            </div>
        </div>
        <img className='  h-7' src={logo} />
      </div>
    </div>
  )
}


export default Header
