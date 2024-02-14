import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Body/Home'
import Login from '../Body/BookingForm'
import Room_booking from '../Body/Room_booking'
import Search_result from '../Body/Search_result'
import Filter from '../Body/Filter'
function Section() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/room_booking/:pict' element={<Room_booking/>}></Route>
        <Route path='/search_result/:id/:category' element={<Search_result/>}></Route>
        <Route path='/filter' element={<Filter/>}></Route>
    </Routes>
  )
}

export default Section