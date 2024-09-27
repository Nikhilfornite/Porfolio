import profilepic from'../../public/images/myimg.png'
import {ReactTyped}  from 'react-typed';
import {forwardRef} from 'react';
const Intro = forwardRef((_,ref)=>{
    return (
    <>
    <div ref={ref} className='outer-container-intro'>
        <div className="Intro-container">
            <div className="inner-intro-container">
                <h1 className="hello">
                    <ReactTyped 
                    strings={["Hello, Folks!","Welcome!"]}
                    typeSpeed ={100}
                    backSpeed={40}
                    backDelay={1000}
                    showCursor={false}
                    loop
                    />
                </h1>
                <h2 className="myself">I'm <span className="name">Nikhil AM</span>, a passionate Web developer</h2>
                <div className="specifications">
                    <h2>UI/UX Designer</h2>
                    <h2>Frontend Engineer</h2>
                    <h2>Backend Engineer</h2>
                </div>
            </div>
            <div className="image-container">
                <img id="profile-pic" src={profilepic} />
            </div>
        </div>
        <div className='resume-dwn'>
            <a href="https://drive.google.com/file/d/1E8ceuUEzQsNtyc7nJjT2Q6uMnlpVA3zM/view?usp=sharing" className='download-resume' >Resume</a>
            <a href="https://drive.google.com/file/d/1RFUQaRBMKB_kE_831NwoBCgc_cRW2Bo6/view" className='certification download-resume' >Internship</a>
        </div>
    </div>
    </>
    )
}
)

export default Intro;