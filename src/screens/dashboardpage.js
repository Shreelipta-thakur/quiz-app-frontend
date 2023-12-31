import React from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./styles.css"
import Navbar from './navbar';
import questionbank from "../assets/questions2.jpg"
import quiz from "../assets/quiz logo2.png"




const Dashboard = () => {
    const navigate = useNavigate()
    return (
        <>
        <div>
        <Navbar />  
        </div>
            <div className='dashboardroot'>
                <div class="container">
                    <div className="card">
                        <img src={questionbank} alt='' />
                        <button type="submit" onClick={() => {
                            navigate("/bankitem")
                        }}>Question Bank</button>
                    </div>
                    <div className="card2">
                        <img src={quiz} alt='' /> <button type="submit" onClick={() => {
                            navigate("/questionitem")
                        }}>Start Quiz</button>
                    </div>
                </div>

                <Link to="/"></Link>
                <footer>
                    &copy; 2023 Quiz App
                </footer>

            </div>
        </>
    )
}
export default Dashboard;
