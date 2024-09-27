// import '../../public/css/about.css'
import './public/css/about.css'
import myImg from '../../public/images/NikhilImg.png'
import { forwardRef } from 'react'
import Up from '../scrollup';
const About = forwardRef((_,ref)=>{
    return (
    <div ref={ref} id="about-container">
        
        <div id="inner-about-container">
            <div className="profile-container">
                <div className='profile-card'>
                    <div className='profile-img' >
                        <img className='myImage' src={myImg} alt="profilepic" />
                    </div>
                    <div className="social-connect">
                        <div className='socials insta'><a className='social-anchor' href="https://www.instagram.com/nikhildevika2003/"><i className='bx bxl-instagram-alt'></i></a></div>
                        <div className='socials linkedin'><a className='social-anchor' href="https://www.linkedin.com/in/nikhilam2003/"><i className='bx bxl-linkedin-square' ></i></a></div>
                        <div className='socials'><a className='social-anchor' href="https://github.com/Nikhilfornite//"><i className='bx bxl-github' ></i></a></div>
                    </div>
                </div>
                <div className="content-sec">
                    <h2>Hi, I'm <span style={{color:"red"}}>Nikhil A M</span>.</h2>
                    <div className='me-lines'>
                        <h3>I'm passionate about web development and have a strong interest in exploring new technology-oriented areas. Being a fast learner, I'm always eager to expand my skills and adapt to different domains. My curiosity about how things work, especially in the backend, led me to pursue a degree in Information Science and Engineering at <span>SJB Institute of Technology</span> after completing my 12th grade.</h3>
                    </div>
                    <div className='topics-of-interest'>
                        <h2>My topic of Interests are :</h2>
                        <ul className='topics'>
                            <li>Networking</li>
                            <li>Devops</li>
                            <li> Mobile App development</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='hobbies'>
                <h2> My Hobbies:</h2>
                <div className="setone">
                    <div className='thing1'>Collect Coins</div>
                    <div className='thing1'>Blog Reading</div>
                    <div className='thing1'>Listening Podcast</div>
                </div>
                <div className="settwo">
                    <div className='thing2'>Listening Music</div>
                    <div className='thing2'>Sketching</div>
                    <div className='thing2'> Trying Recipies</div>
                </div>
            </div>
        </div>
        <Up />
    </div>
    )
}
)
export default About;