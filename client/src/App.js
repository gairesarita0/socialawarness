import React,{useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import {Home,Login, Register, Profile,Whoops404, Post, ApprovePost} from './pages' ;
import {AuthContext} from './helpers/authContext';
import axios from 'axios';
import {urlServer} from './urlVari'


function App() {
  
  const [authState, setAuthState] = useState({uname:"",uid:0,accesslevel:0, status:false}); 
  useEffect(()=>{
    
                  axios.get(urlServer+'/api/authOR',
                            {
                              headers:{
                                        accessToken: localStorage.getItem("accessToken")
                                      },
                            }).then((resp)=>{
                              console.log(resp.data);
                                              if(resp.data.error){
                                                setAuthState({...authState,status:false});
                                              }
                                              else{
                                                setAuthState({
                                                  uname: resp.data.username,
                                                  uid: resp.data.uid,
                                                  accesslevel: resp.data.accesslevel,
                                                  status:true,
                                                });
                                              }

                              }
                            )
  

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
