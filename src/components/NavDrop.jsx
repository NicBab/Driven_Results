import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom' 
import IconsHeader from './IconsHeader'
import './css/NavDrop.css'

const NavDrop = () => {
    return (
      <>
        <div id="nav">
          <Nav.Item>
            <Nav.Link><Link to="/" className="fa-home">HOME</Link></Nav.Link>
           </Nav.Item>
          <Nav.Item>
              <Nav.Link><Link to="/services" className="fa-services">SERVICES</Link></Nav.Link>
           </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/about" className="fa-about">ABOUT</Link></Nav.Link>
           </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to ="/contact" className="fa-contact">CONTACT</Link></Nav.Link>
           </Nav.Item>
           <div className="headIcons">
            <IconsHeader />
           </div>
         </div>
       </>
    )
}

export default NavDrop
