import React from "react";
import "../../css/style.css";
import logo from "../../img/Social_Awareness_logo.png";
import * as Yup from 'yup';
import {Formik,Form,Field, ErrorMessage} from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Register(setRegisterInfo) {
  const nevigate = useNavigate();

  const initalValue = {
    uname: "",
    email: "",
    password: "",
    cpassword: "",
    bdate: "",
  }

  const validationSchema = Yup.object().shape({

    uname: Yup.string().min(3),
    email: Yup.string().email().required(),
    password: Yup.string().max(20).required().matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    cpassword: Yup.string().required().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    bdate: Yup.string().required(),

})


  const addUser = (data) => {
    axios.post('http://localhost:8000/register',data).then((resp)=>{
            
            if(resp.data.error){
          
              if(resp.data.error.code= 'ER_DUP_ENTRY'){
                
                document.getElementById("registerMessage").innerHTML = "Duplicate Email<br />";
                document.getElementById("registerMessage").style.color = "red";
                document.getElementById("registerMessage").style.marginBottom = "1em";


              }
            }
            else{
                  document.getElementById("registerMessage").innerHTML = "Sucessfully Added User you are being redirected to login page.<br />";
                  document.getElementById("registerMessage").style.color = "Green";
                  document.getElementById("registerMessage").style.marginBottom = "1em";

                  setTimeout(()=>{nevigate("/");} , 3000);
                  
                  
            }
          });
    
    
    
  }

  //function testPassword()

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
            <h2>Register Yourself</h2>

            <div id="registerMessage"></div>

            <Formik initialValues={ initalValue } onSubmit= { addUser} validationSchema={validationSchema} >
              <Form className="login_form">
                <label htmlFor="user_id">Name</label>
                <ErrorMessage name="uname" className="errorMessage" component="div" />
                <Field
                  id="uname"
                  type="text"
                  placeholder="User Name" 
                  name="uname"
                  
                  />


                <label htmlFor="user_id">Email</label>
                <ErrorMessage name="email" className="errorMessage" component="div" />
                <Field 
                  id="email"
                  type="email"
                  name="email"
                  
                  placeholder="Example@gmail.com" 
                  required
                  />


                <label htmlFor="user_id">Date of Birth</label>
                <ErrorMessage name="dob" className="errorMessage" component="div" />
                <Field
                  id="bdate"
                  type="date"
                  name="bdate"
                  
                  placeholder="Date of Birth" 
                  required
                  />


                <label>Password</label>
                <ErrorMessage name="password" className="errorMessage" component="div" />
                <Field
                  id="upassword"
                  type="password"
                  name="password"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                  required
                />


                <label>Confirm Password</label>
                <ErrorMessage name="cpassword" className="errorMessage" component="div" />
                <Field
                  id="cpassword"
                  type="password"
                  name="cpassword"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" 
                  required
                />
                <button type="submit" className="btn sign-in-btn">SIGN UP</button>
              </Form>
            </Formik>
              <div className="d-flex just-end login-help">
              <span><a href="/">Already have account?</a></span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;