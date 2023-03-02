import React, { useState } from 'react'

function Signup() {

const [name,setname]=useState()
const [gmail,setgmail]=useState()
const [password,setpassword]=useState()
const [number,setnumber]=useState()
const [signup,setsignup]=useState(false)

          function submit(){
            setsignup(true)
     
          }
          function reset(){
        setname("")
        setgmail("")
        setpassword("")
        setnumber("")
      setsignup(false)
          }
  return (
    <div>
        <h1>SIGNUP</h1>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>{
            setname(e.target.value)
        }} /><br />
        <input type="text" placeholder='Enter Gmail' value={gmail} onChange={(e)=>{
            setgmail(e.target.value)
        }}/><br />
        <input type="text" placeholder='Create Password' value={password} onChange={(e)=>{
            setpassword(e.target.value)
        }}/><br />
        <input type="number" placeholder='Phone Number'   value={number} onChange={(e)=>{
            setnumber(e.target.value)
        }}/><br />
        <button onClick={submit} >submit</button>
        <button onClick={reset} >reset</button>
        {
            signup &&
        
        <>
        <p id='name'>{name}</p>
        <p id="gmail">{gmail}</p>
        <p id="password">{password}</p>
        <p id="number">{number}</p>
        </>
}
    </div>
  )
}

export default Signup