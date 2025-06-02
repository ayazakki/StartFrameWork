import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav id="navbar" className="navbar navbar-expand-md fixed-top">
    <div className="container">
      <Link className="navbar-brand text-uppercase fw-bolder fs-3" to="/">Start Framework</Link>
      <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa-solid fa-bars fs-4 "></i>
      </button>
      <div className="collapse navbar-collapse mt-4 mt-md-0 " id="navbarNav">
        <ul className="navbar-nav ms-auto gap-2 gap-lg-4">
          <li className="nav-item">
            <NavLink className="nav-link d-inline-block p-2 " to="/about">ABOUT</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link d-inline-block p-2" to="/portfolio">PORTFOLIO</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link d-inline-block p-2" to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </>
  )
}
