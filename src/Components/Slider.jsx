import React from 'react';
import './Slider.css'

const Slider = () => {
  return (


    <>

<div className="container-fluid slider-container">
        <div className="overlay"></div>
        <div id="textCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="carousel-caption">
                        <p>Omnium labitur fierent at vel.</p>
                        <p>Contentio fugit ubique et est, eos no regione probatus.</p>
                        <p>- Thomas Bradley</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-caption">
                        <p>Another inspiring quote here.</p>
                        <p>Something that adds value to the conversation.</p>
                        <p>- Jane Doe</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="carousel-caption">
                        <p>The third quote that can inspire.</p>
                        <p>More engaging text can go here.</p>
                        <p>- John Smith</p>
                    </div>
                </div>
            </div>
         
            <button className="carousel-control-prev" type="button" data-bs-target="#textCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#textCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    </>
  )
}

export default Slider