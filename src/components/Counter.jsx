
import React, { useState } from 'react'

function Counter() {
    // let count=1
    const [count,seccont]=useState(1)// 1 is initial value that we given
    function changecount(){
        // count++
        seccont(count+1)// this is for changing the value when we click the button .easy to do eithout access the p tag using the documrnt.grtelementbyid for show the changed value 
        console.log(count);
    }
    function countstart(){
        seccont(1)
    }
  return (
    <div>
        <p>{count}</p>
        
    <button onClick={changecount}>Add</button>
    <button onClick={countstart}>start</button>
    </div>
  )
}

export default Counter