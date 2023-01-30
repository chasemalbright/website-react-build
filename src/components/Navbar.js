import './Navbar.css'

import React from 'react'
import portfolio from '../assets/portfolio.png'
import TAMUSmall from '../assets/TAMUSmall.png'

const Navbar = ({ click }) => {
    return (
        <nav className="navbar">

            <div className="imageContainer">
                <img src={portfolio} alt="photo" className="image"/>
                <img src={TAMUSmall} alt="photo" className="image"/>
            </div>

            <h1>Chase Albright</h1>

            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </nav>
    )
}

export default Navbar
