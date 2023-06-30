import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../content/Main_profile.png'
import HeaderSocials from './HeaderSocials'
 
const Header = () => {
  return (
    
    <header>
      
      <h2 className='logo'>AlMighty.</h2>
      <div className="container header__container">
        
      <h5 className='start'>Hello I'm</h5><span><h1>Chandrabhanu Gavare</h1></span>
      <div className="text-animate">
        <h3>Full Stack Develepor</h3>
      </div>
      <CTA/>
      <div className="me">
        <img src={ME} alt="me" />
      </div>
      <HeaderSocials/>

       <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
      
    </header>
  )
}

export default Header