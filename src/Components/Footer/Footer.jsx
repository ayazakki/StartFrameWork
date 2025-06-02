import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className='text-center'>
      <div className="container py-5 text-white ">
        <div className="row py-4 g-4">
          <div className="col-sm-4">
            <h2>LOCATION</h2>
            <span>2215 John Daniel Drive</span><br />
            <span>Clark, MO 65243</span>
          </div>
          <div className="col-sm-4">
            <h2>AROUND THE WEB</h2>
            <span><i className="fa-brands fa-facebook"></i></span>
            <span><i className="fa-brands fa-twitter"></i></span>
            <span><i className="fa-brands fa-linkedin-in"></i></span>
            <span><i className="fa-solid fa-globe"></i></span>
          </div>
          <div className="col-sm-4">
            <h2>ABOUT FREELANCER</h2>
            <span>Freelance is a free to use, licensed Bootstrap theme created by Route</span>
          </div>
        </div>
      </div>
      <p className='bg-dark mb-0 text-white py-4 '>Copyright © Your Website 2021</p>
    </footer>
    </>
  )
}
