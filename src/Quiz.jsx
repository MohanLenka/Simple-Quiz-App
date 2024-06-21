import React, { useReducer, useRef } from "react";
import { useState } from "react";
import { data } from "./Data";


let per;



const Quiz=()=>{
    
    const [score,setscore]=useState(0)
    const[q_no,setq_no]=useState(1)
    const[lock,setlock]=useState("false")
    const [question,setquestion]=useState(data[q_no])
    const[answer,setanswer]=useState(question.answer)
    let option1=useRef(null)
    let option2=useRef(null)
    let option3=useRef(null)
    let option4=useRef(null)
    let result=useRef(null)
    let quiz_box=useRef(null)
    const option_arr=[option1,option2,option3]
const getoption=(e,num)=>{
    console.log(num)
    if(lock==="false"){
    if(num==answer){
        console.log("correct",num)
        e.target.style.background="green"
   
       setlock("true")
       setscore(score+1)
    }
    else{
        console.log("wrong")
        e.target.style.background="red"
         
        setlock("true")
       
    }
    console.log(".correct")
    }}
  
    const changeQuestion=(e)=>{
     
        if(q_no===10){
             per=score/10;
            result.current.style.display="block"
            quiz_box.current.style.display="none"
        }
        else{
       setq_no(q_no+1)
      setlock("false")
      option1.current.style.background="white"
      option2.current.style.background="white"
      option3.current.style.background="white"
      option4.current.style.background="white"
     setquestion(data[q_no+1])
     setanswer(question.answer)
    }
}  
   function restart(){
   setquestion(data[0])
   setscore(0)
   setq_no(1)
   quiz_box.current.style.display="block"
    result.current.style.display="none"
   
   }
 
    return(
        <div className="container">
            
            <center ref={quiz_box}className="quiz_box">
                <div>
                    <h2>QUIZ APP</h2>
                </div>
                <div className="qustion">
                    <h2>{q_no}.{question.question}</h2>
                </div>
                <div className="options">
                    <ol>
                        <li ref={option1} onClick={(e)=>{
                            getoption(e,'A')}}>{question.A}</li>
                        <li ref={option2} onClick={(e)=>{
                            getoption(e,'B')
                        }}>{question.B}</li>
                        <li ref={option3}
                        onClick={(e)=>{
                            getoption(e,'C')
                        }}>{question.C}</li>
                        <li ref={option4} onClick={(e)=>{
                            getoption(e,'D')
                        }}>{question.D}</li>
                    </ol>
                </div>
                <button onClick={(e)=>{changeQuestion(e)}}>NEXT</button>  
                <p>{q_no} out of 10 questions</p>
                 </center>

                 <div ref={result} className="result">
                     <h2>QUIZ completed</h2>

                     <div className="total_score">
                        <h1>{score}/10</h1>
                        <p>{per}</p>
                        </div>
                     <h1 className="h">SCORE</h1>
                     <button className="restart" onClick={()=>{
                        restart()
                     }}>Restart</button>
                 </div>
        </div>

    )
}
export default Quiz