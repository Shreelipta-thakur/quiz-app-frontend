import React from 'react'

import dashboardpic from "../assets/download.jpeg"
import "./navbar.css"
import 'remixicon/fonts/remixicon.css'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {
  const navigate = useNavigate()
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={dashboardpic} alt='logo' />
          <span></span>

        </div>
        <ul className="nav-links">
          
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <button type="submit" onClick={() => {
          navigate("/signup")
        }}>
          Signup
          <i class="ri-user-3-fill"></i>
        </button>
      </nav>
    </>
  )
}
