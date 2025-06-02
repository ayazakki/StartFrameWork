import React from 'react'

export default function About() {
  return (
    <>
    <section className='py-5 about'>
      <div className="container py-5">
        <div className="title text-center pt-5">
          <h1 className='text-uppercase fw-bold'>about component</h1>
          <div className="lines"></div>
          <i className="fa-solid fa-star mt-3 pt-1 mb-3"></i><br/>
        </div>
        <div className="row mt-4 w-75 m-auto">
          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
