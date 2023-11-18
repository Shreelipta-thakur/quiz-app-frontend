import React,{useState} from "react"
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./styles.css"
import loginpic from "../assets/login logo.png"


const Login = ()=>{
    const navigate  = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (email === "" || password === "") {
        alert("Please Enter a valid email and password")
      } else if (email === "admin@cutm.in" && password === "Admin@123") {
        navigate('/admin');
      } else {
        navigate("/student") 
      }
    };
    
    return(
            <div className="wrapper signIn">
                 <figure style={{borderRight:"1px solid #424345", width:"45%", height:"80%", justifyContent:"center", alignItems:"center", display:"flex"}}>
                    <img className="loginImg" src={loginpic} alt="Login pic" />
                
                </figure>
                <div className="form">
                    <div className="heading">LOGIN</div>
                   
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="e-mail">E-Mail</label>
                            <input type="email" id="e-mail" placeholder="Enter you mail" onChange={(e)=>{setEmail(e.target.value)}} />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter you password" onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div>
                        <div>
                        </div>
                        <button type="submit" onClick={handleSubmit}>
                            Submit
                        </button>
                    </form>
                    <p>
                        Don't have an account ? <Link to="/Signup"> Sign Up </Link>
                    </p>
                </div>
                
            </div>
            
    )
}
export default Login;