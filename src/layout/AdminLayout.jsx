import React from 'react'
import { Header } from '../page/admin/Header'
import { Link, Outlet } from 'react-router-dom'
import { RxDashboard } from 'react-icons/rx'
import { FaRegCircleUser } from 'react-icons/fa6'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { BsCartCheckFill } from 'react-icons/bs'


export const AdminLayout = () => {
  return (
    <>
      <Header />
      <div className="flex pt-19">
        <div className="w-64 bg-[#0d3472] pb-4 min-h-screen p-3 border-r border-gray-300 select-none">
          <nav className='py-6 flex flex-col'>
            <Link to="/admin" className='nav-link shadow-xl shadow-gray-900 justify-between text-white text-start 
            transition transform hover:-translate-y-1 font-medium btn mb-4 border border-blue-900 p-3 hover:cursor-pointer rounded-lg flex items-center'>Dashboard <RxDashboard className='text-lg'/></Link>
            <Link to="/admin/usermanager" className='nav-link shadow-xl shadow-gray-900 justify-between text-white text-start 
            transition transform hover:-translate-y-1 font-medium btn mb-4 border border-blue-900 p-3 hover:cursor-pointer rounded-lg flex items-center'>Quản lý User <FaRegCircleUser className='text-lg'/></Link>
            <Link to="/admin/tourmanager" className='nav-link shadow-xl shadow-gray-900 justify-between text-white text-start 
            transition transform hover:-translate-y-1 font-medium btn mb-4 border border-blue-900 p-3 hover:cursor-pointer rounded-lg flex items-center'>Quản lý Tour <MdOutlineTravelExplore className='text-lg'/></Link>
            <Link to="/admin/bookingmanager" className='nav-link shadow-xl shadow-gray-900 justify-between text-white text-start 
            transition transform hover:-translate-y-1 font-medium btn mb-4 border border-blue-900 p-3 hover:cursor-pointer rounded-lg flex items-center'>Quản lý Đơn Đặt Tour <BsCartCheckFill className='text-lg'/></Link>
          </nav>
        </div>

        <main className="flex-1 bg-gray-100 p-8">
          <Outlet />
        </main>
      </div>
    </>
  )
}
