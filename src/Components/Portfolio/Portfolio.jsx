import React, { useState } from 'react'
import portfolio1 from '../../assets/poert1.png'
import portfolio2 from '../../assets/port2.png'
import portfolio3 from '../../assets/port3.png'

export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('modal')) {
      setShowModal(false);
      setSelectedImage('');
    }
  };

  return (
    <>
      <section className="portfolio py-5">
        <div className="container py-5">
          <div className="title text-center">
            <h1 className="text-uppercase fw-bold pt-5">Portfolio Component</h1>
            <div className="lines"></div>
            <i className="fa-solid fa-star mt-3 pt-1 mb-3"></i>
          </div>
          <div className="row pt-4 g-4">
            {[
              portfolio1,
              portfolio2,
              portfolio3,
              portfolio1,
              portfolio2,
              portfolio3,
            ].map((image, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card position-relative">
                  <img
                    src={image}
                    className="card-img-top"
                    alt={`portfolio ${index + 1}`}
                  />
                  <div
                    className="layer"
                    onClick={() => handleImageClick(image)}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div
        className={`modal fade ${showModal ? 'show' : ''}`}
        style={{ display: showModal ? 'block' : 'none' }}
        onClick={handleBackgroundClick}
        tabIndex="-1"
        aria-hidden={!showModal}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-0">
              <img
                src={selectedImage}
                className="img-fluid"
                alt="Selected portfolio"
              />
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show"></div>}

    </>
  )
}
