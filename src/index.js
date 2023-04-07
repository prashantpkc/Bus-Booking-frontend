import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import HomePage from './pages/HomePage/HomePage';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element = {<HomePage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/Register' element={<Signup/>}/>
  </Routes>
  </BrowserRouter>
 
);

