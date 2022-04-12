import React,{useState} from "react";
import object from "./Object.js"

export default function Main({obj}){
  let [product,setProduct]=useState(object)

  // console.log(object)
console.log("this is from main ",obj)


   let filteredata = product.filter((ele)=>{
     if(obj.length !== 0){
      return obj.includes(ele.category)
     }else{
       return ele
     }
   })
 
  
   

  return(
    <>
      {
       filteredata.map((ele)=>{
          return (
            <div key={ele.id}>{ele.category}</div>
          )
        })
      }
    </>
  )
}