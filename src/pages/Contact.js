import React from 'react'
import Navbar from '../components/Navbar';
import Contactstyle from '../css/Contactstyle.css';
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
    <Navbar></Navbar>
    <div>
      <h2 className='title'>Ask Us Anything?</h2>
      <div className='contact-content'>
        <div className='contact-form'>
          <form>
          <div><input type='text' className='small-input' name='Name' placeholder='Name*'></input>
          <span><input type='text' className='small-input' name='email' placeholder='Email*'></input></span></div> 
          <div><input type='text' className='big-input' name='subject' placeholder='Subject*'></input></div>
          <div><textarea name='subject' placeholder='Write your Message*' cols='10' rows='5'></textarea></div>
          <div><button>Send Message</button></div>
          </form>

        </div>
        <div className='contact-box'>
          <div className='address'>
            <h2>Address</h2>
            <p>00100 Nairobi</p>
            <p>P.O Box 00100 Nairobi, Kenya</p>
          </div>
          <div className='phone'>
            <h2>Phone</h2>
            <p>+254796963455</p>
            <p>+254740336130</p>
          </div>
          <div className='email'>
            <h2>Email</h2>
            <p>amoyasam2019@gmail.com</p>
            <p>okothmmu@gmail.com</p>
          </div>

        </div>
      </div>
      </div>
      <Footer />
</div>
  )
}

export default Contact;