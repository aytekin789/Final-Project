import React from 'react'
import MainNavbar from '../Components/Navbar/MainNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'

const MainLayout = () => {
  return (
   <>
   <MainNavbar/>
   <Outlet/>
   <Footer/>

   </>
  )
}

export default MainLayout