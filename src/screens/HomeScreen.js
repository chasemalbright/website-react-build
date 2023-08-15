import './HomeScreen.css'
import {Link} from 'react-router-dom'

import React from 'react'

const HomeScreen = () => {
    return (
        <div className="homescreen">

            <div className="about">
                <h1>About Me</h1>
                <p>
                    I am a senior computer engineer from Houston, TX. I like to travel and be outside. Trying to have as much fun as possible...               </p>
            </div>
            
            <div className="container">

                <Link to="/workexperience" className="item">
                    
                    <h1>Work Experience</h1>
                    <p>Where I have worked</p>
                    
                </Link>

                <Link className="item" to="/skills">
                    <h1>Skills</h1>
                    <p>What I can do</p>

                </Link>

                <Link className="item" to="/projects">
                    <h1>Projects</h1>
                    <p>What I have been working on</p>

                </Link>
                
                <Link className="item" to="/research">
                    <h1>Research</h1>
                    <p>My undergraduate research experience</p>
                </Link>

            </div>
            

        </div>
    )
}

export default HomeScreen
