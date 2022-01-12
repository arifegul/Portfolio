import React from 'react'
import "./About.css"
import Portf from "../../image/arifee.PNG"


const About = () => {
    return (
        <div className ="a">
            <div className ="a-left">
                <div className= "a-card bg"></div>
                <div className= "a-card">
                    <img 
                        src={Portf}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className ="a-right">
                <h1 className= "a-title">About Me</h1>
                <p className= "a-sub">
                I graduated from Istanbul Aydın University Software Engineering *2016-2021*
                </p>
                <p className= "a-desc">
                I am a recent graduate, so I have developed my own projects until now 
or during my education, I have developed projects with my teammates 
in some projects. I am very eager to improve myself in my career. 
Thanks to my soft and hard skills, I can take part in many projects.
                </p>
            </div>

        </div>
    )
}

export default About
