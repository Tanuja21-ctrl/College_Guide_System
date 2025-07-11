import React, { useState } from 'react'

function counter() {
    const[count,setcount]=useState(0)
  return (
    <>
    <h1>count:{count}</h1>
    <button onClick={()=>{setcount+1}}></button>
    </>
  )
}

export default counter
