import './Footer.css'

import React from 'react'
import {Link} from 'react-router-dom'
import resume from '../assets/CHASERESUME2023.pdf'

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://twitter.com/chasemalbright" target="_blank">
                <div className="footerItem">
                    <p>Twitter</p>
                </div>
            </a>
            <a href="https://github.com/chasemalbright" target="_blank">
                <div className="footerItem">
                    <p>Github</p>
                </div>
            </a>
            <a href={resume} download>
                <div className="footerItem">
                    <p>Resume</p>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/chase-albright-b82b92202/" target="_blank">
                <div className="footerItem">
                    <p>LinkedIn</p>
                </div>
            </a>
            <a href="mailto:chasemalbright33@gmail.com">
                <div className="footerItem">
                    <p>Email</p>
                </div>
            </a>
        </div>
    )
}

export default Footer
