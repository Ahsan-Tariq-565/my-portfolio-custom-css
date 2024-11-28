import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import '../app/styles/contact.css'

const Contact = () => {
  return (
    <div id='contact' className="contact-container">
        <div className="contact-grid md:grid-cols-2">
            <div className="contact-spaces">
                <h2 className="contact-heading" data-aos="zoom-in-down" >
                  To contact us</h2>
                <p className="contact-text" data-aos="zoom-in-down">
                    Drop me a line, give me a call, or send me a message by submitting the form
                </p>

                <div className="contact-flex" data-aos="zoom-in-down" >
                   <AiOutlineMail size={30}/> ahsanpimsat@gmail.com
               </div>
               <div className="contact-flex" data-aos="zoom-in-down">
                  <BsTelephone  size={30}/> (021)-000000
               </div>
           </div>

           <div className="contact-space">
                <div className="form" data-aos="zoom-in-down">
                    <label htmlFor='name'>Name</label>
                    <input type="text" className="input-field" id="name"/>
                </div>
                <div className="form" data-aos="zoom-in-down" > 
                     <label htmlFor='email'>Email</label> 
                     <input type="text" className="input-field" id="email"/>
                </div>
                <div className='form' data-aos="zoom-in-down" >
                    <label htmlFor='msg'>Message</label>
                    <textarea className=" textarea-field" id="msg" rows={8}></textarea>
                </div>

                <button className='button' data-aos="zoom-in-down" >
                 Send
                 </button>
            </div>
        </div>
      </div>
  );
};

export default Contact;
