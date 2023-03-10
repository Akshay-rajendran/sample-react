import axios, { Axios } from 'axios';
import React,{useEffect, useState }  from 'react'

function Effect() {

  const[task,setTask]=useState({})

  async function callApi(){
      let response=await axios.get("https://jsonplaceholder.typicode.com/todos/1")     //function for calling one data from api
     setTask(response.data)
console.log(response);
  }

  useEffect(()=>{
    console.log("print");            //useeffect used for complete anything before rendering the return value of function Effect
    callApi()
  },[])

  return (
    <div>
      <h1>{task.title}</h1>
      <p>UserId:{task.userId}</p>
      <p>Id:{task.id}</p>
    </div>
  )
}

export default Effect