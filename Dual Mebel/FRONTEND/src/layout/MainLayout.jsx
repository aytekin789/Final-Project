import React from 'react'
import { Outlet } from "react-router-dom"
import Footer from "./footer/Footer"
import Navbar from "./navbar/Navbar"


const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout