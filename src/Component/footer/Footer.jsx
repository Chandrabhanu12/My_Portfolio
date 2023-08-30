import React from 'react'
import './Footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsFileArrowUp} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>AlMighty</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Mycertificate">Certificate</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><AiOutlineFacebook/></a>
        <a href="https://instagram.com"><AiOutlineInstagram/></a>
        <a href="https://twitter.com"><AiOutlineTwitter/></a>
        <div className="go__up">
        <a href="#"><BsFileArrowUp/></a>
        </div>
        
      </div>
      <div className="footer__copyright">
        <small>&copy; Almighty Soul.All rights reserved</small>
      </div>
    
    </footer>
  )
}

export default Footer