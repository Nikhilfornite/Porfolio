import { forwardRef,useEffect } from "react";
import './public/css/project.css'
// import '/public/css/project.css'
import portfolioImage from "../../public/images/porfoliopic.png"
import SignallingImage from "../../public/images/signalingServer.png"
import Up from '../scrollup';
const Project = forwardRef((_,ref)=>{


    return (
        <>
        <div ref={ref} id="project-container">
            <div className="Pro-heading"><h3>Browse My</h3><h1>Projects</h1></div>
            <div className="pro-card1"><img className="projectPic" src={SignallingImage} alt="project one image" /><h2 className="pro-name">Signalling Server</h2><div className="btn-container"><button className="pro-btns">GitHub</button><button className="pro-btns">Know More</button></div></div>
            <div className="pro-card2"><img className="projectPic" src={portfolioImage} alt="project two image" /><h2 className="pro-name">Porfolio Site</h2><div className="btn-container"><button className="pro-btns">GitHub</button><button className="pro-btns">Know More</button></div></div>
            <Up />
        </div>
        </>
    )
}
)
export default Project;