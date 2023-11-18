import React from 'react'

function QuizView(props) {
  return (
    <div style={{
        width: '80vw',
        height: "80vh",
        border: "1px solid darkgray", 
        backgroundColor: "whitesmoke",
        marginLeft: "10px",
        marginTop: "20px"
      }}>
        <div
      style={{
        width:"100%", 
        height: "50px",
        borderBottom:"1px solid darkgray", 
        display:"flex",
        alignItems:"center",
        paddingLeft: "20px"
        }}>
           <h3>
           Quiz Name: {props.data.name}
           </h3>
        </div>
        <div className='questionsContainer' style={{width: "100%", height: '85%', overflow:"scroll"}}>
        {props.data.questions.map((item, index)=>{
          return(
            <>
            <div 
            key={`question-${index}`} 
            style={{width:"100%", height:"fit-content", padding: '20px', borderBottom:"1px solid lightgrey" }}>
               Q{index+1}. {item.questionText}
                <div className='options' style={{marginTop:"10px", width:"100%"}}>
                <h5>Options:</h5> 
                {item.answerOptions.map((opt, ind)=>{
                    return(
                        <div style={{marginTop:"10px"}}>
                           { `${ind+1}. ${opt.answerText} ${opt.isCorrect ? "(Answer)":""}`}
                        </div>
                    )
                })}
            </div>
            </div>
            
            </>
            
            )
        })}
         
        </div>
        <div style={{width:"100%", 
              height: "50px", 
              borderTop:"1px solid darkgray", 
              display:"flex", 
              justifyContent:"right", 
              alignItems:"center", 
              padding:"20px"}}>
      
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
                  onClick={props.onClose}
                  >
                  Close
                </div>
      </div>
    </div>
  )
}

export default QuizView