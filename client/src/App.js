import React,{useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import {Home,Login, Register, Profile,Whoops404, Post, ApprovePost} from './pages' ;
import {AuthContext} from './helpers/authContext';


function App() {
  const [authState, setAuthState] = useState(false); 
  useEffect(()=>{
    if(localStorage.getItem('accessToken')){
      setAuthState(true);
    }

  },[])

  
 
  return (
    
    <AuthContext.Provider value={{authState,setAuthState}}>
      <Routes>
      
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register"  element={<Register />} />
        <Route path="/" element= {<logout/>}/>

        <Route path= "/profile" element={ <Profile />} />

        <Route path = "/approve" element={ <ApprovePost />} />

        <Route path="/post" element= {<Post />} />
        <Route path="*" element={<Whoops404 />}/>
        

      

      </Routes>
      </AuthContext.Provider>
    
  );
}

export default App;
