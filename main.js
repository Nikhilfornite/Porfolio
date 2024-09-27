import React,{useRef,useEffect} from "react"
import ReactDOM from "react-dom/client"
import Elements from "./Components/landing/navbar"
import Intro  from "./Components/landing/Intro"
import Contact from "./Components/contact/contact"
import About from "./Components/About/about"
import Skills from "./Components/Skills/skills"
import Project from "./Components/Project/project"
import { useRef } from "react"
const root = ReactDOM.createRoot(document.querySelector("#main-container"))


const HeadingComponent = ()=>{
    const landingRef = useRef(null)
    const skillRef = useRef(null)
    const projectsRef = useRef(null)
    const contactRef = useRef(null)
    const aboutRef = useRef(null)
    let topinc=[18,18,18,18,62,62,62,62];
    let leftinc = [13,33,53,73,13,33,53,73];
    useEffect(()=>{
        const callback = (entries)=>{
            entries.forEach((entry)=>{
                if(entry.target === skillRef.current ){
                    const cardQuery = document.querySelectorAll(".card")
                    const cards = Array.from(cardQuery);
                    if(entry.isIntersecting){
                        entry.target.style.opacity = "1";
                        cards.map((card,index)=>{
                           card.style.opacity=1;
                           card.style.top = `${topinc[index]}%`;
                           card.style.left = `${leftinc[index]}%`;
                        })
                     }
                     else{
                        entry.target.style.opacity = "0";
                        cards.map((card,index)=>{
                            card.style.opacity=0;
                            card.style.top = "0%";
                            if(index===0||index===1||index===4||index===5){
                                card.style.left = "0%";
                            }
                            else{
                                card.style.left = "87%";
                            }
                         })
                     }
                }
                else if(entry.target === projectsRef.current){
                    const project1 = document.querySelector(".pro-card1")
                    const project2 = document.querySelector(".pro-card2")
                    if(entry.isIntersecting){
                        entry.target.style.opacity = "1";
                        project1.style.transform = "translateX(0%)"
                        project2.style.transform = "translateX(0%)"
                    }
                    else{
                        entry.target.style.opacity = "0";
                        project1.style.transform = "translateX(-190%)"
                        project2.style.transform = "translateX(190%)"
                    }
                }
                else if(entry.target === contactRef.current ){
                    const baseInfo = document.querySelector(".base-info")
                    const formdata = document.querySelector(".form-data")
                    if(entry.isIntersecting){
                        entry.target.style.opacity = "1";
                        baseInfo.style.transform = "translate(0%,0%)"
                        formdata.style.transform = "translate(0%,0%)"
                    }
                    else{
                        entry.target.style.opacity = "0";
                        baseInfo.style.transform = "translate(-190%,0%)"
                        formdata.style.transform = "translate(170%,0%)"
                    }
                }
                else{
                    if(entry.isIntersecting){
                        entry.target.style.opacity="1"
                    }
                    else{
                        entry.target.style.opacity="0"
                    }
                }

            })
        }

        const observer = new IntersectionObserver(callback,{threshold:0.5,})
        observer.observe(landingRef.current)
        observer.observe(skillRef.current)
        observer.observe(projectsRef.current)
        observer.observe(contactRef.current)
        observer.observe(aboutRef.current)
        return () => {
            observer.disconnect();
          };

    },[])

    return (
    <>
    <Elements />
    <Intro ref={landingRef}/>
    <Skills ref={skillRef}/>
    <Project ref={projectsRef} />
    <Contact ref={contactRef}></Contact>
    <About ref={aboutRef} />
    </>  /*you can use a React Fragment (<></>), which acts as a wrapper without adding an actual element in the DOM */
 )
}
root.render(<HeadingComponent />)