import { forwardRef,useEffect } from "react";
import '../../public/css/project.css'
import portfolioImage from "../../public/images/porfoliopic.png"
import SignallingImage from "../../public/images/signalingServer.png"
import Up from '../scrollup';
const Project = forwardRef((_,ref)=>{


    return (
        <>
        <div ref={ref} id="project-container">
            <div className="Pro-heading"><h3>Browse My</h3><h1>Projects</h1></div>
            <div className="pro-card1"><img className="projectPic" src={SignallingImage} alt="project one image" /><h2 className="pro-name">Signalling Server</h2><div className="btn-container"><a className="pro-btns" target="_blank" rel="noopener noreferrer"  href="https://github.com/Nikhilfornite/Central-Signaling-Server">GitHub</a><a className="pro-btns" target="_blank" rel="noopener noreferrer"  href="https://www.youtube.com/watch?v=E__PeHajyhA&t=13s">Know More</a></div></div>
            <div className="pro-card2"><img className="projectPic" src={portfolioImage} alt="project two image" /><h2 className="pro-name">Porfolio Site</h2><div className="btn-container"><a className="pro-btns" target="_blank" rel="noopener noreferrer"  href="https://github.com/Nikhilfornite/Portfolio">GitHub</a><a className="pro-btns" target="_blank" rel="noopener noreferrer"  href="https://github.com/Nikhilfornite/Portfolio/blob/main/README.md">Know More</a></div></div>
            <Up />
        </div>
        </>
    )
}
)
export default Project;