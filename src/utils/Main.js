import React from "react";

export default function Main({obj}){
console.log("this is from main ",obj)

  return(
    <>
    {
      obj.map((ele)=>{
        return <div key={ele.id}>{ele.value}</div>
      })
    }
    </>
  )
}