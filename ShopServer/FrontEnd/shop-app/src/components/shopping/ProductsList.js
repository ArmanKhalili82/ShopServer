import React from 'react'
import './ProductsList.css'
import { Link } from 'react-router-dom'
import ColecPic from '../UnImages/adrian-ordonez-P0W27GRvyww-unsplash.jpg'
import ColecPic1 from '../UnImages/chris-henry-4gD0nUsMTsE-unsplash.jpg'
import ColecPic2 from '../UnImages/venson-chou-nD2BjSLt0uE-unsplash.jpg'
import ColecPic3 from '../UnImages/trendest-studio-XZ3EmAIWuz0-unsplash.jpg'
import ColecPic4 from '../UnImages/lars-kaizer-JZrebB7aHyQ-unsplash.jpg'
import ColecPic5 from '../UnImages/kari-shea-1SAnrIxw5OY-unsplash.jpg'


const ProductsList = () => {
  return (
    <section className='py-5'>
        <div className='container-fluid'>
            <div className='row text-muted text-center'>
                <div className='col m-4'>
                    <h1 className='display-4 mb-4'>Our Products</h1>
                    <div className='underline-dark mb-4'></div>
                    <p className='lead'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
        </div>
        <div>
        <div className='row'>
                <div className='col-lg-4 col-sm-6 my-5'>
                    <div className='card product' border-0 card-shadow>
                        <img src={ColecPic} className='card-img' />
                        <div className='card-img-overlay'>
                            <h5 className='text-white text-uppercase font-weight-bold p-2 heading'>Black Jacket 250$</h5>
                            <button type="button" className="btn btn-primary">
                                <Link className='product-item' to='/Product1'>More Info</Link> 
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-sm-6 my-5'>
                    <div className='card product' border-0 card-shadow>
                        <img src={ColecPic1} className='card-img' />
                        <div className='card-img-overlay'>
                            <h5 className='text-white text-uppercase font-weight-bold p-2 heading'>Tshirt 100$</h5>
                            <button type="button" className="btn btn-primary">
                                <Link className='product-item' to='/Product2'>More Info</Link> 
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-sm-6 my-5'>
                    <div className='card product' border-0 card-shadow>
                        <img src={ColecPic2} className='card-img' />
                        <div className='card-img-overlay'>
                            <h5 className='text-white text-uppercase font-weight-bold p-2 heading'>Gaming 500$</h5>
                            <button type="button" className="btn btn-primary">
                                <Link className='product-item' to='/Product3'>More Info</Link> 
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-sm-6 my-5'>
                    <div className='card product' border-0 card-shadow>
                        <img src={ColecPic3} className='card-img' />
                        <div className='card-img-overlay'>
                            <h5 className='text-white text-uppercase font-weight-bold p-2 heading'>xshoe 300$</h5>
                            <button type="button" className="btn btn-primary">
                                <Link className='product-item' to='/Product4'>More Info</Link> 
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-sm-6 my-5'>
                    <div className='card product' border-0 card-shadow>
                        <img src={ColecPic4} className='card-img' />
                        <div className='card-img-overlay'>
                            <h5 className='text-white text-uppercase font-weight-bold p-2 heading'>Phone 600$</h5>
                            <button type="button" className="btn btn-primary">
                                <Link className='product-item' to='/Product5'>More Info</Link> 
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-sm-6 my-5'>
                    <div className='card product' border-0 card-shadow>
                        <img src={ColecPic5} className='card-img' />
                        <div className='card-img-overlay'>
                            <h5 className='text-white text-uppercase font-weight-bold p-2 heading'>Laptop 700$</h5>
                            <button type="button" className="btn btn-primary">
                                <Link className='product-item' to='/Product6'>More Info</Link> 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductsList