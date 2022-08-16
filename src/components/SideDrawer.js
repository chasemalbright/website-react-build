import './SideDrawer.css'

import React from 'react'

import './SideDrawer.css'
import { Link } from 'react-router-dom'

const SideDrawer = ({ show, click }) => {
    const sideDrawerClass = ["sidedrawer"]

    if(show) {
        sideDrawerClass.push("show");
    }




    return <div className={sideDrawerClass.join(" ")}>
        <ul className="sidedrawer__links">
            <li onClick={click}>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li onClick={click}>
                <Link to="/workexperience">
                    Work Experience
                </Link>
            </li>
            <li onClick={click}>
                <Link to="/skills">
                    Skills
                </Link>
            </li>
            <li onClick={click}>
                <Link to="/projects">
                    Projects
                </Link>
            </li>
            <li onClick={click}>
                <Link to="/research">
                    Research
                </Link>
            </li>
        </ul>
    </div>

}

export default SideDrawer