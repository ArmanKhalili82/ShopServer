import React from 'react'
import './ContactUs.css'


const ContactUS = () => {
  return (
    <section className='p-5 contact'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-5 pb-4'>
                    <h3 className='display-4 mb-5 text-white'>Stay In Touch</h3>
                    <form className='contact-form'>
                        <div className='form-group py-4'>
                            <input type='text' className='form-control my-2 p-2 input' 
                            placeholder='Name' />
                            <label for='name' className='label text-white'>Name</label>
                        </div>
                        <div className='form-group py-4'>
                            <input type='email' className='form-control my-2 p-2 input' 
                            placeholder='Email' />
                            <label for='email' className='label text-white'>Email</label>
                        </div>
                        <div className='form-group' py-4 my-4>
                            <input type='checkbox' checked />
                            <label for='check'>Accept Our Rules</label>
                        </div>
                        <button type='submit' className='btn btn-primary btn-block p-2 font-weight-bold submit-button'>Sign Up For Subscribing</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUS