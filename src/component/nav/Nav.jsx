import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {TbCertificate} from 'react-icons/tb'
import {GiSkills} from 'react-icons/gi'
import {MdContacts} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#Skills" onClick={() => setActiveNav('#Skills')} className={activeNav === '#Skills' ? 'active' : ''}><GiSkills/></a>
      <a href="#Mycertificate" onClick={() => setActiveNav('#Mycertificate')} className={activeNav === '#Mycertificate' ? 'active' : ''}><TbCertificate/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContacts/></a>
    </nav>
  )
}

export default Nav