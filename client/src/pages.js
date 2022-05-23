import React from "react";
import {useLocation} from "react-router-dom";
import Signin from './component/login/login' ;
import Dashboard from "./component/dashboard/dashboard";
import Signup from './component/login/register';
import ProfileEdit from './component/profile/profile';
import PostSingle from "./component/post/post";
import Approve from "./component/profile/approve";
import Users from "./component/profile/user";

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

export function Profile(){
    return (
        <ProfileEdit />
    )
}

export function Post(){
    return(
        <PostSingle />
    )
}

export function ApprovePost(){
    return(
        <Approve />
    )
}

export function UserManagement(){
    return(
        <Users />
    )
}