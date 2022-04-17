import React from "react";
import "../../css/style.css";
import logo from "../../img/Social_Awareness_logo.png";





function Register() {
  

  return (
    <main class="d-flex just-center items-center h-100 w-100">
      <div class="d-flex login-window">
        <div class="col-50 login-types-wrapper d-flex just-center items-center">
          <div class="login-types">
            <img src={logo} alt="" />
          </div>
        </div>
        <div
          class="col-50 login-fields-wrapper d-flex just-center items-center">
          <div class="login-fields">
            <h2>Register Yourself</h2>
            <form action="" class="login_form">
              <label for="user_id">User Name</label>
              <input 
                id="user_id"
                type="text"
                placeholder="User Name" />
              <label for="user_id">Email</label>
              <input 
                id="user_id"
                type="text"
                placeholder="Example@gmail.com" />
              <label for="user_id">Date of Birth</label>
              <input 
                id="user_id"
                type="text"
                placeholder="Date of Birth" />
              <label for="user_password">Password</label>
              <input
                id="user_password"
                type="password"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              />
              <button class="btn sign-in-btn">SIGN UP</button>
            </form>
            <div class="d-flex just-end login-help">
              <span><a href="login.html">Already have account?</a></span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;