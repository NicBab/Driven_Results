import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './css/Footer.css'

const Footer = () => {
    return (
        <Container className="d-flex align-items-end justify-content-around mt-10" 
            style={{minHeight: "10vh"}}>
              <>
                <div>
                 <footer className="site-footer">
                  <section className="footer-links">
                    <h2>Customer Care</h2>
                    <Link to="/policies">Policies</Link>
                    <Link to="/contact">Help</Link>
                  </section>
                <br/>
                  <section className="footer-links">
                    <h2 id>About Us</h2>
                      <Link to="/history">History</Link>
                      <Link to="/blog">Blog</Link>
                  </section>
                 </footer>
                </div>
              </>
      </Container>
    )
}

export default Footer

