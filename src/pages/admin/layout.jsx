import React from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'
import AdminNavbar from '../../components/admin/AdminNavbar'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <>
        <AdminNavbar/>
        <div className='flex'>
        <AdminSidebar/>
        <div className='flex-1 px-4 py-10 md:px-10 h-[calc(100vh-64px)] overflow-y-auto'>
            <Outlet/>
             {/* it renders whatever child route is currently active: */}
        </div>
        </div>
    </>
  )
}

export default layout