import React,{useState, useContext} from "react";
import logo from "../../img/Social_Awareness_logo.png";
import axios from "axios";
import { AuthContext } from "../../helpers/authContext";
import { urlServer } from "../../urlVari";


function Signin()
 { 
  

  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);
  

  const onSubmit =async () =>{
    const data = {username: email,password:password};

    await axios.post(urlServer+"/api/login", data).then((response)=>{
      console.log(response);
          if (response.data.error){
            document.getElementById("errorMessage").innerHTML = "Username or Password is not correct<br />";
            document.getElementById("errorMessage").style.color = "red";
            document.getElementById("errorMessage").style.marginBottom = "1em";
          }
          else {
              localStorage.setItem("accessToken", response.data.accessToken);
              setAuthState(true);
              window.location.href ="/";
          }
      });
  }
  
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
            <div id="errorMessage"></div>
            <div className="login_form">
              <label htmlFor="user_id">Email</label>
              <input 
                id="user_id"
                type="text"
                onChange={(event)=>{
                  setEmail(event.target.value);
                }}
                placeholder="Example@gmail.com" />
              <label htmlFor="user_password">Password</label>
              <input
                id="user_password"
                type="password"
                onChange={(event)=>{
                  setPassword(event.target.value);
                }}
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              />
              <button onClick={onSubmit} className="btn sign-in-btn">SIGN IN</button>
            </div>
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