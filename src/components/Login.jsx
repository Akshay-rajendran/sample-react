import React, { useState } from 'react'

function Login() {

    //  function save(){
    //  let name=   document.getElementById("name")
    //     let namee="aromal"
    //     if(name.value==namee){
    //         alert("u r logined")
    //     }else{
    //         alert("not logined")
    //     }
    const [password,setpassword]=useState()
      const [name,setname]=useState()
          function save(){
            let namee="aromal"
            let passwords=123
          if ( name==namee){
               if(password==passwords){
                alert("logined")
               }else{
                alert("password is wrong")
               }
          }else{
            alert("username is wrong")
          }
            }

  return (
    <div>
        <h1>LOGIN</h1>
        <input id='name' type="text" placeholder='Enter Name' onChange={(e)=>{
           setname(e.target.value)
           console.log(name);
        }} /><br />
        <input type="password" placeholder='Enter Phone Number' onChange={(e)=>{
            setpassword(e.target.value)
        }}/><br />
        <button onClick={save}>submit</button>
    </div>
  )
}

export default Login