import React, { useState } from 'react'

function AddQuizScreen(props) {
  const [quizName, setQuizname] = useState("");
  const [questions, setQuestions]  = useState([{id: "",questionText: "", answerOptions:[{answerText:"", isCorrect: false}]}]);

  const onPressDone = async ()=>{
    if(quizName !== "" && questions.length ){
      console.log("quiz format check", [{name: quizName, questions}]);
      const existingQuiz = localStorage.getItem("quiz");
      const res = await JSON.parse(existingQuiz);
      if(res?.length) {
        localStorage.setItem("quiz", JSON.stringify([...res, {name: quizName, questions}]))
        props.onCancel()
      } else {
        localStorage.setItem("quiz", JSON.stringify([{name: quizName, questions}]))
        props.onCancel()
      }
    } else {
      alert("Please add Quiz name and Questions to submit")
    }
  };
  const onPressAddQuestion = ()=>{
    setQuestions([...questions,{id: "",questionText: "", answerOptions:[{answerText:"", isCorrect: false}]}])
  }
  const onPressRemoveQuestion = (index)=>{
    const qList = questions;
    qList.splice(index,1)
    setQuestions(qList)
  }
  const onchangeQuestion = (e, index)=>{
    console.log("onchangeQuestion", e.target.value, index)
    const qItem = questions;
    qItem[index].questionText = e.target.value;
    setQuestions(qItem)
  }
  const onChangeOption = (e, index, optIndex, actionType)=>{
    console.log("onChangeOption", actionType, e)
    const qItem = questions;
    if(actionType === "radio"){
      qItem[index]["answerOptions"][optIndex].isCorrect = e
    } else {
      qItem[index]["answerOptions"][optIndex].answerText = e.target.value;
    }
    setQuestions(qItem) 
  }
  const onPressAddOption = (index)=>{
    const qItem = questions;
    if( qItem[index]["answerOptions"].length < 4){
    qItem[index]["answerOptions"] = [...qItem[index].answerOptions,{answerText:"", isCorrect: false}];
    setQuestions([...qItem])
    } else {
      alert("You Can't add more than 4 options")
    }
  }
  const onPressRemoveOption = (index, optIndex)=>{
    const qItem = questions;
    qItem[index]["answerOptions"].splice(optIndex, 1)
    setQuestions([...qItem]) 
  }
  return (
    <div style={{
      width: '80vw',
      height: "80vh",
      border: "1px solid darkgray", 
      backgroundColor: "whitesmoke",
      marginLeft: "10px",
      marginTop: "20px"
    }}>
      <div className='quizName' 
      style={{
        width:"100%", 
        height: "50px",
        borderBottom:"1px solid darkgray", 
        display:"flex", 
        justifyContent:"space-around",
        alignItems:"center"}}>
        <input style={{width:"85%", height:"100%", border: "none", paddingLeft: '10px'}}
         placeholder='Please Enter The Quiz Name Here Eg. JAVA, Python, Java Script'
         onChange={(e)=>{setQuizname(e.target.value)}}
         />
         <div
         style={{
          width:"10%",
          height: "90%", 
          backgroundColor:"rgb(108, 108, 232)", 
          borderRadius: "10px", 
          marginLeft:"10px",
          color:"white",
          justifyContent:"center",
          alignItems:"center",
          display:"flex",
          cursor:"pointer"
          }}
          onClick={onPressAddQuestion}
         >
          Add Question
          </div>
      </div>
      <div className='questionsContainer' style={{width: "100%", height: '85%', overflow:"scroll"}}>
        {questions.map((item, index)=>{
          return(
            <div 
            key={`question-${index}`} 
            style={{width:"100%", height:"fit-content", padding: '20px', borderBottom:"1px solid lightgrey" }}>
             <div style={{width:"85%",height: "30px", display:"flex", justifyContent:"space-around", alignItems:"center"}}>
             <span>{index+1}.{" "}</span> 
             <input placeholder='Type your question here' 
                style={{width: "95%", padding:"5px"}}
                onChange={(e)=>{onchangeQuestion(e, index)}}
                // value={item.questionText}
              />
               <div
                style={{
                  width:"10%",
                  height: "90%", 
                  backgroundColor:"red", 
                  borderRadius: "5px", 
                  marginLeft:"10px",
                  color:"white",
                  justifyContent:"center",
                  alignItems:"center",
                  display:"flex",
                  cursor:"pointer"
                  }}
                  onClick={()=>{onPressRemoveQuestion(index)}}
                >
                  Remove
                  </div>
             </div>
              <div className='options' style={{marginTop:"10px", width:"100%"}}>
                <h5>Options:</h5> 
                {item.answerOptions.map((optionItem, ind)=>{
                  return (
                    <div 
                    key={`optionItem${ind}-${index}`} 
                    className='option-item' 
                    style={{width: "70%", height: "40px", display:"flex", alignItems:"center", justifyContent:"space-around", marginTop:"10px"}}
                    >
                      <input 
                        placeholder={`Type Option ${ind+1} Here`} 
                        style={{width:"70%", height:"100%", padding:"5px"}} 
                        onChange={(e)=>{onChangeOption(e, index, ind, "")}}
                        />
                      <input 
                        type='checkbox' 
                        value={optionItem.isCorrect}
                        style={{width: "20px", height:"20px"}} 
                        onChange={(e)=>{onChangeOption(e.target.checked, index, ind, "radio")}}
                        />
                      <p>Is Correct</p>
                      <div
                        style={{
                          width:"100px",
                          height: "30px", 
                          backgroundColor:"red", 
                          borderRadius: "5px", 
                          marginLeft:"10px",
                          color:"white",
                          justifyContent:"center",
                          alignItems:"center",
                          display:"flex",
                          cursor:"pointer"
                          }}
                          onClick={()=>{onPressRemoveOption(index,ind)}}
                        >
                          Remove
                      </div>
                    </div>
                  )
                })}
                <div style={{
                  width:"100px",
                  height: "50px", 
                  backgroundColor:"rgb(108, 108, 232)", 
                  marginTop: '10px', 
                  borderRadius: "10px", 
                  marginLeft:"10px",
                  color:"white",
                  justifyContent:"center",
                  alignItems:"center",
                  display:"flex",
                  cursor:"pointer"
                  }}
                  onClick={()=>{onPressAddOption(index)}}
                  >
                  Add Option
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div style={{width:"100%", 
              height: "50px", 
              borderTop:"1px solid darkgray", 
              display:"flex", 
              justifyContent:"space-between", 
              alignItems:"center", 
              padding:"20px"}}>
      <div style={{
                  width:"100px",
                  height: "40px", 
                  backgroundColor:"green", 
                  borderRadius: "5px", 
                  color:"white",
                  justifyContent:"center",
                  alignItems:"center",
                  display:"flex",
                  cursor:"pointer"
                  }}
                  onClick={onPressDone}
                  >
                  Submit
                </div>
      <div style={{
                  width:"100px",
                  height: "40px", 
                  backgroundColor:"red", 
                  borderRadius: "5px", 
                  color:"white",
                  justifyContent:"center",
                  alignItems:"center",
                  display:"flex",
                  cursor:"pointer"
                  }}
                  onClick={props.onCancel}
                  >
                  Cancel
                </div>
      </div>
    </div>
  )
}

export default AddQuizScreen