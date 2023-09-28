import React from 'react'
import './Body.css'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { BsShop } from 'react-icons/bs'
import { AiFillLike } from 'react-icons/ai'


const Body = () => {
  return (
    <section className='goal'>
        <div className='container-fluid'>
            <div className='row text-center'>
                <div className='col m-4'>
                    <h1 className='display-4 mb-4'>Our Goal</h1>
                    <div className='underline mb-4'></div>
                    <p className='lead'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>

            <div className='row my-5 information'>
              <div className='col-md-4 text-center'>
                <BsFillCartCheckFill style={{color: 'red', width: '5em', height: '5em'}} />
                <h1 className='text-white mb-3'>Shop</h1>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam tempor orci eu lobortis elementum nibh. Varius quam quisque id diam vel quam elementum pulvinar. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit.</p>
              </div>
              <div className='col-md-4 text-center'>
                <BsShop style={{color: 'red', width: '5em', height: '5em'}} />
                <h1 className='text-white mb-3'>Quality</h1>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam tempor orci eu lobortis elementum nibh. Varius quam quisque id diam vel quam elementum pulvinar. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit.</p>
              </div>
              <div className='col-md-4 text-center'>
                <AiFillLike style={{color: 'red', width: '5em', height: '5em'}} />
                <h1 className='text-white mb-3'>Satisfy</h1>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam tempor orci eu lobortis elementum nibh. Varius quam quisque id diam vel quam elementum pulvinar. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit.</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Body