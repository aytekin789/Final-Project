import React from 'react'
import MainNavbar from '../Components/Navbar/MainNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

const MainLayout = () => {
  return (
   <>
   <Header/>
   <MainNavbar/>
   <Outlet/>
   <Footer/>

   </>
  )
}

export default MainLayout