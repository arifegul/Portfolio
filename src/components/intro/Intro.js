import "./Intro.css"
import Myintro from "../../image/comp.png"
import linkedin from "../../image/linkedin.png";
import github from "../../image/github.png";
import medium from "../../image/medium.png";

const Intro = () => {
    return (
        <div className = "i">
            <div className= "i-left">
                <div className = "i-left-wrapper">
                    <h2 className = "i-intro">Hello, My name is</h2>
                    <h1 className = "i-name">Arife Gül Yalçın</h1>
                    <div className= "i-title">
                        <div className= "i-title-wrapper">
                            <div className= "i-title-item">Sotfware Engineer</div>
                            <div className= "i-title-item">Developer</div>
                            <div className= "i-title-item">Designer</div>
                            <div className= "i-title-item">Content Creator</div>
                        </div>
                    </div>
                    <p className = "i-desc">
                        I design and develop modern website,
                        specializing in creating stylish. 
                        Also, I develop back-and website using Java-Spring Boot.
                    </p>

                    <div className="sociallogo">
                        <a href="https://www.linkedin.com/in/arifegulyalcin/"><img className="social" src={linkedin} alt="linkedin"/></a>
                        <a href="https://github.com/arifegul"><img className="social" src={github} alt="linkedin"/></a>
                        <a href="https://medium.com/@arifegulyalcinn"><img className="social" src={medium} alt="linkedin"/></a>
            
                    </div>

                </div>
            </div>
            <div className='i-right'>
                <div className= "i-bg"></div>
                <img src= {Myintro} alt= "" className= "i-img" ></img>
            </div>
        </div>
    )
}

export default Intro
