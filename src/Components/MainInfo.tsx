import React, { useState } from 'react'
import "../index.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import inst from '../img/icons8-instagram.svg'
import linked from '../img/icons8-linkedin.svg'
import git from '../img/icons8-github.svg'

const MainInfo =()=> {

    function openInNewTab(url:string) {
        window.open(url, "_blank");
    }

  return (
    <div className="w-full flex-row place-content-between 2xl:px-96 pt-16" >
        <div className=' mx-10 xl:mx-40 grid 2xl:grid-cols-2 rounded-l'>
            <div className='font-monocode w-full text-xl mr-10 mb-10'>
                Hi!
                <div className='mt-8'></div>
                 My name is Nikita, and I’m a Front/Backend Developer.
                <div className='mt-8'></div>

                I specialize in <span className=' font-monocode_semibold'>React</span>, <span className=' font-monocode_semibold'>TypeScript</span>, <span className=' font-monocode_semibold'>C#</span> for backend development, <span className=' font-monocode_semibold'>Tailwind CSS</span> , and various Node.js libraries. 
                <div className='mt-8'></div>

                Also I have knowledge in Photoshop, Blender and Figma. I like to make everything perfectly and like to learn new stuff.
                <div className='mt-8'></div>

                When I’m not coding, you’ll find me in my <span className=' text-blue-500 font-monocode_semibold hover:text-blue-900 transition-all cursor-pointer'>socials</span> on the right.
            </div>

            <div className='ml-10'>
                <div className='grid'>
                    <div className='flex justify-end'>
                        <span className='text-center text-xl font-monocode_semibold bg-black py-1 text-white px-10 shadow-3xl shadow-gray-400'>Socials</span>

                    </div>
                    <div className='flex justify-end'>
                        <div onClick={()=>{openInNewTab("https://www.instagram.com/uishjro")}} className='flex justify-end mt-5 transition-all hover:text-red-400 cursor-pointer'>
                            <span className='  text-center  text-l font-monocode  py-1 my-1'>Instagram</span>
                            <img className=' self-center h-6 ml-1' src={inst} />
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div onClick={()=>{openInNewTab("https://www.linkedin.com/in/nikita-lopocz-a0a986269")}} className='flex justify-end transition-all hover:text-blue-400 cursor-pointer'>
                            <span className='  text-center  text-l font-monocode  py-1 my-1'>LinkedIn</span>
                            <img className=' self-center h-6 ml-1' src={linked} />

                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div onClick={()=>{openInNewTab("https://github.com/niki228041")}} className='flex justify-end transition-all hover:text-gray-400 cursor-pointer'>
                            <span className='  text-center  text-l font-monocode  py-1 my-1'>GitHub</span>
                            <img className=' self-center h-6 ml-1' src={git} />
                        </div>
                    </div>
                </div>
                {/* <div className='grid mt-5'>
                    <div className='flex justify-end'>
                        <span className='text-center text-xl font-monocode_semibold bg-black py-1 text-white px-10 shadow-3xl shadow-gray-400'>Projects</span>
                    </div>
                    <div className='flex justify-end mt-5'>
                        <span className='  text-center  text-l font-monocode transition-all  hover:text-gray-400 cursor-pointer py-1 my-1'>TodoList.com</span>
                    </div>
                    <div className='flex justify-end'>
                        <span className='  text-center  text-l font-monocode transition-all hover:text-gray-400 cursor-pointer py-1 my-1'>MarketClone.com</span>
                    </div>
                    <div className='flex justify-end'>
                        <span className='  text-center  text-l font-monocode transition-all hover:text-gray-400 cursor-pointer py-1 my-1'>site.com</span>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}


export default MainInfo