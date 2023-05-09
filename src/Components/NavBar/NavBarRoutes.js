import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import First from '../Pages/First'
import Second from '../Pages/Second'
import Third from '../Pages/Third'
import Forth from '../Pages/Forth'
import Fifth from '../Pages/Fifth'
import SubmitPlan from '../Pages/SubmitPlan'


export default function NavBarRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/first' element={<First/>} />
        <Route path='/second' element={<Second/>} />
        <Route path='/third' element={<Third/>} />
        <Route path='/forth' element={<Forth/>} />
        <Route path='/fifth' element={<Fifth/>} />
        <Route path='/submit-plan' element={<SubmitPlan />} />
    </Routes>
  )
}
