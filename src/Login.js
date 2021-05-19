import React, { useState } from 'react'
import {Link , useHistory } from "react-router-dom";
import "./Login.css";
import logoGroc from "./logoGroc.PNG";
import bannerLog from "./bannerLog.PNG";
import gmailLogo from "./gmailLogo.PNG";
import facebookLogo from "./facebookLogo.PNG";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const[email , setEmail] = useState('');
    const[password , setPassword] = useState('');

    const login= event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            history.push('/')
    })
    .catch((e) => alert(e.message));
    }
    const register= event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/')
        })
        .catch((e) => alert(e.message));
    }

    return (
        <div className="login">
           <Link to= "/">
            <img  className = "login__logo" width="200px"src={logoGroc} alt=""></img>  </Link>
            <img className="login__banner" src={bannerLog}  alt=""/>
           
           
            <form className="login__form">
            <h1>Log in</h1>
                <h5>Email</h5>
                <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                <h5>Password</h5>
                <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                <button onclick={login} type=" submit">Log in</button>
                <h6>Forgot Password ?</h6>
                <button onclick={register}>Create an account</button>
                <Link to="https://accounts.google.com/">
                <img className="gm" height="50 px" width="50px" src={gmailLogo}  alt=""/></Link>
                <Link to="https://www.facebook.com/">
                <img  className = "fb" height="50 px" width="50px" src={facebookLogo}  alt=""/></Link>
            </form>
              </div>
              
    )
}

export default Login
