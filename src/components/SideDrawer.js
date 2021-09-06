import './SideDrawer.css'

import React from 'react'

import './SideDrawer.css'
import { Link } from 'react-router-dom'

const SideDrawer = ({ show }) => {
    const sideDrawerClass = ["sidedrawer"]

    if(show) {
        sideDrawerClass.push("show");
    }




    return <div className={sideDrawerClass.join(" ")}>
        <ul className="sidedrawer__links">
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/workexperience">
                    Work Experience
                </Link>
            </li>
            <li>
                <Link to="/skills">
                    skills
                </Link>
            </li>
            <li>
                <Link to="/projects">
                    Projects
                </Link>
            </li>
        </ul>
    </div>

}

export default SideDrawer