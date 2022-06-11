import React,{useEffect, useState} from 'react';
import {Swiper,SwiperSlide} from "swiper/react";
import SwiperCore,{Navigation,Pagination} from "swiper";
import axios from 'axios';
import { urlServer } from "../../urlVari";
import "../../css/swiper-bundle.min.css";


SwiperCore.use([Navigation,Pagination]);

export default function Advertise() {
  const [listOfAdv, setListOfAdv]= useState([]);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(()=>{
    const fetchData = async () => {
      await axios.get( urlServer + "/api/adv/").then((response)=>{
      setListOfAdv(response.data); 
     
      });
    }
    fetchData();

},[])

  

  return (
    <>
    <div className="advertisements_container">
    <div className="advertisements">
              <h2 className="center">Advertisements</h2>
              <div className="advertisement_slider mySwiper">
               

                <Swiper id="main" tag="section" navigation pagination >

                    { listOfAdv.reverse().map((value, key) => {
                      let img = urlServer+'/uploads/'+ value.adimage;

                      return(
                        <SwiperSlide key={key} tag="li">
                          <img src={img} style={{ listStyle: 'none' }}  />
                        </SwiperSlide>
                      
                      )
                    })

                    }

                </Swiper>

                
                
               
              </div>
            </div>
            <div className="about-us-section">
              <h2 className="center">About Us</h2>
              <p>We are group 4. We want to contribute in all the apps. We have the best team possible in the world.</p>
            </div>
            <div className="contact-us-section">
              <h2 className="center">Get In Touch</h2>
              <p>Please contact us through email or phone number for further information and queries.</p>
              <span>Call: <a href="tel:0123456789">012 345 6789</a></span><br/>
              <span>E-mail: <a href="mailto:example@gmail.com">Example@gmail.com</a></span>
            </div>
          </div>
        
    </>
  )
}
