import React from 'react'
import { Header } from '../page/admin/Header'
import { Outlet } from 'react-router-dom'
import { SideBar } from '../components/admin/SideBar'


export const AdminLayout = () => {
  return (
    <>
      <Header />
      <div className="flex pt-19">
        <SideBar />
        <main className="flex-1 bg-gray-100 p-8">
          <Outlet />
        </main>
      </div>
    </>
  )
}
