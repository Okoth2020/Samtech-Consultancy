import React from 'react'
import { Link } from "react-router-dom";
import Navstyle from '../css/Navstyle.css';

const Navbar = () => {
  return (
    <div>
      <div className='nav-content'>
        <div className='company-name'>
          <h2>SAMTECH CONSULTANCY SERVICES</h2>
        </div>
        <ul className='Nav-menu'>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/projects">Projects</Link></li>
            <li><Link to = "/about">About</Link></li>
            <li><Link to ="/contact">Contact</Link></li>
        </ul>
      </div>

    </div>
  )
}
export default Navbar;
