import React from 'react'
import Pic1 from '../UnImages/ahmed-rajgoli-shoaib-shakeel-FCsA8Adcgr4-unsplash.jpg'
import Pic2 from '../UnImages/conor-luddy-IVaKksEZmZA-unsplash.jpg'
import Pic3 from '../UnImages/domino-164_6wVEHfI-unsplash.jpg'

const Carousel = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner ">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3" />
        </div>
            <div className="carousel-item active">
                <img src={Pic1} className="d-block w-100" alt="..." style={{height: '25em'}} />
                <div className="carousel-caption d-md-block">
                    <h3>Best Watch Brands</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={Pic2} className="d-block w-100" alt="..." style={{height: '25em'}}  />
                <div className="carousel-caption d-md-block">
                    <h3>Best Camera Brands</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={Pic3} className="d-block w-100" alt="..." style={{height: '25em'}} />
                <div className="carousel-caption d-md-block">
                    <h3>Best Shoes Brands </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
         </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Carousel