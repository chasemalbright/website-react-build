import './Skills.css'

import React from 'react'

const Skills = () => {
    return (
        <div className="skillScreen">

            <div className="about">
                <h1>My skills</h1>
                <p>
                    I have learned a lot of skills from my work experience,
                    course work, and personal projects and ventures. I love learning new things...
                </p>
            </div>

            <div className="skillContainer">
                <h1>Langauges and Libraries</h1>
                <p>Javascript <span>- experience from personal projects and internships</span> </p>
                <p>React JS <span>- experience from personal projects and internships</span> </p>
                <p>Redux <span>- experience from personal projects </span> </p>
                <p>Angular JS <span>- experience from personal projects and internships</span> </p>
                <p>Node JS <span>- experience from personal projects and internships</span> </p>
                <p>Express JS <span>- experience from personal projects and internships</span> </p>
                <p>Mongo DB <span>- experience from personal projects and internships</span> </p>
                <p>Golang <span>- experience from personal projects and internships</span> </p>
                <p>C++ <span>- experience from course work</span> </p>
                <p>Data Structures and algorithms <span>- experience from course work</span> </p>
                <p>Python <span>- experience from course work and internships</span> </p>
                <p>Tensorflow <span>- experience from personal projects and internships</span> </p> 
                <p>Machine Learning <span>- experience from personal projects and internships</span> </p> 
                <p>Hardware engineering <span>- experience from undergraduate research</span> </p>            
            </div>
            <div className="skillContainer redLabel">
                <h1>Deployment and Controls</h1>
                <p>Firebase <span>- deployment of apps and firestore db</span> </p>
                <p>Heroku <span>- deployment of node JS apps</span> </p>
                <p>Docker <span>- breaking down an app into micro-services</span> </p>
                <p>GIT <span>- for code source control</span> </p>
                <p>Bit-bucket <span>- for work related repositories</span> </p>
            </div>
            <div className="skillContainer blueLabel">
                <h1>Miscellaneous</h1>
                
                <p>JIRA/Confluence <span>- for workplace and task management</span> </p>
                <p>Microsoft Office <span>- word, powerpoint, excel</span> </p>
                <p>Circuit Design <span>- basic design of hardware components</span> </p>
                <p>Adobe XD <span>- for application design and mock up</span> </p>
                <p>Google Authentication <span>- Authentication using Gmail</span> </p>
            </div>
        </div>
    )
}

export default Skills
