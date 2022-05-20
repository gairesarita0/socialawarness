import React, { useContext, useEffect } from 'react';
import { AuthContext } from "../../helpers/authContext";

import logo from "../../img/Social_Awareness_logo.png";


function Menu() {
    const { authState }= useContext(AuthContext);
    const logout = () => {
        localStorage.clear();
        window.location.href = "/";
      }
  useEffect( ()=> {
      
      var menu_trigger = document.querySelector(".menu-burger");
      var menu_bars = document.querySelectorAll(".menu-bar");
      var menu_closer = document.querySelector(".menu-closer");
      var nav_menu = document.querySelector(".site-nevigation");
      menu_trigger.addEventListener("click", function(){
      menu_trigger.classList.toggle("border-white");
      menu_bars.forEach( number =>
      { 
        number.classList.toggle("d-none");
      });
      menu_closer.classList.toggle("d-none");
      nav_menu.classList.toggle("transition");
    });
  },[]);


  return (
    <>
        <header className="site-header">
        <div className="container">
          <div className="d-flex space-between items-center">
            <img src={logo} alt="" className="site-logo" />
            <div className="site-nevigation transition">
              <ul className="d-flex no-style primary-menu">
                <li className="list-item"><a href="/">Home</a></li>
                { authState &&
                  <li className="admin_profile">
                    <img src={require("../../img/user.png")} alt="" className="user_img" />
                    <div className="profile_options_container">
                      <div className="profile_options">
                        <p className="user_name">Brenda E. Moss</p>
                        <ul className="user_options no-style">
                          <li className="option_item"><a href="/profile">Edit My Profile</a></li>
                          <li className="option_item"><a href="/post">View, Edit or Delete my Posts</a></li>
                          <li className="option_item"><a href="/approve">Approve Posts</a></li>
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
    </>
  )
}

export default Menu;