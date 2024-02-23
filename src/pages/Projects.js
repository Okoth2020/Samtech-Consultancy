import React from 'react'
import Navbar from '../components/Navbar';
import Projectsstyle from '../css/Projectsstyle.css';
import Footer from '../components/Footer';


const Projects = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className='title'><h2>Below are Our Sample Projects in Progress</h2></div>
        <div className='projects'>
          <div className='web'>
          <h2>Garbage Collection System</h2>
          <p>We develop and advice for your websites as per your requirements.</p>
          <button>View Details</button>
          </div>
          <div className='mobile'>
          <h2>Online Car Hire App</h2>
          <p>We develop and advice for your mobile applications as per your requirements.</p>
          <button>View Details</button>
          </div>
          <div className='graphics'>
          <h2>Naivas Supermarket Graphics</h2>
          <p>We design and advice for your graphics templates as per your needs.</p>
          <button>View Details</button>
          </div>
          </div>

        <Footer />
    </div>
  )
}

export default Projects;
