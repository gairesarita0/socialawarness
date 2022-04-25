import React, { useReducer } from "react";
import "../../css/style.css";
import logo from "../../img/Social_Awareness_logo.png";





function Dashboard(sessionEmail) {
console.log(sessionEmail);
  if(sessionEmail ="") 
 {
  window.location.href = "/login";
 }
  

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="d-flex space-between items-center">
            <img src={logo} alt="" className="site-logo" />
            <div className="site-nevigation transition">
              <ul className="d-flex no-style primary-menu">
                <li className="list-item"><a href="home-page.html">Home</a></li>
                <li className="list-item"><a href="#">Contact Us</a></li>
                <li className="admin_profile">
                  <img src={require("../../img/user.png")} alt="" className="user_img" />
                  <div className="profile_options_container">
                    <div className="profile_options">
                      <p className="user_name">Brenda E. Moss</p>
                      <ul className="user_options no-style">
                        <li className="option_item"><a href="#">Edit My Profile</a></li>
                        <li className="option_item"><a href="#">View, Edit or Delete my Posts</a></li>
                        <li className="option_item"><a href="#">Approve Posts</a></li>
                        <li className="option_item"><a href="/">Log Out</a></li>
                      </ul>
                    </div>
                  </div>
                </li>
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
            <div className="Popup_btns">
              <button id="myBtn" className="add_post_button">Post Event</button>
              <button id="myBtn2" className="add_adv_btn">Post Advertisement</button>
            </div>
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
                  <video width="100%" height="275px" controls autoplay muted>
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

    { /* -- The Modal --> */}
  <div id="myModal" className="modal">
    {/*<!-- Modal content --> */}
    <div className="modal-content">
      <div className="modal-header">
        <span className="close">&times;</span>
        <h2>Post Event</h2>
      </div>
      <div className="modal-body">
        <form action="">
          <div className="d-flex">
            <div className="col-1-2">
              <label for="event-name">Event Title</label><br />
              <input type="text" name="event-name" />
            </div>
            <div className="col-1-2">
              <label for="event-cat">Event Category</label><br />
              <input type="text" name="event-cat" />
            </div>
            <div className="col-1-2">
              <label for="event-location">Event Location</label><br />
              <input type="text" name="event-location" />
            </div>
            <div className="col-1-2">
              <label for="event-date">Event Date</label><br />
              <input type="text" name="event-date" />
            </div>
          </div>
          <div className="event_desc">
            <label for="event-desc">Event Description</label><br />
            <textarea name="event-desc" id="" cols="30" rows="10"></textarea>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  </div>

  { /*<!-- Modal 2 for advertisement --> */}
  <div id="myModal2" className="modal">
    { /* <!-- Modal content --> */}
    <div className="modal-content">
      <div className="modal-header">
        <span className="close">&times;</span>
        <h2>Post Advertisement</h2>
      </div>
      <div className="modal-body">
        <form action="">
          <div className="d-flex">
            <div className="col-1-2">
              <label for="advt-name">Advertisement Title</label><br />
              <input type="text" name="advt-name" />
            </div>
            <div className="col-1-2">
              <label for="advt-cat">Advertisement Category</label><br />
              <input type="text" name="advt-cat" />
            </div>
            <div className="col-1-2">
              <label for="advt-attach">Attachments</label><br />
              <input type="file" accept="image/png, image/jpeg" name="advt-attach" />
            </div>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
    </div>
    <footer className="site-footer">
      <div className="container">
        <span className="center">All Rights Reserved By Socail Awareness | 2022</span>
      </div>
    </footer>
    <script src="../../js/swiper-bundle.min.js"></script>
    <script src="../../js/app.js"></script>
    </>
  );
}

export default Dashboard;