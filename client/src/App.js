import React from 'react';
import logo from './img/Social_Awareness_logo.png' ;
import { Routes, Route } from "react-router-dom";
import {Home,Login, Register,Whoops404} from './pages' ;




function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Whoops404 />}/>
    </Routes>

  );
}

export default App;
