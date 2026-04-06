import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favourite from './pages/Favourite'
import { Toaster } from 'react-hot-toast'
import Layout from './pages/admin/layout'
import Dashboard from './pages/admin/Dashboard'
import AddShows from './pages/admin/AddShows'
import ListShows from './pages/admin/ListShows'
import ListBookings from './pages/admin/ListBookings'

function App() {

  const isAdminRoute= useLocation().pathname.startsWith('/admin')
  return (
    <>
     <Toaster/>
     {/* for notification can be used in any component */}
      {!isAdminRoute && <Navbar/>}
      {/* //when not on admin route we will display navbar */}
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/movies'  element={<Movies/>} />
          <Route path='/movies/:id'  element={<MovieDetails/>} />
          <Route path='/movies/:id/:date'  element={<SeatLayout/>} />
          <Route path='/my-bookings'  element={<MyBookings/>} />
          <Route path='/favourite'  element={<Favourite/>} />
          <Route path='/admin/*' element={<Layout/>}>
              <Route index element={<Dashboard/>}/>
              {/*<Outlet/> This is from React Router — it renders whatever child route is currently active: */}
              <Route path='add-shows' element={<AddShows/>}/>
              <Route path='list-shows' element={<ListShows/>}/>
              <Route path='list-bookings' element={<ListBookings/>}/>
          </Route>
        </Routes>
        {!isAdminRoute && <Footer/>}
        {/* on all the pages except admin */}
    </>
  )
}

export default App