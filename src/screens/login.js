import React,{useState} from "react"
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./styles.css"
import loginpic from "../assets/login logo.png"


const Login = ()=>{
    const navigate  = useNavigate()
    const [selectedUserType, setSelectedUserType] = useState('');

    const handleSelectChange = (event) => {
      setSelectedUserType(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (selectedUserType === 'student') {
        navigate('/student');
      } else {
        navigate('/teacher');
      }
    };
    
    return(
        
        
            <div className="wrapper signIn">
                 <figure>
                    <img src={loginpic} alt="Login pic" />
                
                    </figure>
                <div className="form">
                    <div className="heading">LOGIN</div>
                   
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="password" id="password" placeholder="Enter your name" />
                        </div>
                        <div>
                            <label htmlFor="e-mail">E-Mail</label>
                            <input type="email" id="e-mail" placeholder="Enter you mail" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="text" id="password" placeholder="Enter you password" />
                        </div>
                        <div>
  
      <select id="userType" onChange={handleSelectChange} value={selectedUserType} required>
     <option value="">selectedUserType</option>
        <option value="student" >Student</option>
        <option value="teacher">Teacher</option></select>
                        </div>
                        <button type="submit" onClick={handleSubmit}
                          
                        >
                            
    
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