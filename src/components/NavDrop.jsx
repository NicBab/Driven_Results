import React, {useState} from 'react'
import { Link } from 'react-router-dom' 
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import IconsHeader from './IconsHeader'
import { SidebarData } from './SidebarData'
import './css/NavDrop.css'
import { IconContext } from 'react-icons';

const NavDrop = () => {
  const [sidebar, setSideBar] = useState(false)
  const showSideBar = () => setSideBar(!sidebar)

    return (
      <>
       <IconContext.Provider value={{color: "#fff"}}>
        <div className="navbar">
          <Link to="#" className="burger">
           <FaIcons.FaBars onClick={showSideBar}/>
          </Link>
          <div className="headIcons">
            337 123 4567
            <IconsHeader />
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSideBar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
         </nav>
        </IconContext.Provider>
      </>
    )
}

export default NavDrop







// import { Nav } from 'react-bootstrap'

// <div id="nav">
// <Nav.Item>
//   <Nav.Link><Link to="/" className="fa-home">HOME</Link></Nav.Link>
//  </Nav.Item>
// <Nav.Item>
//     <Nav.Link><Link to="/services" className="fa-services">SERVICES</Link></Nav.Link>
//  </Nav.Item>
// <Nav.Item>
//   <Nav.Link><Link to="/about" className="fa-about">ABOUT</Link></Nav.Link>
//  </Nav.Item>
// <Nav.Item>
//   <Nav.Link><Link to ="/contact" className="fa-contact">CONTACT</Link></Nav.Link>
//  </Nav.Item>
//  <div className="headIcons">
//   <IconsHeader />
//  </div>
// </div>
