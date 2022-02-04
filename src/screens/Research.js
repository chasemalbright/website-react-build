import './Work.css'
import React from 'react';

function Research() {
    return (
        <div className='work'>
            <div className='about'>
                <h1>My academic research experience</h1>
                <p>
                    As well as professional work experience, I have experience as 
                    an undergraduate research assistant at Texas A&M University. My research
                    experience is focused on technology and computing.
                </p>
            </div>

            <div className='workContainer'>

                <div className='job'>
                    <a href='https://softinteraction.com/' target="_blank">
                        <img src='https://softinteraction.com/wp-content/uploads/2015/08/softInteractionLogo_web1.png' alt="company" className='company' />
                    </a>
                    <h1>Undergraduate research Assistant</h1>
                    <p className='label'>College Station 2022</p>
                    <p className='content'>
                    The Soft Interaction Lab aims to integrate physical and digital experiences utilizing a variety 
                    of organic and natural materials. My responsibilities include developing the hardware and software
                    that powers the project. The main technology that is utilized is the Raspberry Pi 4 as well as python 3. 
                    We are also incorporating machine learning for voice recognition. The goal of this project is to create 
                    a piece of technology that is intelligent and able to connect to users on a personal level.
                    </p>

                    <p className="skillLabel">Skills Learned:</p>
                    <div className="skills">
                        <div className="skill">Python</div>
                        <div className="skill">ML/AI</div>
                        <div className="skill">Tensorflow</div>
                        <div className="skill">Hardware</div>
                        <div className="skill">Pi 4</div>  
                        <div className="skill">Circuits</div> 
                        <div className="skill">Research</div>                            
                    </div>

                </div>

            </div>

            <div className='about about1'>
                <h1>My academic Interests</h1>
                <p>
                    I am interested in hardware and software development and hope 
                    to get a deeper understanding with a variety of professional and 
                    academic experiences. My goal is to contribute as much as possible 
                    while learning what I can along the way.
                </p>

            </div>

        </div>
    )
}

export default Research;


