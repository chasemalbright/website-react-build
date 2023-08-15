import './Projects.css'

import React from 'react'

const Projects = () => {
    return (
        <div className="projectsContainer">
            <div className="about">
                <h1>Some of my live projects...</h1>
                <p>
                    These are a few of my more extensive projects that I have deployed live to the web.

                </p>
            </div>

            <div className="projects">

                <div className="project">
                    <h1>Recipe Finder App</h1>
                    <h2>Link to App: <a href="https://chasemalbright.github.io/recipe-finder-app/" target="_blank">HERE</a></h2>
                    <p className="content">
                        This app was built using react, redux, and css. It takes in food names
                        as search queries and hits an API that responds with relevant recipes 
                        that contain the searched food item. Deployed to github pages.
                    </p>
                    <p className="skillLabel">Skills Involved:</p>
                    <div className="skills">
                        <div className="skill">React</div>
                        <div className="skill">APIs</div>
                        <div className="skill">Redux</div>
                        <div className="skill">JSON</div>
                        <div className="skill">GH Pages</div>                                 
                    </div>
                </div>

                <div className="project">
                    <h1>Facebook Clone</h1>
                    <h2>Link to App: <a href="https://fb-clone-e5b72.web.app/" target="_blank">HERE</a></h2>
                    <p className="content">
                        This is a full stack facebook clone that uses react, material ui,
                        and redux for the front end and firebase and firestore for database
                        and deployment. ths build also includes google authentication. 
                    </p>
                    <p className="skillLabel">Skills Involved:</p>
                    <div className="skills">
                        <div className="skill">React</div>
                        <div className="skill">G auth</div>
                        <div className="skill">firebase</div>
                        <div className="skill">firestore</div>
                        <div className="skill">noSQL</div>                                 
                    </div>
                </div>
                <div className="project">
                    <h1>MERN Ecom App</h1>
                    <h2>Link to App: <a href="https://ecomm-build.herokuapp.com/" target="_blank">HERE</a></h2>
                    <p className="content">
                        This is a full stack MERN ecommerce app. It uses a react frontend with 
                        redux. The backend is built with node, express, and a live mongo database.
                        This app is deployed to production with heroku.
                    </p>
                    <p className="skillLabel">Skills Involved:</p>
                    <div className="skills">
                        <div className="skill">React</div>
                        <div className="skill">redux</div>
                        <div className="skill">node JS</div>
                        <div className="skill">Express</div>
                        <div className="skill">mongoDB</div>     
                        <div className="skill">Heroku</div> 
                        <div className="skill">APIs</div>                              
                    </div>
                </div>
                <div className="project">
                    <h1>Puffshare</h1>
                    <h2>Link to App: <a href="https://chasemalbright.github.io/puffshare/" target="_blank">HERE</a></h2>
                    <p className="content">
                        Puffshare is website and marketplace where clients can order 
                        vape products and have them delivered with a few hours to select 
                        locations. This company was started by some friends and I.
                    </p>
                    <p className="skillLabel">Skills Involved:</p>
                    <div className="skills">
                        <div className="skill">Javascript</div>
                        <div className="skill">HTML</div>
                        <div className="skill">CSS</div>
                        <div className="skill">Forms</div>
                        <div className="skill">business</div>     
                        <div className="skill">ecomm</div> 
                        <div className="skill">delivery</div>                              
                    </div>
                </div>
                <div className="project">
                    <h1>SolarTracker</h1>
                    <h2>Link to App: <a href="https://solartracker.chasealbright.com" target="_blank">HERE</a></h2>
                    <p className="content">
                        SolarTracker is a hardware and software system I created to tracker the performance of solar assets across ERCOT. 
                        I did as a school project with Mercuria and it has even caught the interest of some venture funds. It's still early, but could be interesting!
                    </p>
                    <p className="skillLabel">Skills Involved:</p>
                    <div className="skills">
                        <div className="skill">Energy</div>
                        <div className="skill">Python</div>
                        <div className="skill">JS</div>
                        <div className="skill">Hardware</div>
                        <div className="skill">APIs</div>     
                        <div className="skill">Scaling</div> 
                        <div className="skill">Startup</div>                              
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
