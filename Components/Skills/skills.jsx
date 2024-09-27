import '../../public/css/skill.css'
import { useEffect,forwardRef } from 'react';
import htmlImage from '../../public/images/html.png';
import cssImage from '../../public/images/css.png';
import javascriptImage from '../../public/images/javascript.png';
import reactImage from '../../public/images/react.png';
import nodeJsImage from '../../public/images/node-js.png';
import expressImage from '../../public/images/express.png';
import postgresqlImage from '../../public/images/postgresql.png';
import javaImage from '../../public/images/java.png';
import Up from '../scrollup';
const images =[htmlImage,cssImage,javascriptImage,reactImage,nodeJsImage,expressImage,postgresqlImage,javaImage]
const skillArray = ['HTML','CSS','Javascript','ReactJs','NodeJs','ExpressJs','PostgresSQL','Java']
let cardobject = {
   object1:"I use HTML as backbone of web project mainly to structure the content effectively.</br></br>I'm using HTML5 features to integrate multimedia.</br></br> I explored 70-80% of HTML tags.",
   object2:" I got opportunity to explore css during my projects.</br> Some predominant concepts like animations keyframes, mediaquery,flexbox, transitions are now handy to me which help to build responsive and dynamic layouts.",
   object3:"Javascript as a full stack developer, I use it as both client side and server side scripting language.</br> I find it is effective because, it enhances the developer experience with modern ES6+ features. ",
   object4:"ReactJS, I basically learnt it because, it is fast also it strongly binds the data with UI.</br></br>I explored about bundlers(parcel), babel, Components both class based and functional based, Hooks etc.",
   object5:"NodeJS which is a Javascript runtime environment,used to build server-side applications also to build RESTful APIs.</br> I used it in building backend application using HTTP methods for my Signalling Server project.",
   object6:"Along with NodeJS I used ExpressJS framework to handle routing, middleware and to connect with database.</br></br>It's a perfect framework of creating scalable applications with minimal overhead. ",
   object7:"I find data consistency in postgreSQL and I explored datatypes,relational data model,Joins,ACID properties etc.</br></br> Now I'm comfortable in doing CRUD operations that are necessary.",
   object8:"Java an Interpretted language, I used it to solve DSA problems.</br>I explored some important concepts of collection frameworks,OOPs concepts."

}
const Makecard =(props)=>{
   const {skillname , cardid} = props;
   return (
      <>
      <div  className="card" id={`card${cardid+1}`} ><div className='front'><img className='logoImg' src={images[cardid]} alt={skillArray[cardid]} /><h2>{skillArray[cardid]}</h2></div><div className='back'><p className='back-content'></p></div></div>

      </>
   )
}

const Skills =forwardRef((_,ref)=>{
    useEffect(()=>{
      const cardQuery = document.querySelectorAll(".card")
      const backcards = document.querySelectorAll(".back-content")
      const backcardsContent = Array.from(backcards);
      const cards = Array.from(cardQuery);

      backcardsContent.map((element,index)=>{
         element.innerHTML=cardobject[`object${index+1}`]
      })

      cards.map((card,index)=>{
         card.addEventListener('click',()=>{
            card.classList.toggle("clicked")
            cards.forEach((otherCard) => {
               let totalclass = Array.from(otherCard.classList)
               if(otherCard!==card && totalclass.length>1){
                  otherCard.classList.remove("clicked")
               }
            })
         })
      })
    },[])

    return (
      <div ref={ref} id="main-div">
        <div id="card-container">
            <div className="skill-label"><div className="skill-div" >Skills</div></div>
            {skillArray.map((skill, index) => (
                <Makecard key={index} skillname={skill} cardid={index}
                 />
            ))}
            </div>
            <Up />
        </div>
    )
}
)

export default Skills;