import React from 'react'

function Parent(props) {
  return (
    <>
    <h1>Parent</h1>
    {props.children[0]}
    {props.children[2]}
    </>
  )
}

export default Parent


//props.children is used for take  html or components that are passed from app.jsx as props