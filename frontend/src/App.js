import './App.css';
import React, { useState } from 'react';
import Footer from './Components/Footer.js';
import Homepage from './Components/Homepage.js';
import Login from './Components/Login.js';
import Navbar from './Components/Navbar.js';
import Register from './Components/Register.js';
import Profile from './Components/Profile.js';

import V1 from './Components/visualizations/V1.js';
import V2 from './Components/visualizations/V2.js';
import V3 from './Components/visualizations/V3.js';
import V4 from './Components/visualizations/V4.js';
import V5 from './Components/visualizations/V5.js';

import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {

const [pathName, setPathName] = useState(useLocation().pathname);
console.log(pathName);



  return (
   <div className="container">
     <ToastContainer />
       <header>
          <Navbar setPathName={setPathName} pathName={pathName}/>
          <Routes>
              <Route path="/" exact element={<Homepage setPathName={setPathName} />} />
              <Route path="/v1" element={<V1 />} />
              <Route path="/v2" element={<V2 />} />
              <Route path="/v3" element={<V3 />} />
              <Route path="/v4" element={<V4 />} />
              <Route path="/v5" element={<V5 />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Register" element={<Register setPathName={setPathName} pathName={pathName}/>}/>
          </Routes>
       </header>
       <Footer />
   </div>
  );
}

export default App;
