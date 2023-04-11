import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {loggedIn} from './controlComponents/loggedIn.js';

export default function Navbar({setPathName, pathName}) {
const { isLoggedIn } = useContext(loggedIn);

return (
    
<nav className="tabs">
<ul>
  <li>
   <p className="downdrop">Visualizations 🔽</p>
    <ul className="dropdown">
      <li><Link onClick={() => setPathName("/v1")} className="link-style" to="/v1">v1</Link></li>
      <li><Link onClick={() => setPathName("/v2")} className="link-style" to="/v2">v2</Link></li>
      <li><Link onClick={() => setPathName("/v3")} className="link-style" to="/v3">v3</Link></li>
      <li><Link onClick={() => setPathName("/v4")} className="link-style" to="/v4">v4</Link></li>
      <li><Link onClick={() => setPathName("/v5")} className="link-style"to="/v5">v5</Link></li>
    </ul>
  </li>
</ul>
 { isLoggedIn ? (
 <ul>
  <li><Link onClick={() => setPathName("/")} className={`${pathName === "/" ? "active" : "navlink"}`} to="/">Home</Link></li>
  <li><Link onClick={() => setPathName("/Profile")} className={`${pathName === "/Profile" ? "active" : "navlink"}`}  to="/Profile">Profile</Link></li>
  <li><Link onClick={() => { 
    setPathName("/");
    isLoggedIn(false);
    }}
   className="navlink" to="/">Log Out</Link></li>
  </ul> ) : (
    <ul>
  <li><Link onClick={() => setPathName("/")} className={`${pathName === "/" ? "active" : "navlink"}`} to="/">Home</Link></li>
  <li><Link onClick={() => setPathName("/Login")} className={`${pathName === "/Login" ? "active" : "navlink"}`}  to="/Login">Login</Link></li>
  <li><Link onClick={() => setPathName("/Register")} className={`${pathName === "/Register" ? "active" : "navlink"}`} to="/Register">Register</Link></li>
    </ul>
  ) }
</nav>

);

};