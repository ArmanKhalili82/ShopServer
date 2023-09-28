import React from 'react'
import './Customer.css'
import Port1 from '../UnImages/customer1.jpeg'
import Port2 from '../UnImages/avechenri-2hEaLqoPgPQ-unsplash.jpg'
import Port3 from '../UnImages/chris-henry-4gD0nUsMTsE-unsplash.jpg'


const Customer = () => {
  return (
    <section className='p-5 customers'>
        <div className='container-fluid'>
            <div className='row text-center'>
                <div className='col m-4'>
                    <h1 className='display-4 mb-4'>Our Customers Satisfaction Does Matter To Us</h1>
                    <div className='underline mb-4'></div>
                    <p className='lead'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div className='row custom'>
                <div className='col-md-6 mx-auto'>
                    <div className='carousel slide' data-bs-ride='carousel'
                    id='customer-carousel'>
                        <ol className='carousel-indicators'>
                            <li data-bs-target='#customer-carousel' data-bs-slide-to='0' className='active'></li>
                            <li data-bs-target='#customer-carousel' data-bs-slide-to='1'></li>
                            <li data-bs-target='#customer-carousel' data-bs-slide-to='2'></li>
                        </ol>
                        <div className='carousel-inner'>
                            <div className='carousel-item active text-center slideshow'>
                                <img src={Port1} alt='Anna' 
                                className='img-fluid rounded-circle m-5' />
                                <blockquote className='blockquote text-white'>
                                    <p className='mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                                </blockquote>
                                <h5 className='text-light font-weight-bold mb-5'>Anna</h5>
                            </div>
                            <div className='carousel-item text-center slideshow'>
                                <img src={Port2} alt='Anna' 
                                className='img-fluid rounded-circle m-5'  />
                                <blockquote className='blockquote text-white'>
                                    <p className='mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                                </blockquote>
                                <h5 className='text-light font-weight-bold mb-5'>John</h5>
                            </div>
                            <div className='carousel-item text-center slideshow'>
                                <img src={Port3} alt='Anna' 
                                className='img-fluid rounded-circle m-5'  />
                                <blockquote className='blockquote text-white'>
                                    <p className='mb-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                                </blockquote>
                                <h5 className='text-light font-weight-bold mb-5'>Max</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Customer