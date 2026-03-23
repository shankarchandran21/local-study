import React from 'react'
import { Outlet } from 'react-router'
import { SideBar } from '../components'

function Layout() {
  return (
    <div className='flex relative'>
        <SideBar/>
        <div className='ml-15.5 md:ml-0 bg-black h-screen w-screen text-amber-50 overflow-auto'>
            <Outlet/>

        </div>
    </div>
  )
}

export default Layout
