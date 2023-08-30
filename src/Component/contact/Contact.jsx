import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import { useRef } from 'react';
// import emailjs from 'emailjs-com'
import { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ name, email, message }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Message Sent succesfully");
            setEmail("");
            setName("");
            setMessage("");
        }
    }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Gavrebhanu12@gmail.com</h5>
            <a href="gmailto:gavrebhanu12@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 9617813920</h5>
            <a href="https://api.whatsapp.com/send?phone=919617813920" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <AiOutlineInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>@Bhanu_gavare</h5>
            <a href="https://www.instagram.com/bhanu_gavare/" target="_blank">Send a message</a>
          </article>

        </div>
        <form action="" onSubmit={handleOnSubmit} target='Message Sent'>
          <input type="text" name='name' placeholder='Your Full Name' required  value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="email" name='email' placeholder='Your Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea name="message" rows="7" placeholder='Your Message' required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <button type='submit' className='btn btn-primary 'target='_blank' >Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact