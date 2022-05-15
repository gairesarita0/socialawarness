import React,{useContext, useState} from "react";
import logo from "../../img/Social_Awareness_logo.png";
import {Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../../helpers/authContext"
import "../../css/swiper-bundle.min.css";
import "../../css/style.css";
import Modalpost from "../modals/createPost";
import Modaladv from "../modals/createAdv";



function Dashboard() {

  const { authState }= useContext(AuthContext);
  const [openPostModal, setOpenPostModal] = useState(false);
  const [openAdvModal,setOpenAdvModal] = useState(false);
  const logout = () => {
    localStorage.clear();
    window.location.href = "/"
  }




 

  return (
    <>
    <div  className="home-page" >
      <header className="site-header">
        <div className="container">
          <div className="d-flex space-between items-center">
            <img src={logo} alt="" className="site-logo" />
            <div className="site-nevigation transition">
              <ul className="d-flex no-style primary-menu">
                <li className="list-item"><a href="/">Home</a></li>
                <li className="list-item"><a href="#">Contact Us</a></li>
                { authState &&
                  <li className="admin_profile">
                    <img src={require("../../img/user.png")} alt="" className="user_img" />
                    <div className="profile_options_container">
                      <div className="profile_options">
                        <p className="user_name">Brenda E. Moss</p>
                        <ul className="user_options no-style">
                          <li className="option_item"><a href="#">Edit My Profile</a></li>
                          <li className="option_item"><a href="#">View, Edit or Delete my Posts</a></li>
                          <li className="option_item"><a href="#">Approve Posts</a></li>
                          <li className="option_item"><a onClick={logout} href="#">Log Out</a></li>
                        </ul>
                      </div>
                    </div>
                  </li>

                   
                }
                {
                  !authState &&
                  <li> <a href="/login">Login</a> </li>

                }
              </ul>
            </div>
        </div>
      </div>
      <div className="menu-burger">
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
        <div className="menu-closer d-none">X</div>
      </div>
    </header>
    <main className="page-content-container">
      <div className="container">
        <div className="d-flex space-between">
          
          <div className="timeline_container">
                {
                  authState &&

                  <div className="Popup_btns">
                    <button id="myBtn" type="button" onClick={()=>setOpenPostModal(true)} className="add_post_button">Post Event</button>
                    <button id="myBtn2" type="button" onClick={()=>setOpenAdvModal(true)} className="add_adv_btn">Post Advertisement</button>
                    {openPostModal && <Modalpost closeModel={setOpenPostModal} />}
                    {openAdvModal && <Modaladv closeModel={setOpenAdvModal} /> }
                  </div>

                }
                
            
            <div className="timeline">
              <div className="single_post">
                <div className="user_meta d-flex items-center">
                  <img src="../../img/user.png" alt="" className="user_icon" />
                  <p>Brenda E. Moss</p>
                </div>
                <div className="post_description">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid officia voluptas.</p>
                </div>
                <div className="post_media">
                  <img src={require("../../img/Social_Awareness_img.jpg")} alt="" />
                </div>
                <div className="post_comments">
                  <div className="user_meta d-flex items-center">
                    <img src={require("../../img/men-img.jpeg")} alt="" className="user_icon" />
                    <div className="user_comment">
                      <p>John Deo</p>
                      <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis unde placeat delectus.</span>
                    </div>
                    <input type="text" className="new_comment" placeholder="write new comment" />
                  </div> 
                </div>
              </div>
              <div className="single_post">
                <div className="user_meta d-flex items-center">
                  <img src={require("../../img/user.png")} alt="" className="user_icon" />
                  <p>Brenda E. Moss</p>
                </div>
                <div className="post_description">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid officia voluptas.</p>
                </div>
                <div className="post_media">
                  <video width="100%" height="275px" controls autoPlay muted>
                    <source src={require("../../img/video.mp4")} type="video/mp4" />
                  </video>
                </div>
                <div className="post_comments">
                  <div className="user_meta d-flex items-center">
                    <img src={require("../../img/men-img.jpeg")} alt="" className="user_icon" />
                    <div className="user_comment">
                      <p>John Deo</p>
                      <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis unde placeat delectus.</span>
                    </div>
                    <input type="text" className="new_comment" placeholder="write new comment" />
                  </div> 
                </div>
              </div>
            </div>
          </div>
          <div className="advertisements_container">
            <div className="advertisements">
              <h2 className="center">Advertisements</h2>
              <div className="swiper advertisement_slider mySwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src={require("../../img/social1.jpeg")} alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src={require("../../img/social2.jpeg")} alt="" />
                  </div>
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
            </div>
            <div className="about-us-section">
              <h2 className="center">About Us</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste soluta perferendis eius iusto vel illo repellat ducimus, aperiam doloribus. Dolores sequi culpa minima quam nobis repudiandae omnis tempore excepturi. Tenetur!</p>
            </div>
            <div className="contact-us-section">
              <h2 className="center">Get In Touch</h2>
              <p>Please contact us through email or phone number for further information and queries.</p>
              <span>Call: <a href="tel:0123456789">012 345 6789</a></span><br/>
              <span>E-mail: <a href="mailto:example@gmail.com">Example@gmail.com</a></span>
            </div>
          </div>
        </div>
      </div>
    </main>
    { /* -- HTML MODALS-- */}

 

      <footer className="site-footer">
      <div className="container">
        <span className="center">All Rights Reserved By Socail Awareness | 2022</span>
      </div>
    </footer>

    
  
    </ div>

  
  
    </>

  );

  
}

export default Dashboard;