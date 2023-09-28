import React from 'react'
import ColecPic from '../UnImages/adrian-ordonez-P0W27GRvyww-unsplash.jpg'

const Product1 = () => {
  return (
    <section className='p-5 product1'>
      <div className='container-fluid'>
        <h2 className='center'>Black Jacket</h2>
      </div>
        <div className='row'>
          <div className='col-lg-4 col-sm-6 my-5'>
            <img style={{width: '20em', height: '20em'}} src={ColecPic} />
          </div>
          <div className='col-lg-6 col-sm-6 my-5'>
            <h2>Name: Black Jacket Large Size</h2>
            <h3>Price: 250$</h3>
            <h4>Buy Now And You Get 10% OFF</h4>
            <button type="button" className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
        <div>
          <h4 className='display-4'>Details</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
    </section>
  )
}

export default Product1