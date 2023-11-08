import React from 'react'
import { Link , useNavigate} from 'react-router-dom';
import "./bankitem.css"
import javaitm from "../assets/java.jpeg"
import cprogram from "../assets/C1.png"
import Navbar from './navbar'

export default function Bankitem() {
  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate('/bankitemquestion')
  }
  const handleImageClick1 = () => {
    navigate('/c') 
  }

  return (
    < >
    <Navbar/>
     <div className="bankheader">
        <h1>Welcome to Questionbank</h1>
     </div>
     <div className="bankcontainer">
      <img src={javaitm} alt='Java Image'onClick={handleImageClick}
      style={{cursor: 'pointer'}}/>
      
      <div className='bank2'>
     <img src={cprogram} alt='C Image'onClick={handleImageClick1}
     style={{cursor: 'pointer'}}/>
      </div>
       
      
    </div>
     
    </>
  )
}
