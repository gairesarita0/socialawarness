import React from 'react';
import { Routes, Route } from "react-router-dom";
import {Home,Login, Register,Whoops404} from './pages' ;




function App() {
 
  return (
    <Routes>
      <Route path="/dashboard" element={<Home />}/>
      <Route path="/" element={<Login />}/>
      <Route path="/register"  element={<Register />} />
      <Route path="*" element={<Whoops404 />}/>
      <Route path="/" element= {<logout/>}/>
    </Routes>

  );
}

export default App;
