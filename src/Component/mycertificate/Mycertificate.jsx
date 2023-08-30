import React from 'react'
import './Mycertificate.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import picture1 from "../../content/Certificate1.jpeg"
import picture2 from "../../content/Certificate2.jpeg"
import picture3 from "../../content/Certificate3.jpeg"
import picture4 from "../../content/Certificate4.jpeg"
import { Pagination } from 'swiper'
import'swiper/css/pagination'
import 'swiper/css'


export const Mycertificate = () => {
  const clients=[
    {
      img: picture1,
      review: 
      'Certificate Of Participation of Machine Learning Workshop associated with ISTE MANIT BHOPAL.',
    },
    {
      img: picture2,
      review: 
      'Certificate Of Participation of Android Development Workshop associated with ISTE MANIT BHOPAL.',
    },
    {
      img: picture3,
      review: 
      'Certificate Of Completion of Python Programming associated with iHUB DivyaSampark IIT ROORKEE.',
    },
    {
        img: picture4,
        review: 
        'Certificate Of Completion of Full Stack Web-Development Course associated with iHUB DivyaSampark IIT ROORKEE.',
    },
  ];
  return (
    <section id='Mycertificate'>
      <div className="t-wrapper">
      <div className="t-heading">
        <span>What Certificates I Have</span><br/>
        <span>My Certificates</span>
      </div>
      {/* slider */}
      <Swiper 
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{clickable :true}}
      >
        {clients.map((clients,index)=>{
          return(
            <SwiperSlide key={index}>
              <div className="certificate">
              <img src={clients.img} alt="" />
              <span>{clients.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    </section>
  )
}


export default Mycertificate