import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';

import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
// import Homepage from './pages/Homepage/Homepage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    {/* <Route path='/home' element = {<Homepage/>}/> */}
    <Route path='/login' element={<Login/>}/>

    <Route path='/Register' element={<Signup/>}/>
  </Routes>
  </BrowserRouter>
 
);

