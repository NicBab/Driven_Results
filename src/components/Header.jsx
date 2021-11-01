import React from 'react'
import driven_results_logo2 from '../images/driven_results_logo 2.svg'
import './css/Header.css'

const Header = () => {
    return (
        <>
        <div id="header">
            <img src={driven_results_logo2} alt="driven_logo" className="logo" />
            <div>(337) 123-4567</div>
        </div>
        </>
    )
}

export default Header