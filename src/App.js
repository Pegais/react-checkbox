import React,{useState}from "react";
import "./style.css";
import obj from "./utils/CheckBox.js"

export default function App() {
  let[check,setCheck]=useState([])
  
     function handleclick(e){
           let {id, value} = e.target
           
           if(e.target.checked){
             console.log(id,value)
             setCheck([...check,{[id]:value}])

           }else{
            setCheck((prevState)=>{
               return prevState.filter(ele=>ele!==prevState)
            })
          }
          }
          console.log(check)
  // console.log(obj)
  return (
    <div>
      {
        obj.map((ele)=>{
          return(
            <>
           <input type="checkbox" id={ele.id} name={ele.category} value={ele.category} onChange={handleclick} />
           <label for={ele.category}>{ele.category}</label><br/> 
            </>
          )
        })
      }
     
    </div>
  );
}
