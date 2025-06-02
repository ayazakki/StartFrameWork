import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import About from './Components/About/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './Components/NotFoundPage/NotFoundPage'
import Layout from './Components/Layout/Layout'

function App() {
  let router=createBrowserRouter([
    {path:"",element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:"portfolio",element:<Portfolio/>},
      {path:"about",element:<About/>},
      {path:"contact",element:<Contact/>},
      {path:"*",element:<NotFoundPage/>},
    ]}
  ])

  return (
    <>
      <RouterProvider router={router}/>
      {/* <Navbar/> */}
      {/* <Contact/> */}
      {/* <Home/> */}
      {/* <Portfolio/> */}
      {/* <About/> */}
      {/* <Footer/> */}
    </>
  )
}

export default App
