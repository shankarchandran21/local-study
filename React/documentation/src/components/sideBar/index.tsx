import React, { useState } from 'react'
import MenuOpen from '../../assets/svg/menuOpen'
import MenuClose from '../../assets/svg/menuClose'
import {NavLink } from 'react-router'
import navLink from '../../router/routerNav'

function Index() {
  const [open,setOpen] = useState(true)
  return (
    <div className={` transition-w duration-700 p-2 text-white bg-black h-screen flex flex-col justify-start items-start absolute md:relative  ${!open?'lg:w-[20%] w-full':'w-16'}` }>
      <button className='ml-4'>
          {open ? <MenuOpen onClick={()=>setOpen(!open)}/> : <MenuClose onClick={()=>setOpen(!open)}/>}
      </button>
      <div className='mt-8 w-full flex flex-col gap-3'>
    
             {navLink.map(({name,path,Icon})=>(
               <NavLink key={path} className={({isActive})=>`flex items-center rounded-xl   py-2.5 w-full  gap-5 text-md ${!open?"pl-4":"justify-center "} ${isActive?'bg-[#272727]':""}`}  to={path}>
                  <Icon/>{!open&&(<p>{name}</p>)}
              </NavLink>       
              
             ))}
      </div>
    </div>
  )
}

export default Index
