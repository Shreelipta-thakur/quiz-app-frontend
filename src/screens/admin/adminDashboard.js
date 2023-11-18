import React, { useEffect, useState } from 'react'
import "./adminStyles.css"
import 'remixicon/fonts/remixicon.css'
import AddQuizScreen from '../../components/addQuiz';
import QuizView from '../../components/quizView';
import { useNavigate } from 'react-router-dom'
function AdminDashboard() {
  const navigate = useNavigate()
  const navItems = ["Create Quiz", "Create Qustion Bank"]
  const [selectedNav, setSelectedNav] = useState(navItems[0]);
  const [quizItems, setQuizitems] = useState([]);
  const [showAddQuiz, setShowAddQuiz] = useState(false);
  const [showQuizPrev, setShowQuizPrev] = useState(false)
  const [selectedQuiz, setSelectedQuiz] = useState({})
  const getQuiz = async ()=>{
    try {
      const quiz = localStorage.getItem("quiz");
      const res = await JSON.parse(quiz);
      console.log("res", res);
      if(res?.length) {
        setQuizitems(res);
      }
      else {
        setQuizitems([])
      }
    } catch (error) {
      console.log("error getting quiz from storage", error)
    }
  };
const renderAddQuiz = ()=>{
  if(showAddQuiz){
    return <AddQuizScreen onCancel={()=>{setShowAddQuiz(false)}}/>
  } else if(showQuizPrev){
   return <QuizView data={selectedQuiz} onClose={()=>{setShowQuizPrev(false)}} />
  } else {
    return (
      <div className='cardContainer'>
      {quizItems.map((item, index)=>{
       return <div key={`quizItem-${index}`} className='card' onClick={()=>{
          setSelectedQuiz(item);
          setShowQuizPrev(true);
        }}>
          <p style={{color: "blue", fontWeight: "bold", fontSize: "30px"}}>{item.name}</p>
        </div>
      })}
      <div className='card' onClick={()=>{
        setShowAddQuiz(true)
      }}>
        <p style={{color: "blue", fontWeight: "bold", fontSize: "30px"}}>+</p>
      </div>
    </div> 
    )
  }

}
const renderAddQuestionBank = ()=>{
  return <div></div>
}
  useEffect(()=>{
    getQuiz()
  },[])
  return (
    <div className='adminRoot'>
     <div className='navContainer'>
         <h3> Welcome !!</h3>
         <button type="submit" onClick={() => {
          navigate("/login")
        }}>
          Logout {" "}
          <i class="ri-user-3-fill"></i>
        </button>
     </div>
     <div className='contentContainer'>
      <div className='sideNav'>
      {navItems.map((item, index)=>{
          return(
            <div 
            className='navItem'
            style={{backgroundColor: item === selectedNav ? "rgb(160, 160, 245)" : "rgb(108, 108, 232)" }}
            onClick={()=>{setSelectedNav(item)}}
            >
              <span style={{color:"white"}}>{item}</span>
            </div>
          )
        })}
      </div>
      <div style={{width: '100%'}}>
      <div className='breadcrumb'>
        {selectedNav}
      </div>
      {selectedNav === "Create Quiz" ? renderAddQuiz() : renderAddQuestionBank() }
      </div>
     </div>
    </div>
  )
}

export default AdminDashboard