import React, { useState } from 'react'
import "../index.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const MainInfo =()=> {

  return (
    <div className="w-full flex-row place-content-between  grid grid-cols-2 " >
        <div className='font-monocode   w-full text-2xl pt-20 px-60'>
            Hi there,
            <div className='' />
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            <div className='py-5' />
            It has <span className=' text-blue-500 font-monocode_semibold hover:text-blue-900 transition-all cursor-pointer'>survived</span> not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        </div>
        <div className='  p-10  pt-20 '>
            <div className=''>
                <p className='text-center text-2xl font-monocode_semibold'>Socials</p>
                <p className='  text-center  text-xl font-monocode transition-all hover:text-gray-400 cursor-pointer mt-5'>Socials</p>
                <p className='  text-center text-xl font-monocode transition-all hover:text-gray-400 cursor-pointer'>Socials</p>
            </div>
            <div className='mt-5'>
                <p className=' text-center text-2xl font-monocode_semibold'>Socials</p>
                <p className='  text-center  text-xl font-monocode transition-all hover:text-gray-400 cursor-pointer mt-5'>Socials</p>
                <p className='  text-center text-xl font-monocode transition-all hover:text-gray-400 cursor-pointer'>Socials</p>
            </div>
        </div>
    </div>
  )
}


export default MainInfo