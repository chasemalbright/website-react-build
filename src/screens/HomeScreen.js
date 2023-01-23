import './HomeScreen.css'
import {Link} from 'react-router-dom'

import React from 'react'

const HomeScreen = () => {
    return (
        <div className="homescreen">

            <div className="about">
                <h1>About Me</h1>
                <p>
                    Hello my name is Chase Albright, I am a junior computer engineering major at
                    Texas A&M. Lately, I have been interested in quantitative trading, commodities markets, 
                    full-stack engineering, and startups. I am from Houston Tx 
                    and love working on new and exciting things. 
                </p>
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
