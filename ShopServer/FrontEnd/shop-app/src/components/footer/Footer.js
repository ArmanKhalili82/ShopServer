import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='bg-dark px-5'>
        <div className='container-fluid'>
            <div className='row text-light py-4'>
                <div className='col-lg-4 col-sm-6'>
                    <h5 className='pb-3'>About Us</h5>
                    <p className='small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam tempor orci eu lobortis elementum nibh. Varius quam quisque id diam vel quam elementum pulvinar. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit.</p>
                </div>
                <div className='col-lg-4 col-sm-6'>
                    <h5 className='pb-3'>Follow Us</h5>
                    <p className='small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam tempor orci eu lobortis elementum nibh. Varius quam quisque id diam vel quam elementum pulvinar.</p>
                </div>
                <div className='col-lg-4 col-sm-6'>
                    <h5 className='pb-3'>Contact Us</h5>
                    <p className='small'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam tempor orci eu lobortis elementum nibh. Varius quam quisque id diam vel quam elementum pulvinar.</p>
                    <form>
                        <div className='input-group'>
                            <input type='text' className='form-control' placeholder='Email'></input>
                            <div className='input-group-append'>
                                <button type='button' className='btn bg-danger text-white text-uppercase font-weight-bold'>Sign Up</button>
                            </div>
                        </div>
                    </form>
                    <AiFillFacebook style={{color: 'red', width: '2em', height: '2em'}} />
                    <AiFillInstagram style={{color: 'red', width: '2em', height: '2em'}} />
                    <AiFillYoutube style={{color: 'red', width: '2em', height: '2em'}} />
                    <AiFillTwitterCircle style={{color: 'red', width: '2em', height: '2em'}} />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer