import './Work.css'
import React from 'react'

function Work() {
    return (
        <div className="work">

            <div className="about">
                <h1>My Work Experience</h1>
                <p>
                    I have professional experience at 3 reputable companies
                    and have learned so much from each of them. I am always
                    looking for new opportunities!
                </p>
            </div>

            <div className="workContainer">


                <div className="job">
                    <a href="https://www.woodmac.com/" target="_blank">
                        <img src="https://energy-dialogues.com/mef/wp-content/uploads/sites/5/2014/07/Genscape.png" className="company"/>
                    </a>
                    <h1>Intern/Analyst</h1>
                    <p className="label">Houston-Summer 2018</p>
                    <p className="content">
                        During this internship, I was part of a team that developed a
                        machine learning program to detect Tesla cars that were being
                        shipped out of the factory in Fremont, CA. This tool was built 
                        using a variety of tools and environments such as pandas and 
                        tensorflow. Checkout the code on my Github! I learned about data collection
                        and what datapoints would be of interest to clients and investors.
                        In this internship, I also got experience with oil and gas 
                        price analysis and forecasting.
                    </p>
                    <p className="skillLabel">Skills Learned:</p>
                    <div className="skills">
                        <div className="skill">Python</div>
                        <div className="skill">ML/AI</div>
                        <div className="skill">Tensorflow</div>
                        <div className="skill">Excel</div>
                        <div className="skill">Forecasting</div>                                 
                    </div>
                </div>

                <div className="job">
                    <a href="https://www.datagumbo.com/" target="_blank">
                        <img src="https://offers.datagumbo.com/hs-fs/hubfs/DataGumbo_logo_final_darkText.png?width=413&name=DataGumbo_logo_final_darkText.png" className="company"/>
                    </a>
                    <h1>Software Engineering Intern</h1>
                    <p className="label">Houston-Summer 2021</p>
                    <p className="content">
                        Data Gumbo is a blockchain technology startup that is
                        working to digitize contracts. During this internship, I
                        helped develop a backend tool to clean up blocks on the blockchain
                        after testing. I used react for the frontend, golang for developing APIs 
                        and backend code, and mongoDB as a database. I also go to learn how a 
                        blockchain is developed and maintained and how a complex application is 
                        deployed with microservices such as docker and kubernetes.
                    </p>
                    <p className="skillLabel">Skills Learned:</p>
                    <div className="skills">
                        <div className="skill">React</div>
                        <div className="skill">MongoDB</div>
                        <div className="skill">GoLang</div>
                        <div className="skill">APIs</div>
                        <div className="skill">Startups</div> 
                        <div className="skill">Git</div>
                        <div className="skill">Docker</div>                            
                    </div>
                </div>

                <div className="job">
                    <a href="https://www.4-tower.com/" target="_blank">
                        <img src="https://www.4-tower.com/assets/Logo_white.svg" className="company4"/>
                    </a>
                    <h1>Software Engineering Intern</h1>
                    <p className="label">Houston-Summer 2020</p>
                    <p className="content">
                        4-tower is a hospital software startup that has an app for hospitals to
                        manage inventory and track equipment. During this internship I got to experience 
                        working on a small team with the founder and other employees. My job was to help build 
                        features with angular and style components with css. I got learn the basics of angular. I also helped maintain product 
                        databases and communicate with customers. This experience was very exciting and I learned
                        a lot about early stage startups.
                    </p>
                    <p className="skillLabel">Skills Learned:</p>
                    <div className="skills">
                        <div className="skill">Javascript</div>
                        <div className="skill">Database</div>
                        <div className="skill">Angular</div>
                        <div className="skill">CSS</div>
                        <div className="skill">Startups</div>                       
                    </div>
                </div>
            </div>


            <div className="about about1">
                <h1>What I am interested in...</h1>
                <p>
                    I am interested working in most any technology field.
                    In the future, I hope to get many different experiences.
                    I am especially  interested in technology startups, algorithmic trading, 
                    and hardware engineering.
                </p>
            </div>
            
        </div>
    )
}

export default Work
