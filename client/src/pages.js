import React from "react";
import {Link, useLocation} from "react-router-dom";
import Signin from './component/login/login' ;
import Dashboard from "./component/dashboard/dashboard";

export function Home(){
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
        <div>
            <h1>Register</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
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