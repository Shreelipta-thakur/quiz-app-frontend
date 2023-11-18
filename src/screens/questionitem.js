import { useEffect, useState } from "react";
import "./quiz.css";
import PopUpCard from "../components/PopUpCard";
import { useNavigate } from "react-router-dom";
const defaultQuiz = [
  {
    name: "GK",
    questions:[
      { id:1,
        questionText: "Who is Prime Minister of India?",
        answerOptions: [
          { id: 1,answerText: "Vijay Rupani", isCorrect: false },
          { id: 2,answerText: "Manmohan singh", isCorrect: false },
          { id: 3,answerText: "Narendra Modi", isCorrect: true },
          { id: 4,answerText: "Deep Patel", isCorrect: false }
        ]
      },
      {
        id:2,
        questionText: "Who is CEO of Tata?",
        answerOptions: [
          { id: 1,answerText: "Jeff Bezos", isCorrect: false },
          { id: 2,answerText: "Ratan Tata", isCorrect: true },
          { id: 3,answerText: "Mukesh Ambani", isCorrect: false },
          { id: 4,answerText: "Gautam Adani", isCorrect: false }
        ]
      },
      {
        id:3,
        questionText: "who is richest person in the world?",
        answerOptions: [
          { id: 1,answerText: "Jeff Bezos", isCorrect: false },
          { id: 2,answerText: "Elon Musk", isCorrect: true },
          { id: 3,answerText: "Mukesh Ambani", isCorrect: false },
          { id: 4,answerText: "Warren Buffett", isCorrect: false }
        ]
      },
      { id:4,
        questionText: "how many countries in the world?",
        answerOptions: [
          { id: 1,answerText: "120", isCorrect: false },
          { id: 2,answerText: "183", isCorrect: false },
          { id: 3,answerText: "170", isCorrect: false },
          { id: 4,answerText: "195", isCorrect: true }
        ]
      }
    ]
  }
];
export default function Questionitem() {
  const [currentQ, setCurrentQ] = useState(0);
  const [showPopUP, setShowPopUp] = useState(0)
  const [selected, setSelected] = useState();
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [quizData, setQuizData] = useState([])
  const [questions, setQuestions] = useState([])
  const [selectedQuiz, setSelectedQuiz] = useState("")
  const questionItem = questions[currentQ];
  const navigate  = useNavigate()

  const getQuiz = async ()=>{
    try {
      const data = localStorage.getItem("quiz");
      const Q = await JSON.parse(data);
      console.log("Quiz", Q)
      if(Q?.length){
        setQuizData(Q)
      } else {
        setQuizData(defaultQuiz)
      }
    } catch (error) {
      console.log("Error getting question data",error)
    }
  }
  const selectQuiz = (name)=>{
    const qList = quizData.find((item)=>item.name === name);
    qList?.questions && qList?.questions.length ?  setQuestions(qList?.questions) :  setQuestions(defaultQuiz[0].questions)
  }
  useEffect(()=>{
    getQuiz();
    selectQuiz(selectedQuiz)
  },[])
  const onPressNext = () => {
    if(questionItem.answerOptions[selected]?.isCorrect === true) {
      setTotalCorrect(totalCorrect+1)
    }
    setCurrentQ(
      currentQ < questions.length ? currentQ + 1 : questions.length - 1
    );
    setSelected({})
  };
  const onPressPrev = () => {
    setCurrentQ(currentQ === 0 ? 0 : currentQ - 1);
  };
 const onPressStart=()=>{
  console.log("selectedQuiz", selectedQuiz)
  if(selectedQuiz !== ""){
    selectQuiz(selectedQuiz);
    setShowPopUp(3)
  } else{
    alert("Please select a topic to start the quiz")
  }
  }
  const onPressSubmit = ()=>{
    if(questionItem.answerOptions[selected]?.isCorrect === true) {
      setTotalCorrect(totalCorrect+1)
    }
    setTimeout(() => {
      setShowPopUp(1)
    }, 500);
  }
  const renderContent = ()=>{
    if(showPopUP === 0){
      return (
        <div style={{
          width: "100%",
          height: "50%",
          backgroundColor: "lightgray",
          border: "1px solid darkgray", 
          alignSelf:"center",
          alignItems:"center",
          justifyContent:"center",
          padding: "20px",
          display:"flex",
          flexDirection:"column",
          borderRadius:"20px"
      }}>
          <div style={{
              color:"black",
              fontSize: "40px"
          }}>Please Select a Topic to Start the quiz</div>
          <div  style={{
              marginTop: "10px"
          }}>
              <select onChange={(e)=>{setSelectedQuiz(e.target.value)}}  style={{width: "200px", height:"50px"}}>
              <option value={''} >Select Topic</option>
                {quizData.map((item, index)=>{
                return  <option value={item.name} key={`option-item${index}`}>{item.name}</option>
                })}
              </select>
          </div>
          <button style={{
              width: "100x",
              height:"50px",
              background:"green",
              marginTop: "20px"
          }} onClick={onPressStart}>Start Quiz</button>
      </div>
        // <PopUpCard 
        //   title="All The Best !!" 
        //   description="Let's start the Quiz, Each question contains 5 marks. Result will be displayed on submission."
        //   btnName="Start"
        //   onPress={onPressStart}
        // />
      )
    } else if(showPopUP === 1){
      return  <PopUpCard 
          title="Thank You !!" 
          description={`You have scored ${totalCorrect * 5} out of ${questions.length * 5}`}
          btnName="Done"
          onPress={()=>{
            setShowPopUp(3);
            navigate("/student",{replace: true})
          }}
        />
    }
     else {
      return (
        <div style={{
          width: "100%",
          height:"100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column"
        }}>
        <div style={{ width: "100%"}}>
        <div className="quizheader">
          <div> {selectedQuiz}</div>
          <div>Total Question: {questions.length}</div>
        </div>
        <p style={{fontWeight:"bold"}}>
          Q{currentQ + 1}.{" "}{questionItem.questionText}
        </p>
        {questionItem.answerOptions.map((item, index) => (
          <div className="optionItem"
           onClick={()=>{setSelected(index)}}
            style={{backgroundColor: index === selected ? "green" :"lightgray"  }} 
            >
            <b>{index+1}.</b>{" "}
            <p style={{marginLeft: '20px'}}>{item.answerText}</p>
          </div>
        ))}
        </div>
        <div className="btnContainer" >
          <button  
          style={{backgroundColor: currentQ === 0 ? "gray":"rgb(120, 96, 210)", 
          cursor: currentQ === 0 ? "not-allowed": "pointer", display: "none" }}
           disabled={currentQ === 0} 
           className="btn" 
           onClick={onPressPrev}
           >
            Prev
          </button>
          <button
             style={{backgroundColor: currentQ === questions.length - 1 ? "rgb(19, 158, 218)":"rgb(120, 96, 210)"}}
            className="btn"
            onClick={currentQ === questions.length - 1 ? onPressSubmit : onPressNext}
          >
           {currentQ === questions.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
         
        </div>
      )
    }
  }
  return (
    <div className="Quizroot">
      
      {renderContent()}
     
    </div>
  );
}

