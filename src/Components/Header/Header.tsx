import React, { useState } from 'react'
import "../../index.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

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
    <div className="w-full bg-mainYellow flex-row flex place-content-between " >
        <div className='bg-black w-full p-10 px-60'>
            <span className=' text-white text-4xl font-monocode'>Nikita-Zigfrid Lopocz (Web Developer)</span>
        </div>
    </div>
  )
}


export default Header
