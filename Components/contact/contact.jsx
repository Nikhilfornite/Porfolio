import '../../public/css/contact.css'
import { useRef,useEffect,useState,forwardRef } from 'react';
import emailjs from '@emailjs/browser'
import Up from '../scrollup';
const Contact = forwardRef((_,ref)=>{
    const form = useRef();
    const [runner,setrunner] =useState(null)
    useEffect(()=>{
        const button = document.querySelector("#sendbtn");
        const runnerfetched = document.querySelector(".runner");
        setrunner(runnerfetched);
        console.log(button,runner)
      },[])

    const sendEmail = async (e) => {
        e.preventDefault();
        document.querySelector(".install-container").style.opacity="1"
        runner.classList.add('afterHit')
        try {
          const result = await emailjs.sendForm(
            'service_ofoskn8',
            'template_o2g79ji',
            form.current,
            '0YD_5qiV3BQ0laIO-'
          );
          document.querySelector('#message-status').innerText = 'Message Sent!';
          runner.style.background="rgba(143, 237, 4, 0.824)"
          setTimeout(()=>{
            runner.classList.remove("afterHit")
            runner.style.background="linear-gradient(to right,rgb(229, 229, 131) 20% ,orange)"
            document.querySelector('#message-status').innerText = 'Sending...'
            document.querySelector(".install-container").style.opacity="0"
        },1500)
          console.log('SUCCESS!', result.text);
          e.target.reset()                                     //to reset the fields
        } catch (error) {
            document.querySelector('#message-status').innerText = 'Failed to send!';
            setTimeout(()=>{
                runner.classList.remove("afterHit")
                 document.querySelector('#message-status').innerText = 'Sending...'
                document.querySelector(".install-container").style.opacity="0"
            },800)
          console.log('FAILED...', error.text);
        }
      };
    
    return (
        <>
            <div ref={ref} id="contact-container">
                <div className='inner-contact-container'>
                    <div className="precontact-heading">
                        <div className='contact-heading'>
                            <h3>get in touch</h3>
                            <h1>CONTACT</h1>
                        </div>
                        <div className="install-container">
                            <span id='message-status'>Sending...</span>
                            <div className="runner-track">
                                <div className="runner"></div>
                            </div>
                        </div>
                    </div>
                    <div className='form-container'>
                        <div className=' base-info'>
                            <div className='inner-base-info'>
                            <div className='icondiv'>
                            <i className='phonediv icon bx bxs-phone-call'></i>
                            </div>
                                <h4>+91 8431895975</h4>
                            </div>
                            <div className='inner-base-info'>
                                <div className='icondiv'>
                                <i className='icon bx bxl-gmail'></i>
                                </div>
                                <h4 id='mymail'>nikhildevika2003@gmail.com</h4>
                            </div>
                            <div className='inner-base-info'>
                                <div className='icondiv'>
                                <i className=' icon bx bx-current-location'></i>
                                </div>
                                <h4>Bengaluru</h4>
                            </div>
                        </div>
                        <div className='middle'></div>
                        <div className='form-data'>
                            <form ref={form} onSubmit={sendEmail}>
                            <div>
                                <label htmlFor="YourName">Your Name</label>
                                <input name='name' id='YourName' placeholder='Your FullName' type="text" required />
                            </div>
                            <div>
                                <label htmlFor="YourEmail">Your Email</label>
                                <input name='mail' id='YourEmail' placeholder='your_email.gmail.com' type="text" required />
                            </div>
                            <div>
                            <label htmlFor="messageArea">Your message</label>
                            <textarea name="message" id="messageArea" placeholder='Message' required ></textarea>
                            <input type="submit" name="Send" id="sendbtn" />
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Up />
            </div>
    </>
    )
}
)
export default Contact;