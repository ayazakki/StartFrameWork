import React from 'react'
export default function Contact() {
  return (
    <>
      <section className='contact py-5'>
        <div className="container py-5 ">
          <div className="title text-center">
            <h1 className='text-uppercase fw-bold pt-5'>conatct section</h1>
            <div className='lines'></div>
            <i className="fa-solid fa-star mt-3 pt-1 mb-3"></i>
          </div>
          <form className='pt-4 w-50 m-auto'>
            <input className="form-control form-control-lg " type="text" placeholder="userName" aria-label="userName" id="userName"></input>
            <label htmlFor="userName" className='mb-2'>userName :</label>
            <input className="form-control form-control-lg " type="number" placeholder="userAge" aria-label="userAge" id="userAge"></input>
            <label htmlFor="userAge" className='mb-2'>userAge :</label>
            <input className="form-control form-control-lg " type="email" placeholder="userEmail" aria-label="userEmail" id="userEmail"></input>
            <label htmlFor="userEmail" className='mb-2'>userEmail :</label>
            <input className="form-control form-control-lg " type="password" placeholder="userPassword" aria-label="userPassword" id="userPassword"></input>
            <label htmlFor="userPassword" className=''>userPassword :</label>
            <button type="button" className="btn d-block">Send Message</button>
          </form>
        </div>
      </section>
    </>
  )
}
