import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from './Navbar'

const Racine = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  ) 
}

export default Racine