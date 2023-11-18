import React from 'react'

function PopUpCard(props) {
  return (
    <div style={{
        width: "100%",
        height: "50%",
        backgroundColor: "#8aaae4",
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
        }}>{props.title}</div>
        <div  style={{
            color:"black",
            fontSize: "20px",
            marginTop:"20px"
        }}>
            {props.description}
        </div>
        <button style={{
            width: "100x",
            height:"50px",
            background:"green",
            marginTop: "20px"
        }} onClick={props.onPress}>{props.btnName}</button>
    </div>
  )
}

export default PopUpCard