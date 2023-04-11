import React, { useState, useEffect, useRef, useContext } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import {loggedIn} from './controlComponents/loggedIn.js';


export default function Login () {

const [authSuccess, setAuthSuccess] = useState(false);
const [username, setUserName] = useState("");
const [password, setPassword] = useState("");

const {isLoggedIn} = useContext(loggedIn);

const usernameRef = useRef();

useEffect (() => { 
  usernameRef.current.focus();
  // focus on the username when first render login component
  
  /*HaetaanToken("URL TÄHÄN", (response) => {
    if(res.status === 200) {
      setAuthSuccess(true)}
      else if(res.response.status === 400) {
        setAuthSucces(false)*/ 
} , [] );


const handleSubmit = e => {
  e.preventDefault();
  //prevent from sending the Form to the backend, so that the page does not reload

  //here call the server
  /* 
    Post("URL TÄHÄN", {username:username, password:password},
    (res) => {
      if(res.status === 200) {
        token asetetaan johonkin
        setPassword("")
        setUser("")
        isLoggedIn(true)
        setAuthSuccess(true)
        return toast("login succeed"), {position: toast.POSITION.CENTER_CENTER})
      } else if (res.response.status === 400) {
     return toast.info(res.response.data.msg), {position: toast.POSITION.BOTTOM_CENTER});
      } else {
        return toast.info("something went wrong"), {position: toast.POSITION.BOTTOM_CENTER});
      }
    })
  */ 
}


return (

    <div className="container2">
      {authSuccess ? (  <div>
        <p>
          Congrats you are logged in tai muuta soopaa tähän tai vaikka joku kiva tervetulo kuva! 
        </p>
      </div>) : (
    <form className="register" onSubmit={handleSubmit}>
    <label htmlFor="username">Username</label>
    <input
      value={username}
      onChange={(e) => setUserName(e.target.value)}
      ref={usernameRef}
      id="username"
      type="text"
      placeholder="User123"
      name="username"
      autoComplete='off'
      required
    />
    <label htmlFor="password">Password</label>
    <input
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      id="password"
      type="password"
      placeholder="your password"
      name="password"
      autoComplete='off'
      required
    />
    <button>Login</button>
  </form>
      )}
  </div>
);

};