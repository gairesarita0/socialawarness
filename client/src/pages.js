import React from "react";
import {useLocation} from "react-router-dom";
import Signin from './component/login/login' ;
import Dashboard from "./component/dashboard/dashboard";
import Signup from './component/login/register';

export function Home(sessionEmail){
    sessionEmail="hello"
    console.log(sessionEmail);
    return (
        <Dashboard />
    )
}

export function Login(){
    return (
        <div>
           <Signin />
        </div>
    )
}


export function Register(){
    return (
      <Signup />
    )
}

export function Whoops404() {
    let location = useLocation();
    return (
        <div>
            <h1>Resourse not found at {location.pathname}</h1>
        </div>
    )
}