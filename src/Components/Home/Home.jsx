import React from 'react'
import logo from '../../assets/avataaars.svg'


export default function Home() {
  return (
    <>
    <header className='py-5'>
      <div className='container py-5 text-center'>
          <img src={logo} alt="logo" width="250px" className='pt-5' />
          <h1 className='text-uppercase fw-bold text-white mt-4'>start Framework</h1>
          <div className='lines'></div>
          <i className="fa-solid fa-star mt-3 pt-1 mb-3"></i><br/>
          <div>
          <span>Graphic Artist -</span>
          <span> Web Designer -</span>
          <span> Illustrator</span>
          </div>
        </div>
    </header>
  
    </>
  )
}
