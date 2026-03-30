import React from 'react'
import { TopBar } from './TopBar'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full select-none z-50 font-sans bg-[#0d3472] pb-4'>
        <TopBar/>
        <NavBar/>
    </header>
  )
}
