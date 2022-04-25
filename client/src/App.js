import React,{useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import {Home,Login, Register,Whoops404} from './pages' ;




function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "12345",
    name:"admin",

  }


  const [user,setUser] = useState({name:"",email:"",password:""});
  const [error,setError] = useState("");

  const login = details =>{
    console.log("details");
  }

  const logout = () => {
    console.log("logout");
  }


  return (
    <Routes>
      <Route path="/dashboard" sessionEmail={user.email} element={<Home />}/>
      <Route path="/" login={login} error={error} element={<Login />}/>
      <Route path="/register"  element={<Register />} />
      <Route path="*" element={<Whoops404 />}/>
      <Route path="/"logout={logout} element= {<logout/>}/>
    </Routes>

  );
}

export default App;
