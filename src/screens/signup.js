import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css"
import signinpic from "../assets/logoquiz.png"
import loginpic from "../assets/login logo.png"

export default function Signup() {
    const navigate  = useNavigate()
  return (
    <div className="wrapper signUp">
       <figure style={{borderRight:"1px solid #424345", width:"45%", height:"80%", justifyContent:"center", alignItems:"center", display:"flex"}}>
                    <img className="loginImg" src={loginpic} alt="Login pic" />
                </figure>
      <div className="form">
      <figure>
                    <img src={signinpic} alt="Sign in pic" />
                
                    </figure>
        <div className="heading">CREATE AN ACCOUNT</div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="name">E-Mail</label>
            <input type="text" id="name" placeholder="Enter your mail" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter you password"
            />
          </div>
          <button type="submit" onClick={()=>{ navigate("/student")}}>Submit</button>
          <h2 align="center" class="or">
            
          </h2>
        </form>
        <p>
          Have an account ? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
