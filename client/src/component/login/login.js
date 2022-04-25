import React,{useState} from "react";
import "../../css/style.css";
import logo from "../../img/Social_Awareness_logo.png";

function Signin()
 { 
  return (
    <main className="d-flex just-center items-center h-100 w-100">
      <div className="d-flex login-window">
        <div className="col-50 login-types-wrapper d-flex just-center items-center">
          <div className="login-types">
            <img src={logo} alt="" />
          </div>
        </div>
        <div
          className="col-50 login-fields-wrapper d-flex just-center items-center">
          <div className="login-fields">
            <h2>Log In</h2>
            {/* error */}
            <form action="/dashboard" className="login_form">
              <label for="user_id">User Name</label>
              <input 
                id="user_id"
                type="text"
                placeholder="Example@gmail.com" />
              <label for="user_password">Password</label>
              <input
                id="user_password"
                type="password"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              />
              <button className="btn sign-in-btn">SIGN IN</button>
            </form>
            <div className="d-flex space-between login-help">
              <span><a href="/register">Forgot Password?</a></span>
              <span><a href="/register">Not a Member?</a></span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signin;