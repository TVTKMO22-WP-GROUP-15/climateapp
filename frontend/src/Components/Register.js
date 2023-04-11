import React, { useState, useEffect, useRef } from 'react';
import checkUsersInput from './controlComponents/controlInputs.js';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


export default function Register({setPathName, pathName}) {

  const loginInfo = () => (
    <div>
      <p>Registration was successful! You can now login: </p>
       <Link onClick={() => setPathName("/Login")} className={`${pathName === "/Login" ? "active" : "navlink"}`} id="register-link" to="/Login">LOGIN HERE</Link>
    </div>
  );
  
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [resgisterSucceed, setRegisterSucceed] = useState(false);

  useEffect(() => { setErrorMessage(""); }, [username, password, password2]);
  // runs on the first render and everytime any given argument value changes 

  const usernameRef = useRef();
  useEffect(() => { usernameRef.current.focus(); } , []);
  // focus on the username when first render register component

  const handleSubmit = e => {
    e.preventDefault();
    //prevent from sending the Form to the backend, so that the page does not reload

    if (password !== password2) setErrorMessage("The given passwords do not match!"); 
    // check that the entered passwords are the same

    let checkInputs = checkUsersInput(username, password);
    // checking that the inputs are valid for the database

    if (checkInputs !== "") setErrorMessage(checkInputs); 

    if (errorMessage !== "") return toast(errorMessage, {position: toast.POSITION.BOTTOM_CENTER});

    //IF NO ERROR CALL THE SERVER HERE
    console.log ("Calling the server");
    
    /* 
    Post ("url tähän", {username: username, password: password}, (res) => {
      if (res.status === 200) {
        setErrorMessage("")
        setPassword("")
        setUsername("")
        setRegisterSucceed(true)
      }
      else if (res.response.status === 400) { setErrorMessage(res.response.data.msg)
      else {
        setErrormessage("Something went wrong")
        toast(errorMessage, {position: toast.POSITION.BOTTOM_CENTER})
      }}
    } 
    */ 

    if (resgisterSucceed) return toast.info((loginInfo), {position: toast.POSITION.BOTTOM_CENTER});
  }

    return (
        <div className="container2">
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
        <label htmlFor="password2">Password Again</label>
        <input
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          id="password2"
          type="password"
          placeholder="your password"
          name="password"
          autoComplete='off'
          required
        />
        <button>Register</button>
      </form> 
      </div>

    );
};