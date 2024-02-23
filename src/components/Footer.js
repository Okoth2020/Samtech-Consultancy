import React from 'react'
import Footerstyle from '../css/Footerstyle.css'

const Footer = () => {
  return (
    <div>
        <div className='footer-contents'>
            <div className='contact-us'>
                <h1>Contact Us</h1>
                <p>Whatsapp: +254796963455</p>
                <p>Call: +254796963455</p>
                <p>Facebook: Samtech Cosultancy</p>
                <p>Instagram: @samtech cosultancy</p>
            </div>
            <div className='quick-links'>
                <h1>Quick Links</h1>
                <p><a href='https://web.whatsapp.com/'>Whatsapp</a></p>
                <p><a href='tel: +254796963455'>Call Now</a></p>
                <p><a href='#'>Facebook</a></p>
                <p><a href='#'>Instagram</a></p>
            </div>
            <div className='mail-us'>
                <h1>Mail Us</h1>
                <p><a href='mailto: amoyasam2019@gmail.com'>Mail Now</a></p>
            </div>

        </div>
    </div>
  )
}

export default Footer
