import React from 'react'
import './Skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='Skills'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container skill__container">
        <div className="Technical__skills">
          <h3>Technical Skills</h3>
          <div className="skill__content">
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
              <h4>HTML/CSS/JS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
              <h4>C/C++</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
              <h4>MATLAB</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>
        <div className="Soft__skills">
        <h3>Soft Skills</h3>
          <div className="skill__content">
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
              <h4>Communication Skill</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
              <h4>Public Speaking</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
              <h4>Team Work</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon'/>
              <div>
              <h4>Time Management</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>

        </div>
      </div>

    </section>
    
  )
}

export default Skills