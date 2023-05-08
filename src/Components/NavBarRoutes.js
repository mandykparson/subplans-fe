import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Fifth from './Fifth'
import First from './First'
import Footer from './Footer'
import Forth from './Forth'
import Homepage from './Homepage'
import Second from './Second'
import Third from './Third'

export default function NavBarRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/first' element={<First/>} />
        <Route path='/second' element={<Second/>} />
        <Route path='/third' element={<Third/>} />
        <Route path='/forth' element={<Forth/>} />
        <Route path='/fifth' element={<Fifth/>} />
        <Route path='/footer' element={<Footer/>} />
    </Routes>
  )
}
