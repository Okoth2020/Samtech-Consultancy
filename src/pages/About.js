import React from 'react'
import Navbar from '../components/Navbar';
import Aboutstyle from '../css/Aboutstyle.css';
import Footer from '../components/Footer';


const About = () => {
  return (
    <div>
        <Navbar></Navbar>
          <div className='title'>
          <h2>About Us</h2>
          </div>
          <div className='about-p'><p>We are a top rated Company offering the following Consultancy Services</p></div>
          <div className='services-provided'>
          <div className='web'>
          <h2>Web Applications</h2>
          <p>We develop and advice for your websites as per your requirements.</p>
          <button>Read More</button>
          </div>
          <div className='mobile'>
          <h2>Mobile Applications</h2>
          <p>We develop and advice for your mobile applications as per your requirements.</p>
          <button>Read More</button>
          </div>
          <div className='graphics'>
          <h2>Graphics</h2>
          <p>We design and advice for your graphics templates as per your needs.</p>
          <button>Read More</button>
          </div>
          </div>

          <Footer />

    </div>
  )
}

export default About;
