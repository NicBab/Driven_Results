import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom' 

const NavDrop = () => {
    return (
      <>
        <div id="navBar">
          <Nav.Item>
            <Nav.Link><Link to="/" className="fa-home">Home</Link></Nav.Link>
           </Nav.Item>
          <Nav.Item>
              <Nav.Link><Link to="/services" className="fa-services">Services</Link></Nav.Link>
           </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to="/about" className="fa-about">About</Link></Nav.Link>
           </Nav.Item>
          <Nav.Item>
            <Nav.Link><Link to ="/contact" className="fa-contact">Contact</Link></Nav.Link>
           </Nav.Item>
         </div>
       </>
    )
}

export default NavDrop
