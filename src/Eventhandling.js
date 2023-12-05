import React from 'react'

const Eventhandling = () => {
    function handle(){
        alert("Welcome")
    }
  return (
    <div>
      <button onClick={handle} >Click here to see magic</button>
    </div>
  )
}

export default Eventhandling