import React from "react"
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./styles.css"
import loginpic from "../assets/login logo.png"


const Login = ()=>{
    const navigate  = useNavigate()
    return(
        
        
            <div className="wrapper signIn">
                 <figure>
                    <img src={loginpic} alt="Login pic" />
                
                    </figure>
                <div className="form">
                    <div className="heading">LOGIN</div>
                   
                    <form>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter your name" />
                        </div>
                        <div>
                            <label htmlFor="e-mail">E-Mail</label>
                            <input type="email" id="e-mail" placeholder="Enter you mail" />
                        </div>
                        <button type="submit" onClick={()=>{
                            navigate("/")
                        }}>
                            Submit
                        </button>
                    </form>
                    <p>
                        Don't have an account ? <Link to="/Signup"> Sign In </Link>
                    </p>
                </div>
                
            </div>
            
    )
}
export default Login;