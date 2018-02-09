import React from 'react'
import './UserOutput.css'



const userOutput = (props) => {
  return (
    <div className="move">
  <p className="hello"> Hello {props.name}</p>
  <p className="bello"> Bello {props.word}</p>
    </div>
  )
}


export default userOutput;
