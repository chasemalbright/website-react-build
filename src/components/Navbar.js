import './Navbar.css'

import React from 'react'
import portfolio from '../assets/portfolio.png'
import TAMU from '../assets/TAM-Stack.png'

const Navbar = ({ click }) => {
    return (
        <nav className="navbar">

            <div className="imageContainer">
                <img src={portfolio} alt="photo" className="image"/>
                <img src={TAMU} alt="tamu" className="image-hidden"/>
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
