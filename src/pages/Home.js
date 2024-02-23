import React from 'react'
import Homestyle from '../css/Homestyle.css'
import { Link } from "react-router-dom";
import Footer from '../components/Footer'
import first from '../components/Images/first.jpg';
import person1 from '../components/Images/person1.jpg';
import person2 from '../components/Images/person2.jpg';
import person3 from '../components/Images/person3.jpg';

const Home = () => {
  return (
  <div>
    <main>
      <div className='first-content'>
      <div className='texts-content'>
        <h2>WELCOME</h2>
        <h2>SAMTECH CONSULTANCY</h2>
        <p>Our business is helping you grow your business</p>
        <p>Let's build Web Applications For You. Ask us Anything.</p>
        <div className='buttons'>
          <button><Link to ="/contact">Get Started</Link></button>
          <button>Watch Video</button>
        </div>
      </div>
      <div className='image'>
      <img src={first} alt="First" />
      </div>
     </div>
     <div className='services-title'>
      <h1>AREAS OF SERVICE</h1>
     </div>
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
     <div className='testimonial-title'>
      <h1>TESTIMONIALS</h1>
     </div>
     <div className='testimonials'>
      <div className='person-one'>
        <img src = {person1} />
        <h4>Josephine Wekesa</h4>
        <p>I found tech solutions to my problems.</p>
      </div>
      <div className='person-two'>
        <img src = {person2}/>
        <h4>Samuel Amoya</h4>
        <p>All solutions available.</p>
      </div>
      <div className='person-three'>
        <img src = {person3}/>
        <h4>Joseph Mumbi</h4>
        <p>Thank you for reaching out to my problems.</p>
      </div>
     </div>
    </main>
    <footer>
      <Footer />
    </footer>

</div>
  )
}

export default Home;