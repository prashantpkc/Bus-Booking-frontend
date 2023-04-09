import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import HomePage from './pages/HomePage/HomePage';
import Header from './Components/Header/Header';
import SearchResults from './SearchResults/SearchResults';
import {RecoilRoot} from "recoil"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BookTicket } from './BookTicket/BookTicket';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
  <BrowserRouter>
  
  <Header/>
  <Routes>
    <Route path='/' element = {<HomePage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/Register' element={<Signup/>}/>
    <Route path="/ticket"  element={<SearchResults/>}/>
    <Route path="/bookticket" element={<BookTicket />} />
  </Routes>
 
  </BrowserRouter>
  </RecoilRoot>
 
);