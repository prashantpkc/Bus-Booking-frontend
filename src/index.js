import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';

import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

  <Routes>
    <Route path='/login' element={<Login/>}/>

    <Route path='/Register' element={<Signup/>}/>
  </Routes>
  </BrowserRouter>
 
);

