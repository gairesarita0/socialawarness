import { useState } from "react";
import logo from "../../img/Social_Awareness_logo.png";
import React from 'react';
import { Routes, Route } from "react-router-dom";
import {Home,Login, Register,Whoops404} from '../../pages' ;
import {Link, useLocation} from "react-router-dom";
import "../../css/style.css"

function Header(){
  return(
    <header class="site-header">
    <div class="container">
      <div class="d-flex space-between items-center">
        <img src={logo} alt="" class="site-logo" />
        <nav className="navbar navbar-expand-lg navbar-dark bg-light ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Social Awareness</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="main_nav">
                    <ul className="navbar-nav text-dark">
                        <li className="nav-item text-dark"><a className="text-secondary nav-link " href="/">Home</a></li>
                        <li className="nav-item"><Link to="/login" className="text-secondary nav-link">Sign In</Link></li>
                        <li className="nav-item"><Link to="/register" className=" nav-link">Sign Up</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    </div>
    <div class="menu-burger">
      <div class="menu-bar"></div>
      <div class="menu-bar"></div>
      <div class="menu-bar"></div>
      <div class="menu-closer d-none">X</div>
    </div>
  </header>
  );
}

function Main(props) {
  return (
    <main>
      <div className="container">
        <div>
          <div>
            <div>
              <img src="./img/user.png" alt="" class="user_img" />
              <p class="user_name">{ props.name } <span class="user_role">Admin</span></p>
              <ul class="user_options no-style">
                <li class="option_item"><a href="#">Edit My Profile</a></li>
                <li class="option_item"><a href="#">View, Edit or Delete my Posts</a></li>
                <li class="option_item"><a href="#">Approve Posts</a></li>
                <li class="option_item"><a href="#">Log Out</a></li>
              </ul>
            </div>
          </div>

          <div class="timeline_container">
            <div class="add_new_post d-flex space-between">
              <img src="./img/user.png" alt="" class="user_icon" />
              <input type="text" placeholder="Start Writing a Post." />
          </div>
          <div class="timeline">
            <div class="single_post">
              <div class="user_meta d-flex items-center">
                <img src="./img/user.png" alt="" class="user_icon" />
                <p>{props.name}</p>
              </div>
              <div class="post_description">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid officia voluptas.</p>
              </div>
              <div class="post_media">
                <video width="100%" height="275px" controls autoplay muted>
                  <source src="./img/video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div class="single_post">
              <div class="user_meta d-flex items-center">
                <img src="./img/user.png" alt="" class="user_icon" />
                <p>Brenda E. Moss</p>
              </div>
              <div class="post_description">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid officia voluptas.</p>
              </div>
              <div class="post_media">
                <img src="./img/Social_Awareness_img.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="advertisements_container">
          <div class="advertisements">
            <h2 class="center">Advertisements</h2>
            <div class="swiper advertisement_slider mySwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="./img/social1.jpeg" alt="" />
                </div>
                <div class="swiper-slide">
                  <img src="./img/social2.jpeg" alt="" />
                </div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}

function Footer(props){
  return (
    <footer class="site-footer">
    <div class="container">
      <span class="center">All Rights Reserved By Socail Awareness | { props.year }</span>
    </div>
  </footer>
   );
}


/*
function App(props) {

  if (props.authorized){

    return (
            <div className="App">
              <Header />
              <Main name="Sarita Gaire"/>
              <Footer year= {new Date().getFullYear() } />
            </div>
    );

  }

  else {
    return (<h1>You are not authorized to be here go back you little ...</h1>);
  }
  
 
}
*/
function Dashboard(){
    return(

        <>
              <Header />
              <Main name="Sarita Gaire"/>
              <Footer year= {new Date().getFullYear() } />
        </>
    );
}

export default Dashboard;