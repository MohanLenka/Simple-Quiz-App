import { useState } from "react";

const First=()=>{
   function fun(){
    console.log("jsgdhcb")
   }
    document.querySelector(".btn").addEventListener("click",fun)
 
    return (
        <div>
           <button className="btn">Submit
            </button>
        </div>
    )
}
export default First